-- AP Review — database schema
-- Run this entire file in Supabase SQL Editor (Project → SQL Editor → New query → paste → Run).
-- Safe to re-run: uses IF NOT EXISTS / OR REPLACE / DROP POLICY IF EXISTS throughout.

-- ============================================================
-- 1. PROFILES (one row per auth.users record)
-- ============================================================
create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  display_name text,
  created_at timestamptz default now()
);

-- Auto-create a profile row whenever a new user signs up.
create or replace function public.handle_new_user() returns trigger
language plpgsql security definer set search_path = public
as $$
begin
  insert into public.profiles (id, display_name)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'display_name', split_part(new.email, '@', 1))
  );
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute procedure public.handle_new_user();

-- ============================================================
-- 2. CLASSES + MEMBERS
-- ============================================================
create table if not exists public.classes (
  id uuid primary key default gen_random_uuid(),
  teacher_id uuid not null references auth.users(id) on delete cascade,
  name text not null,
  join_code text not null unique,
  created_at timestamptz default now()
);

create table if not exists public.class_members (
  class_id uuid not null references public.classes(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  joined_at timestamptz default now(),
  primary key (class_id, user_id)
);

-- ============================================================
-- 3. PROGRESS TRACKING
-- ============================================================
create table if not exists public.topic_progress (
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_slug text not null,
  unit_slug text not null,
  topic_slug text not null,
  completed_at timestamptz default now(),
  score numeric,
  primary key (user_id, subject_slug, unit_slug, topic_slug)
);

create table if not exists public.quiz_attempts (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  subject_slug text not null,
  unit_slug text not null,
  topic_slug text not null,
  question_id text not null,
  selected_answer text not null,
  is_correct boolean not null,
  attempted_at timestamptz default now()
);

-- ============================================================
-- 4. HELPER FUNCTIONS (SECURITY DEFINER to avoid RLS recursion
-- between mutually-referencing tables like classes ↔ class_members)
-- ============================================================
create or replace function public.user_is_class_member(_class_id uuid) returns boolean
language sql security definer stable set search_path = public
as $$
  select exists (select 1 from public.class_members
                 where class_id = _class_id and user_id = auth.uid());
$$;

create or replace function public.user_is_class_teacher(_class_id uuid) returns boolean
language sql security definer stable set search_path = public
as $$
  select exists (select 1 from public.classes
                 where id = _class_id and teacher_id = auth.uid());
$$;

create or replace function public.user_teaches_user(_student_id uuid) returns boolean
language sql security definer stable set search_path = public
as $$
  select exists (
    select 1 from public.class_members cm
    join public.classes c on c.id = cm.class_id
    where cm.user_id = _student_id and c.teacher_id = auth.uid()
  );
$$;

-- ============================================================
-- 5. ENABLE ROW-LEVEL SECURITY
-- ============================================================
alter table public.profiles       enable row level security;
alter table public.classes        enable row level security;
alter table public.class_members  enable row level security;
alter table public.topic_progress enable row level security;
alter table public.quiz_attempts  enable row level security;

-- ============================================================
-- 6. POLICIES
-- ============================================================

-- profiles: any authenticated user can read; owner can update own row.
drop policy if exists "profiles_select" on public.profiles;
create policy "profiles_select" on public.profiles for select using (true);
drop policy if exists "profiles_update_own" on public.profiles;
create policy "profiles_update_own" on public.profiles for update using (auth.uid() = id);

-- classes: teacher manages own; members can read.
drop policy if exists "classes_select" on public.classes;
create policy "classes_select" on public.classes for select
  using (teacher_id = auth.uid() or public.user_is_class_member(id));
drop policy if exists "classes_insert" on public.classes;
create policy "classes_insert" on public.classes for insert
  with check (auth.uid() = teacher_id);
drop policy if exists "classes_update_own" on public.classes;
create policy "classes_update_own" on public.classes for update
  using (auth.uid() = teacher_id);
drop policy if exists "classes_delete_own" on public.classes;
create policy "classes_delete_own" on public.classes for delete
  using (auth.uid() = teacher_id);

-- class_members: user sees own memberships; teacher sees members of own classes.
drop policy if exists "members_select" on public.class_members;
create policy "members_select" on public.class_members for select
  using (auth.uid() = user_id or public.user_is_class_teacher(class_id));
drop policy if exists "members_insert_self" on public.class_members;
create policy "members_insert_self" on public.class_members for insert
  with check (auth.uid() = user_id);
drop policy if exists "members_delete" on public.class_members;
create policy "members_delete" on public.class_members for delete
  using (auth.uid() = user_id or public.user_is_class_teacher(class_id));

-- topic_progress: owner + teacher of a class the owner is in.
drop policy if exists "progress_select" on public.topic_progress;
create policy "progress_select" on public.topic_progress for select
  using (auth.uid() = user_id or public.user_teaches_user(user_id));
drop policy if exists "progress_insert_own" on public.topic_progress;
create policy "progress_insert_own" on public.topic_progress for insert
  with check (auth.uid() = user_id);
drop policy if exists "progress_update_own" on public.topic_progress;
create policy "progress_update_own" on public.topic_progress for update
  using (auth.uid() = user_id);

-- quiz_attempts: same rules as topic_progress.
drop policy if exists "attempts_select" on public.quiz_attempts;
create policy "attempts_select" on public.quiz_attempts for select
  using (auth.uid() = user_id or public.user_teaches_user(user_id));
drop policy if exists "attempts_insert_own" on public.quiz_attempts;
create policy "attempts_insert_own" on public.quiz_attempts for insert
  with check (auth.uid() = user_id);

-- ============================================================
-- 7. RPC: create a class with an auto-generated 6-char join code
-- ============================================================
create or replace function public.create_class(_name text) returns public.classes
language plpgsql security definer set search_path = public
as $$
declare
  _code text;
  _row  public.classes;
  _tries int := 0;
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  loop
    _code := upper(substr(md5(random()::text || clock_timestamp()::text), 1, 6));
    begin
      insert into public.classes (teacher_id, name, join_code)
      values (auth.uid(), _name, _code)
      returning * into _row;
      return _row;
    exception when unique_violation then
      _tries := _tries + 1;
      if _tries > 10 then raise exception 'could_not_generate_unique_join_code'; end if;
    end;
  end loop;
end;
$$;

-- ============================================================
-- 8. RPC: join a class by code (case-insensitive)
-- ============================================================
create or replace function public.join_class_by_code(_code text) returns uuid
language plpgsql security definer set search_path = public
as $$
declare
  _class_id uuid;
begin
  if auth.uid() is null then raise exception 'not_authenticated'; end if;
  select id into _class_id from public.classes where upper(join_code) = upper(_code);
  if _class_id is null then raise exception 'invalid_join_code'; end if;
  insert into public.class_members (class_id, user_id)
  values (_class_id, auth.uid())
  on conflict do nothing;
  return _class_id;
end;
$$;
