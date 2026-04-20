"use client";

/**
 * Hand-drawn Lewis structure SVGs for canonical AP Chem molecules.
 * Every structure shows atom labels, bonds (1/2/3 lines), and lone-pair dots.
 *
 * Coordinate system: a local 200×160 SVG viewBox; center of the diagram
 * is roughly (100, 80). Atom labels sit at the atom position; bonds are
 * drawn between atom centers with a small gap so the label stays readable.
 */

type Atom = {
  /** element symbol */
  el: string;
  /** x,y in viewBox units */
  x: number;
  y: number;
  /** formal charge label, e.g. "+", "-", "2-" */
  charge?: string;
  /** lone pairs — each entry is a cardinal direction, N/S/E/W/NE/NW/SE/SW */
  lp?: Array<"N" | "S" | "E" | "W" | "NE" | "NW" | "SE" | "SW">;
};

type Bond = {
  from: number;
  to: number;
  order: 1 | 2 | 3;
};

type Spec = {
  atoms: Atom[];
  bonds: Bond[];
  caption?: string;
  overallCharge?: string;
  width?: number;
  height?: number;
};

// -----------------------------------------------------------
// Canonical specs
// -----------------------------------------------------------

const SPECS: Record<string, Spec> = {
  h2o: {
    caption: "H₂O",
    atoms: [
      { el: "O", x: 100, y: 80, lp: ["N", "S"] },
      { el: "H", x: 50, y: 120 },
      { el: "H", x: 150, y: 120 },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
    ],
  },
  nh3: {
    caption: "NH₃",
    atoms: [
      { el: "N", x: 100, y: 80, lp: ["N"] },
      { el: "H", x: 50, y: 125 },
      { el: "H", x: 100, y: 135 },
      { el: "H", x: 150, y: 125 },
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
      { el: "C", x: 100, y: 80 },
      { el: "H", x: 100, y: 30 },
      { el: "H", x: 100, y: 130 },
      { el: "H", x: 50, y: 80 },
      { el: "H", x: 150, y: 80 },
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
      { el: "O", x: 30, y: 80, lp: ["N", "S"] },
      { el: "C", x: 100, y: 80 },
      { el: "O", x: 170, y: 80, lp: ["N", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 1, to: 2, order: 2 },
    ],
  },
  hf: {
    caption: "HF",
    atoms: [
      { el: "H", x: 60, y: 80 },
      { el: "F", x: 140, y: 80, lp: ["N", "S", "E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }],
  },
  n2: {
    caption: "N₂",
    atoms: [
      { el: "N", x: 60, y: 80, lp: ["W"] },
      { el: "N", x: 140, y: 80, lp: ["E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 3 }],
  },
  o2: {
    caption: "O₂",
    atoms: [
      { el: "O", x: 60, y: 80, lp: ["N", "S"] },
      { el: "O", x: 140, y: 80, lp: ["N", "S"] },
    ],
    bonds: [{ from: 0, to: 1, order: 2 }],
  },
  hcl: {
    caption: "HCl",
    atoms: [
      { el: "H", x: 60, y: 80 },
      { el: "Cl", x: 140, y: 80, lp: ["N", "S", "E"] },
    ],
    bonds: [{ from: 0, to: 1, order: 1 }],
  },
  so2: {
    caption: "SO₂",
    atoms: [
      { el: "S", x: 100, y: 70, lp: ["N"] },
      { el: "O", x: 50, y: 120, lp: ["W", "S"] },
      { el: "O", x: 150, y: 120, lp: ["E", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 1 },
    ],
    overallCharge: "",
  },
  "no3-minus-1": {
    caption: "NO₃⁻ (form 1)",
    atoms: [
      { el: "N", x: 100, y: 80, charge: "+" },
      { el: "O", x: 100, y: 25, lp: ["N", "E"] },
      { el: "O", x: 50, y: 130, lp: ["W", "S"], charge: "−" },
      { el: "O", x: 150, y: 130, lp: ["E", "S"], charge: "−" },
    ],
    bonds: [
      { from: 0, to: 1, order: 2 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
    overallCharge: "−",
  },
  "no3-minus-2": {
    caption: "NO₃⁻ (form 2)",
    atoms: [
      { el: "N", x: 100, y: 80, charge: "+" },
      { el: "O", x: 100, y: 25, lp: ["N", "E"], charge: "−" },
      { el: "O", x: 50, y: 130, lp: ["W", "S"] },
      { el: "O", x: 150, y: 130, lp: ["E", "S"], charge: "−" },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 2 },
      { from: 0, to: 3, order: 1 },
    ],
    overallCharge: "−",
  },
  "no3-minus-3": {
    caption: "NO₃⁻ (form 3)",
    atoms: [
      { el: "N", x: 100, y: 80, charge: "+" },
      { el: "O", x: 100, y: 25, lp: ["N", "E"], charge: "−" },
      { el: "O", x: 50, y: 130, lp: ["W", "S"], charge: "−" },
      { el: "O", x: 150, y: 130, lp: ["E", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 2 },
    ],
    overallCharge: "−",
  },
  "na-cl-ionic": {
    caption: "NaCl (ionic pair)",
    atoms: [
      { el: "Na", x: 60, y: 80, charge: "+" },
      { el: "Cl", x: 140, y: 80, lp: ["N", "S", "E", "W"], charge: "−" },
    ],
    bonds: [],
  },
  bf3: {
    caption: "BF₃ (incomplete octet on B)",
    atoms: [
      { el: "B", x: 100, y: 80 },
      { el: "F", x: 100, y: 25, lp: ["N", "E", "W"] },
      { el: "F", x: 50, y: 130, lp: ["W", "S"] },
      { el: "F", x: 150, y: 130, lp: ["E", "S"] },
    ],
    bonds: [
      { from: 0, to: 1, order: 1 },
      { from: 0, to: 2, order: 1 },
      { from: 0, to: 3, order: 1 },
    ],
  },
};

// -----------------------------------------------------------
// Renderer
// -----------------------------------------------------------

function LonePair({
  cx,
  cy,
  dir,
  atomSize = 18,
}: {
  cx: number;
  cy: number;
  dir: Atom["lp"] extends Array<infer T> | undefined ? T : never;
  atomSize?: number;
}) {
  const d = atomSize + 6;
  const map: Record<string, { dx: number; dy: number; vert?: boolean }> = {
    N: { dx: 0, dy: -d, vert: false },
    S: { dx: 0, dy: d, vert: false },
    E: { dx: d, dy: 0, vert: true },
    W: { dx: -d, dy: 0, vert: true },
    NE: { dx: d * 0.7, dy: -d * 0.7 },
    NW: { dx: -d * 0.7, dy: -d * 0.7 },
    SE: { dx: d * 0.7, dy: d * 0.7 },
    SW: { dx: -d * 0.7, dy: d * 0.7 },
  };
  const m = map[dir];
  const gap = 4;
  const horizontal = m.vert !== true && (dir === "N" || dir === "S" || dir === "NE" || dir === "NW" || dir === "SE" || dir === "SW");
  return (
    <g fill="#0f172a">
      <circle
        cx={cx + m.dx - (horizontal ? gap : 0)}
        cy={cy + m.dy - (horizontal ? 0 : gap)}
        r={1.8}
      />
      <circle
        cx={cx + m.dx + (horizontal ? gap : 0)}
        cy={cy + m.dy + (horizontal ? 0 : gap)}
        r={1.8}
      />
    </g>
  );
}

function Bond({
  a,
  b,
  order,
  atomR = 14,
}: {
  a: Atom;
  b: Atom;
  order: 1 | 2 | 3;
  atomR?: number;
}) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.hypot(dx, dy);
  if (len === 0) return null;
  const ux = dx / len;
  const uy = dy / len;
  // shorten so bond doesn't collide with letters
  const x1 = a.x + ux * atomR;
  const y1 = a.y + uy * atomR;
  const x2 = b.x - ux * atomR;
  const y2 = b.y - uy * atomR;
  // perpendicular offset for multiple bonds
  const px = -uy;
  const py = ux;
  const stroke = "#334155";
  const sw = 2;
  if (order === 1) {
    return <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={stroke} strokeWidth={sw} strokeLinecap="round" />;
  }
  if (order === 2) {
    const off = 3;
    return (
      <g stroke={stroke} strokeWidth={sw} strokeLinecap="round">
        <line x1={x1 + px * off} y1={y1 + py * off} x2={x2 + px * off} y2={y2 + py * off} />
        <line x1={x1 - px * off} y1={y1 - py * off} x2={x2 - px * off} y2={y2 - py * off} />
      </g>
    );
  }
  const off = 4;
  return (
    <g stroke={stroke} strokeWidth={sw} strokeLinecap="round">
      <line x1={x1 + px * off} y1={y1 + py * off} x2={x2 + px * off} y2={y2 + py * off} />
      <line x1={x1} y1={y1} x2={x2} y2={y2} />
      <line x1={x1 - px * off} y1={y1 - py * off} x2={x2 - px * off} y2={y2 - py * off} />
    </g>
  );
}

export function LewisStructure({
  name,
  width = 260,
  height = 200,
  label,
}: {
  name: keyof typeof SPECS | string;
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
    <figure className="my-4 inline-flex flex-col items-center rounded-xl border border-slate-200 bg-white p-3">
      <svg
        viewBox="0 0 200 160"
        width={width}
        height={height}
        role="img"
        aria-label={label ?? spec.caption ?? String(name)}
      >
        {spec.bonds.map((b, i) => (
          <Bond key={i} a={spec.atoms[b.from]} b={spec.atoms[b.to]} order={b.order} />
        ))}
        {spec.atoms.map((atom, i) => (
          <g key={i}>
            {atom.lp?.map((dir, j) => (
              <LonePair key={j} cx={atom.x} cy={atom.y} dir={dir} />
            ))}
            <rect
              x={atom.x - 11}
              y={atom.y - 11}
              width={22}
              height={22}
              fill="white"
              opacity={0.95}
            />
            <text
              x={atom.x}
              y={atom.y + 5}
              textAnchor="middle"
              fontSize={15}
              fontWeight={600}
              fontFamily="ui-sans-serif, system-ui, sans-serif"
              fill="#0f172a"
            >
              {atom.el}
            </text>
            {atom.charge && (
              <text
                x={atom.x + 13}
                y={atom.y - 8}
                textAnchor="start"
                fontSize={10}
                fontWeight={600}
                fill="#0f172a"
              >
                {atom.charge}
              </text>
            )}
          </g>
        ))}
        {spec.overallCharge && (
          <g>
            <rect x={175} y={5} width={22} height={22} rx={3} fill="none" stroke="#0f172a" strokeWidth={1.2} />
            <text x={186} y={21} textAnchor="middle" fontSize={13} fontWeight={600} fill="#0f172a">
              {spec.overallCharge}
            </text>
          </g>
        )}
      </svg>
      {(label ?? spec.caption) && (
        <figcaption className="mt-1 text-xs text-slate-600">{label ?? spec.caption}</figcaption>
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
