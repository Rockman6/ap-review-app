"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, PartyPopper, RotateCcw } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { apMicro, getUnit, getTopic, getQuestions } from "@/lib/content";
import { PracticeQuestion } from "@/components/PracticeQuestion";
import { createClient } from "@/lib/supabase/browser";

async function saveAttempt(args: {
  questionId: string;
  selectedAnswer: string;
  isCorrect: boolean;
  unitSlug: string;
  topicSlug: string;
}) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  const { error } = await supabase.from("quiz_attempts").insert({
    user_id: data.user.id,
    subject_slug: apMicro.slug,
    unit_slug: args.unitSlug,
    topic_slug: args.topicSlug,
    question_id: args.questionId,
    selected_answer: args.selectedAnswer,
    is_correct: args.isCorrect,
  });
  if (error) console.error("saveAttempt failed:", error);
}

async function saveCompletion(args: { score: number; unitSlug: string; topicSlug: string }) {
  const supabase = createClient();
  const { data } = await supabase.auth.getUser();
  if (!data.user) return;
  const { error } = await supabase.from("topic_progress").upsert(
    {
      user_id: data.user.id,
      subject_slug: apMicro.slug,
      unit_slug: args.unitSlug,
      topic_slug: args.topicSlug,
      score: args.score,
      completed_at: new Date().toISOString(),
    },
    { onConflict: "user_id,subject_slug,unit_slug,topic_slug" },
  );
  if (error) console.error("saveCompletion failed:", error);
}

export default function PracticePage({
  params,
}: {
  params: Promise<{ unit: string; topic: string }>;
}) {
  const { unit: unitSlug, topic: topicSlug } = use(params);
  const t = useT();
  const maybeUnit = getUnit(unitSlug);
  const maybeTopic = getTopic(unitSlug, topicSlug);
  const maybeQuestions = getQuestions(unitSlug, topicSlug);
  if (!maybeUnit || !maybeTopic || !maybeQuestions) notFound();
  const unit = maybeUnit;
  const topic = maybeTopic;
  const questions = maybeQuestions;

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
      unitSlug: unit.slug,
      topicSlug: topic.slug,
    });
  }

  useEffect(() => {
    if (!finished || savedRef.current) return;
    savedRef.current = true;
    void saveCompletion({
      score: correctCount / total,
      unitSlug: unit.slug,
      topicSlug: topic.slug,
    });
  }, [finished, correctCount, total, unit.slug, topic.slug]);

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
        <Link href={`/subjects/${apMicro.slug}`} className="hover:text-slate-900">
          {t(apMicro.title)}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/subjects/${apMicro.slug}/${unit.slug}`} className="hover:text-slate-900">
          {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(topic.title)}</span>
      </nav>

      <div className="mt-4 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-600">
          {t({ en: "Practice", zh: "练习" })}
        </p>
        {!finished && (
          <span className="text-xs text-slate-500">
            {t({ en: "Question", zh: "第" })} {index + 1} / {total}
          </span>
        )}
      </div>

      <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-slate-200">
        <div
          className="h-full rounded-full bg-green-500 transition-all duration-300"
          style={{ width: finished ? "100%" : `${progressPct}%` }}
        />
      </div>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        {finished ? (
          <Finished
            correct={correctCount}
            total={total}
            onReset={reset}
            backHref={`/subjects/${apMicro.slug}/${unit.slug}`}
          />
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
  backHref,
}: {
  correct: number;
  total: number;
  onReset: () => void;
  backHref: string;
}) {
  const t = useT();
  const score = Math.round((correct / total) * 100);
  return (
    <div className="py-4 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
        <PartyPopper size={22} />
      </div>
      <h2 className="mt-4 text-2xl font-semibold text-slate-900">
        {t({ en: "Nice work!", zh: "做得很棒!" })}
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
          href={backHref}
          className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
        >
          {t({ en: "Back to unit", zh: "返回单元" })}
          <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
}
