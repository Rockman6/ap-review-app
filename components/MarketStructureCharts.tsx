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
import type { Bilingual } from "@/lib/content";

// Shared cost curves, used by all four firm-level diagrams so students can compare them.
//   MC(Q) = Q          → linear through origin
//   TC(Q) = 18 + Q²/2  → fixed cost 18
//   ATC(Q) = 18/Q + Q/2 → minimum ATC = 6 at Q = 6 (MC crosses ATC here)
const Q_MAX = 12;
const Q_STEP = 0.25;

function buildBase() {
  const out: { q: number; mc: number; atc: number | null }[] = [];
  for (let q = 0; q <= Q_MAX + 0.001; q += Q_STEP) {
    const mc = q;
    const atc = q < 1 ? null : 18 / q + q / 2; // suppress asymptote near 0
    out.push({ q: Number(q.toFixed(2)), mc, atc });
  }
  return out;
}

type FirmDatum = {
  q: number;
  mc: number;
  atc: number | null;
  demand?: number | null;
  mr?: number | null;
  price?: number | null;
};

const COLOR = {
  demand: "#dc2626", // red
  mr: "#ea580c",     // orange
  mc: "#2563eb",     // blue
  atc: "#7c3aed",    // purple
  price: "#dc2626",  // red (PC firm's horizontal P line)
  dot: "#0f172a",
  profit: "#bbf7d0", // green-100
};

type ChartShellProps = {
  caption: Bilingual;
  data: FirmDatum[];
  children: React.ReactNode;
  showPrice?: boolean;
};

function ChartShell({ caption, data, children, showPrice }: ChartShellProps) {
  const t = useT();
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">{t(caption)}</div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="q"
            type="number"
            domain={[0, Q_MAX]}
            ticks={[0, 2, 4, 6, 8, 10, 12]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Quantity (Q)", zh: "数量 (Q)" })}
              position="insideBottom"
              offset={-10}
              fill="#475569"
              fontSize={12}
            />
          </XAxis>
          <YAxis
            domain={[0, 14]}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Price / Cost ($)", zh: "价格 / 成本 ($)" })}
              angle={-90}
              position="insideLeft"
              fill="#475569"
              fontSize={12}
            />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `Q = ${v}`}
            formatter={(v) => (typeof v === "number" ? v.toFixed(2) : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {children}
          <Line
            type="monotone"
            dataKey="mc"
            name="MC"
            stroke={COLOR.mc}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
          <Line
            type="monotone"
            dataKey="atc"
            name="ATC"
            stroke={COLOR.atc}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            connectNulls={false}
          />
          {showPrice && (
            <Line
              type="linear"
              dataKey="price"
              name="P = MR = D"
              stroke={COLOR.price}
              strokeWidth={2}
              dot={false}
              isAnimationActive={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ============================================================
// 1. Perfect Competition — individual firm (SR profit case)
//    P = 8 (horizontal) intersects MC at Q* = 8; ATC(8) = 6.25.
// ============================================================
export function PerfectCompetitionFirmChart() {
  const base = buildBase();
  const data: FirmDatum[] = base.map((d) => ({ ...d, price: 8 }));
  return (
    <ChartShell
      caption={{
        en: "Perfect competition — firm, short run (P > ATC ⇒ profit)",
        zh: "完全竞争——单企业短期(P > ATC ⇒ 获利)",
      }}
      data={data}
      showPrice
    >
      <ReferenceArea x1={0} x2={8} y1={6.25} y2={8} fill={COLOR.profit} fillOpacity={0.55} />
      <ReferenceDot
        x={8}
        y={8}
        r={5}
        fill={COLOR.dot}
        stroke="white"
        strokeWidth={2}
        label={{ value: "Q* where MC = P", position: "top", fontSize: 11, fill: COLOR.dot }}
      />
      <ReferenceLine y={6.25} stroke={COLOR.atc} strokeDasharray="4 3" />
    </ChartShell>
  );
}

// ============================================================
// 2. Monopoly — D: P = 12 − Q, MR: 12 − 2Q
//    MR = MC at Q_m = 4; P_m = 8; ATC(4) = 6.5 ⇒ profit rectangle.
// ============================================================
export function MonopolyFirmChart() {
  const base = buildBase();
  const data: FirmDatum[] = base.map((d) => ({
    ...d,
    demand: Math.max(0, 12 - d.q),
    mr: Math.max(-2, 12 - 2 * d.q),
  }));
  return (
    <ChartShell
      caption={{
        en: "Monopoly firm — Q* at MR = MC, P on demand curve (profit shaded)",
        zh: "垄断企业——Q* 在 MR = MC,P 在需求曲线上(利润涂色)",
      }}
      data={data}
    >
      <ReferenceArea x1={0} x2={4} y1={6.5} y2={8} fill={COLOR.profit} fillOpacity={0.55} />
      <Line
        type="linear"
        dataKey="demand"
        name="D"
        stroke={COLOR.demand}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <Line
        type="linear"
        dataKey="mr"
        name="MR"
        stroke={COLOR.mr}
        strokeWidth={2}
        strokeDasharray="5 3"
        dot={false}
        isAnimationActive={false}
      />
      <ReferenceDot
        x={4}
        y={8}
        r={5}
        fill={COLOR.dot}
        stroke="white"
        strokeWidth={2}
        label={{ value: "P_m, Q_m", position: "top", fontSize: 11, fill: COLOR.dot }}
      />
      <ReferenceDot
        x={4}
        y={4}
        r={4}
        fill={COLOR.mr}
        stroke="white"
        strokeWidth={2}
        label={{ value: "MR = MC", position: "bottom", fontSize: 11, fill: COLOR.mr }}
      />
      <ReferenceLine y={6.5} stroke={COLOR.atc} strokeDasharray="4 3" />
    </ChartShell>
  );
}

// ============================================================
// 3. Monopolistic competition — short run (profit case)
//    D: P = 10 − 0.5Q (flatter than monopoly D)
//    MR: 10 − Q. MR = MC at Q = 5; P = 7.5; ATC(5) = 6.1.
// ============================================================
export function MonopolisticCompetitionSRChart() {
  const base = buildBase();
  const data: FirmDatum[] = base.map((d) => ({
    ...d,
    demand: Math.max(0, 10 - 0.5 * d.q),
    mr: Math.max(-2, 10 - d.q),
  }));
  return (
    <ChartShell
      caption={{
        en: "Monopolistic competition — SHORT RUN (P > ATC ⇒ economic profit)",
        zh: "垄断竞争——短期(P > ATC ⇒ 经济利润)",
      }}
      data={data}
    >
      <ReferenceArea x1={0} x2={5} y1={6.1} y2={7.5} fill={COLOR.profit} fillOpacity={0.55} />
      <Line
        type="linear"
        dataKey="demand"
        name="D"
        stroke={COLOR.demand}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <Line
        type="linear"
        dataKey="mr"
        name="MR"
        stroke={COLOR.mr}
        strokeWidth={2}
        strokeDasharray="5 3"
        dot={false}
        isAnimationActive={false}
      />
      <ReferenceDot
        x={5}
        y={7.5}
        r={5}
        fill={COLOR.dot}
        stroke="white"
        strokeWidth={2}
        label={{ value: "P*, Q*", position: "top", fontSize: 11, fill: COLOR.dot }}
      />
      <ReferenceDot
        x={5}
        y={5}
        r={4}
        fill={COLOR.mr}
        stroke="white"
        strokeWidth={2}
        label={{ value: "MR = MC", position: "bottom", fontSize: 11, fill: COLOR.mr }}
      />
    </ChartShell>
  );
}

// ============================================================
// Competitive labor market — market-level S + D = MRP
//    S: W = 2 + L, D: W = 14 − L → equilibrium at (L*, W*) = (6, 8)
// ============================================================
function buildLaborData<T extends Record<string, number | null>>(
  extras: (L: number) => T,
): (T & { L: number })[] {
  const out: (T & { L: number })[] = [];
  for (let L = 0; L <= 12 + 0.001; L += 0.25) {
    out.push({ L: Number(L.toFixed(2)), ...extras(L) });
  }
  return out;
}

type LaborChartShellProps = {
  caption: Bilingual;
  data: Record<string, number | null>[];
  children: React.ReactNode;
};

function LaborChartShell({ caption, data, children }: LaborChartShellProps) {
  const t = useT();
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">{t(caption)}</div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="L"
            type="number"
            domain={[0, 12]}
            ticks={[0, 2, 4, 6, 8, 10, 12]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label value={t({ en: "Labor (L)", zh: "劳动 (L)" })} position="insideBottom" offset={-10} fill="#475569" fontSize={12} />
          </XAxis>
          <YAxis
            domain={[0, 16]}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label value={t({ en: "Wage ($)", zh: "工资 ($)" })} angle={-90} position="insideLeft" fill="#475569" fontSize={12} />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `L = ${v}`}
            formatter={(v) => (typeof v === "number" ? v.toFixed(2) : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          {children}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function CompetitiveLaborMarketChart() {
  const data = buildLaborData((L) => ({ s: 2 + L, d: Math.max(0, 14 - L) }));
  return (
    <LaborChartShell
      caption={{
        en: "Competitive labor market — market S and D set (L*, W*)",
        zh: "完全竞争劳动市场——市场 S 与 D 决定 (L*, W*)",
      }}
      data={data}
    >
      <Line type="linear" dataKey="s" name="S (labor supply)" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line type="linear" dataKey="d" name="D = MRP" stroke={COLOR.demand} strokeWidth={2} dot={false} isAnimationActive={false} />
      <ReferenceDot x={6} y={8} r={5} fill={COLOR.dot} stroke="white" strokeWidth={2} label={{ value: "(L*, W*) = (6, 8)", position: "top", fontSize: 11, fill: COLOR.dot }} />
      <ReferenceLine y={8} stroke="#94a3b8" strokeDasharray="3 3" />
      <ReferenceLine x={6} stroke="#94a3b8" strokeDasharray="3 3" />
    </LaborChartShell>
  );
}

// ============================================================
// Labor-market SHIFT — D rises (productivity or output-price increase)
//    Before: D₀ = 14 − L, S = 2 + L, eq (6, 8)
//    After:  D₁ = 16 − L           , new eq (7, 9)
// ============================================================
export function LaborMarketShiftChart() {
  const data = buildLaborData((L) => ({
    s: 2 + L,
    d0: Math.max(0, 14 - L),
    d1: Math.max(0, 16 - L),
  }));
  return (
    <LaborChartShell
      caption={{
        en: "Labor demand SHIFTS right (e.g., output price ↑) → both W and L rise",
        zh: "劳动需求**右移**(如产品价格 ↑)→ W 与 L 同时上升",
      }}
      data={data}
    >
      <Line type="linear" dataKey="s" name="S" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line type="linear" dataKey="d0" name="D₀" stroke={COLOR.demand} strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line type="linear" dataKey="d1" name="D₁ (after shift)" stroke="#f97316" strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
      <ReferenceDot x={6} y={8} r={4} fill="#475569" stroke="white" strokeWidth={2} label={{ value: "Old eq (6, 8)", position: "left", fontSize: 11, fill: "#475569" }} />
      <ReferenceDot x={7} y={9} r={5} fill={COLOR.dot} stroke="white" strokeWidth={2} label={{ value: "New eq (7, 9)", position: "top", fontSize: 11, fill: COLOR.dot }} />
    </LaborChartShell>
  );
}

// ============================================================
// Labor-market TAX on employers — wedge diagram
//    Original: S = 2 + L, D = MRP = 14 − L,  eq (6, 8)
//    Tax t = $2 per worker paid by employers.
//    Firms now pay W + t, so effective D for workers shifts DOWN by t:
//      D_after = 12 − L.  New eq vs S: L' = 5, W_worker = 7.
//    Firm's total cost per worker = MRP at L' = 14 − 5 = 9.
//    Tax revenue rectangle: (0, 7) → (5, 9) = 2 × 5 = $10.
// ============================================================
export function LaborMarketTaxChart() {
  const data = buildLaborData((L) => ({
    s: 2 + L,
    d: Math.max(0, 14 - L),
    dTax: Math.max(0, 12 - L),
  }));
  return (
    <LaborChartShell
      caption={{
        en: "Per-worker tax on EMPLOYERS ($2) → D shifts DOWN by tax; firms pay $9, workers receive $7",
        zh: "对**雇主**征每人 $2 税 → D 下移相同幅度;雇主付 $9,工人拿 $7",
      }}
      data={data}
    >
      <ReferenceArea x1={0} x2={5} y1={7} y2={9} fill="#fde68a" fillOpacity={0.6} />
      <Line type="linear" dataKey="s" name="S" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line type="linear" dataKey="d" name="D = MRP" stroke={COLOR.demand} strokeWidth={2} dot={false} isAnimationActive={false} />
      <Line type="linear" dataKey="dTax" name="D − tax" stroke={COLOR.demand} strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
      <ReferenceDot x={6} y={8} r={4} fill="#475569" stroke="white" strokeWidth={2} label={{ value: "Pre-tax (6, 8)", position: "right", fontSize: 11, fill: "#475569" }} />
      <ReferenceDot x={5} y={7} r={5} fill={COLOR.dot} stroke="white" strokeWidth={2} label={{ value: "Worker W = 7", position: "bottom", fontSize: 11, fill: COLOR.dot }} />
      <ReferenceDot x={5} y={9} r={5} fill={COLOR.dot} stroke="white" strokeWidth={2} label={{ value: "Firm pays 9", position: "top", fontSize: 11, fill: COLOR.dot }} />
      <ReferenceLine x={5} stroke="#94a3b8" strokeDasharray="3 3" />
    </LaborChartShell>
  );
}

// ============================================================
// 5. Monopsony — single buyer of labor
//    Labor supply S: W = 2 + L  ⇒  MFC = 2 + 2L (twice as steep)
//    MRP (labor demand): W = 14 − L
//    Monopsony hires where MFC = MRP: L* = 4, MFC = 10, wage from S = 6
//    Competitive benchmark (S = MRP): L_c = 6, W_c = 8
// ============================================================
export function MonopsonyChart() {
  const t = useT();
  type M = { L: number; s: number; mfc: number; mrp: number };
  const data: M[] = [];
  for (let L = 0; L <= 12 + 0.001; L += 0.25) {
    data.push({
      L: Number(L.toFixed(2)),
      s: 2 + L,
      mfc: 2 + 2 * L,
      mrp: Math.max(-2, 14 - L),
    });
  }
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({
          en: "Monopsony labor market — single buyer hires where MFC = MRP, wage on S",
          zh: "买方垄断劳动市场——单一买家在 MFC = MRP 处雇用,工资在 S 上",
        })}
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data} margin={{ top: 10, right: 28, left: 10, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="L"
            type="number"
            domain={[0, 12]}
            ticks={[0, 2, 4, 6, 8, 10, 12]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Labor (L)", zh: "劳动 (L)" })}
              position="insideBottom"
              offset={-10}
              fill="#475569"
              fontSize={12}
            />
          </XAxis>
          <YAxis
            domain={[0, 16]}
            ticks={[0, 2, 4, 6, 8, 10, 12, 14, 16]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Wage ($)", zh: "工资 ($)" })}
              angle={-90}
              position="insideLeft"
              fill="#475569"
              fontSize={12}
            />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `L = ${v}`}
            formatter={(v) => (typeof v === "number" ? v.toFixed(2) : String(v ?? ""))}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="linear" dataKey="s" name="S (labor supply)" stroke="#2563eb" strokeWidth={2} dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="mfc" name="MFC" stroke="#0f766e" strokeWidth={2} strokeDasharray="5 3" dot={false} isAnimationActive={false} />
          <Line type="linear" dataKey="mrp" name="MRP = D" stroke={COLOR.demand} strokeWidth={2} dot={false} isAnimationActive={false} />
          <ReferenceDot x={4} y={10} r={4} fill="#0f766e" stroke="white" strokeWidth={2} label={{ value: "MFC = MRP", position: "top", fontSize: 11, fill: "#0f766e" }} />
          <ReferenceDot x={4} y={6} r={5} fill={COLOR.dot} stroke="white" strokeWidth={2} label={{ value: "Monopsony wage", position: "bottom", fontSize: 11, fill: COLOR.dot }} />
          <ReferenceDot x={6} y={8} r={4} fill="#475569" stroke="white" strokeWidth={2} label={{ value: "Competitive (S = MRP)", position: "top", fontSize: 11, fill: "#475569" }} />
          <ReferenceLine x={4} stroke="#94a3b8" strokeDasharray="2 3" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

// ============================================================
// 4. Monopolistic competition — long run (tangency, zero profit)
//    D: P = 9 − 0.625Q  (tangent to ATC at Q = 4, where ATC = 6.5)
//    MR: 9 − 1.25Q. MR = MC at Q = 4. Min ATC at Q = 6 ⇒ excess capacity.
// ============================================================
export function MonopolisticCompetitionLRChart() {
  const base = buildBase();
  const data: FirmDatum[] = base.map((d) => ({
    ...d,
    demand: Math.max(0, 9 - 0.625 * d.q),
    mr: Math.max(-2, 9 - 1.25 * d.q),
  }));
  return (
    <ChartShell
      caption={{
        en: "Monopolistic competition — LONG RUN (D tangent to ATC ⇒ zero profit, excess capacity)",
        zh: "垄断竞争——长期(D 切于 ATC ⇒ 零利润,过剩产能)",
      }}
      data={data}
    >
      <ReferenceArea x1={4} x2={6} y1={0} y2={0.6} fill="#fde68a" fillOpacity={0.8} />
      <Line
        type="linear"
        dataKey="demand"
        name="D"
        stroke={COLOR.demand}
        strokeWidth={2}
        dot={false}
        isAnimationActive={false}
      />
      <Line
        type="linear"
        dataKey="mr"
        name="MR"
        stroke={COLOR.mr}
        strokeWidth={2}
        strokeDasharray="5 3"
        dot={false}
        isAnimationActive={false}
      />
      <ReferenceDot
        x={4}
        y={6.5}
        r={5}
        fill={COLOR.dot}
        stroke="white"
        strokeWidth={2}
        label={{ value: "P = ATC (tangent)", position: "top", fontSize: 11, fill: COLOR.dot }}
      />
      <ReferenceDot
        x={4}
        y={4}
        r={4}
        fill={COLOR.mr}
        stroke="white"
        strokeWidth={2}
        label={{ value: "MR = MC", position: "bottom", fontSize: 11, fill: COLOR.mr }}
      />
      <ReferenceDot
        x={6}
        y={6}
        r={4}
        fill="#475569"
        stroke="white"
        strokeWidth={2}
        label={{ value: "min ATC (unreached)", position: "top", fontSize: 11, fill: "#475569" }}
      />
    </ChartShell>
  );
}
