"use client";

import { useMemo, useState } from "react";

export type OrbitalKind =
  | "1s" | "2s" | "2p" | "3s" | "3p"
  | "3dz2" | "3dxy" | "3dxz" | "3dyz" | "3dx2y2";

// 2D cross-section viz: sample the orbital's radial × angular dependence along a plane
// and color by sign of the wavefunction. This gives every orbital a distinctive, accurate
// shape (nodes, lobes, signs) without a WASM dependency.

function psi(kind: OrbitalKind, x: number, y: number, z: number): number {
  const r = Math.sqrt(x * x + y * y + z * z) + 1e-9;
  const cosT = z / r;
  const sinT = Math.sqrt(Math.max(0, 1 - cosT * cosT));
  const phi = Math.atan2(y, x);
  switch (kind) {
    case "1s":
      return Math.exp(-r);
    case "2s":
      return (2 - r) * Math.exp(-r / 2);
    case "2p": // 2p_z
      return r * Math.exp(-r / 2) * cosT;
    case "3s":
      return (27 - 18 * r + 2 * r * r) * Math.exp(-r / 3);
    case "3p":
      return r * (6 - r) * Math.exp(-r / 3) * cosT;
    case "3dz2":
      return r * r * Math.exp(-r / 3) * (3 * cosT * cosT - 1);
    case "3dxy":
      return r * r * Math.exp(-r / 3) * sinT * sinT * Math.sin(2 * phi);
    case "3dxz":
      return r * r * Math.exp(-r / 3) * sinT * cosT * Math.cos(phi);
    case "3dyz":
      return r * r * Math.exp(-r / 3) * sinT * cosT * Math.sin(phi);
    case "3dx2y2":
      return r * r * Math.exp(-r / 3) * sinT * sinT * Math.cos(2 * phi);
  }
}

function color(v: number, vMax: number): string {
  const t = Math.max(-1, Math.min(1, v / vMax));
  if (t >= 0) {
    // positive lobe: blue
    const a = Math.floor(255 * (1 - t * 0.85));
    return `rgb(${a},${a},255)`;
  } else {
    // negative lobe: red
    const a = Math.floor(255 * (1 + t * 0.85));
    return `rgb(255,${a},${a})`;
  }
}

const LABELS: Record<OrbitalKind, { en: string; zh: string }> = {
  "1s": { en: "1s (spherical)", zh: "1s(球形)" },
  "2s": { en: "2s (spherical, 1 radial node)", zh: "2s(球形,1 个径向节面)" },
  "2p": { en: "2p_z (dumbbell, 1 angular node)", zh: "2p_z(哑铃形,1 个角节面)" },
  "3s": { en: "3s (2 radial nodes)", zh: "3s(2 个径向节面)" },
  "3p": { en: "3p_z (dumbbell, 1 radial + 1 angular node)", zh: "3p_z(哑铃,1 径向 + 1 角)" },
  "3dz2": { en: "3d_z² (donut + lobes)", zh: "3d_z²(环带 + 两瓣)" },
  "3dxy": { en: "3d_xy (4-lobed, diagonal)", zh: "3d_xy(四瓣,对角)" },
  "3dxz": { en: "3d_xz (4-lobed)", zh: "3d_xz(四瓣)" },
  "3dyz": { en: "3d_yz (4-lobed)", zh: "3d_yz(四瓣)" },
  "3dx2y2": { en: "3d_x²−y² (4-lobed, axial)", zh: "3d_x²−y²(四瓣,沿轴)" },
};

// Choose the natural cross-section plane for each orbital so it shows the full shape.
function planeSample(kind: OrbitalKind, u: number, v: number): number {
  switch (kind) {
    case "1s":
    case "2s":
    case "3s":
      return psi(kind, u, 0, v); // xz plane
    case "2p":
    case "3p":
    case "3dz2":
    case "3dxz":
      return psi(kind, u, 0, v); // xz plane (z vertical)
    case "3dxy":
    case "3dx2y2":
      return psi(kind, u, v, 0); // xy plane
    case "3dyz":
      return psi(kind, 0, u, v); // yz plane
  }
}

export function OrbitalViewer({ orbital }: { orbital: OrbitalKind }) {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const w = 320;
  const h = 260;
  const extent = 18; // Bohr radii half-range
  const step = 2; // pixel step; lower = finer, slower

  const cells = useMemo(() => {
    const out: Array<{ x: number; y: number; c: string }> = [];
    let vMax = 0;
    const samples: number[][] = [];
    for (let py = 0; py < h; py += step) {
      const row: number[] = [];
      for (let px = 0; px < w; px += step) {
        const u = (px - w / 2) / (w / 2) * extent;
        const v = -(py - h / 2) / (h / 2) * extent;
        const s = planeSample(orbital, u, v);
        row.push(s);
        if (Math.abs(s) > vMax) vMax = Math.abs(s);
      }
      samples.push(row);
    }
    for (let py = 0; py < h; py += step) {
      for (let px = 0; px < w; px += step) {
        const s = samples[py / step][px / step];
        if (Math.abs(s) < vMax * 0.02) continue;
        out.push({ x: px, y: py, c: color(s, vMax) });
      }
    }
    return out;
  }, [orbital]);

  const label = LABELS[orbital];

  return (
    <figure className="my-4 flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3">
      <div className="mb-2 flex items-center gap-3">
        <h4 className="text-sm font-semibold text-slate-900">{lang === "en" ? "Atomic Orbital" : "原子轨道"}</h4>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </div>
      <svg width={w} height={h} className="rounded-lg bg-slate-900">
        {/* axes */}
        <line x1={0} y1={h / 2} x2={w} y2={h / 2} stroke="#334155" strokeWidth={0.5} />
        <line x1={w / 2} y1={0} x2={w / 2} y2={h} stroke="#334155" strokeWidth={0.5} />
        {/* nucleus */}
        <circle cx={w / 2} cy={h / 2} r={2} fill="#facc15" />
        {/* field */}
        {cells.map((c, i) => (
          <rect key={i} x={c.x} y={c.y} width={step} height={step} fill={c.c} />
        ))}
      </svg>
      <figcaption className="mt-2 text-center text-xs text-slate-600">
        {label[lang]}
        <span className="ml-2 text-[11px] text-slate-500">
          {lang === "en" ? "blue = ψ > 0, red = ψ < 0" : "蓝 = ψ > 0,红 = ψ < 0"}
        </span>
      </figcaption>
    </figure>
  );
}

export default OrbitalViewer;
