"use client";

import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";

// Titration of weak acid HA (pKa) with strong base NaOH (both concentration C).
// Returns pH as a function of volume of titrant added.

function titrationCurve(pKa: number, Ca: number, Vb_max: number): Array<{ V: number; pH: number }> {
  const Ka = Math.pow(10, -pKa);
  const Va = 25; // initial acid volume, mL
  const rows: Array<{ V: number; pH: number }> = [];
  const Cb = Ca; // strong base at same concentration for simplicity
  for (let V = 0; V <= Vb_max; V += 0.25) {
    // moles
    const n_a0 = Ca * (Va / 1000);
    const n_b = Cb * (V / 1000);
    const Vtot = (Va + V) / 1000;
    let pH: number;
    if (V === 0) {
      // pure weak acid: [H+] ≈ sqrt(Ka · Ca)
      const H = Math.sqrt(Ka * Ca);
      pH = -Math.log10(H);
    } else if (n_b < n_a0) {
      // buffer region: HA + OH⁻ → A⁻ + H₂O
      const n_HA = n_a0 - n_b;
      const n_A = n_b;
      pH = pKa + Math.log10(n_A / n_HA);
    } else if (Math.abs(n_b - n_a0) < 1e-9) {
      // equivalence: [A⁻] dominates → weak base hydrolysis
      const C_A = n_a0 / Vtot;
      const Kb = 1e-14 / Ka;
      const OH = Math.sqrt(Kb * C_A);
      pH = 14 - -Math.log10(OH);
    } else {
      // past equivalence: excess OH⁻
      const n_OH_excess = n_b - n_a0;
      const OH = n_OH_excess / Vtot;
      pH = 14 + Math.log10(OH);
    }
    rows.push({ V: +V.toFixed(2), pH: +pH.toFixed(3) });
  }
  return rows;
}

export function InteractiveTitration() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [pKa, setPKa] = useState(4.76); // acetic acid
  const [Ca, setCa] = useState(0.1);

  const data = useMemo(() => titrationCurve(pKa, Ca, 50), [pKa, Ca]);
  const equivV = 25; // since Cb = Ca and Va = 25 mL

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? "Titration: weak acid with strong base" : "滴定:弱酸与强碱"}
        </h4>
        <button
          type="button"
          onClick={() => setLang(lang === "en" ? "zh" : "en")}
          className="rounded-full border border-slate-300 bg-slate-50 px-2 py-0.5 text-xs text-slate-600 hover:bg-slate-100"
        >
          {lang === "en" ? "中文" : "EN"}
        </button>
      </div>
      <div className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="text-xs text-slate-600">
          <span className="mr-2 font-semibold">pKa</span>
          <span className="tabular-nums">{pKa.toFixed(2)}</span>
          <input
            type="range" min={1} max={10} step={0.1} value={pKa}
            onChange={(e) => setPKa(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
        <label className="text-xs text-slate-600">
          <span className="mr-2 font-semibold">[acid] / [base] (M)</span>
          <span className="tabular-nums">{Ca.toFixed(2)}</span>
          <input
            type="range" min={0.01} max={1} step={0.01} value={Ca}
            onChange={(e) => setCa(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
      </div>
      <div className="h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis dataKey="V" type="number" domain={[0, 50]} label={{ value: lang === "en" ? "V_base (mL)" : "V_碱 (mL)", position: "insideBottom", offset: -8, fontSize: 11 }} />
            <YAxis domain={[0, 14]} label={{ value: "pH", angle: -90, position: "insideLeft", fontSize: 11 }} />
            <Tooltip formatter={(v) => Number(v).toFixed(2)} labelFormatter={(v) => `V=${v} mL`} />
            <ReferenceLine x={equivV} stroke="#dc2626" strokeDasharray="2 2" label={{ value: lang === "en" ? "equiv." : "等当点", position: "top", fontSize: 10, fill: "#dc2626" }} />
            <ReferenceLine y={pKa} stroke="#f59e0b" strokeDasharray="2 2" label={{ value: "pH = pKa", position: "insideTopLeft", fontSize: 10, fill: "#b45309" }} />
            <ReferenceLine y={7} stroke="#94a3b8" strokeDasharray="2 2" />
            <Line type="monotone" dataKey="pH" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? "At half-equivalence, pH = pKa. Equivalence point is above 7 for a weak acid / strong base titration."
          : "半等当点处 pH = pKa。弱酸-强碱滴定的等当点 pH 大于 7。"}
      </p>
    </figure>
  );
}

export default InteractiveTitration;
