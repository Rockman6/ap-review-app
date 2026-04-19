"use client";

import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { BookOpen, ChevronRight, Dumbbell, Trophy } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getSubject, getUnit, getNotes, getQuestions, getUnitQuestions } from "@/lib/content";

export default function UnitPage({ params }: { params: Promise<{ subject: string; unit: string }> }) {
  const { subject: subjectSlug, unit: unitSlug } = use(params);
  const t = useT();
  const subject = getSubject(subjectSlug);
  const maybeUnit = getUnit(subjectSlug, unitSlug);
  if (!subject || !maybeUnit) notFound();
  const unit = maybeUnit;
  const unitQs = getUnitQuestions(subjectSlug, unit.slug);

  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/subjects/${subject.slug}`} className="hover:text-slate-900">
          {t(subject.title)}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">
          {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
        </span>
      </nav>
      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{t(unit.title)}</h1>
      <p className="mt-2 max-w-2xl text-slate-600">{t(unit.description)}</p>

      <ol className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
        {unit.topics.map((topic, i) => {
          const hasNotes = !!getNotes(subjectSlug, unit.slug, topic.slug);
          const hasQuestions = !!getQuestions(subjectSlug, unit.slug, topic.slug);
          return (
            <li key={topic.slug} className="group">
              <div className="flex items-start gap-4 p-5">
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-slate-100 text-sm font-semibold text-slate-700">
                  {i + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-base font-semibold text-slate-900">{t(topic.title)}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-600">{t(topic.summary)}</p>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {hasNotes ? (
                      <Link
                        href={`/subjects/${subject.slug}/${unit.slug}/${topic.slug}/notes`}
                        className="inline-flex items-center gap-1.5 rounded-full bg-slate-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-slate-700"
                      >
                        <BookOpen size={13} />
                        {t({ en: "Notes", zh: "笔记" })}
                        <ChevronRight size={12} />
                      </Link>
                    ) : null}
                    {hasQuestions ? (
                      <Link
                        href={`/subjects/${subject.slug}/${unit.slug}/${topic.slug}/practice`}
                        className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-3 py-1.5 text-xs font-medium text-slate-700 hover:bg-slate-100"
                      >
                        <Dumbbell size={13} />
                        {t({ en: "Practice", zh: "练习" })}
                        <ChevronRight size={12} />
                      </Link>
                    ) : null}
                    {!hasNotes && !hasQuestions && (
                      <span className="text-xs font-medium text-slate-400">
                        {t({ en: "Coming soon", zh: "即将推出" })}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>

      {unitQs && unitQs.length > 0 && (
        <Link
          href={`/subjects/${subject.slug}/${unit.slug}/practice`}
          className="group mt-6 block rounded-xl border border-blue-200 bg-gradient-to-br from-blue-50 to-white p-5 transition hover:-translate-y-0.5 hover:border-blue-300 hover:shadow-sm"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-blue-600 text-white">
              <Trophy size={18} />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">
                  {t({ en: `Unit ${unit.number} · Full Review`, zh: `第 ${unit.number} 单元 · 综合测验` })}
                </p>
                <ChevronRight size={16} className="text-blue-600 transition group-hover:translate-x-0.5" />
              </div>
              <h3 className="mt-1 text-base font-semibold text-slate-900">
                {t({
                  en: `${unitQs.length}-question holistic practice covering every topic in this unit`,
                  zh: `${unitQs.length} 道综合练习题,覆盖本单元所有主题`,
                })}
              </h3>
              <p className="mt-1 text-sm leading-6 text-slate-600">
                {t({
                  en: "Fresh questions — no overlap with per-topic practice. Mix of table-reading, graph interpretation, and calculation.",
                  zh: "全新题目,与各主题练习不重复。包含读表、读图与计算题。",
                })}
              </p>
            </div>
          </div>
        </Link>
      )}
    </div>
  );
}
