"use client";

import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { ChevronRight, Trophy } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getSubject, getFinalQuestions } from "@/lib/content";

export default function SubjectPage({ params }: { params: Promise<{ subject: string }> }) {
  const { subject: subjectSlug } = use(params);
  const t = useT();
  const subject = getSubject(subjectSlug);
  if (!subject) notFound();
  const finalCount = getFinalQuestions(subjectSlug)?.length ?? 0;

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(subject.title)}</span>
      </nav>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{t(subject.title)}</h1>
      <p className="mt-2 max-w-2xl text-slate-600">{t(subject.tagline)}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {subject.units.map((unit) => {
          const hasContent = unit.topics.length > 0;
          const Card = (
            <div
              className={`group rounded-xl border bg-white p-5 transition ${
                hasContent
                  ? "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                  : "border-dashed border-slate-200 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
                </span>
                {hasContent ? (
                  <ChevronRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
                ) : (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {t({ en: "Soon", zh: "即将推出" })}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{t(unit.title)}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{t(unit.description)}</p>
            </div>
          );
          return hasContent ? (
            <Link key={unit.slug} href={`/subjects/${subject.slug}/${unit.slug}`}>
              {Card}
            </Link>
          ) : (
            <div key={unit.slug}>{Card}</div>
          );
        })}
      </div>

      {finalCount > 0 && (
        <Link
          href={`/subjects/${subject.slug}/final`}
          className="mt-6 flex items-center justify-between rounded-xl border border-amber-200 bg-gradient-to-r from-amber-50 to-orange-50 p-5 transition hover:-translate-y-0.5 hover:border-amber-300 hover:shadow-sm"
        >
          <div className="flex items-center gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-500/10 text-amber-600">
              <Trophy size={20} />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-amber-700">
                {t({ en: "Final comprehensive review", zh: "综合期末复习" })}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-slate-900">
                {t({
                  en: `${finalCount}-question test spanning all units`,
                  zh: `${finalCount} 题综合测验,覆盖全部单元`,
                })}
              </h2>
              <p className="mt-1 text-sm text-slate-600">
                {t({
                  en: "Medium-to-hard questions, many integrating concepts across multiple units.",
                  zh: "中等到高难度题目,多数整合多个单元的概念。",
                })}
              </p>
            </div>
          </div>
          <ChevronRight size={20} className="text-amber-500" />
        </Link>
      )}
    </div>
  );
}
