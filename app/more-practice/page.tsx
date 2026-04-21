"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight, Flame, Zap } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { practiceSets, type Bilingual, type PracticeSet } from "@/lib/content";

type CategoryGroup = {
  label: Bilingual;
  sets: PracticeSet[];
};

export default function MorePracticePage() {
  const t = useT();

  const groups = useMemo<CategoryGroup[]>(() => {
    const byKey = new Map<string, CategoryGroup>();
    for (const set of practiceSets) {
      const key = set.category.en;
      if (!byKey.has(key)) byKey.set(key, { label: set.category, sets: [] });
      byKey.get(key)!.sets.push(set);
    }
    return Array.from(byKey.values());
  }, []);

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
          en: "Extra MCQ practice sets across subjects. Pick a set, drill it, see your score.",
          zh: "按学科提供的额外选择题练习集。挑一套,刷起来,查看得分。",
        })}
      </p>

      {groups.length === 0 ? (
        <p className="mt-10 text-slate-500">
          {t({ en: "No practice sets yet — check back soon.", zh: "暂无练习集,敬请期待。" })}
        </p>
      ) : (
        <div className="mt-10 space-y-10">
          {groups.map((group) => (
            <section key={group.label.en}>
              <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
                {t(group.label)}
              </h2>
              <ul className="mt-3 grid gap-4 sm:grid-cols-2">
                {group.sets.map((set) => (
                  <li key={set.slug}>
                    <Link
                      href={`/more-practice/${set.slug}`}
                      className="group block rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:border-red-300 hover:shadow-lg"
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 rounded-full bg-red-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-widest text-red-700">
                          <Zap size={11} />
                          {t(set.subject)}
                        </span>
                        <span className="text-xs text-slate-500">
                          {t({
                            en: `${set.questions.length} questions`,
                            zh: `${set.questions.length} 题`,
                          })}
                        </span>
                      </div>
                      <h3 className="mt-3 text-lg font-semibold text-slate-900">
                        {t(set.title)}
                      </h3>
                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {t(set.description)}
                      </p>
                      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-700 transition group-hover:gap-2">
                        {t({ en: "Start set", zh: "开始练习" })}
                        <ArrowRight size={15} />
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      )}
    </div>
  );
}
