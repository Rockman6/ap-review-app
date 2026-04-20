"use client";

import { Check, X } from "lucide-react";
import { useT } from "./LocaleProvider";
import { NoteBlockRenderer, Highlighted } from "./NoteBlock";
import type { Question } from "@/lib/content";

export function PracticeQuestion({
  question,
  selectedId,
  submitted,
  onSelect,
}: {
  question: Question;
  selectedId: string | null;
  submitted: boolean;
  onSelect: (id: string) => void;
}) {
  const t = useT();
  const isCorrect = submitted && selectedId === question.answerId;

  return (
    <div>
      {question.figure && (
        <div className="mb-4">
          <NoteBlockRenderer block={question.figure} />
        </div>
      )}
      <h2 className="text-xl font-semibold text-slate-900">
        <Highlighted text={t(question.prompt)} />
      </h2>

      <div className="mt-6 space-y-2.5">
        {question.choices.map((choice) => {
          const isSelected = selectedId === choice.id;
          const isAnswer = choice.id === question.answerId;
          let cls =
            "flex items-start gap-3 w-full rounded-xl border-2 px-4 py-3 text-left transition text-[15px] ";
          if (submitted) {
            if (isAnswer) cls += "border-green-500 bg-green-50 text-green-900";
            else if (isSelected) cls += "border-red-500 bg-red-50 text-red-900";
            else cls += "border-slate-200 bg-white text-slate-500";
          } else {
            cls += isSelected
              ? "border-slate-900 bg-slate-50 text-slate-900"
              : "border-slate-200 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50";
          }
          return (
            <button
              key={choice.id}
              type="button"
              onClick={() => !submitted && onSelect(choice.id)}
              disabled={submitted}
              className={cls}
            >
              <span className={`mt-0.5 flex h-6 w-6 flex-none items-center justify-center rounded-full text-xs font-semibold ${
                submitted && isAnswer
                  ? "bg-green-500 text-white"
                  : submitted && isSelected
                    ? "bg-red-500 text-white"
                    : isSelected
                      ? "bg-slate-900 text-white"
                      : "bg-slate-100 text-slate-600"
              }`}>
                {submitted && isAnswer ? <Check size={13} /> : submitted && isSelected ? <X size={13} /> : choice.id.toUpperCase()}
              </span>
              <span>{t(choice.text)}</span>
            </button>
          );
        })}
      </div>

      {submitted && (
        <div
          className={`mt-6 rounded-xl border-2 p-4 text-[15px] leading-6 ${
            isCorrect ? "border-green-200 bg-green-50 text-green-900" : "border-red-200 bg-red-50 text-red-900"
          }`}
        >
          <div className="flex items-center gap-2 text-sm font-semibold">
            {isCorrect ? <Check size={16} /> : <X size={16} />}
            {isCorrect
              ? t({ en: "Correct", zh: "正确" })
              : t({ en: "Not quite", zh: "不太对" })}
          </div>
          <p className="mt-1.5 text-slate-800">
            <Highlighted text={t(question.explanation)} />
          </p>
        </div>
      )}
    </div>
  );
}
