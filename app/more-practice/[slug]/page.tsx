"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, Flame, PartyPopper, RotateCcw } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getPracticeSet } from "@/lib/content";
import { PracticeQuestion } from "@/components/PracticeQuestion";
import { createClient } from "@/lib/supabase/browser";

async function saveAttempt(args: {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  setSlug: string;
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  const { error } = await supabase.from("quiz_attempts").insert({
    user_id: data.user.id,
    subject_slug: "more-practice",
    unit_slug: args.setSlug,
    topic_slug: args.setSlug,
    question_id: args.questionId,
    selected_answer: args.selectedAnswer,
    is_correct: args.isCorrect,
  });
  if (error) console.error("saveAttempt failed:", error);
}

export default function MorePracticeSetPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const t = useT();
  const maybeSet = getPracticeSet(slug);
  if (!maybeSet) notFound();
  const set = maybeSet;
  const questions = set.questions;

  const [index, setIndex] = useState(0);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [correctCount, setCorrectCount] = useState(0);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const current = questions[index];
  const progressPct = useMemo(
    () => ((index + (submitted ? 1 : 0)) / total) * 100,
    [index, submitted, total],
  );
  const savedRef = useRef(false);

  function submit() {
    if (selectedId === null) return;
    const isCorrect = selectedId === current.answerId;
    if (isCorrect) setCorrectCount((c) => c + 1);
    setSubmitted(true);
    void saveAttempt({
      questionId: current.id,
      selectedAnswer: selectedId,
      isCorrect,
      setSlug: set.slug,
    });
  }

  useEffect(() => {
    if (!finished || savedRef.current) return;
    savedRef.current = true;
  }, [finished]);

  function next() {
    if (index + 1 >= total) {
      setFinished(true);
      return;
    }
    setIndex((i) => i + 1);
    setSelectedId(null);
    setSubmitted(false);
  }

  function reset() {
    setIndex(0);
    setSelectedId(null);
    setSubmitted(false);
    setCorrectCount(0);
    setFinished(false);
    savedRef.current = false;
  }

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:py-14">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <Link href="/more-practice" className="hover:text-slate-900">
          {t({ en: "More Practice", zh: "更多练习" })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(set.title)}</span>
      </nav>

      <div className="mt-4 flex items-center justify-between">
        <p className="inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-widest text-red-700">
          <Flame size={12} />
          {t({ en: "More Practice", zh: "更多练习" })}
        </p>
        {!finished && (
          <span className="text-xs text-slate-500">
            {t({ en: "Question", zh: "第" })} {index + 1} / {total}
          </span>
        )}
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-red-600 transition-all duration-300"
          style={{ width: finished ? "100%" : `${progressPct}%` }}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        {finished ? (
          <Finished correct={correctCount} total={total} onReset={reset} />
        ) : (
          <>
            <PracticeQuestion
              question={current}
              selectedId={selectedId}
              submitted={submitted}
              onSelect={setSelectedId}
            />
            <div className="mt-8 flex justify-end">
              {!submitted ? (
                <button
                  type="button"
                  onClick={submit}
                  disabled={selectedId === null}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700 disabled:cursor-not-allowed disabled:bg-slate-300"
                >
                  {t({ en: "Check", zh: "检查" })}
                </button>
              ) : (
                <button
                  type="button"
                  onClick={next}
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-700"
                >
                  {index + 1 >= total
                    ? t({ en: "See results", zh: "查看结果" })
                    : t({ en: "Continue", zh: "继续" })}
                  <ArrowRight size={15} />
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

function Finished({
  correct,
  total,
  onReset,
}: {
  correct: number;
  total: number;
  onReset: () => void;
}) {
  const t = useT();
  const score = Math.round((correct / total) * 100);
  return (
    <div className="py-4 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
        <PartyPopper size={22} />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">
        {t({ en: "Set complete!", zh: "练习完成!" })}
      </h2>
      <p className="mt-2 text-slate-600">
        {t({
          en: `You got ${correct} of ${total} correct (${score}%).`,
          zh: `你答对了 ${total} 题中的 ${correct} 题(${score}%)。`,
        })}
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
        >
          <RotateCcw size={14} />
          {t({ en: "Try again", zh: "再试一次" })}
        </button>
        <Link
          href="/more-practice"
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          {t({ en: "More sets", zh: "更多练习集" })}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
