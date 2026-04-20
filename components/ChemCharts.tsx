"use client";

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
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

function ChartFrame({
  title,
  caption,
  children,
  height = 260,
}: {
  title?: string;
  caption?: string;
  children: React.ReactNode;
  height?: number;
}) {
  return (
    <figure className="my-5 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
      {title && (
        <div className="mb-2 text-sm font-semibold text-slate-900">{title}</div>
      )}
      <div style={{ width: "100%", height }}>
        <ResponsiveContainer>{children as React.ReactElement}</ResponsiveContainer>
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-slate-600">{caption}</figcaption>
      )}
    </figure>
  );
}

// ------------------------------------------------------------
// 1. Heating curve: T vs heat added
// ------------------------------------------------------------
export function HeatingCurve({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data = [
    { q: 0, T: -20 },
    { q: 40, T: 0 },
    { q: 374, T: 0 }, // fusion plateau
    { q: 575, T: 100 },
    { q: 2832, T: 100 }, // vaporization plateau
    { q: 3000, T: 120 },
  ];
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Heating curve of water", "水的加热曲线")}
      caption={t(
        "Horizontal plateaus appear at each phase change — all energy goes to breaking IMFs, not raising temperature.",
        "每次相变出现水平平台——能量全用于破坏分子间作用力,温度不变。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="q"
          type="number"
          stroke="#475569"
          label={{ value: t("Heat added (kJ)", "吸热量 (kJ)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          label={{ value: t("Temperature (°C)", "温度 (°C)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <ReferenceArea x1={40} x2={374} y1={-30} y2={130} fill="#dbeafe" fillOpacity={0.5} />
        <ReferenceArea x1={575} x2={2832} y1={-30} y2={130} fill="#fed7aa" fillOpacity={0.4} />
        <Line type="linear" dataKey="T" stroke="#2563eb" strokeWidth={2.5} dot={false} />
        <ReferenceDot x={200} y={0} r={0} label={{ value: t("melting", "熔化"), position: "top", fill: "#1e40af", fontSize: 11 }} />
        <ReferenceDot x={1700} y={100} r={0} label={{ value: t("boiling", "汽化"), position: "top", fill: "#c2410c", fontSize: 11 }} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 2. Maxwell-Boltzmann speed distribution at 3 temperatures
// ------------------------------------------------------------
export function MaxwellBoltzmann({ lang = "en" }: { lang?: "en" | "zh" }) {
  const mb = (v: number, T: number) => {
    const m = 4.65e-26; // kg (N₂)
    const k = 1.381e-23;
    const factor = 4 * Math.PI * Math.pow(m / (2 * Math.PI * k * T), 1.5);
    return factor * v * v * Math.exp((-m * v * v) / (2 * k * T)) * 1e3;
  };
  const vs: number[] = [];
  for (let v = 0; v <= 2500; v += 25) vs.push(v);
  const data = vs.map((v) => ({
    v,
    T200: mb(v, 200),
    T300: mb(v, 300),
    T600: mb(v, 600),
  }));
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Maxwell–Boltzmann speed distribution (N₂)", "N₂ 的 Maxwell–Boltzmann 速度分布")}
      caption={t(
        "Higher temperature = flatter, wider curve with more particles in the high-speed tail.",
        "温度越高,曲线越平越宽,高速尾区粒子越多。"
      )}
      height={280}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="v"
          type="number"
          domain={[0, 2500]}
          stroke="#475569"
          label={{ value: t("Speed (m/s)", "速率 (m/s)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis tick={false} stroke="#475569" label={{ value: t("Fraction of molecules", "分子占比"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Tooltip formatter={(v) => (typeof v === "number" ? v.toExponential(2) : String(v))} />
        <Legend verticalAlign="top" height={32} />
        <Line name="200 K" type="monotone" dataKey="T200" stroke="#0ea5e9" strokeWidth={2} dot={false} />
        <Line name="300 K" type="monotone" dataKey="T300" stroke="#16a34a" strokeWidth={2} dot={false} />
        <Line name="600 K" type="monotone" dataKey="T600" stroke="#dc2626" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 3. Bond potential energy (Morse-like curve)
// ------------------------------------------------------------
export function BondPotentialEnergy({ lang = "en" }: { lang?: "en" | "zh" }) {
  // Simple Morse-esque: D (1 − e^(−a(r−re)))² − D
  const D = 435; // kJ/mol (H–H)
  const a = 1.9;
  const re = 0.74; // Å
  const rs: number[] = [];
  for (let r = 0.3; r <= 3.0; r += 0.03) rs.push(+r.toFixed(2));
  const data = rs.map((r) => ({
    r,
    U: +(D * Math.pow(1 - Math.exp(-a * (r - re)), 2) - D).toFixed(2),
  }));
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Bond potential energy (H–H)", "键势能曲线 (H–H)")}
      caption={t(
        "Minimum at r = bond length (0.74 Å); depth of the well = bond energy (≈ 435 kJ/mol).",
        "势能最低处对应键长(0.74 Å);势能井深度 = 键能(约 435 kJ/mol)。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="r"
          type="number"
          domain={[0.3, 3.0]}
          stroke="#475569"
          label={{ value: t("Distance r (Å)", "距离 r (Å)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          domain={[-500, 500]}
          label={{ value: t("U (kJ/mol)", "U (kJ/mol)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <ReferenceLine y={0} stroke="#94a3b8" strokeDasharray="3 3" />
        <ReferenceLine x={re} stroke="#16a34a" strokeDasharray="3 3" label={{ value: t("r = 0.74 Å", "r = 0.74 Å"), position: "top", fill: "#16a34a", fontSize: 11 }} />
        <Line type="monotone" dataKey="U" stroke="#2563eb" strokeWidth={2.5} dot={false} />
        <ReferenceDot x={re} y={-D} r={5} fill="#2563eb" stroke="#1e3a8a" strokeWidth={2} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 4. Beer-Lambert calibration line
// ------------------------------------------------------------
export function BeerLambert({ lang = "en" }: { lang?: "en" | "zh" }) {
  const points = [
    { c: 0, A: 0 },
    { c: 0.0001, A: 0.5 },
    { c: 0.0002, A: 1.0 },
    { c: 0.0003, A: 1.5 },
    { c: 0.0004, A: 2.0 },
  ];
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Beer–Lambert calibration curve", "Beer–Lambert 标准曲线")}
      caption={t(
        "Straight line through the origin; slope = εb. Measure A of unknown, read off c.",
        "过原点的直线,斜率 = εb。测未知 A,反读 c。"
      )}
    >
      <LineChart data={points} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="c"
          type="number"
          stroke="#475569"
          tickFormatter={(v) => v.toExponential(0)}
          label={{ value: t("Concentration (M)", "浓度 (M)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis stroke="#475569" label={{ value: t("Absorbance A", "吸光度 A"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Line type="linear" dataKey="A" stroke="#9333ea" strokeWidth={2.5} dot={{ r: 5, fill: "#9333ea" }} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 5. PES spectrum — bar chart of peak heights
// ------------------------------------------------------------
export function PESSpectrum({ lang = "en" }: { lang?: "en" | "zh" }) {
  // Neon: 1s² 2s² 2p⁶
  const data = [
    { shell: "1s", e: 2, be: 84.0, color: "#7c3aed" },
    { shell: "2s", e: 2, be: 4.68, color: "#2563eb" },
    { shell: "2p", e: 6, be: 2.08, color: "#16a34a" },
  ];
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("PES of neon (Z = 10)", "氖的 PES (Z = 10)")}
      caption={t(
        "Three peaks in ratio 2 : 2 : 6 → 1s² 2s² 2p⁶. Higher binding energy = closer to the nucleus.",
        "三峰比 2 : 2 : 6 → 1s² 2s² 2p⁶。结合能越高 = 越靠近原子核。"
      )}
    >
      <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }} layout="vertical">
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          type="number"
          stroke="#475569"
          reversed
          label={{ value: t("Binding energy (MJ/mol)", "结合能 (MJ/mol)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis type="category" dataKey="shell" stroke="#475569" />
        <Tooltip />
        <Bar dataKey="e" name={t("# electrons", "电子数")} radius={[0, 4, 4, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.color} />
          ))}
        </Bar>
      </BarChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 6. Successive ionization energies (log y-axis, shows big jumps)
// ------------------------------------------------------------
export function SuccessiveIE({ lang = "en" }: { lang?: "en" | "zh" }) {
  // Magnesium IEs (kJ/mol): IE1..IE8
  const data = [
    { n: "IE₁", ie: 738, core: false },
    { n: "IE₂", ie: 1450, core: false },
    { n: "IE₃", ie: 7733, core: true },
    { n: "IE₄", ie: 10540, core: true },
    { n: "IE₅", ie: 13630, core: true },
    { n: "IE₆", ie: 17995, core: true },
    { n: "IE₇", ie: 21704, core: true },
    { n: "IE₈", ie: 25656, core: true },
  ];
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Successive ionization energies of magnesium", "镁的逐级电离能")}
      caption={t(
        "The huge jump between IE₂ and IE₃ marks the boundary between valence and core electrons — Mg has 2 valence e⁻.",
        "IE₂ 到 IE₃ 的大跳跃标志价层与内层的分界——Mg 有 2 个价电子。"
      )}
    >
      <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="n" stroke="#475569" />
        <YAxis stroke="#475569" label={{ value: t("IE (kJ/mol)", "电离能 (kJ/mol)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Tooltip />
        <Bar dataKey="ie" radius={[4, 4, 0, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.core ? "#dc2626" : "#2563eb"} />
          ))}
        </Bar>
      </BarChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 7. Mass spectrum (bar chart)
// ------------------------------------------------------------
export function MassSpectrum({
  peaks,
  title,
  lang = "en",
}: {
  peaks: Array<{ mz: number; pct: number }>;
  title?: string;
  lang?: "en" | "zh";
}) {
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={title ?? t("Mass spectrum", "质谱图")}
      caption={t("Tallest peak = most abundant isotope.", "最高峰 = 最丰富的同位素。")}
    >
      <BarChart data={peaks} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="mz"
          stroke="#475569"
          label={{ value: t("m/z", "m/z"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          label={{ value: t("Abundance (%)", "丰度 (%)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <Tooltip />
        <Bar dataKey="pct" fill="#0ea5e9" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 8. Solubility vs temperature (selected salts)
// ------------------------------------------------------------
export function SolubilityVsT({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data = [
    { T: 0, KNO3: 13.3, NaCl: 35.7, Ce2SO43: 21.4, O2: 14.6 },
    { T: 20, KNO3: 31.6, NaCl: 35.9, Ce2SO43: 9.84, O2: 9.1 },
    { T: 40, KNO3: 63.9, NaCl: 36.4, Ce2SO43: 5.63, O2: 6.6 },
    { T: 60, KNO3: 109, NaCl: 37.1, Ce2SO43: 3.87, O2: 5.0 },
    { T: 80, KNO3: 169, NaCl: 38.0, Ce2SO43: 2.6, O2: 4.0 },
    { T: 100, KNO3: 247, NaCl: 39.2, Ce2SO43: 1.9, O2: 3.4 },
  ];
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Solubility vs temperature", "溶解度随温度变化")}
      caption={t(
        "Most ionic solids (KNO₃) become more soluble as T rises; some (Ce₂(SO₄)₃) reverse; gases (O₂) drop.",
        "多数离子晶体(KNO₃)温度升高时溶解度上升;少数(Ce₂(SO₄)₃)反之;气体(O₂)下降。"
      )}
      height={300}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="T"
          stroke="#475569"
          label={{ value: t("Temperature (°C)", "温度 (°C)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          label={{ value: t("g per 100 g H₂O", "每 100 g H₂O 溶解的克数"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <Tooltip />
        <Legend verticalAlign="top" height={32} />
        <Line name="KNO₃" type="monotone" dataKey="KNO3" stroke="#16a34a" strokeWidth={2} />
        <Line name="NaCl" type="monotone" dataKey="NaCl" stroke="#2563eb" strokeWidth={2} />
        <Line name="Ce₂(SO₄)₃" type="monotone" dataKey="Ce2SO43" stroke="#dc2626" strokeWidth={2} />
        <Line name={t("O₂ gas ×10", "O₂ 气 ×10")} type="monotone" dataKey="O2" stroke="#9333ea" strokeWidth={2} strokeDasharray="5 3" />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 9. Real gas deviation (PV/nRT vs P)
// ------------------------------------------------------------
export function RealGasDeviation({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data = [] as Array<{ P: number; ideal: number; N2: number; CH4: number; H2: number }>;
  for (let P = 0; P <= 1000; P += 50) {
    data.push({
      P,
      ideal: 1,
      // rough empirical shapes — dip then rise for attractive+finite-volume gases
      N2: 1 - 0.0012 * P + 0.0000015 * P * P,
      CH4: 1 - 0.002 * P + 0.0000018 * P * P,
      H2: 1 + 0.0006 * P,
    });
  }
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Real gas deviation from ideal", "真实气体对理想气体的偏离")}
      caption={t(
        "At high P, PV/nRT deviates — below 1 when attractions dominate, above 1 when particle volume matters.",
        "高压下 PV/nRT 偏离 1:吸引力主导时 < 1,粒子体积主导时 > 1。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="P" stroke="#475569" label={{ value: t("P (atm)", "P (atm)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" domain={[0.5, 1.7]} label={{ value: "PV / nRT", angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <ReferenceLine y={1} stroke="#94a3b8" strokeDasharray="3 3" />
        <Legend verticalAlign="top" height={32} />
        <Line name={t("Ideal", "理想气体")} dataKey="ideal" stroke="#94a3b8" dot={false} strokeDasharray="4 3" />
        <Line name="N₂" dataKey="N2" stroke="#2563eb" strokeWidth={2} dot={false} />
        <Line name="CH₄" dataKey="CH4" stroke="#dc2626" strokeWidth={2} dot={false} />
        <Line name="H₂" dataKey="H2" stroke="#16a34a" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// silence unused import warning for AreaChart/Area (kept for future)
void AreaChart;
void Area;
