"use client";

import Link from "next/link";
import { useMemo } from "react";
import { ArrowRight, Flame, Sparkles, Timer, Trophy, Zap } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { practiceSets, type Bilingual, type PracticeSet } from "@/lib/content";

type CategoryGroup = {
  key: string;
  label: Bilingual;
  sets: PracticeSet[];
};

const MARATHON_KEY = "Marathon";

export default function MorePracticePage() {
  const t = useT();

  const groups = useMemo<CategoryGroup[]>(() => {
    const byKey = new Map<string, CategoryGroup>();
    for (const set of practiceSets) {
      const key = set.category.en;
      if (!byKey.has(key)) byKey.set(key, { key, label: set.category, sets: [] });
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

function StandardCategorySection({ group }: { group: CategoryGroup }) {
  const t = useT();
  return (
    <section>
      <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-red-700">
        {t(group.label)}
      </h2>
      <ul className="mt-3 grid gap-4 sm:grid-cols-2">
        {group.sets.map((set) => (
          <li key={set.slug}>
            <StandardCard set={set} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function StandardCard({ set }: { set: PracticeSet }) {
  const t = useT();
  return (
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
      <h3 className="mt-3 text-lg font-semibold text-slate-900">{t(set.title)}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{t(set.description)}</p>
      <div className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-red-700 transition group-hover:gap-2">
        {t({ en: "Start set", zh: "开始练习" })}
        <ArrowRight size={15} />
      </div>
    </Link>
  );
}

function MarathonSection({ group }: { group: CategoryGroup }) {
  const t = useT();
  return (
    <section>
      <h2 className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.35em]">
        <Trophy size={14} className="text-amber-500 drop-shadow" />
        <span className="bg-gradient-to-r from-amber-500 via-orange-500 to-red-600 bg-clip-text text-transparent">
          {t(group.label)}
        </span>
      </h2>
      <ul className="mt-3 grid gap-4 sm:grid-cols-1">
        {group.sets.map((set) => (
          <li key={set.slug}>
            <MarathonCard set={set} />
          </li>
        ))}
      </ul>
    </section>
  );
}

function MarathonCard({ set }: { set: PracticeSet }) {
  const t = useT();
  const conceptCount = countUniqueConcepts(set);
  const estimatedMinutes = Math.round((set.questions.length * 50) / 60);

  return (
    <Link
      href={`/more-practice/${set.slug}`}
      aria-label={t({
        en: `Start ${t(set.title)} — ${set.questions.length} questions`,
        zh: `开始 ${t(set.title)} — 共 ${set.questions.length} 题`,
      })}
      className="group relative block overflow-hidden rounded-3xl bg-gradient-to-br from-slate-950 via-red-950 to-amber-900 p-7 text-white shadow-2xl shadow-amber-900/40 ring-2 ring-amber-500/50 ring-offset-2 transition hover:-translate-y-1 hover:shadow-amber-500/50 sm:p-9"
    >
      {/* decorative glows */}
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-amber-400/25 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-red-500/30 blur-3xl" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/80 to-transparent" />
      {/* subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />
      {/* hover shimmer */}
      <div className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/15 to-transparent transition-transform duration-1000 group-hover:translate-x-full" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-amber-400/50 bg-amber-400/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.3em] text-amber-300 shadow-inner shadow-amber-400/20">
            <Trophy size={12} />
            {t({ en: "Endurance challenge", zh: "耐力挑战" })}
          </span>
          <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80 ring-1 ring-white/20">
            <Zap size={11} />
            {t(set.subject)}
          </span>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-[1fr_auto] sm:items-end">
          <div>
            <h3 className="text-3xl font-black uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-4xl">
              {t(set.title)}
            </h3>
            <p className="mt-3 max-w-lg text-sm leading-6 text-white/80">
              {t(set.description)}
            </p>
          </div>
          <div className="text-right">
            <div className="text-6xl font-black leading-none text-amber-300 drop-shadow-[0_4px_20px_rgba(251,191,36,0.4)] sm:text-7xl">
              {set.questions.length}
            </div>
            <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.3em] text-amber-300/90">
              {t({ en: "Questions", zh: "题目" })}
            </div>
          </div>
        </div>

        <div className="mt-7 grid grid-cols-1 gap-3 border-t border-white/10 pt-5 sm:grid-cols-3">
          <StatRow
            icon={<Flame size={14} className="text-amber-400" />}
            label={t({ en: "Coverage", zh: "覆盖" })}
            value={t({ en: "All 6 units mixed", zh: "6 个单元混合" })}
          />
          <StatRow
            icon={<Sparkles size={14} className="text-amber-400" />}
            label={t({ en: "Concepts", zh: "概念数" })}
            value={t({
              en: `${conceptCount}+ distinct tags`,
              zh: `${conceptCount}+ 个不同概念`,
            })}
          />
          <StatRow
            icon={<Timer size={14} className="text-amber-400" />}
            label={t({ en: "Est. time", zh: "预计用时" })}
            value={t({
              en: `~${estimatedMinutes} min`,
              zh: `约 ${estimatedMinutes} 分钟`,
            })}
          />
        </div>

        <div className="mt-7 flex items-center justify-between gap-4">
          <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-white/40">
            {t({ en: "Easy → Hard · Mixed difficulty", zh: "由易到难 · 难度混合" })}
          </p>
          <span className="inline-flex flex-none items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 via-yellow-300 to-amber-400 px-5 py-2.5 text-sm font-black uppercase tracking-[0.15em] text-slate-950 shadow-lg shadow-amber-500/50 transition group-hover:gap-3 group-hover:from-amber-200 group-hover:to-yellow-300">
            {t({ en: "Go the distance", zh: "坚持到底" })}
            <ArrowRight size={16} />
          </span>
        </div>
      </div>
    </Link>
  );
}

function StatRow({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex h-7 w-7 flex-none items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
          {label}
        </div>
        <div className="text-xs font-semibold text-white/90">{value}</div>
      </div>
    </div>
  );
}

function countUniqueConcepts(set: PracticeSet): number {
  const s = new Set<string>();
  for (const q of set.questions) {
    if (q.concept) s.add(q.concept.en);
  }
  return s.size;
}
