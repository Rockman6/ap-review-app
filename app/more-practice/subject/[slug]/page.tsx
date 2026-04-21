"use client";

import Link from "next/link";
import { use, useMemo } from "react";
import { notFound } from "next/navigation";
import { Flame } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getSubject, practiceSets } from "@/lib/content";
import { getSubjectStyle } from "@/lib/subject-styles";
import {
  MARATHON_KEY,
  MarathonSection,
  StandardCategorySection,
  groupByCategory,
} from "@/components/PracticeSetCards";

export default function SubjectMorePracticePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useT();
  const maybeSubject = getSubject(slug);
  if (!maybeSubject) notFound();
  const subject = maybeSubject;

  const filteredSets = useMemo(
    () => practiceSets.filter((s) => s.subjectSlug === subject.slug),
    [subject.slug],
  );
  const groups = useMemo(() => groupByCategory(filteredSets), [filteredSets]);

  const { Icon, gradient } = getSubjectStyle(subject.slug);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:py-16">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/more-practice" className="hover:text-slate-900">
          {t({ en: "More Practice", zh: "更多练习" })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(subject.title)}</span>
      </nav>

      <div className="mt-6 flex items-start gap-3">
        <div
          className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-gradient-to-br ${gradient} text-white shadow-lg`}
        >
          <Icon size={22} />
        </div>
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            {t(subject.title)}
          </h1>
          <p className="mt-1 text-sm font-medium uppercase tracking-widest text-slate-500">
            {t({ en: "More Practice", zh: "更多练习" })}
          </p>
        </div>
      </div>
      <p className="mt-4 max-w-2xl text-base text-slate-600">{t(subject.tagline)}</p>

      {groups.length === 0 ? (
        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-10 text-center">
          <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-xl bg-slate-200 text-slate-400">
            <Flame size={18} />
          </div>
          <h3 className="mt-4 text-base font-semibold text-slate-700">
            {t({ en: "No practice sets yet", zh: "暂无练习集" })}
          </h3>
          <p className="mt-2 text-sm text-slate-500">
            {t({
              en: "We're building More Practice content for this subject. Check back soon.",
              zh: "我们正在为此科目准备练习内容,请稍后再来。",
            })}
          </p>
          <div className="mt-6">
            <Link
              href="/more-practice"
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
            >
              {t({ en: "Back to all subjects", zh: "返回全部科目" })}
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 space-y-10">
          {groups.map((group) =>
            group.key === MARATHON_KEY ? (
              <MarathonSection key={group.key} group={group} />
            ) : (
              <StandardCategorySection key={group.key} group={group} />
            ),
          )}
        </div>
      )}
    </div>
  );
}
