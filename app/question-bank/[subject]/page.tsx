"use client";

import Link from "next/link";
import { notFound, useParams } from "next/navigation";
import { ChevronLeft, Download, FileText } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import {
  getPastPaperSubject,
  papersFor,
  sectionLabels,
  type PastPaperSection,
} from "@/lib/past-papers";

const sections: PastPaperSection[] = ["mcq", "frq", "ms"];

export default function SubjectPastPapersPage() {
  const t = useT();
  const params = useParams<{ subject: string }>();
  const subject = getPastPaperSubject(params.subject);
  if (!subject) notFound();

  return (
    <div className="mx-auto max-w-5xl px-4 py-12 sm:py-16">
      <Link
        href="/question-bank"
        className="inline-flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900"
      >
        <ChevronLeft size={15} />
        {t({ en: "All subjects", zh: "全部科目" })}
      </Link>

      <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {t(subject.title)}
      </h1>
      <p className="mt-2 max-w-2xl text-base text-slate-600">
        {t(subject.description)}
      </p>

      <div className="mt-10 space-y-8">
        {subject.years.map((year) => (
          <section key={year}>
            <h2 className="text-xl font-semibold text-slate-900">{year}</h2>
            <div className="mt-3 grid gap-4 sm:grid-cols-3">
              {sections.map((section) => {
                const papers = papersFor(subject, year, section);
                return (
                  <div
                    key={section}
                    className="rounded-xl border border-slate-200 bg-white p-5"
                  >
                    <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500">
                      {t(sectionLabels[section])}
                    </h3>
                    {papers.length === 0 ? (
                      <p className="mt-3 text-sm text-slate-400">
                        {t({ en: "No papers uploaded yet.", zh: "暂未上传试卷。" })}
                      </p>
                    ) : (
                      <ul className="mt-3 space-y-2">
                        {papers.map((paper) => (
                          <li key={paper.id}>
                            <a
                              href={paper.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-800"
                            >
                              <FileText size={15} />
                              <span>{t(paper.title)}</span>
                              <Download
                                size={13}
                                className="opacity-0 transition group-hover:opacity-100"
                              />
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
