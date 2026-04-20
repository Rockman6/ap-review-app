-- AP Review — content tables + editor role
-- Run in Supabase SQL Editor after schema.sql. Safe to re-run.

-- ============================================================
-- 1. EDITOR ROLE on profiles
-- ============================================================
alter table public.profiles
  add column if not exists role text not null default 'student';

-- add/refresh the CHECK constraint for allowed roles
alter table public.profiles drop constraint if exists profiles_role_check;
alter table public.profiles add constraint profiles_role_check
  check (role in ('student','editor','admin'));

create or replace function public.user_is_editor() returns boolean
language sql security definer stable set search_path = public
as $$
  select exists (
    select 1 from public.profiles
    where id = auth.uid() and role in ('editor','admin')
  );
$$;

-- ============================================================
-- 2. CONTENT TABLES
-- Bilingual fields are jsonb { en, zh } to match the existing
-- Bilingual TS type (see lib/content.ts).
-- ============================================================
create table if not exists public.subjects (
  slug     text primary key,
  title    jsonb not null,
  tagline  jsonb not null,
  position int  not null default 0
);

create table if not exists public.units (
  id           uuid primary key default gen_random_uuid(),
  subject_slug text not null references public.subjects(slug) on delete cascade,
  slug         text not null,
  number       int  not null,
  title        jsonb not null,
  description  jsonb not null,
  position     int  not null default 0,
  unique (subject_slug, slug)
);

create table if not exists public.topics (
  id         uuid primary key default gen_random_uuid(),
  unit_id    uuid not null references public.units(id) on delete cascade,
  slug       text not null,
  title      jsonb not null,
  summary    jsonb not null,
  notes      jsonb not null default '[]'::jsonb,   -- NoteBlock[]
  position   int  not null default 0,
  updated_at timestamptz not null default now(),
  updated_by uuid references auth.users(id),
  unique (unit_id, slug)
);

create table if not exists public.questions (
  id           uuid primary key default gen_random_uuid(),
  external_id  text not null,                      -- stable id from seed (e.g. "u1t1q1")
  topic_id     uuid references public.topics(id) on delete cascade,
  unit_id      uuid references public.units(id)  on delete cascade,
  prompt       jsonb not null,
  figure       jsonb,
  choices      jsonb not null,
  answer_id    text  not null,
  explanation  jsonb not null,
  position     int   not null default 0,
  updated_at   timestamptz not null default now(),
  updated_by   uuid references auth.users(id),
  check (topic_id is not null or unit_id is not null)
);

create unique index if not exists questions_topic_extid_idx
  on public.questions (topic_id, external_id) where topic_id is not null;
create unique index if not exists questions_unit_extid_idx
  on public.questions (unit_id, external_id) where topic_id is null;

-- ============================================================
-- 3. RLS — public read, editors/admins write
-- ============================================================
alter table public.subjects  enable row level security;
alter table public.units     enable row level security;
alter table public.topics    enable row level security;
alter table public.questions enable row level security;

do $$
declare
  t text;
begin
  foreach t in array array['subjects','units','topics','questions'] loop
    execute format('drop policy if exists "%s_select"       on public.%I', t, t);
    execute format('drop policy if exists "%s_insert_editor" on public.%I', t, t);
    execute format('drop policy if exists "%s_update_editor" on public.%I', t, t);
    execute format('drop policy if exists "%s_delete_editor" on public.%I', t, t);

    execute format('create policy "%s_select" on public.%I for select using (true)', t, t);
    execute format('create policy "%s_insert_editor" on public.%I for insert with check (public.user_is_editor())', t, t);
    execute format('create policy "%s_update_editor" on public.%I for update using (public.user_is_editor()) with check (public.user_is_editor())', t, t);
    execute format('create policy "%s_delete_editor" on public.%I for delete using (public.user_is_editor())', t, t);
  end loop;
end$$;

-- ============================================================
-- 4. updated_at / updated_by triggers on topics + questions
-- ============================================================
create or replace function public.touch_content_row() returns trigger
language plpgsql as $$
begin
  new.updated_at := now();
  new.updated_by := auth.uid();
  return new;
end;
$$;

drop trigger if exists topics_touch    on public.topics;
create trigger topics_touch    before update on public.topics
  for each row execute procedure public.touch_content_row();

drop trigger if exists questions_touch on public.questions;
create trigger questions_touch before update on public.questions
  for each row execute procedure public.touch_content_row();
