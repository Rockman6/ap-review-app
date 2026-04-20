import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { AccountClient } from "./AccountClient";

export const dynamic = "force-dynamic";

export default async function AccountPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("display_name")
    .eq("id", user.id)
    .maybeSingle();

  const { data: teaches } = await supabase
    .from("classes")
    .select("id, name, join_code, created_at")
    .eq("teacher_id", user.id)
    .order("created_at", { ascending: false });

  const { data: memberRows } = await supabase
    .from("class_members")
    .select("class_id, joined_at")
    .eq("user_id", user.id);

  const classIds = (memberRows ?? []).map((m) => m.class_id);
  const { data: joinedClasses } = classIds.length
    ? await supabase.from("classes").select("id, name, teacher_id").in("id", classIds)
    : { data: [] as Array<{ id: string; name: string; teacher_id: string }> };

  const teacherIds = Array.from(new Set((joinedClasses ?? []).map((c) => c.teacher_id)));
  const { data: teacherProfiles } = teacherIds.length
    ? await supabase.from("profiles").select("id, display_name").in("id", teacherIds)
    : { data: [] as Array<{ id: string; display_name: string | null }> };
  const teacherName = new Map((teacherProfiles ?? []).map((p) => [p.id, p.display_name]));

  const memberships = (memberRows ?? []).map((m) => {
    const cls = (joinedClasses ?? []).find((c) => c.id === m.class_id) ?? null;
    return {
      class_id: m.class_id,
      joined_at: m.joined_at,
      className: cls?.name ?? "—",
      teacherName: cls ? teacherName.get(cls.teacher_id) ?? null : null,
    };
  });

  return (
    <AccountClient
      displayName={profile?.display_name ?? user.email ?? ""}
      email={user.email ?? ""}
      teaches={teaches ?? []}
      memberships={memberships}
    />
  );
}
