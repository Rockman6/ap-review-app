"use client";

import Link from "next/link";
import { ArrowRight, Atom, BookOpen, CheckCircle2, Feather, Flame, FlaskConical, Landmark, LineChart, Leaf, Sigma, TrendingUp, Zap } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { subjects, type Subject } from "@/lib/content";

const subjectStyles: Record<
  string,
  { icon: React.ReactNode; gradient: string; ring: string; iconBg: string }
> = {
  "ap-micro": {
    icon: <TrendingUp size={22} />,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    ring: "ring-blue-200",
    iconBg: "bg-white/20",
  },
  "ap-bio": {
    icon: <Leaf size={22} />,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    ring: "ring-emerald-200",
    iconBg: "bg-white/20",
  },
  "ap-physics-1": {
    icon: <Atom size={22} />,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    ring: "ring-amber-200",
    iconBg: "bg-white/20",
  },
  "ap-chem": {
    icon: <FlaskConical size={22} />,
    gradient: "from-fuchsia-500 via-purple-500 to-pink-500",
    ring: "ring-fuchsia-200",
    iconBg: "bg-white/20",
  },
  "ap-calculus-bc": {
    icon: <Sigma size={22} />,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    ring: "ring-sky-200",
    iconBg: "bg-white/20",
  },
  "ap-eng-lang": {
    icon: <Feather size={22} />,
    gradient: "from-stone-600 via-zinc-700 to-slate-800",
    ring: "ring-stone-200",
    iconBg: "bg-white/20",
  },
  "apush": {
    icon: <Landmark size={22} />,
    gradient: "from-red-600 via-rose-700 to-amber-800",
    ring: "ring-red-200",
    iconBg: "bg-white/20",
  },
};

export default function Landing() {
  const t = useT();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-20">
      <section className="text-center sm:text-left">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {t({ en: "AP Exam Prep · Bilingual", zh: "AP 考试复习 · 中英双语" })}
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-slate-900 sm:text-5xl">
          {t({
            en: "Everything you need for the AP exam, in one place.",
            zh: "AP 考试所需的一切,尽在这里。",
          })}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600">
          {t({
            en: "Concept notes, interactive practice, and progress tracking — built for students preparing for AP exams in English and Chinese.",
            zh: "概念笔记、互动练习、进度追踪——为备战 AP 考试的中英文学生而打造。",
          })}
        </p>
        <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
          {t({ en: "Pick a subject", zh: "选择科目" })}
        </p>
        <div className="mt-3 grid gap-4 sm:grid-cols-2">
          {subjects.map((subject) => (
            <SubjectButton key={subject.slug} subject={subject} />
          ))}
        </div>
      </section>

      <section className="mt-12">
        <MorePracticeCTA />
      </section>

      <section className="mt-16 grid gap-4 sm:grid-cols-3">
        <Feature
          icon={<BookOpen size={18} />}
          title={t({ en: "Concept notes", zh: "概念笔记" })}
          body={t({
            en: "Each unit broken into small, focused topics with definitions, examples, and diagrams.",
            zh: "每个单元拆分为小而聚焦的主题,包含定义、例子与图表。",
          })}
        />
        <Feature
          icon={<CheckCircle2 size={18} />}
          title={t({ en: "Interactive practice", zh: "互动练习" })}
          body={t({
            en: "One question at a time with instant feedback and explanations — in the style of Duolingo.",
            zh: "一次一道题,即时反馈与解析——类似 Duolingo 的练习体验。",
          })}
        />
        <Feature
          icon={<LineChart size={18} />}
          title={t({ en: "Progress tracking", zh: "进度追踪" })}
          body={t({
            en: "See how far each student has come through the unit.",
            zh: "直观查看每位学生在单元中的学习进度。",
          })}
        />
      </section>
    </div>
  );
}

function SubjectButton({ subject }: { subject: Subject }) {
  const t = useT();
  const style = subjectStyles[subject.slug] ?? {
    icon: <BookOpen size={22} />,
    gradient: "from-slate-600 via-slate-700 to-slate-800",
    ring: "ring-slate-200",
    iconBg: "bg-white/20",
  };
  return (
    <Link
      href={`/subjects/${subject.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-gradient-to-br ${style.gradient} p-6 text-white shadow-sm ring-1 ${style.ring} transition hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
      <div className="relative flex items-start gap-4">
        <div className={`flex h-11 w-11 flex-none items-center justify-center rounded-xl ${style.iconBg} backdrop-blur-sm`}>
          {style.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">{t(subject.title)}</h3>
          <p className="mt-1 text-sm leading-6 text-white/80">{t(subject.tagline)}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-white/70">
              {t({
                en: `${subject.units.length} units`,
                zh: `${subject.units.length} 个单元`,
              })}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-white transition group-hover:gap-2">
              {t({ en: "Start", zh: "开始" })}
              <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

function MorePracticeCTA() {
  const t = useT();
  return (
    <Link
      href="/more-practice"
      aria-label={t({ en: "Go to More Practice", zh: "前往更多练习" })}
      className="group relative block overflow-hidden rounded-2xl bg-gradient-to-r from-red-600 via-rose-600 to-orange-600 p-6 text-white shadow-xl shadow-red-500/40 ring-2 ring-red-500 ring-offset-2 transition hover:scale-[1.01] hover:shadow-2xl hover:shadow-red-500/60 motion-safe:animate-pulse sm:p-7"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-red-300/30 blur-3xl" />
      <div className="relative flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
        <div className="flex items-center gap-3">
          <div className="flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-white/20 ring-2 ring-white/50 backdrop-blur-sm">
            <Flame size={26} className="drop-shadow" />
          </div>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-yellow-200 drop-shadow">
              {t({ en: "🔥 Just dropped", zh: "🔥 新鲜上线" })}
            </p>
            <h2 className="mt-0.5 text-2xl font-black uppercase tracking-tight drop-shadow-md sm:text-3xl">
              {t({ en: "More Practice", zh: "更多练习" })}
            </h2>
            <p className="mt-1 max-w-lg text-sm text-white/90">
              {t({
                en: "Timed MCQ sets. No fluff. Find out what you actually know.",
                zh: "定时选择题练习集,直接检测你的真实水平。",
              })}
            </p>
          </div>
        </div>
        <span className="inline-flex flex-none items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-red-700 shadow-lg transition group-hover:gap-3 group-hover:bg-yellow-100">
          <Zap size={16} />
          {t({ en: "Grind Now", zh: "马上开刷" })}
          <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">{icon}</div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}
