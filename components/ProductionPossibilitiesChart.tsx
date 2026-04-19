"use client";

import {
  Area,
  AreaChart,
  CartesianGrid,
  Label,
  ReferenceDot,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { useT } from "./LocaleProvider";

type Row = { x: number; y: number };

// Bowed-out (concave) PPC: quarter circle of radius 10.
// Shows increasing opportunity cost as resources shift between goods.
const data: Row[] = Array.from({ length: 21 }, (_, i) => {
  const x = i * 0.5;
  const y = Math.sqrt(Math.max(0, 100 - x * x));
  return { x, y: Number(y.toFixed(2)) };
});

export function ProductionPossibilitiesChart() {
  const t = useT();
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({
          en: "Production Possibilities Curve — Cars vs. Wheat (illustrative)",
          zh: "生产可能性曲线——汽车与小麦(示意)",
        })}
      </div>
      <ResponsiveContainer width="100%" height={320}>
        <AreaChart data={data} margin={{ top: 20, right: 28, left: 12, bottom: 28 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="x"
            type="number"
            domain={[0, 11]}
            ticks={[0, 2, 4, 6, 8, 10]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Cars (units)", zh: "汽车(单位)" })}
              position="insideBottom"
              offset={-10}
              fill="#475569"
              fontSize={12}
            />
          </XAxis>
          <YAxis
            domain={[0, 11]}
            ticks={[0, 2, 4, 6, 8, 10]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label
              value={t({ en: "Wheat (units)", zh: "小麦(单位)" })}
              angle={-90}
              position="insideLeft"
              fill="#475569"
              fontSize={12}
            />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
          />
          <Area
            type="monotone"
            dataKey="y"
            name={t({ en: "Feasible region", zh: "可行区域" })}
            stroke="#2563eb"
            strokeWidth={2}
            fill="#bfdbfe"
            fillOpacity={0.45}
            dot={false}
            isAnimationActive={false}
          />
          <ReferenceDot
            x={6}
            y={8}
            r={6}
            fill="#16a34a"
            stroke="white"
            strokeWidth={2}
            label={{
              value: t({ en: "A · Efficient", zh: "A · 有效" }),
              position: "top",
              fontSize: 11,
              fill: "#166534",
              fontWeight: 600,
            }}
          />
          <ReferenceDot
            x={4}
            y={4}
            r={6}
            fill="#f59e0b"
            stroke="white"
            strokeWidth={2}
            label={{
              value: t({ en: "B · Inefficient", zh: "B · 无效" }),
              position: "top",
              fontSize: 11,
              fill: "#92400e",
              fontWeight: 600,
            }}
          />
          <ReferenceDot
            x={9}
            y={9}
            r={6}
            fill="#dc2626"
            stroke="white"
            strokeWidth={2}
            label={{
              value: t({ en: "C · Unattainable", zh: "C · 不可达" }),
              position: "top",
              fontSize: 11,
              fill: "#991b1b",
              fontWeight: 600,
            }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
