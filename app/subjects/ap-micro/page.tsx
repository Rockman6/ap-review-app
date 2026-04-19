"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { useT } from "@/components/LocaleProvider";
import { apMicro } from "@/lib/content";

export default function SubjectPage() {
  const t = useT();
  return (
    <div className="mx-auto max-w-5xl px-4 py-10 sm:py-14">
      <nav className="text-xs text-slate-500">
        <Link href="/" className="hover:text-slate-900">
          {t({ en: "Home", zh: "首页" })}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-slate-900">{t(apMicro.title)}</span>
      </nav>
      <h1 className="mt-3 text-3xl font-semibold tracking-tight">{t(apMicro.title)}</h1>
      <p className="mt-2 max-w-2xl text-slate-600">{t(apMicro.tagline)}</p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {apMicro.units.map((unit) => {
          const hasContent = unit.topics.length > 0;
          const Card = (
            <div
              className={`group rounded-xl border bg-white p-5 transition ${
                hasContent
                  ? "border-slate-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-sm"
                  : "border-dashed border-slate-200 opacity-60"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-widest text-blue-600">
                  {t({ en: `Unit ${unit.number}`, zh: `第 ${unit.number} 单元` })}
                </span>
                {hasContent ? (
                  <ChevronRight size={16} className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:text-slate-700" />
                ) : (
                  <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                    {t({ en: "Soon", zh: "即将推出" })}
                  </span>
                )}
              </div>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">{t(unit.title)}</h2>
              <p className="mt-1 text-sm leading-6 text-slate-600">{t(unit.description)}</p>
            </div>
          );
          return hasContent ? (
            <Link key={unit.slug} href={`/subjects/${apMicro.slug}/${unit.slug}`}>
              {Card}
            </Link>
          ) : (
            <div key={unit.slug}>{Card}</div>
          );
        })}
      </div>
    </div>
  );
}
