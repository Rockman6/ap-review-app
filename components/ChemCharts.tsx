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

// ------------------------------------------------------------
// 10. Strong-acid / strong-base titration curve
// ------------------------------------------------------------
export function TitrationCurve({ lang = "en" }: { lang?: "en" | "zh" }) {
  // Titrating 25.00 mL of 0.100 M HCl with 0.100 M NaOH — equiv pt at V = 25.00 mL
  const data: Array<{ V: number; pH: number }> = [];
  const V0 = 25.0;
  const C = 0.1;
  for (let V = 0; V <= 50; V += 0.5) {
    let pH: number;
    if (V < V0 - 0.05) {
      // excess acid
      const molH = (V0 - V) * C;
      const total = V0 + V;
      pH = -Math.log10(molH / total);
    } else if (V > V0 + 0.05) {
      // excess base
      const molOH = (V - V0) * C;
      const total = V0 + V;
      const pOH = -Math.log10(molOH / total);
      pH = 14 - pOH;
    } else {
      pH = 7;
    }
    data.push({ V, pH: +pH.toFixed(2) });
  }
  const t = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={t("Strong-acid + strong-base titration", "强酸 + 强碱滴定曲线")}
      caption={t(
        "Flat before and after; near equivalence (25 mL here) pH jumps sharply from ~3 to ~11. Midpoint pH = 7 for strong/strong.",
        "等当点(此处 V = 25 mL)前后 pH 平缓,等当点附近 pH 从 ~3 急剧跃升到 ~11。强酸-强碱等当点 pH = 7。"
      )}
      height={300}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="V"
          type="number"
          domain={[0, 50]}
          stroke="#475569"
          label={{ value: t("Volume NaOH added (mL)", "加入 NaOH 体积 (mL)"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          domain={[0, 14]}
          label={{ value: "pH", angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <ReferenceLine x={25} stroke="#16a34a" strokeDasharray="4 3" label={{ value: t("equiv. pt", "等当点"), position: "top", fill: "#16a34a", fontSize: 11 }} />
        <ReferenceLine y={7} stroke="#94a3b8" strokeDasharray="4 3" />
        <Line type="monotone" dataKey="pH" stroke="#dc2626" strokeWidth={2.5} dot={false} />
        <ReferenceDot x={25} y={7} r={6} fill="#16a34a" stroke="#065f46" strokeWidth={2} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 11. Concentration vs time — three rate orders overlaid
// ------------------------------------------------------------
export function ConcentrationVsTime({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data: Array<{ t: number; zero: number; first: number; second: number }> = [];
  const A0 = 1.0;
  const k0 = 0.05;
  const k1 = 0.1;
  const k2 = 0.25;
  for (let t = 0; t <= 20; t += 0.5) {
    data.push({
      t,
      zero: Math.max(A0 - k0 * t, 0),
      first: A0 * Math.exp(-k1 * t),
      second: A0 / (1 + k2 * A0 * t),
    });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Concentration vs time by reaction order", "不同级数反应的浓度-时间曲线")}
      caption={tt(
        "Zero-order: straight line. First-order: exponential decay. Second-order: hyperbolic decay (drops fast, then slows).",
        "零级:直线;一级:指数衰减;二级:双曲衰减(先快后慢)。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="t" type="number" stroke="#475569" label={{ value: tt("Time", "时间"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" domain={[0, 1]} label={{ value: "[A]", angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Legend verticalAlign="top" height={32} />
        <Line name={tt("zero-order", "零级")} dataKey="zero" stroke="#2563eb" strokeWidth={2} dot={false} />
        <Line name={tt("first-order", "一级")} dataKey="first" stroke="#16a34a" strokeWidth={2} dot={false} />
        <Line name={tt("second-order", "二级")} dataKey="second" stroke="#dc2626" strokeWidth={2} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 12. Reaction energy profile (single-step, exothermic)
// ------------------------------------------------------------
export function ReactionProfile({ lang = "en" }: { lang?: "en" | "zh" }) {
  // Simple Gaussian hump: energy vs reaction coordinate
  const data: Array<{ x: number; E: number }> = [];
  for (let x = 0; x <= 10; x += 0.1) {
    // start at 20 (reactants), peak near x=5 at 80, end at 30 (products) — exothermic
    const base = 20 - 2.5 * x; // linear descent to 30 at x=10... actually that makes it endothermic. Let me flip: start 50, end 20 (exothermic).
    const reactant = 50;
    const product = 20;
    const slope = (product - reactant) / 10;
    const linear = reactant + slope * x;
    const hump = 55 * Math.exp(-Math.pow((x - 5) / 1.4, 2));
    data.push({ x, E: +(linear + hump).toFixed(2) });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Reaction energy profile (exothermic)", "反应能量曲线(放热)")}
      caption={tt(
        "Barrier height = activation energy Eₐ. Gap between reactants and products = ΔH (negative here).",
        "势垒高度 = 活化能 Eₐ;反应物与产物能量差 = ΔH(此处为负)。"
      )}
      height={280}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis
          dataKey="x"
          type="number"
          tick={false}
          stroke="#475569"
          label={{ value: tt("Reaction coordinate →", "反应坐标 →"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }}
        />
        <YAxis
          stroke="#475569"
          label={{ value: tt("Energy", "能量"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }}
        />
        <Line type="monotone" dataKey="E" stroke="#9333ea" strokeWidth={2.5} dot={false} />
        <ReferenceDot x={0} y={50} r={5} fill="#2563eb" label={{ value: tt("reactants", "反应物"), position: "top", fill: "#2563eb", fontSize: 11 }} />
        <ReferenceDot x={5} y={94} r={5} fill="#dc2626" label={{ value: tt("transition state", "过渡态"), position: "top", fill: "#dc2626", fontSize: 11 }} />
        <ReferenceDot x={10} y={20} r={5} fill="#16a34a" label={{ value: tt("products", "产物"), position: "top", fill: "#16a34a", fontSize: 11 }} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 13. Catalyst effect — profile with & without catalyst
// ------------------------------------------------------------
export function CatalystEffect({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data: Array<{ x: number; uncat: number; cat: number }> = [];
  for (let x = 0; x <= 10; x += 0.1) {
    const reactant = 50;
    const product = 20;
    const linear = reactant + ((product - reactant) / 10) * x;
    const humpU = 55 * Math.exp(-Math.pow((x - 5) / 1.4, 2));
    const humpC = 25 * Math.exp(-Math.pow((x - 5) / 1.4, 2));
    data.push({ x, uncat: +(linear + humpU).toFixed(2), cat: +(linear + humpC).toFixed(2) });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Effect of a catalyst on Eₐ", "催化剂对 Eₐ 的影响")}
      caption={tt(
        "A catalyst lowers the activation barrier (purple) without changing reactant or product energies — ΔH is unchanged.",
        "催化剂降低活化能(紫色曲线),但反应物与产物能量不变——ΔH 不变。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="x" type="number" tick={false} stroke="#475569" label={{ value: tt("Reaction coordinate →", "反应坐标 →"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" label={{ value: tt("Energy", "能量"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Legend verticalAlign="top" height={32} />
        <Line name={tt("uncatalyzed", "无催化")} dataKey="uncat" stroke="#dc2626" strokeWidth={2.5} dot={false} />
        <Line name={tt("with catalyst", "加催化剂")} dataKey="cat" stroke="#9333ea" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 14. Multistep reaction energy profile — two humps
// ------------------------------------------------------------
export function MultistepProfile({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data: Array<{ x: number; E: number }> = [];
  for (let x = 0; x <= 10; x += 0.05) {
    // two humps with an intermediate valley
    const hump1 = 60 * Math.exp(-Math.pow((x - 2.5) / 0.9, 2));
    const hump2 = 40 * Math.exp(-Math.pow((x - 7) / 0.9, 2));
    const base = 20 + 30 * Math.exp(-Math.pow((x - 5) / 1.2, 2)) * 0; // flat base
    const final = 10; // exothermic overall
    const linear = 30 + (final - 30) * (x / 10);
    data.push({ x, E: +(linear + hump1 + hump2 + base).toFixed(2) });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Two-step reaction profile", "两步反应能量曲线")}
      caption={tt(
        "Valley between peaks = intermediate. The tallest peak is the rate-determining step (here, step 1).",
        "两峰之间的谷 = 中间体;最高峰 = 决速步骤(此处为第 1 步)。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="x" type="number" tick={false} stroke="#475569" label={{ value: tt("Reaction coordinate →", "反应坐标 →"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" label={{ value: tt("Energy", "能量"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Line type="monotone" dataKey="E" stroke="#0891b2" strokeWidth={2.5} dot={false} />
        <ReferenceDot x={2.5} y={85} r={4} fill="#dc2626" label={{ value: "TS₁", position: "top", fill: "#dc2626", fontSize: 11 }} />
        <ReferenceDot x={5} y={25} r={4} fill="#16a34a" label={{ value: tt("intermediate", "中间体"), position: "top", fill: "#16a34a", fontSize: 11 }} />
        <ReferenceDot x={7} y={55} r={4} fill="#dc2626" label={{ value: "TS₂", position: "top", fill: "#dc2626", fontSize: 11 }} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 15. Thermal equilibrium — hot + cold object approach same T
// ------------------------------------------------------------
export function ThermalEquilibrium({ lang = "en" }: { lang?: "en" | "zh" }) {
  const data: Array<{ t: number; hot: number; cold: number }> = [];
  const Tf = 50;
  for (let t = 0; t <= 30; t += 0.5) {
    data.push({
      t,
      hot: Tf + (90 - Tf) * Math.exp(-0.2 * t),
      cold: Tf + (10 - Tf) * Math.exp(-0.2 * t),
    });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Approach to thermal equilibrium", "达到热平衡的过程")}
      caption={tt(
        "Hot object cools while cold object warms until both reach the same final temperature. |q_hot| = |q_cold|.",
        "热物体降温,冷物体升温,最终两者达到相同温度。|q_hot| = |q_cold|。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="t" type="number" stroke="#475569" label={{ value: tt("Time", "时间"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" domain={[0, 100]} label={{ value: tt("Temperature (°C)", "温度 (°C)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <ReferenceLine y={Tf} stroke="#94a3b8" strokeDasharray="4 3" label={{ value: `T_final = ${Tf}°C`, position: "right", fill: "#475569", fontSize: 11 }} />
        <Legend verticalAlign="top" height={32} />
        <Line name={tt("Hot object", "热物体")} dataKey="hot" stroke="#dc2626" strokeWidth={2.5} dot={false} />
        <Line name={tt("Cold object", "冷物体")} dataKey="cold" stroke="#2563eb" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 16. Hess's law cycle (enthalpy ladder)
// ------------------------------------------------------------
export function HessCycle({ lang = "en" }: { lang?: "en" | "zh" }) {
  // C(s) + O2 → CO2 via two paths
  const data = [
    { step: "C(s) + O₂", H: 0, label: "" },
    { step: "CO(g) + ½O₂", H: -110, label: "ΔH₁ = −110 kJ" },
    { step: "CO₂(g)", H: -394, label: "ΔH₂ = −284 kJ" },
  ];
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Hess's-law enthalpy ladder", "盖斯定律——焓阶梯")}
      caption={tt(
        "Whether you go direct (ΔH = −394 kJ) or through CO (−110 + −284 = −394 kJ), ΔH is the same.",
        "直接路径(ΔH = −394 kJ)与经 CO 的两步路径(−110 + −284 = −394 kJ)所得 ΔH 相同。"
      )}
    >
      <BarChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 30 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="step" stroke="#475569" />
        <YAxis stroke="#475569" domain={[-450, 50]} label={{ value: tt("Enthalpy (kJ)", "焓 (kJ)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Tooltip />
        <ReferenceLine y={0} stroke="#94a3b8" />
        <Bar dataKey="H" radius={[4, 4, 0, 0]}>
          {data.map((_, i) => (
            <Cell key={i} fill={["#2563eb", "#ea580c", "#16a34a"][i]} />
          ))}
        </Bar>
      </BarChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 17. Equilibrium approach — concentrations vs time
// ------------------------------------------------------------
export function EquilibriumApproach({ lang = "en" }: { lang?: "en" | "zh" }) {
  // A ⇌ B starting from pure A
  const data: Array<{ t: number; A: number; B: number }> = [];
  const Aeq = 0.3;
  const Beq = 0.7;
  for (let t = 0; t <= 30; t += 0.5) {
    data.push({
      t,
      A: Aeq + (1 - Aeq) * Math.exp(-0.25 * t),
      B: Beq * (1 - Math.exp(-0.25 * t)),
    });
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Approach to equilibrium: A ⇌ B", "趋近平衡:A ⇌ B")}
      caption={tt(
        "Rates change but concentrations stop changing when forward = reverse. Concentrations plateau — they are NOT necessarily equal.",
        "速率变化,但当正=逆时,浓度不再变化。平衡时浓度稳定,但**不一定相等**。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="t" type="number" stroke="#475569" label={{ value: tt("Time", "时间"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" domain={[0, 1]} label={{ value: tt("Concentration (M)", "浓度 (M)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <Legend verticalAlign="top" height={32} />
        <Line name="[A]" dataKey="A" stroke="#2563eb" strokeWidth={2.5} dot={false} />
        <Line name="[B]" dataKey="B" stroke="#16a34a" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// ------------------------------------------------------------
// 18. Le Châtelier shift — disturb, then re-equilibrate
// ------------------------------------------------------------
export function LeChatelierShift({ lang = "en" }: { lang?: "en" | "zh" }) {
  // reach eq at t=15, then add more A at t=15 (spike), then system shifts right
  const data: Array<{ t: number; A: number; B: number }> = [];
  const step = 15;
  const post = 30;
  for (let t = 0; t <= post; t += 0.25) {
    if (t < step) {
      // first equilibration
      data.push({
        t,
        A: 0.3 + 0.7 * Math.exp(-0.3 * t),
        B: 0.7 * (1 - Math.exp(-0.3 * t)),
      });
    } else if (t === step) {
      // at the disturbance moment, push [A] up and record both values
      data.push({ t, A: 0.8, B: 0.7 });
    } else {
      // re-equilibration towards new eq (A drops, B rises)
      const tau = t - step;
      data.push({
        t,
        A: 0.4 + 0.4 * Math.exp(-0.3 * tau),
        B: 0.9 - 0.2 * Math.exp(-0.3 * tau),
      });
    }
  }
  const tt = (en: string, zh: string) => (lang === "zh" ? zh : en);
  return (
    <ChartFrame
      title={tt("Le Châtelier: adding reactant A at t = 15", "勒夏特列:t = 15 时加入反应物 A")}
      caption={tt(
        "After the disturbance, the system shifts forward — [A] decreases, [B] increases — until a NEW equilibrium is reached.",
        "扰动后系统正向移动——[A] 下降,[B] 上升——直到达到新的平衡。"
      )}
    >
      <LineChart data={data} margin={{ top: 10, right: 20, left: 10, bottom: 20 }}>
        <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
        <XAxis dataKey="t" type="number" stroke="#475569" label={{ value: tt("Time", "时间"), position: "insideBottom", offset: -10, fill: "#475569", fontSize: 12 }} />
        <YAxis stroke="#475569" domain={[0, 1]} label={{ value: tt("Concentration (M)", "浓度 (M)"), angle: -90, position: "insideLeft", fill: "#475569", fontSize: 12 }} />
        <ReferenceLine x={15} stroke="#ea580c" strokeDasharray="4 3" label={{ value: tt("+A added", "加入 A"), position: "top", fill: "#ea580c", fontSize: 11 }} />
        <Legend verticalAlign="top" height={32} />
        <Line name="[A]" dataKey="A" stroke="#2563eb" strokeWidth={2.5} dot={false} />
        <Line name="[B]" dataKey="B" stroke="#16a34a" strokeWidth={2.5} dot={false} />
      </LineChart>
    </ChartFrame>
  );
}

// silence unused import warning for AreaChart/Area (kept for future)
void AreaChart;
void Area;
