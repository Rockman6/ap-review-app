"use client";

import Link from "next/link";
import { use } from "react";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { getSubject, getUnit, getTopic, getNotes, getQuestions } from "@/lib/content";
import { NoteBlockRenderer } from "@/components/NoteBlock";

export default function NotesPage({
  params,
}: {
  params: Promise<{ subject: string; unit: string; topic: string }>;
}) {
  const { subject: subjectSlug, unit: unitSlug, topic: topicSlug } = use(params);
  const t = useT();
  const subject = getSubject(subjectSlug);
  const maybeUnit = getUnit(subjectSlug, unitSlug);
  const maybeTopic = getTopic(subjectSlug, unitSlug, topicSlug);
  const maybeNotes = getNotes(subjectSlug, unitSlug, topicSlug);
  if (!subject || !maybeUnit || !maybeTopic || !maybeNotes) notFound();
  const unit = maybeUnit;
  const topic = maybeTopic;
  const notes = maybeNotes;
  const hasPractice = !!getQuestions(subjectSlug, unitSlug, topicSlug);

  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <nav className="text-xs text-slate-500">
        <Link href={`/subjects/${subject.slug}`} className="hover:text-slate-900">
          {t(subject.title)}
        </Link>
        <span className="mx-2">/</span>
        <Link href={`/subjects/${subject.slug}/${unit.slug}`} className="hover:text-slate-900">
          {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(topic.title)}</span>
      </nav>

      <p className="mt-4 text-xs font-semibold uppercase tracking-widest text-blue-600">
        {t({ en: "Notes", zh: "笔记" })}
      </p>
      <h1 className="mt-1 text-3xl font-semibold tracking-tight">{t(topic.title)}</h1>
      <p className="mt-2 text-slate-600">{t(topic.summary)}</p>

      <article className="mt-8 text-[15px] leading-7 text-slate-800">
        {notes.map((block, i) => (
          <NoteBlockRenderer key={i} block={block} />
        ))}
      </article>

      {hasPractice && (
        <div className="mt-10 flex justify-end">
          <Link
            href={`/subjects/${subject.slug}/${unit.slug}/${topic.slug}/practice`}
            className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-700"
          >
            {t({ en: "Practice this topic", zh: "开始练习本主题" })}
            <ArrowRight size={15} />
          </Link>
        </div>
      )}
    </div>
  );
}
