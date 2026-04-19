"use client";

import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, LineChart } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { apMicro } from "@/lib/content";

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
        <div className="mt-8 flex flex-wrap gap-3 sm:justify-start">
          <Link
            href={`/subjects/${apMicro.slug}`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            {t({ en: "Start with AP Microeconomics", zh: "从 AP 微观经济学开始" })}
            <ArrowRight size={16} />
          </Link>
        </div>
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

function Feature({ icon, title, body }: { icon: React.ReactNode; title: string; body: string }) {
  return (
    <div className="rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-50 text-blue-600">{icon}</div>
      <h3 className="mt-3 text-base font-semibold text-slate-900">{title}</h3>
      <p className="mt-1 text-sm leading-6 text-slate-600">{body}</p>
    </div>
  );
}
