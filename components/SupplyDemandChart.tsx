"use client";

import { CartesianGrid, Label, Legend, Line, LineChart, ReferenceDot, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { useT } from "./LocaleProvider";

type Row = { q: number; supply: number; demand: number };

const data: Row[] = Array.from({ length: 11 }, (_, i) => ({
  q: i,
  supply: 2 + i,
  demand: 12 - i,
}));

export function SupplyDemandChart() {
  const t = useT();
  return (
    <div className="my-6 rounded-xl border border-slate-200 bg-white p-4">
      <div className="mb-2 text-sm font-medium text-slate-700">
        {t({ en: "Supply & demand (illustrative)", zh: "供给与需求(示意)" })}
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={data} margin={{ top: 10, right: 24, left: 8, bottom: 24 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
          <XAxis
            dataKey="q"
            type="number"
            domain={[0, 10]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label value={t({ en: "Quantity", zh: "数量" })} position="insideBottom" offset={-8} fill="#475569" fontSize={12} />
          </XAxis>
          <YAxis
            domain={[0, 14]}
            tick={{ fontSize: 11, fill: "#64748b" }}
            stroke="#cbd5e1"
          >
            <Label value={t({ en: "Price", zh: "价格" })} angle={-90} position="insideLeft" fill="#475569" fontSize={12} />
          </YAxis>
          <Tooltip
            contentStyle={{ borderRadius: 8, border: "1px solid #e2e8f0", fontSize: 12 }}
            labelFormatter={(v) => `${t({ en: "Q", zh: "Q" })} = ${v}`}
          />
          <Legend wrapperStyle={{ fontSize: 12 }} />
          <Line type="linear" dataKey="supply" name={t({ en: "Supply", zh: "供给" })} stroke="#2563eb" strokeWidth={2} dot={false} />
          <Line type="linear" dataKey="demand" name={t({ en: "Demand", zh: "需求" })} stroke="#dc2626" strokeWidth={2} dot={false} />
          <ReferenceDot x={5} y={7} r={5} fill="#0f172a" stroke="white" strokeWidth={2} label={{ value: t({ en: "Equilibrium", zh: "均衡" }), position: "top", fontSize: 11, fill: "#0f172a" }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
