"use client";

import { useState } from "react";

type Geometry = "octahedral" | "tetrahedral" | "square-planar";

// For each geometry, list the (label, relative energy in Δ units) of each d-orbital.
// Y positions are rendered from energies (higher energy = higher on screen).
const GEOMETRIES: Record<Geometry, {
  title: { en: string; zh: string };
  levels: Array<{ label: string; e: number; orbitals: string[] }>;
}> = {
  octahedral: {
    title: { en: "Octahedral (Δ₀)", zh: "八面体(Δ₀)" },
    levels: [
      { label: "e_g", e: 0.6, orbitals: ["d_z²", "d_x²−y²"] },
      { label: "t_2g", e: -0.4, orbitals: ["d_xy", "d_xz", "d_yz"] },
    ],
  },
  tetrahedral: {
    title: { en: "Tetrahedral (Δ_t ≈ 4/9 Δ₀)", zh: "四面体(Δ_t ≈ 4/9 Δ₀)" },
    levels: [
      { label: "t_2", e: 0.4, orbitals: ["d_xy", "d_xz", "d_yz"] },
      { label: "e", e: -0.6, orbitals: ["d_z²", "d_x²−y²"] },
    ],
  },
  "square-planar": {
    title: { en: "Square planar", zh: "平面正方形" },
    levels: [
      { label: "b_1g", e: 1.2, orbitals: ["d_x²−y²"] },
      { label: "b_2g", e: 0.2, orbitals: ["d_xy"] },
      { label: "a_1g", e: -0.1, orbitals: ["d_z²"] },
      { label: "e_g", e: -0.5, orbitals: ["d_xz", "d_yz"] },
    ],
  },
};

export function CrystalFieldDiagram({ geometry: initial = "octahedral" }: { geometry?: Geometry }) {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [geometry, setGeometry] = useState<Geometry>(initial);
  const [nElectrons, setNElectrons] = useState(5);
  const [highSpin, setHighSpin] = useState(true);

  const d = GEOMETRIES[geometry];

  // Assign electrons by Aufbau + high-spin/low-spin rule within Δ.
  const assignment: number[][] = d.levels.map((l) => Array(l.orbitals.length).fill(0));
  // flatten slots in order of energy (lowest first)
  type Slot = { groupIdx: number; slotIdx: number; e: number };
  const slots: Slot[] = [];
  d.levels
    .slice()
    .sort((a, b) => a.e - b.e)
    .forEach((l) => {
      const groupIdx = d.levels.indexOf(l);
      for (let k = 0; k < l.orbitals.length; k++) slots.push({ groupIdx, slotIdx: k, e: l.e });
    });
  // high-spin: fill one per orbital before pairing; low-spin: pair within lowest group first
  if (highSpin) {
    for (let pass = 0; pass < 2; pass++) {
      for (const s of slots) {
        if (nElectrons === 0) break;
        if (assignment[s.groupIdx][s.slotIdx] < pass + 1) {
          const remaining = nElectrons - assignment.flat().reduce((a, b) => a + b, 0);
          if (remaining <= 0) break;
          assignment[s.groupIdx][s.slotIdx]++;
        }
      }
    }
  } else {
    // low-spin: fill (pair) within ordered slots completely before next
    let placed = 0;
    while (placed < nElectrons) {
      let progressed = false;
      for (const s of slots) {
        if (placed >= nElectrons) break;
        if (assignment[s.groupIdx][s.slotIdx] < 2) {
          assignment[s.groupIdx][s.slotIdx]++;
          placed++;
          progressed = true;
          break;
        }
      }
      if (!progressed) break;
    }
  }

  const w = 360;
  const h = 240;
  const midX = w / 2;
  const eMin = Math.min(...d.levels.map((l) => l.e));
  const eMax = Math.max(...d.levels.map((l) => l.e));
  const yOf = (e: number) => 30 + (h - 60) * (1 - (e - eMin) / (eMax - eMin + 1e-9));

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? "Crystal-field splitting" : "晶体场分裂"}
        </h4>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-2 text-xs">
        {(Object.keys(GEOMETRIES) as Geometry[]).map((g) => (
          <button
            key={g}
            type="button"
            onClick={() => setGeometry(g)}
            className={
              "rounded-full border px-3 py-1 transition " +
              (geometry === g
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50")
            }
          >
            {GEOMETRIES[g].title[lang]}
          </button>
        ))}
      </div>
      <div className="mb-3 flex flex-wrap items-center gap-3 text-xs">
        <label className="flex items-center gap-1">
          <span className="text-slate-600">{lang === "en" ? "d-electrons:" : "d 电子数:"}</span>
          <input
            type="range" min={0} max={10} step={1} value={nElectrons}
            onChange={(e) => setNElectrons(Number(e.target.value))}
          />
          <span className="tabular-nums font-semibold text-slate-800">{nElectrons}</span>
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="spin" checked={highSpin} onChange={() => setHighSpin(true)} /> {lang === "en" ? "high-spin" : "高自旋"}
        </label>
        <label className="flex items-center gap-1">
          <input type="radio" name="spin" checked={!highSpin} onChange={() => setHighSpin(false)} /> {lang === "en" ? "low-spin" : "低自旋"}
        </label>
      </div>
      <svg width={w} height={h} className="mx-auto block rounded-lg bg-slate-50">
        {d.levels.map((l, i) => {
          const y = yOf(l.e);
          const groupW = l.orbitals.length * 48;
          return (
            <g key={i}>
              {l.orbitals.map((orb, k) => {
                const x = midX - groupW / 2 + k * 48 + 4;
                const filled = assignment[i][k];
                return (
                  <g key={k}>
                    <line x1={x} y1={y} x2={x + 40} y2={y} stroke="#1e293b" strokeWidth={2} />
                    {filled >= 1 && (
                      <text x={x + 10} y={y - 4} fontSize={14} fill="#1e40af">↑</text>
                    )}
                    {filled >= 2 && (
                      <text x={x + 24} y={y - 4} fontSize={14} fill="#dc2626">↓</text>
                    )}
                    <text x={x + 20} y={y + 14} fontSize={9} fill="#475569" textAnchor="middle">{orb}</text>
                  </g>
                );
              })}
              <text x={16} y={y + 4} fontSize={11} fill="#334155" fontStyle="italic">{l.label}</text>
            </g>
          );
        })}
      </svg>
      <p className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? "Octahedral splits 2 above (e_g) and 3 below (t_2g); tetrahedral is inverted and smaller; square-planar spreads into four levels. Toggle high/low-spin to see pairing."
          : "八面体分裂为上方 2 个(e_g)与下方 3 个(t_2g);四面体相反且较小;平面正方形进一步分裂为四层。切换高/低自旋观察电子配对。"}
      </p>
    </figure>
  );
}

export default CrystalFieldDiagram;
