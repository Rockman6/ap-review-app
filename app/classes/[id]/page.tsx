import Link from "next/link";
import { notFound, redirect } from "next/navigation";
import { ChevronLeft, UserRound } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { apMicro } from "@/lib/content";

export const dynamic = "force-dynamic";

export default async function ClassDashboard({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const supabase = await createClient();

  const { data: { user } } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: cls } = await supabase
    .from("classes")
    .select("id, name, join_code, teacher_id")
    .eq("id", id)
    .maybeSingle();
  if (!cls) notFound();
  if (cls.teacher_id !== user.id) redirect("/account");

  const { data: members } = await supabase
    .from("class_members")
    .select("user_id, joined_at")
    .eq("class_id", id)
    .order("joined_at", { ascending: true });

  const studentIds = (members ?? []).map((m) => m.user_id);

  const { data: profiles } = studentIds.length
    ? await supabase.from("profiles").select("id, display_name").in("id", studentIds)
    : { data: [] as Array<{ id: string; display_name: string | null }> };
  const nameById = new Map((profiles ?? []).map((p) => [p.id, p.display_name]));

  const { data: progressRows } = studentIds.length
    ? await supabase
        .from("topic_progress")
        .select("user_id, subject_slug, unit_slug, topic_slug, completed_at, score")
        .in("user_id", studentIds)
    : { data: [] as Array<{ user_id: string; subject_slug: string; unit_slug: string; topic_slug: string; completed_at: string; score: number | null }> };

  const progressByStudent = new Map<string, typeof progressRows>();
  for (const row of progressRows ?? []) {
    const arr = progressByStudent.get(row.user_id) ?? [];
    arr.push(row);
    progressByStudent.set(row.user_id, arr);
  }

  const unit = apMicro.units[0];
  const totalTopicsInUnit1 = unit.topics.length;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <Link href="/account" className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-900">
        <ChevronLeft size={13} />
        Back to account
      </Link>
      <div className="mt-3 flex flex-wrap items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl font-semibold">{cls.name}</h1>
          <p className="mt-1 text-sm text-slate-600">
            Share this join code with your students:{" "}
            <span className="ml-1 rounded-md bg-slate-100 px-2 py-0.5 font-mono text-sm font-semibold tracking-widest text-slate-900">
              {cls.join_code}
            </span>
          </p>
        </div>
        <div className="text-sm text-slate-500">
          {members?.length ?? 0} student{(members?.length ?? 0) === 1 ? "" : "s"}
        </div>
      </div>

      <div className="mt-8 overflow-hidden rounded-xl border border-slate-200 bg-white">
        <table className="w-full text-sm">
          <thead className="bg-slate-50 text-left text-xs uppercase tracking-wider text-slate-500">
            <tr>
              <th className="px-4 py-3">Student</th>
              <th className="px-4 py-3">Unit 1 progress</th>
              <th className="px-4 py-3">Last topic</th>
              <th className="px-4 py-3">Avg. score</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {(members ?? []).length === 0 && (
              <tr>
                <td colSpan={4} className="px-4 py-8 text-center text-slate-500">
                  No students have joined yet. Share the join code above.
                </td>
              </tr>
            )}
            {(members ?? []).map((m) => {
              const rows = progressByStudent.get(m.user_id) ?? [];
              const unit1Done = rows.filter(
                (r) => r.subject_slug === apMicro.slug && r.unit_slug === unit.slug,
              );
              const pct = Math.round((unit1Done.length / totalTopicsInUnit1) * 100);
              const last = rows.sort((a, b) => (a.completed_at < b.completed_at ? 1 : -1))[0];
              const avg =
                rows.filter((r) => r.score !== null).length === 0
                  ? null
                  : Math.round(
                      (rows.filter((r) => r.score !== null).reduce((s, r) => s + Number(r.score), 0) /
                        rows.filter((r) => r.score !== null).length) *
                        100,
                    ) / 100;
              const name = nameById.get(m.user_id) ?? "—";
              return (
                <tr key={m.user_id}>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500">
                        <UserRound size={13} />
                      </span>
                      <span className="font-medium text-slate-900">{name}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-200">
                        <div
                          className="h-full rounded-full bg-green-500 transition-all"
                          style={{ width: `${pct}%` }}
                        />
                      </div>
                      <span className="text-xs tabular-nums text-slate-600">
                        {unit1Done.length}/{totalTopicsInUnit1}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {last ? `${last.unit_slug} / ${last.topic_slug}` : "—"}
                  </td>
                  <td className="px-4 py-3 text-slate-600">
                    {avg === null ? "—" : `${Math.round(avg * 100)}%`}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
