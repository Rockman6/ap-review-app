"use client";

import { useLocale } from "./LocaleProvider";

export function LanguageToggle() {
  const { locale, setLocale } = useLocale();
  return (
    <div className="inline-flex overflow-hidden rounded-full border border-slate-200 bg-white text-xs font-medium">
      <button
        type="button"
        onClick={() => setLocale("en")}
        className={`px-3 py-1 transition ${locale === "en" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => setLocale("zh")}
        className={`px-3 py-1 transition ${locale === "zh" ? "bg-slate-900 text-white" : "text-slate-600 hover:bg-slate-100"}`}
      >
        中文
      </button>
    </div>
  );
}
