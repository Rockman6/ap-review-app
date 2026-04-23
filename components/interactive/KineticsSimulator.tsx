"use client";

import { useMemo, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

type Order = 0 | 1 | 2;

export function KineticsSimulator() {
  const [lang, setLang] = useState<"en" | "zh">("en");
  const [order, setOrder] = useState<Order>(1);
  const [k, setK] = useState(0.1);
  const [A0, setA0] = useState(1.0);

  const data = useMemo(() => {
    const pts: Array<{ t: number; A: number; linearized: number }> = [];
    for (let t = 0; t <= 60; t += 1) {
      let A: number;
      if (order === 0) A = Math.max(0, A0 - k * t);
      else if (order === 1) A = A0 * Math.exp(-k * t);
      else A = 1 / (1 / A0 + k * t);
      // linearized y-values for test plots
      const lin =
        order === 0 ? A :
        order === 1 ? (A > 0 ? Math.log(A) : -10) :
        1 / Math.max(A, 1e-9);
      pts.push({ t, A: +A.toFixed(4), linearized: +lin.toFixed(3) });
    }
    return pts;
  }, [order, k, A0]);

  const halflifeText =
    order === 0 ? `${(A0 / (2 * k)).toFixed(2)} s (depends on [A]₀)` :
    order === 1 ? `${(Math.log(2) / k).toFixed(2)} s (independent of [A]₀)` :
    `${(1 / (k * A0)).toFixed(2)} s (depends on [A]₀)`;

  const linLabel =
    order === 0 ? "[A]"
    : order === 1 ? "ln[A]"
    : "1/[A]";

  return (
    <figure className="my-4 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-slate-900">
          {lang === "en" ? "Kinetics simulator" : "反应动力学模拟" }
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
        {([0, 1, 2] as Order[]).map((o) => (
          <button
            key={o}
            type="button"
            onClick={() => setOrder(o)}
            className={
              "rounded-full border px-3 py-1 transition " +
              (order === o
                ? "border-blue-500 bg-blue-50 text-blue-700"
                : "border-slate-300 bg-white text-slate-600 hover:bg-slate-50")
            }
          >
            {o === 0 ? (lang === "en" ? "0th order" : "零级")
             : o === 1 ? (lang === "en" ? "1st order" : "一级")
             : (lang === "en" ? "2nd order" : "二级")}
          </button>
        ))}
      </div>
      <div className="mb-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
        <label className="text-xs text-slate-600">
          <span className="mr-2 font-semibold">k</span>
          <span className="tabular-nums">{k.toFixed(3)}</span>
          <input type="range" min={0.01} max={0.5} step={0.01} value={k}
            onChange={(e) => setK(Number(e.target.value))} className="mt-1 block w-full" />
        </label>
        <label className="text-xs text-slate-600">
          <span className="mr-2 font-semibold">[A]₀</span>
          <span className="tabular-nums">{A0.toFixed(2)} M</span>
          <input type="range" min={0.1} max={2} step={0.1} value={A0}
            onChange={(e) => setA0(Number(e.target.value))} className="mt-1 block w-full" />
        </label>
      </div>
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 6, right: 8, left: 0, bottom: 18 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="t" type="number" label={{ value: "t (s)", position: "insideBottom", offset: -8, fontSize: 11 }} />
              <YAxis label={{ value: "[A]", angle: -90, position: "insideLeft", fontSize: 11 }} />
              <Tooltip formatter={(v) => Number(v).toFixed(3)} />
              <Line type="monotone" dataKey="A" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 6, right: 8, left: 0, bottom: 18 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="t" type="number" label={{ value: "t (s)", position: "insideBottom", offset: -8, fontSize: 11 }} />
              <YAxis label={{ value: linLabel, angle: -90, position: "insideLeft", fontSize: 11 }} />
              <Tooltip formatter={(v) => Number(v).toFixed(3)} />
              <Line type="monotone" dataKey="linearized" stroke="#059669" strokeWidth={2} dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p className="mt-2 text-[11px] text-slate-500">
        {lang === "en"
          ? `Left: [A] vs t. Right: linearized test plot — ${linLabel} vs t is linear for the correct order. Half-life: ${halflifeText}.`
          : `左图:[A]–t 曲线。右图:线性化检验图——${linLabel}–t 为直线则级数正确。半衰期:${halflifeText}。`}
      </p>
    </figure>
  );
}

export default KineticsSimulator;
