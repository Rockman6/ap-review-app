"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight, Flame, Folder, Trophy } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { practiceSets, subjects, type Bilingual, type Subject } from "@/lib/content";
import { getSubjectStyle } from "@/lib/subject-styles";

type SubjectFolder = {
  subject: Subject;
  setCount: number;
  categoryLabels: Bilingual[];
  hasMarathon: boolean;
};

export default function MorePracticePage() {
  const t = useT();

  const folders = useMemo<SubjectFolder[]>(() => {
    return subjects.map((subject) => {
      const sets = practiceSets.filter((s) => s.subjectSlug === subject.slug);
      const seen = new Set<string>();
      const categoryLabels: Bilingual[] = [];
      for (const s of sets) {
        if (!seen.has(s.category.en)) {
          seen.add(s.category.en);
          categoryLabels.push(s.category);
        }
      }
      return {
        subject,
        setCount: sets.length,
        categoryLabels,
        hasMarathon: seen.has("Marathon"),
      };
    });
  }, []);

  const populated = folders.filter((f) => f.setCount > 0);
  const comingSoon = folders.filter((f) => f.setCount === 0);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t({ en: "More Practice", zh: "更多练习" })}</span>
      </nav>

      <div className="mt-6 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-600 text-white shadow-lg shadow-red-200">
          <Flame size={20} />
        </div>
        <h1 className="text-3xl font-bold uppercase tracking-tight text-slate-900 sm:text-4xl">
          {t({ en: "More Practice", zh: "更多练习" })}
        </h1>
      </div>
      <p className="mt-3 max-w-2xl text-base text-slate-600">
        {t({
          en: "Extra MCQ practice sets across subjects. Pick a subject folder to see its Warm-up, Advanced Mix, and Marathon sets.",
          zh: "跨科目的额外选择题练习集。选择一个科目文件夹,查看其热身、进阶混合与马拉松练习。",
        })}
      </p>

      {populated.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {t({ en: "Subjects", zh: "科目" })}
          </h2>
          <ul className="mt-3 grid gap-4 sm:grid-cols-2">
            {populated.map((folder) => (
              <li key={folder.subject.slug}>
                <SubjectFolderCard folder={folder} />
              </li>
            ))}
          </ul>
        </section>
      )}

      {comingSoon.length > 0 && (
        <section className="mt-10">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
            {t({ en: "Coming soon", zh: "即将推出" })}
          </h2>
          <ul className="mt-3 grid gap-3 sm:grid-cols-3">
            {comingSoon.map((folder) => (
              <li key={folder.subject.slug}>
                <ComingSoonCard subject={folder.subject} />
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function SubjectFolderCard({ folder }: { folder: SubjectFolder }) {
  const t = useT();
  const { subject, setCount, categoryLabels, hasMarathon } = folder;
  const { Icon, gradient, ring, iconBg } = getSubjectStyle(subject.slug);

  return (
    <Link
      href={`/more-practice/subject/${subject.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-gradient-to-br ${gradient} p-6 text-white shadow-sm ring-1 ${ring} transition hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
      <div className="relative flex items-start gap-4">
        <div
          className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${iconBg} backdrop-blur-sm`}
        >
          <Icon size={22} />
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <h3 className="text-lg font-semibold leading-tight">{t(subject.title)}</h3>
            {hasMarathon && (
              <span className="inline-flex items-center gap-1 rounded-full bg-amber-400/25 px-2 py-0.5 text-[9px] font-black uppercase tracking-widest text-amber-100 ring-1 ring-amber-300/50">
                <Trophy size={10} />
                {t({ en: "Marathon", zh: "马拉松" })}
              </span>
            )}
          </div>
          <p className="mt-1 text-sm leading-6 text-white/80">
            {t({
              en: `${setCount} ${setCount === 1 ? "set" : "sets"} · ${categoryLabels.map((l) => l.en).join(" · ")}`,
              zh: `${setCount} 套 · ${categoryLabels.map((l) => l.zh).join(" · ")}`,
            })}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-wider text-white/70">
              <Folder size={12} />
              {t({ en: "Open folder", zh: "打开文件夹" })}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-white transition group-hover:gap-2">
              {t({ en: "Enter", zh: "进入" })}
              <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function ComingSoonCard({ subject }: { subject: Subject }) {
  const t = useT();
  const { Icon } = getSubjectStyle(subject.slug);

  return (
    <div className="block rounded-xl border border-dashed border-slate-300 bg-slate-50 p-4 opacity-80">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-slate-200 text-slate-400">
          <Icon size={16} />
        </div>
        <div className="min-w-0">
          <h3 className="truncate text-sm font-semibold text-slate-600">
            {t(subject.title)}
          </h3>
          <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-400">
            {t({ en: "Coming soon", zh: "敬请期待" })}
          </p>
        </div>
      </div>
    </div>
  );
}
