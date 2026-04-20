"use client";

import Link from "next/link";
import { ArrowRight, Atom, Feather, FileText, FlaskConical, Leaf, Sigma, TrendingUp } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { pastPaperSubjects, type PastPaperSubject } from "@/lib/past-papers";

const subjectStyles: Record<
  string,
  { icon: React.ReactNode; gradient: string; ring: string }
> = {
  "ap-micro": {
    icon: <TrendingUp size={22} />,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    ring: "ring-blue-200",
  },
  "ap-bio": {
    icon: <Leaf size={22} />,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    ring: "ring-emerald-200",
  },
  "ap-physics-1": {
    icon: <Atom size={22} />,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    ring: "ring-amber-200",
  },
  "ap-chem": {
    icon: <FlaskConical size={22} />,
    gradient: "from-fuchsia-500 via-purple-500 to-pink-500",
    ring: "ring-fuchsia-200",
  },
  "ap-calculus-bc": {
    icon: <Sigma size={22} />,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    ring: "ring-sky-200",
  },
  "ap-eng-lang": {
    icon: <Feather size={22} />,
    gradient: "from-stone-600 via-zinc-700 to-slate-800",
    ring: "ring-stone-200",
  },
};

export default function QuestionBankLanding() {
  const t = useT();
  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
        {t({ en: "Question Bank · Past Papers", zh: "题库 · 历年真题" })}
      </p>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {t({
          en: "AP Past Exam Papers",
          zh: "AP 历年真题",
        })}
      </h1>
      <p className="mt-3 max-w-2xl text-base text-slate-600">
        {t({
          en: "Browse released AP exams organized by subject, year, and section. PDFs will be added here.",
          zh: "按科目、年份与题型浏览历年 AP 真题。后续将在此添加 PDF 文件。",
        })}
      </p>

      <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-slate-500">
        {t({ en: "Pick a subject", zh: "选择科目" })}
      </p>
      <div className="mt-3 grid gap-4 sm:grid-cols-2">
        {pastPaperSubjects.map((subject) => (
          <SubjectCard key={subject.slug} subject={subject} />
        ))}
      </div>
    </div>
  );
}

function SubjectCard({ subject }: { subject: PastPaperSubject }) {
  const t = useT();
  const style = subjectStyles[subject.slug] ?? {
    icon: <FileText size={22} />,
    gradient: "from-slate-600 via-slate-700 to-slate-800",
    ring: "ring-slate-200",
  };
  const count = subject.papers.length;
  return (
    <Link
      href={`/question-bank/${subject.slug}`}
      className={`group relative block overflow-hidden rounded-2xl bg-gradient-to-br ${style.gradient} p-6 text-white shadow-sm ring-1 ${style.ring} transition hover:-translate-y-0.5 hover:shadow-lg`}
    >
      <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl transition group-hover:bg-white/20" />
      <div className="relative flex items-start gap-4">
        <div className="flex h-11 w-11 flex-none items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
          {style.icon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold leading-tight">{t(subject.title)}</h3>
          <p className="mt-1 text-sm leading-6 text-white/80">{t(subject.description)}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-xs font-medium uppercase tracking-wider text-white/70">
              {count === 0
                ? t({ en: "No papers yet", zh: "暂无试卷" })
                : t({ en: `${count} papers`, zh: `${count} 份试卷` })}
            </span>
            <span className="inline-flex items-center gap-1 text-sm font-medium text-white transition group-hover:gap-2">
              {t({ en: "Browse", zh: "浏览" })}
              <ArrowRight size={15} />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
