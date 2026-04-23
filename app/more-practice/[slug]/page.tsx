"use client";

import Link from "next/link";
import { use, useEffect, useMemo, useRef, useState } from "react";
import { notFound } from "next/navigation";
import { ArrowRight, Check, Flame, PartyPopper, RotateCcw, X } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getPracticeSet, type Question, type Bilingual, type FRQItem } from "@/lib/content";
import { PracticeQuestion } from "@/components/PracticeQuestion";
import { createClient } from "@/lib/supabase/browser";

type AttemptResult = {
  questionId: string;
  selectedId: string;
  isCorrect: boolean;
};

const UNTAGGED_CONCEPT: Bilingual = {
  en: "Uncategorized",
  zh: "未分类",
};

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
  const [results, setResults] = useState<AttemptResult[]>([]);
  const [finished, setFinished] = useState(false);

  const total = questions.length;
  const current = questions[index];
  const correctCount = useMemo(() => results.filter((r) => r.isCorrect).length, [results]);
  const progressPct = useMemo(
    () => ((index + (submitted ? 1 : 0)) / total) * 100,
    [index, submitted, total],
  );
  const savedRef = useRef(false);

  function submit() {
    if (selectedId === null) return;
    const isCorrect = selectedId === current.answerId;
    setResults((prev) => [
      ...prev,
      { questionId: current.id, selectedId, isCorrect },
    ]);
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
    setResults([]);
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
        {!finished && total > 0 && (
          <span className="text-xs text-slate-500">
            {t({ en: "Question", zh: "第" })} {index + 1} / {total}
          </span>
        )}
      </div>

      {set.frqs && set.frqs.length > 0 && (
        <section className="mt-6 space-y-5">
          <h2 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">
            {t({ en: "Free-Response Questions", zh: "自由应答题" })}
          </h2>
          {set.frqs.map((frq) => (
            <FRQCard key={frq.id} frq={frq} />
          ))}
        </section>
      )}

      {total > 0 && (
        <div className="mt-6 h-2 w-full overflow-hidden rounded-full bg-slate-200">
          <div
            className="h-full rounded-full bg-red-600 transition-all duration-300"
            style={{ width: finished ? "100%" : `${progressPct}%` }}
          />
        </div>
      )}

      {total === 0 ? null : finished ? (
        <Finished
          correct={correctCount}
          total={total}
          questions={questions}
          results={results}
          onReset={reset}
        />
      ) : (
        <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
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
        </div>
      )}
    </div>
  );
}

function Finished({
  correct,
  total,
  questions,
  results,
  onReset,
}: {
  correct: number;
  total: number;
  questions: Question[];
  results: AttemptResult[];
  onReset: () => void;
}) {
  const t = useT();
  const score = Math.round((correct / total) * 100);

  const groups = useMemo(() => {
    const byConcept = new Map<string, { label: Bilingual; items: Array<{ q: Question; r: AttemptResult }> }>();
    for (const q of questions) {
      const r = results.find((x) => x.questionId === q.id);
      if (!r) continue;
      const concept = q.concept ?? UNTAGGED_CONCEPT;
      const key = concept.en;
      if (!byConcept.has(key)) byConcept.set(key, { label: concept, items: [] });
      byConcept.get(key)!.items.push({ q, r });
    }
    return Array.from(byConcept.values());
  }, [questions, results]);

  return (
    <div className="mt-8 space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
        <div className="text-center">
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
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          {t({ en: "Review by concept", zh: "按概念复盘" })}
        </h3>
        <div className="mt-3 space-y-5">
          {groups.map((group) => {
            const groupCorrect = group.items.filter((x) => x.r.isCorrect).length;
            const groupTotal = group.items.length;
            return (
              <section
                key={group.label.en}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
              >
                <header className="flex items-center justify-between border-b border-slate-200 bg-slate-50 px-5 py-3">
                  <h4 className="text-base font-semibold text-slate-900">
                    {t(group.label)}
                  </h4>
                  <span className="text-xs font-medium text-slate-600">
                    {groupCorrect} / {groupTotal} {t({ en: "correct", zh: "正确" })}
                  </span>
                </header>
                <ul className="divide-y divide-slate-200">
                  {group.items.map(({ q, r }) => (
                    <ReviewRow key={q.id} question={q} result={r} />
                  ))}
                </ul>
              </section>
            );
          })}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
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

function ReviewRow({ question, result }: { question: Question; result: AttemptResult }) {
  const t = useT();
  const correctChoice = question.choices.find((c) => c.id === question.answerId);
  const selectedChoice = question.choices.find((c) => c.id === result.selectedId);
  const isCorrect = result.isCorrect;
  return (
    <li className="px-5 py-4">
      <div className="flex items-start gap-3">
        <div
          className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full ${
            isCorrect ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"
          }`}
          aria-hidden
        >
          {isCorrect ? <Check size={14} /> : <X size={14} />}
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-sm leading-6 text-slate-800">{t(question.prompt)}</p>

          <div className="mt-3 space-y-1 text-xs">
            <div className="flex items-center gap-2 text-slate-600">
              <span className="font-semibold text-slate-700">
                {t({ en: "Your answer:", zh: "你的选择:" })}
              </span>
              <span className={isCorrect ? "text-green-700" : "text-red-700"}>
                {selectedChoice ? t(selectedChoice.text) : t({ en: "—", zh: "—" })}
              </span>
            </div>
            {!isCorrect && correctChoice && (
              <div className="flex items-center gap-2 text-slate-600">
                <span className="font-semibold text-slate-700">
                  {t({ en: "Correct answer:", zh: "正确答案:" })}
                </span>
                <span className="text-green-700">{t(correctChoice.text)}</span>
              </div>
            )}
          </div>

          <details className="mt-3 rounded-lg bg-slate-50 px-3 py-2 text-sm text-slate-700">
            <summary className="cursor-pointer select-none text-xs font-semibold uppercase tracking-wider text-slate-500">
              {t({ en: "Explanation", zh: "解析" })}
            </summary>
            <p className="mt-2 whitespace-pre-line leading-6">{t(question.explanation)}</p>
          </details>
        </div>
      </div>
    </li>
  );
}

function FRQCard({ frq }: { frq: FRQItem }) {
  const t = useT();
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const setAnswer = (key: string, v: string) =>
    setAnswers((prev) => ({ ...prev, [key]: v }));

  function ResponseBox({ k, rows = 6 }: { k: string; rows?: number }) {
    return (
      <div className="mt-3">
        <label className="block text-[10px] font-semibold uppercase tracking-widest text-slate-500">
          {t({ en: `Your response — ${k}`, zh: `你的答案 — ${k}` })}
        </label>
        <textarea
          value={answers[k] ?? ""}
          onChange={(e) => setAnswer(k, e.target.value)}
          rows={rows}
          placeholder={t({ en: "Type your response here…", zh: "在此输入你的答案…" })}
          className="mt-1 w-full rounded-lg border border-slate-300 bg-white p-3 text-sm leading-6 text-slate-900 shadow-inner focus:border-slate-600 focus:outline-none"
        />
      </div>
    );
  }

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-slate-900">
          {t({ en: `Question ${frq.number}`, zh: `第 ${frq.number} 题` })}
        </h3>
        <span className="rounded-full border border-indigo-200 bg-indigo-50 px-2.5 py-0.5 text-xs font-semibold text-indigo-700">
          FRQ
        </span>
      </div>
      <div className="space-y-4 text-[15px] leading-7 text-slate-800">
        {frq.blocks.map((block, i) => {
          if (block.kind === "text") {
            return <p key={i}>{t(block.text)}</p>;
          }
          if (block.kind === "part") {
            return (
              <div key={i} className="rounded-lg bg-slate-50 px-4 py-3">
                <p>
                  <span className="font-bold">{block.letter}.</span>{" "}
                  <span className="font-semibold">{t(block.instruction)}</span>
                  {block.text && <> {t(block.text)}</>}
                </p>
                <ResponseBox k={block.letter} />
              </div>
            );
          }
          if (block.kind === "part-group") {
            return (
              <div key={i} className="rounded-lg bg-slate-50 px-4 py-3">
                <p className="font-bold text-slate-900">{block.letter}.</p>
                <ol className="mt-2 space-y-4 pl-6">
                  {block.subparts.map((sp, j) => (
                    <li key={j}>
                      <div className="flex gap-2">
                        <span className="min-w-[2rem] italic text-slate-600">{sp.numeral}.</span>
                        <span>
                          <span className="font-semibold">{t(sp.instruction)}</span>
                          {sp.text && <> {t(sp.text)}</>}
                        </span>
                      </div>
                      <ResponseBox k={`${block.letter}.${sp.numeral}`} rows={4} />
                    </li>
                  ))}
                </ol>
              </div>
            );
          }
          if (block.kind === "table") {
            return (
              <figure key={i} className="my-2 overflow-hidden rounded-lg border border-slate-300 bg-white">
                {block.title && (
                  <figcaption className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-center text-sm font-semibold text-slate-800">
                    {t(block.title)}
                  </figcaption>
                )}
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-slate-50 text-slate-800">
                        {block.columns.map((col, j) => (
                          <th key={j} className="border border-slate-300 px-3 py-2 text-center font-semibold">
                            {t(col)}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {block.rows.map((row, r) => (
                        <tr key={r}>
                          {row.map((cell, c) => (
                            <td key={c} className="border border-slate-300 px-3 py-2 text-slate-800">
                              {t(cell)}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </figure>
            );
          }
          if (block.kind === "figure") {
            return (
              <figure key={i} className="my-2">
                {block.title && (
                  <figcaption className="mb-2 text-center text-sm font-semibold text-slate-800">
                    {t(block.title)}
                  </figcaption>
                )}
                <img
                  src={block.src}
                  alt={block.title ? t(block.title) : "figure"}
                  className="mx-auto w-full max-w-2xl rounded-md border border-slate-200 bg-white"
                />
                {block.caption && (
                  <figcaption className="mt-2 text-center text-xs text-slate-500">
                    {t(block.caption)}
                  </figcaption>
                )}
              </figure>
            );
          }
          return null;
        })}
      </div>
    </article>
  );
}
