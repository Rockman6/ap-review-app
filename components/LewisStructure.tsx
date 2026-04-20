"use client";

/**
 * Textbook-style Lewis structure renderer in pure SVG.
 * Shows atom labels (CPK-colored), bonds (1/2/3 parallel lines),
 * lone-pair dots, atom formal charges, and overall ion charges.
 *
 * ViewBox is 240x200 to give the diagram breathing room.
 */

type Direction = "N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW";

type Atom = {
  el: string;
  x: number;
  y: number;
  charge?: string;
  lp?: Direction[];
};

type Bond = { from: number; to: number; order: 1 | 2 | 3 };

type Spec = {
  atoms: Atom[];
  bonds: Bond[];
  caption?: string;
  overallCharge?: string;
};

// CPK-style element colors
const CPK: Record<string, string> = {
  H: "#111827",
  C: "#111827",
  N: "#2563eb",
  O: "#dc2626",
  F: "#16a34a",
  Cl: "#16a34a",
  Br: "#b45309",
  I: "#7c3aed",
  S: "#ca8a04",
  P: "#ea580c",
  Na: "#9333ea",
  K: "#9333ea",
  Mg: "#0891b2",
  Ca: "#0891b2",
  B: "#d97706",
  Si: "#475569",
};

const atomColor = (el: string) => CPK[el] ?? "#111827";

// -----------------------------------------------------------
// Canonical specs (centered around 120, 100 in a 240x200 viewBox)
// -----------------------------------------------------------

const SPECS: Record<string, Spec> = {
  h2o: {
    caption: "H₂O",
    atoms: [
      { el: "O", x: 120, y: 100, lp: ["N", "S"] },
      { el: "H", x: 65, y: 140 },
      { el: "H", x: 175, y: 140 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
    ],
  },
  nh3: {
    caption: "NH₃",
    atoms: [
      { el: "N", x: 120, y: 95, lp: ["N"] },
      { el: "H", x: 65, y: 150 },
      { el: "H", x: 120, y: 160 },
      { el: "H", x: 175, y: 150 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
  },
  ch4: {
    caption: "CH₄",
    atoms: [
      { el: "C", x: 120, y: 100 },
      { el: "H", x: 120, y: 40 },
      { el: "H", x: 120, y: 160 },
      { el: "H", x: 60, y: 100 },
      { el: "H", x: 180, y: 100 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
      { from: 0, to: 4, order: 1 },
    ],
  },
  co2: {
    caption: "CO₂",
    atoms: [
      { el: "O", x: 40, y: 100, lp: ["N", "S"] },
      { el: "C", x: 120, y: 100 },
      { el: "O", x: 200, y: 100, lp: ["N", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 1, to: 2, order: 2 },
    ],
  },
  hf: {
    caption: "HF",
    atoms: [
      { el: "H", x: 75, y: 100 },
      { el: "F", x: 165, y: 100, lp: ["N", "S", "E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }],
  },
  n2: {
    caption: "N₂",
    atoms: [
      { el: "N", x: 75, y: 100, lp: ["W"] },
      { el: "N", x: 165, y: 100, lp: ["E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 3 }],
  },
  o2: {
    caption: "O₂",
    atoms: [
      { el: "O", x: 75, y: 100, lp: ["N", "S"] },
      { el: "O", x: 165, y: 100, lp: ["N", "S"] },
    ],
    bonds: [{ from: 0, to: 1, order: 2 }],
  },
  hcl: {
    caption: "HCl",
    atoms: [
      { el: "H", x: 75, y: 100 },
      { el: "Cl", x: 165, y: 100, lp: ["N", "S", "E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }],
  },
  so2: {
    caption: "SO₂",
    atoms: [
      { el: "S", x: 120, y: 85, lp: ["N"] },
      { el: "O", x: 60, y: 150, lp: ["W", "SW"] },
      { el: "O", x: 180, y: 150, lp: ["E", "SE"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 1 },
    ],
  },
  "no3-minus-1": {
    caption: "NO₃⁻  (form 1)",
    atoms: [
      { el: "N", x: 120, y: 100, charge: "+" },
      { el: "O", x: 120, y: 35, lp: ["N", "E"] },
      { el: "O", x: 55, y: 155, lp: ["W", "SW"], charge: "−" },
      { el: "O", x: 185, y: 155, lp: ["E", "SE"], charge: "−" },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
    overallCharge: "−",
  },
  "no3-minus-2": {
    caption: "NO₃⁻  (form 2)",
    atoms: [
      { el: "N", x: 120, y: 100, charge: "+" },
      { el: "O", x: 120, y: 35, lp: ["N", "E"], charge: "−" },
      { el: "O", x: 55, y: 155, lp: ["W", "SW"] },
      { el: "O", x: 185, y: 155, lp: ["E", "SE"], charge: "−" },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 2 },
      { from: 0, to: 3, order: 1 },
    ],
    overallCharge: "−",
  },
  "no3-minus-3": {
    caption: "NO₃⁻  (form 3)",
    atoms: [
      { el: "N", x: 120, y: 100, charge: "+" },
      { el: "O", x: 120, y: 35, lp: ["N", "E"], charge: "−" },
      { el: "O", x: 55, y: 155, lp: ["W", "SW"], charge: "−" },
      { el: "O", x: 185, y: 155, lp: ["E", "SE"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 2 },
    ],
    overallCharge: "−",
  },
  "na-cl-ionic": {
    caption: "NaCl  (ionic pair)",
    atoms: [
      { el: "Na", x: 70, y: 100, charge: "+" },
      { el: "Cl", x: 170, y: 100, lp: ["N", "S", "E", "W"], charge: "−" },
    ],
    bonds: [],
  },
  bf3: {
    caption: "BF₃  (incomplete octet on B)",
    atoms: [
      { el: "B", x: 120, y: 100 },
      { el: "F", x: 120, y: 35, lp: ["N", "E", "W"] },
      { el: "F", x: 55, y: 155, lp: ["W", "SW", "S"] },
      { el: "F", x: 185, y: 155, lp: ["E", "SE", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
  },
};

// -----------------------------------------------------------
// Rendering helpers
// -----------------------------------------------------------

const ATOM_R = 14; // radius of the "keep-out" disc around an atom center

function BondG({ a, b, order }: { a: Atom; b: Atom; order: 1 | 2 | 3 }) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return null;
  const ux = dx / len;
  const uy = dy / len;
  const x1 = a.x + ux * ATOM_R;
  const y1 = a.y + uy * ATOM_R;
  const x2 = b.x - ux * ATOM_R;
  const y2 = b.y - uy * ATOM_R;
  const px = -uy;
  const py = ux;
  const stroke = "#334155";
  const sw = 2.4;
  const cap = "round" as const;
  if (order === 1) {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={sw} strokeLinecap={cap} />;
  }
  if (order === 2) {
    const off = 3.5;
    return (
      <g stroke={stroke} strokeWidth={sw} strokeLinecap={cap}>
        <line x1={x1 + px * off} y1={y1 + py * off} x2={x2 + px * off} y2={y2 + py * off} />
        <line x1={x1 - px * off} y1={y1 - py * off} x2={x2 - px * off} y2={y2 - py * off} />
      </g>
    );
  }
  const off = 5;
  return (
    <g stroke={stroke} strokeWidth={sw} strokeLinecap={cap}>
      <line x1={x1 + px * off} y1={y1 + py * off} x2={x2 + px * off} y2={y2 + py * off} />
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1 - px * off} y1={y1 - py * off} x2={x2 - px * off} y2={y2 - py * off} />
    </g>
  );
}

/**
 * Draws a pair of dots representing a lone pair, positioned around an atom.
 * The pair is oriented perpendicular to the radial direction so the two dots
 * sit side-by-side *along* the atom's edge (textbook convention).
 */
function LonePair({ cx, cy, dir }: { cx: number; cy: number; dir: Direction }) {
  // radial unit vector for the direction
  const radial: Record<Direction, [number, number]> = {
    N: [0, -1],
    S: [0, 1],
    E: [1, 0],
    W: [-1, 0],
    NE: [Math.SQRT1_2, -Math.SQRT1_2],
    NW: [-Math.SQRT1_2, -Math.SQRT1_2],
    SE: [Math.SQRT1_2, Math.SQRT1_2],
    SW: [-Math.SQRT1_2, Math.SQRT1_2],
  };
  const [rx, ry] = radial[dir];
  const distance = 21; // center of the pair is this far from atom center
  const pairOffset = 4.2; // half-distance between the two dots
  // Tangent (perpendicular to radial) — along which the two dots sit.
  const tx = -ry;
  const ty = rx;
  const centerX = cx + rx * distance;
  const centerY = cy + ry * distance;
  const d1x = centerX + tx * pairOffset;
  const d1y = centerY + ty * pairOffset;
  const d2x = centerX - tx * pairOffset;
  const d2y = centerY - ty * pairOffset;
  return (
    <g fill="#0f172a">
      <circle cx={d1x} cy={d1y} r={2.3} />
      <circle cx={d2x} cy={d2y} r={2.3} />
    </g>
  );
}

// -----------------------------------------------------------
// Public components
// -----------------------------------------------------------

export function LewisStructure({
  name,
  width = 260,
  height = 210,
  label,
}: {
  name: string;
  width?: number;
  height?: number;
  label?: string;
}) {
  const spec = SPECS[name];
  if (!spec) {
    return (
      <figure className="my-4 rounded-xl border border-red-200 bg-red-50 p-3 text-xs text-red-700">
        Unknown Lewis structure: <code>{name}</code>
      </figure>
    );
  }
  return (
    <figure className="my-4 inline-flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
      <svg
        viewBox="0 0 240 200"
        width={width}
        height={height}
        role="img"
        aria-label={label ?? spec.caption ?? name}
      >
        {spec.bonds.map((b, i) => (
          <BondG key={i} a={spec.atoms[b.from]} b={spec.atoms[b.to]} order={b.order} />
        ))}
        {spec.atoms.map((atom, i) => (
          <g key={i}>
            {atom.lp?.map((dir, j) => (
              <LonePair key={j} cx={atom.x} cy={atom.y} dir={dir} />
            ))}
            {/* translucent circle masks bonds from cutting through the label area */}
            <circle cx={atom.x} cy={atom.y} r={12} fill="white" />
            <text
              x={atom.x}
              y={atom.y + 6}
              textAnchor="middle"
              fontSize={18}
              fontWeight={600}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fill={atomColor(atom.el)}
            >
              {atom.el}
            </text>
            {atom.charge && (
              <text
                x={atom.x + 13}
                y={atom.y - 10}
                textAnchor="start"
                fontSize={11}
                fontWeight={700}
                fill="#0f172a"
              >
                {atom.charge}
              </text>
            )}
          </g>
        ))}
        {spec.overallCharge && (
          <g>
            <rect x={206} y={8} width={26} height={26} rx={13} fill="none" stroke="#334155" strokeWidth={1.2} />
            <text x={219} y={27} textAnchor="middle" fontSize={15} fontWeight={600} fill="#334155">
              {spec.overallCharge}
            </text>
          </g>
        )}
      </svg>
      {(label ?? spec.caption) && (
        <figcaption className="mt-1 text-[11px] font-medium uppercase tracking-widest text-slate-500">
          {label ?? spec.caption}
        </figcaption>
      )}
    </figure>
  );
}

export function LewisRow({ names }: { names: string[] }) {
  return (
    <div className="my-4 flex flex-wrap items-end justify-center gap-3">
      {names.map((n, i) => (
        <LewisStructure key={i} name={n} />
      ))}
    </div>
  );
}
