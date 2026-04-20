"use client";

import {
  CartesianGrid,
  Label,
  Legend,
  Line,
  LineChart,
  ReferenceArea,
  ReferenceDot,
  ReferenceLine,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useT } from "./LocaleProvider";

function build<T extends Record<string, number | null>>(
  extras: (q: number) => T,
  qMax = 10,
  step = 0.25,
): (T & { q: number })[] {
  const out: (T & { q: number })[] = [];
  for (let q = 0; q <= qMax + 0.001; q += step) {
    out.push({ q: Number(q.toFixed(2)), ...extras(q) });
  }
  return out;
}

// ============================================================
// Negative externality (production) — pollution-type scenario
//   D  = MPB = MSB: P = 10 − Q
//   S  = MPC:        P = 2 + Q
//   MSC = MPC + 2:   P = 4 + Q
//   Market eq: MPC = MPB → Q_m = 4, P_m = 6
//   Social opt:  MSC = MSB → Q* = 3, P* = 7
//   DWL triangle from Q* = 3 to Q_m = 4, bounded above by MSC, below by D
// ============================================================
export function NegativeExternalityChart() {
  const t = useT();
  const data = build((q) => ({
    d: Math.max(0, 10 - q),
    mpc: 2 + q,
    msc: 4 + q,
  }));
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({
          en: "Negative externality — unregulated market overproduces (Q_m > Q*)",
          zh: "**负**外部性——自发市场**过度生产**(Q_m > Q*)",
        })}
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="q" type="number" domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Quantity (Q)", zh: "数量 (Q)" })} position="insideBottom" offset={-10} fill="#475569" fontSize={12} />
          </XAxis>
          <YAxis domain={[0, 14]} ticks={[0, 2, 4, 6, 8, 10, 12]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Price ($)", zh: "价格 ($)" })} angle={-90} position="insideLeft" fill="#475569" fontSize={12} />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `Q = ${v}`}
            formatter={(v) => (typeof v === "number" ? v.toFixed(2) : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {/* DWL shading — approximate the triangle with a ReferenceArea at its footprint */}
          <ReferenceArea x1={3} x2={4} y1={6} y2={8} fill="#fca5a5" fillOpacity={0.55} />
          <Line type="linear" dataKey="d" name="D = MPB = MSB" stroke="#dc2626" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="mpc" name="S = MPC" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="msc" name="MSC (= MPC + external cost)" stroke="#0f766e" strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
          <ReferenceDot x={4} y={6} r={5} fill="#475569" stroke="white" strokeWidth={2} label={{ value: "Market (Q_m, P_m) = (4, 6)", position: "right", fontSize: 11, fill: "#475569" }} />
          <ReferenceDot x={3} y={7} r={5} fill="#0f172a" stroke="white" strokeWidth={2} label={{ value: "Social opt. (3, 7)", position: "top", fontSize: 11, fill: "#0f172a" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ============================================================
// Positive externality (consumption) — vaccine-type scenario
//   S  = MPC = MSC: P = 2 + Q
//   D  = MPB:        P = 10 − Q
//   MSB = MPB + 2:   P = 12 − Q
//   Market eq: MPC = MPB → Q_m = 4, P_m = 6
//   Social opt:  MSC = MSB → Q* = 5, P* = 7
//   DWL triangle from Q_m = 4 to Q* = 5, above MPC, below MSB
// ============================================================
export function PositiveExternalityChart() {
  const t = useT();
  const data = build((q) => ({
    mpc: 2 + q,
    mpb: Math.max(0, 10 - q),
    msb: Math.max(0, 12 - q),
  }));
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({
          en: "Positive externality — unregulated market underproduces (Q_m < Q*)",
          zh: "**正**外部性——自发市场**产出不足**(Q_m < Q*)",
        })}
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="q" type="number" domain={[0, 10]} ticks={[0, 2, 4, 6, 8, 10]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Quantity (Q)", zh: "数量 (Q)" })} position="insideBottom" offset={-10} fill="#475569" fontSize={12} />
          </XAxis>
          <YAxis domain={[0, 14]} ticks={[0, 2, 4, 6, 8, 10, 12]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Price ($)", zh: "价格 ($)" })} angle={-90} position="insideLeft" fill="#475569" fontSize={12} />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `Q = ${v}`}
            formatter={(v) => (typeof v === "number" ? v.toFixed(2) : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <ReferenceArea x1={4} x2={5} y1={6} y2={8} fill="#86efac" fillOpacity={0.55} />
          <Line type="linear" dataKey="mpc" name="S = MPC = MSC" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="mpb" name="D = MPB" stroke="#dc2626" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="msb" name="MSB (= MPB + external benefit)" stroke="#7c3aed" strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
          <ReferenceDot x={4} y={6} r={5} fill="#475569" stroke="white" strokeWidth={2} label={{ value: "Market (Q_m, P_m) = (4, 6)", position: "bottom", fontSize: 11, fill: "#475569" }} />
          <ReferenceDot x={5} y={7} r={5} fill="#0f172a" stroke="white" strokeWidth={2} label={{ value: "Social opt. (5, 7)", position: "top", fontSize: 11, fill: "#0f172a" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ============================================================
// Lorenz curve — cumulative % income vs. cumulative % population
//   Equality line: y = x
//   Actual Lorenz (moderate inequality): y = x² on [0, 1]
//   Gini = 1 − 2 · ∫₀¹ x² dx = 1 − 2/3 = 1/3 ≈ 0.33
// ============================================================
export function LorenzCurveChart() {
  const t = useT();
  const data: { pop: number; equality: number; lorenz: number }[] = [];
  for (let p = 0; p <= 100 + 0.001; p += 2.5) {
    const x = p / 100;
    data.push({
      pop: p,
      equality: p,
      lorenz: Number((100 * x * x).toFixed(2)),
    });
  }
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({
          en: "Lorenz curve — the gap from equality measures income concentration (Gini ≈ 0.33)",
          zh: "洛伦兹曲线——与平等线的差距衡量收入集中度(Gini ≈ 0.33)",
        })}
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis dataKey="pop" type="number" domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Cumulative % of population", zh: "累计人口百分比" })} position="insideBottom" offset={-10} fill="#475569" fontSize={12} />
          </XAxis>
          <YAxis domain={[0, 100]} ticks={[0, 20, 40, 60, 80, 100]} tick={{ fontSize: 11, fill: "#64748b" }} stroke="#cbd5e1">
            <Label value={t({ en: "Cumulative % of income", zh: "累计收入百分比" })} angle={-90} position="insideLeft" fill="#475569" fontSize={12} />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `${t({ en: "Bottom", zh: "底部" })} ${v}%`}
            formatter={(v) => (typeof v === "number" ? `${v.toFixed(1)}%` : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="linear" dataKey="equality" name={t({ en: "Perfect equality", zh: "完全平等线" })} stroke="#0f172a" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="monotone" dataKey="lorenz" name={t({ en: "Lorenz curve (actual)", zh: "洛伦兹曲线(实际)" })} stroke="#dc2626" strokeWidth={2} dot={false} isAnimationActive={false} />
          <ReferenceLine x={80} stroke="#94a3b8" strokeDasharray="3 3" />
          <ReferenceDot x={80} y={64} r={4} fill="#dc2626" stroke="white" strokeWidth={2} label={{ value: "Bottom 80% earn 64%", position: "top", fontSize: 11, fill: "#dc2626" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
