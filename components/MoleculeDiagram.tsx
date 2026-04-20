"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    RDKit?: {
      get_mol: (smiles: string) => {
        get_svg: (w: number, h: number) => string;
        delete: () => void;
        is_valid: () => boolean;
      };
    };
    initRDKitModule?: () => Promise<Window["RDKit"]>;
  }
}

let rdkitPromise: Promise<Window["RDKit"]> | null = null;

function loadRDKit(): Promise<Window["RDKit"]> {
  if (typeof window === "undefined") return Promise.reject(new Error("SSR"));
  if (window.RDKit) return Promise.resolve(window.RDKit);
  if (rdkitPromise) return rdkitPromise;
  rdkitPromise = new Promise((resolve, reject) => {
    const existing = document.getElementById("rdkit-script");
    const onReady = async () => {
      try {
        if (!window.initRDKitModule) return reject(new Error("initRDKitModule missing"));
        const rdkit = await window.initRDKitModule();
        window.RDKit = rdkit;
        resolve(rdkit);
      } catch (e) {
        reject(e);
      }
    };
    if (existing) {
      existing.addEventListener("load", onReady);
      return;
    }
    const s = document.createElement("script");
    s.id = "rdkit-script";
    s.src = "https://unpkg.com/@rdkit/rdkit/dist/RDKit_minimal.js";
    s.async = true;
    s.onload = onReady;
    s.onerror = () => reject(new Error("RDKit load failed"));
    document.head.appendChild(s);
  });
  return rdkitPromise;
}

export function MoleculeDiagram({
  smiles,
  width = 320,
  height = 200,
  label,
}: {
  smiles: string;
  width?: number;
  height?: number;
  label?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    let alive = true;
    loadRDKit()
      .then((rdkit) => {
        if (!alive || !rdkit || !containerRef.current) return;
        const mol = rdkit.get_mol(smiles);
        if (!mol.is_valid()) {
          setErr(`Invalid SMILES: ${smiles}`);
          mol.delete();
          return;
        }
        const svg = mol.get_svg(width, height);
        containerRef.current.innerHTML = svg;
        mol.delete();
      })
      .catch((e) => alive && setErr(e.message ?? "render failed"));
    return () => {
      alive = false;
    };
  }, [smiles, width, height]);

  return (
    <figure className="my-4 inline-flex flex-col items-center rounded-xl border border-slate-200 bg-white px-3 py-3">
      <div
        ref={containerRef}
        className="flex items-center justify-center"
        style={{ width, height, minHeight: height }}
        aria-label={label ?? smiles}
      />
      {err && <p className="mt-1 text-xs text-red-600">{err}</p>}
      {label && !err && (
        <figcaption className="mt-1 text-xs text-slate-600">{label}</figcaption>
      )}
    </figure>
  );
}

export function MoleculeRow({
  items,
  width = 240,
  height = 160,
}: {
  items: Array<{ smiles: string; label?: string }>;
  width?: number;
  height?: number;
}) {
  return (
    <div className="my-4 flex flex-wrap items-end justify-center gap-3">
      {items.map((it, i) => (
        <MoleculeDiagram key={i} smiles={it.smiles} label={it.label} width={width} height={height} />
      ))}
    </div>
  );
}
