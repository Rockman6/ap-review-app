"use client";

import { useMemo, useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine,
} from "recharts";

const R = 8.314; // J/(mol·K)

export function ArrheniusPlot() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [Ea, setEa] = useState(50); // kJ/mol
  const [A, setA] = useState(1e10);

  const data = useMemo(() => {
    // T from 250 K to 500 K
    const rows: Array<{ invT: number; lnk: number; T: number; k: number }> = [];
    for (let T = 250; T <= 500; T += 10) {
      const k = A * Math.exp((-Ea * 1000) / (R * T));
      rows.push({ invT: 1000 / T, lnk: Math.log(k), T, k });
    }
    return rows;
  }, [Ea, A]);

  const slope = (-Ea * 1000) / R; // dlnk/d(1/T) in units of K  (1/T in K⁻¹, × 1000 in plot)
  const slopeDisplay = slope / 1000; // because x-axis is in 1/T × 1000

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? "Arrhenius plot (live)" : "Arrhenius 图(实时)"}
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
          <span className="mr-2 font-semibold">Eₐ</span>
          <span className="tabular-nums">{Ea} kJ/mol</span>
          <input
            type="range" min={10} max={200} step={5} value={Ea}
            onChange={(e) => setEa(Number(e.target.value))}
            className="mt-1 block w-full"
          />
        </label>
        <label className="text-xs text-slate-600">
          <span className="mr-2 font-semibold">log₁₀ A</span>
          <span className="tabular-nums">{Math.log10(A).toFixed(1)}</span>
          <input
            type="range" min={6} max={16} step={0.5} value={Math.log10(A)}
            onChange={(e) => setA(Math.pow(10, Number(e.target.value)))}
            className="mt-1 block w-full"
          />
        </label>
      </div>
      <div className="h-[240px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
            <XAxis
              dataKey="invT"
              type="number"
              domain={[2, 4]}
              tickFormatter={(v) => v.toFixed(1)}
              label={{ value: "1000/T (K⁻¹)", position: "insideBottom", offset: -8, fontSize: 11 }}
            />
            <YAxis
              label={{ value: "ln k", angle: -90, position: "insideLeft", fontSize: 11 }}
            />
            <Tooltip formatter={(v) => Number(v).toFixed(2)} labelFormatter={(v) => `1000/T=${Number(v).toFixed(2)}`} />
            <Line type="monotone" dataKey="lnk" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
            <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="2 2" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 flex items-center justify-between text-xs">
        <span className="text-slate-600">
          {lang === "en" ? "slope = −Eₐ/R:" : "斜率 = −Eₐ/R:"}{" "}
          <span className="font-mono tabular-nums">{slopeDisplay.toFixed(3)} kK</span>
        </span>
        <span className="text-slate-600">
          k(298 K) ={" "}
          <span className="font-mono tabular-nums">{(A * Math.exp((-Ea * 1000) / (R * 298))).toExponential(2)}</span>
        </span>
      </div>
      <p className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? "Move the sliders to see how activation energy (slope) and pre-exponential factor (intercept) shape k."
          : "拖动滑块,观察活化能(斜率)与指前因子(截距)如何影响速率常数 k。"}
      </p>
    </figure>
  );
}

export default ArrheniusPlot;
