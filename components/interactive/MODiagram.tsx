"use client";

import { useState } from "react";

type Mol = "H2" | "N2" | "O2" | "F2" | "CO" | "NO";

type Level = { label: string; kind: "bonding" | "antibonding" | "nonbonding"; nElectrons: number; y: number };

const DIAGRAMS: Record<Mol, {
  label: string;
  bondOrder: number;
  paramagnetic: boolean;
  levels: Level[];
}> = {
  H2: {
    label: "H₂", bondOrder: 1, paramagnetic: false,
    levels: [
      { label: "σ*₁s", kind: "antibonding", nElectrons: 0, y: 1.0 },
      { label: "σ₁s",  kind: "bonding",     nElectrons: 2, y: -1.0 },
    ],
  },
  N2: {
    label: "N₂", bondOrder: 3, paramagnetic: false,
    levels: [
      { label: "σ*₂p_z", kind: "antibonding", nElectrons: 0, y: 2.3 },
      { label: "π*₂p",   kind: "antibonding", nElectrons: 0, y: 1.3 },
      { label: "σ₂p_z",  kind: "bonding",     nElectrons: 2, y: 0.5 },
      { label: "π₂p",    kind: "bonding",     nElectrons: 4, y: -0.2 },
      { label: "σ*₂s",   kind: "antibonding", nElectrons: 2, y: -1.4 },
      { label: "σ₂s",    kind: "bonding",     nElectrons: 2, y: -2.4 },
    ],
  },
  O2: {
    label: "O₂", bondOrder: 2, paramagnetic: true,
    levels: [
      { label: "σ*₂p_z", kind: "antibonding", nElectrons: 0, y: 2.3 },
      { label: "π*₂p",   kind: "antibonding", nElectrons: 2, y: 1.3 },
      { label: "π₂p",    kind: "bonding",     nElectrons: 4, y: 0.2 },
      { label: "σ₂p_z",  kind: "bonding",     nElectrons: 2, y: -0.5 },
      { label: "σ*₂s",   kind: "antibonding", nElectrons: 2, y: -1.4 },
      { label: "σ₂s",    kind: "bonding",     nElectrons: 2, y: -2.4 },
    ],
  },
  F2: {
    label: "F₂", bondOrder: 1, paramagnetic: false,
    levels: [
      { label: "σ*₂p_z", kind: "antibonding", nElectrons: 0, y: 2.3 },
      { label: "π*₂p",   kind: "antibonding", nElectrons: 4, y: 1.3 },
      { label: "π₂p",    kind: "bonding",     nElectrons: 4, y: 0.2 },
      { label: "σ₂p_z",  kind: "bonding",     nElectrons: 2, y: -0.5 },
      { label: "σ*₂s",   kind: "antibonding", nElectrons: 2, y: -1.4 },
      { label: "σ₂s",    kind: "bonding",     nElectrons: 2, y: -2.4 },
    ],
  },
  CO: {
    label: "CO", bondOrder: 3, paramagnetic: false,
    levels: [
      { label: "σ*₂p",  kind: "antibonding", nElectrons: 0, y: 2.3 },
      { label: "π*₂p",  kind: "antibonding", nElectrons: 0, y: 1.3 },
      { label: "σ(HOMO)", kind: "nonbonding", nElectrons: 2, y: 0.5 },
      { label: "π₂p",   kind: "bonding",     nElectrons: 4, y: -0.2 },
      { label: "σ*₂s",  kind: "antibonding", nElectrons: 2, y: -1.4 },
      { label: "σ₂s",   kind: "bonding",     nElectrons: 2, y: -2.4 },
    ],
  },
  NO: {
    label: "NO", bondOrder: 2.5, paramagnetic: true,
    levels: [
      { label: "σ*₂p_z", kind: "antibonding", nElectrons: 0, y: 2.3 },
      { label: "π*₂p",   kind: "antibonding", nElectrons: 1, y: 1.3 },
      { label: "σ₂p_z",  kind: "bonding",     nElectrons: 2, y: 0.5 },
      { label: "π₂p",    kind: "bonding",     nElectrons: 4, y: -0.2 },
      { label: "σ*₂s",   kind: "antibonding", nElectrons: 2, y: -1.4 },
      { label: "σ₂s",    kind: "bonding",     nElectrons: 2, y: -2.4 },
    ],
  },
};

export function MODiagram({ molecule: init = "O2" as Mol }: { molecule?: Mol }) {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [molecule, setMolecule] = useState<Mol>(init);
  const d = DIAGRAMS[molecule];

  const w = 380;
  const h = 320;
  const midX = w / 2;
  const yMin = Math.min(...d.levels.map((l) => l.y));
  const yMax = Math.max(...d.levels.map((l) => l.y));
  const yPos = (y: number) => 40 + (h - 80) * (1 - (y - yMin) / (yMax - yMin + 1e-9));

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? "Molecular-orbital diagram" : "分子轨道图"}
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
        {(Object.keys(DIAGRAMS) as Mol[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMolecule(m)}
            className={
              "rounded-full border px-3 py-1 font-mono transition " +
              (molecule === m
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50")
            }
          >
            {DIAGRAMS[m].label}
          </button>
        ))}
      </div>
      <svg width={w} height={h} className="mx-auto block rounded-lg bg-slate-50">
        {d.levels.map((l, i) => {
          const y = yPos(l.y);
          const color =
            l.kind === "bonding" ? "#059669" : l.kind === "antibonding" ? "#dc2626" : "#2563eb";
          return (
            <g key={i}>
              <line x1={midX - 30} y1={y} x2={midX + 30} y2={y} stroke={color} strokeWidth={2} />
              {/* electrons */}
              {l.nElectrons >= 1 && <text x={midX - 12} y={y - 3} fontSize={14} fill="#1e40af">↑</text>}
              {l.nElectrons >= 2 && <text x={midX + 4} y={y - 3} fontSize={14} fill="#dc2626">↓</text>}
              {l.nElectrons >= 3 && <text x={midX - 26} y={y - 3} fontSize={14} fill="#1e40af">↑</text>}
              {l.nElectrons >= 4 && <text x={midX + 18} y={y - 3} fontSize={14} fill="#dc2626">↓</text>}
              <text x={midX + 36} y={y + 4} fontSize={10} fill="#334155">{l.label}</text>
            </g>
          );
        })}
      </svg>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="text-slate-700">
          {lang === "en" ? "Bond order:" : "键级:"}{" "}
          <span className="font-mono tabular-nums font-semibold">{d.bondOrder}</span>
        </span>
        <span className="text-slate-700">
          {d.paramagnetic
            ? (lang === "en" ? "Paramagnetic (unpaired e⁻)" : "顺磁性(有未成对电子)")
            : (lang === "en" ? "Diamagnetic (all paired)" : "抗磁性(全部成对)")}
        </span>
      </div>
      <p className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? "Bond order = (bonding − antibonding electrons) / 2. Ordering swaps for O₂, F₂ (σ₂p_z below π₂p)."
          : "键级 = (成键电子 − 反键电子) / 2。O₂、F₂ 的 σ₂p_z 在 π₂p 之下(反之则为其他二原子分子)。"}
      </p>
    </figure>
  );
}

export default MODiagram;
