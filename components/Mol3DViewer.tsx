"use client";

import { useEffect, useRef } from "react";

type Geometry =
  | "linear"
  | "trigonal-planar"
  | "tetrahedral"
  | "trigonal-pyramidal"
  | "bent"
  | "trigonal-bipyramidal"
  | "octahedral"
  | "see-saw"
  | "square-planar";

type LP = { x: number; y: number; z: number };

const MOL_DATA: Record<Geometry, { xyz: string; label: string; lonePairs?: LP[] }> = {
  linear: {
    label: "Linear (CO₂)",
    xyz: `3
CO2
C 0.000  0.000  0.000
O 1.160  0.000  0.000
O -1.160 0.000  0.000`,
  },
  "trigonal-planar": {
    label: "Trigonal planar (BF₃)",
    xyz: `4
BF3
B  0.000  0.000  0.000
F  1.310  0.000  0.000
F -0.655  1.135  0.000
F -0.655 -1.135  0.000`,
  },
  tetrahedral: {
    label: "Tetrahedral (CH₄)",
    xyz: `5
CH4
C  0.000  0.000  0.000
H  0.629  0.629  0.629
H -0.629 -0.629  0.629
H -0.629  0.629 -0.629
H  0.629 -0.629 -0.629`,
  },
  "trigonal-pyramidal": {
    label: "Trigonal pyramidal (NH₃)",
    xyz: `4
NH3
N  0.000  0.000  0.000
H  0.937  0.000 -0.381
H -0.469  0.811 -0.381
H -0.469 -0.811 -0.381`,
    lonePairs: [{ x: 0, y: 0, z: 0.55 }],
  },
  bent: {
    label: "Bent (H₂O)",
    xyz: `3
H2O
O  0.000  0.000  0.000
H  0.757  0.586  0.000
H -0.757  0.586  0.000`,
    lonePairs: [
      { x: 0, y: -0.45, z: 0.65 },
      { x: 0, y: -0.45, z: -0.65 },
    ],
  },
  "trigonal-bipyramidal": {
    label: "Trigonal bipyramidal (PCl₅)",
    xyz: `6
PCl5
P  0.000  0.000  0.000
Cl 0.000  0.000  2.020
Cl 0.000  0.000 -2.020
Cl 2.020  0.000  0.000
Cl -1.010  1.750  0.000
Cl -1.010 -1.750  0.000`,
  },
  octahedral: {
    label: "Octahedral (SF₆)",
    xyz: `7
SF6
S  0.000  0.000  0.000
F  1.560  0.000  0.000
F -1.560  0.000  0.000
F  0.000  1.560  0.000
F  0.000 -1.560  0.000
F  0.000  0.000  1.560
F  0.000  0.000 -1.560`,
  },
  "see-saw": {
    label: "See-saw (SF₄)",
    xyz: `5
SF4
S  0.000  0.000  0.000
F  0.000  0.000  1.646
F  0.000  0.000 -1.646
F  1.550  0.000  0.000
F -0.775  1.342  0.000`,
    lonePairs: [{ x: -0.55, y: -0.95, z: 0 }],
  },
  "square-planar": {
    label: "Square planar (XeF₄)",
    xyz: `5
XeF4
Xe 0.000  0.000  0.000
F  1.953  0.000  0.000
F -1.953  0.000  0.000
F  0.000  1.953  0.000
F  0.000 -1.953  0.000`,
    lonePairs: [
      { x: 0, y: 0, z: 0.8 },
      { x: 0, y: 0, z: -0.8 },
    ],
  },
};

declare global {
  interface Window {
    $3Dmol?: {
      createViewer: (el: HTMLElement, opts?: Record<string, unknown>) => {
        addModel: (data: string, fmt: string) => unknown;
        setStyle: (sel: Record<string, unknown>, style: Record<string, unknown>) => void;
        zoomTo: () => void;
        render: () => void;
        spin: (axis: string) => void;
        clear: () => void;
        addSphere: (spec: Record<string, unknown>) => void;
        addLabel: (text: string, opts: Record<string, unknown>) => void;
      };
    };
  }
}

let scriptPromise: Promise<void> | null = null;
function load3Dmol(): Promise<void> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.$3Dmol) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise((resolve, reject) => {
    const s = document.createElement("script");
    s.src = "https://3dmol.org/build/3Dmol-min.js";
    s.async = true;
    s.onload = () => resolve();
    s.onerror = () => reject(new Error("3Dmol load failed"));
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export function Mol3DViewer({ geometry, spin = true }: { geometry: Geometry; spin?: boolean }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let viewer: ReturnType<NonNullable<Window["$3Dmol"]>["createViewer"]> | null = null;
    let alive = true;
    load3Dmol().then(() => {
      if (!alive || !ref.current || !window.$3Dmol) return;
      viewer = window.$3Dmol.createViewer(ref.current, { backgroundColor: "white" });
      viewer.addModel(MOL_DATA[geometry].xyz, "xyz");
      viewer.setStyle({}, { stick: { radius: 0.12 }, sphere: { scale: 0.28 } });
      const lps = MOL_DATA[geometry].lonePairs;
      if (lps) {
        for (const lp of lps) {
          viewer.addSphere({
            center: { x: lp.x, y: lp.y, z: lp.z },
            radius: 0.42,
            color: "#d946ef",
            opacity: 0.45,
          });
          viewer.addLabel("lp", {
            position: { x: lp.x, y: lp.y, z: lp.z },
            fontSize: 11,
            fontColor: "#6b21a8",
            backgroundOpacity: 0,
            showBackground: false,
            inFront: true,
          });
        }
      }
      viewer.zoomTo();
      if (spin) viewer.spin("y");
      viewer.render();
    });
    return () => {
      alive = false;
      viewer?.clear();
    };
  }, [geometry, spin]);

  return (
    <figure className="my-4 flex flex-col items-center rounded-xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-2">
      <div ref={ref} style={{ width: 320, height: 260, position: "relative" }} />
      <figcaption className="mt-1 text-xs text-slate-600">
        {MOL_DATA[geometry].label}
        {MOL_DATA[geometry].lonePairs && (
          <span className="ml-2 text-[11px] text-fuchsia-700">· purple lobes = lone pairs</span>
        )}
      </figcaption>
    </figure>
  );
}
