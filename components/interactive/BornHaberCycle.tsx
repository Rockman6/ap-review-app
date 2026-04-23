"use client";

import { useState } from "react";

type Compound = "NaCl" | "MgO" | "CaF2";

// kJ/mol, standard textbook values
const DATA: Record<Compound, {
  formula: string;
  steps: Array<{ name: { en: string; zh: string }; dH: number; symbol: string }>;
  lattice: { en: string; zh: string }; // description of final arrow
  fullH: number; // ΔH_f overall
}> = {
  NaCl: {
    formula: "NaCl",
    fullH: -411,
    lattice: { en: "Lattice formation of NaCl(s)", zh: "NaCl(s) 的晶格生成能" },
    steps: [
      { name: { en: "Atomization of Na(s) → Na(g)", zh: "Na(s) → Na(g) 原子化" }, dH: +108, symbol: "ΔH_at(Na)" },
      { name: { en: "Ionization of Na(g) → Na⁺(g)", zh: "Na(g) → Na⁺(g) 电离" }, dH: +496, symbol: "IE₁(Na)" },
      { name: { en: "Bond dissociation ½Cl₂ → Cl(g)", zh: "½Cl₂ → Cl(g) 解离" }, dH: +122, symbol: "½BE(Cl–Cl)" },
      { name: { en: "Electron affinity Cl(g) → Cl⁻(g)", zh: "Cl(g) → Cl⁻(g) 电子亲和" }, dH: -349, symbol: "EA(Cl)" },
      { name: { en: "Lattice formation Na⁺(g) + Cl⁻(g) → NaCl(s)", zh: "Na⁺(g) + Cl⁻(g) → NaCl(s) 晶格" }, dH: -788, symbol: "U_L" },
    ],
  },
  MgO: {
    formula: "MgO",
    fullH: -602,
    lattice: { en: "Lattice formation of MgO(s)", zh: "MgO(s) 的晶格生成能" },
    steps: [
      { name: { en: "Atomization of Mg(s)", zh: "Mg(s) 原子化" }, dH: +148, symbol: "ΔH_at(Mg)" },
      { name: { en: "IE₁ + IE₂ of Mg", zh: "Mg 的 IE₁ + IE₂" }, dH: +2188, symbol: "IE₁+IE₂" },
      { name: { en: "Bond dissociation ½O₂ → O(g)", zh: "½O₂ → O(g) 解离" }, dH: +249, symbol: "½BE(O=O)" },
      { name: { en: "EA₁ + EA₂ of O", zh: "O 的 EA₁ + EA₂" }, dH: +603, symbol: "EA₁+EA₂" },
      { name: { en: "Lattice Mg²⁺(g) + O²⁻(g) → MgO(s)", zh: "Mg²⁺(g) + O²⁻(g) → MgO(s) 晶格" }, dH: -3791, symbol: "U_L" },
    ],
  },
  CaF2: {
    formula: "CaF₂",
    fullH: -1220,
    lattice: { en: "Lattice formation of CaF₂(s)", zh: "CaF₂(s) 的晶格生成能" },
    steps: [
      { name: { en: "Atomization Ca(s) → Ca(g)", zh: "Ca(s) → Ca(g) 原子化" }, dH: +178, symbol: "ΔH_at(Ca)" },
      { name: { en: "IE₁ + IE₂ of Ca", zh: "Ca 的 IE₁ + IE₂" }, dH: +1735, symbol: "IE₁+IE₂" },
      { name: { en: "Dissociation F₂ → 2 F(g)", zh: "F₂ → 2 F(g) 解离" }, dH: +158, symbol: "BE(F–F)" },
      { name: { en: "2 × EA(F)", zh: "2 × EA(F)" }, dH: -656, symbol: "2·EA(F)" },
      { name: { en: "Lattice Ca²⁺ + 2 F⁻ → CaF₂(s)", zh: "Ca²⁺ + 2 F⁻ → CaF₂(s) 晶格" }, dH: -2635, symbol: "U_L" },
    ],
  },
};

export function BornHaberCycle({ compound }: { compound: Compound }) {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const d = DATA[compound];

  const toggle = (i: number) => {
    const next = new Set(revealed);
    if (next.has(i)) next.delete(i);
    else next.add(i);
    setRevealed(next);
  };

  const cumulative = d.steps.reduce<number[]>((acc, s, i) => {
    acc.push((acc[i - 1] ?? 0) + s.dH);
    return acc;
  }, []);
  const finalSum = cumulative[cumulative.length - 1];

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-gradient-to-br from-white to-blue-50/50 p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? `Born–Haber cycle: ${d.formula}` : `Born–Haber 循环:${d.formula}`}
        </h4>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="rounded-full border border-slate-300 bg-white px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </div>
      <ol className="space-y-1.5">
        {d.steps.map((s, i) => {
          const shown = revealed.has(i);
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => toggle(i)}
                className={
                  "flex w-full items-center justify-between gap-3 rounded-lg border px-3 py-2 text-left text-sm transition " +
                  (shown
                    ? s.dH > 0
                      ? "border-rose-300 bg-rose-50 text-rose-900"
                      : "border-emerald-300 bg-emerald-50 text-emerald-900"
                    : "border-slate-200 bg-white text-slate-700 hover:bg-slate-50")
                }
              >
                <span className="flex-1">
                  <span className="mr-2 inline-block w-6 text-center text-xs font-semibold text-slate-500">{i + 1}.</span>
                  {s.name[lang]}
                </span>
                <span className="flex-none font-mono text-xs text-slate-600">{s.symbol}</span>
                <span className="flex-none tabular-nums font-semibold">
                  {shown ? `${s.dH > 0 ? "+" : ""}${s.dH} kJ/mol` : "???"}
                </span>
              </button>
            </li>
          );
        })}
      </ol>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-sm">
        <span className="font-semibold text-blue-900">
          {lang === "en" ? "Sum (should equal ΔH_f):" : "总和(应等于生成焓):"}
        </span>
        <span className="tabular-nums font-mono text-blue-900">
          {revealed.size === d.steps.length ? `${finalSum} kJ/mol` : "…"}
        </span>
        <span className="tabular-nums font-mono text-slate-700">
          {lang === "en" ? "Expected: " : "期望:"}{d.fullH} kJ/mol
        </span>
      </div>
      <figcaption className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? "Click each step to reveal ΔH. Endothermic steps are red; exothermic steps are green."
          : "点击每一步以显示 ΔH。吸热步骤为红色,放热步骤为绿色。"}
      </figcaption>
    </figure>
  );
}

export default BornHaberCycle;
