"use client";

import "katex/dist/katex.min.css";
import "katex/contrib/mhchem/mhchem.js";
import { BlockMath, InlineMath } from "react-katex";
import { MoleculeDiagram, MoleculeRow } from "./MoleculeDiagram";
import { Mol3DViewer } from "./Mol3DViewer";
import { useT } from "./LocaleProvider";
import { SupplyDemandChart } from "./SupplyDemandChart";
import { ProductionPossibilitiesChart } from "./ProductionPossibilitiesChart";
import {
  CompetitiveLaborMarketChart,
  LaborMarketShiftChart,
  LaborMarketTaxChart,
  MonopolisticCompetitionLRChart,
  MonopolisticCompetitionSRChart,
  MonopolyFirmChart,
  MonopsonyChart,
  PerfectCompetitionFirmChart,
} from "./MarketStructureCharts";
import {
  LorenzCurveChart,
  NegativeExternalityChart,
  PositiveExternalityChart,
} from "./MarketFailureCharts";
import type { NoteBlock } from "@/lib/content";

export function Highlighted({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <mark
              key={i}
              className="rounded bg-blue-50 px-1 font-semibold text-blue-900"
            >
              {part.slice(2, -2)}
            </mark>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function NoteBlockRenderer({ block }: { block: NoteBlock }) {
  const t = useT();
  switch (block.kind) {
    case "heading":
      return <h2 className="mt-8 mb-2 text-xl font-semibold text-slate-900">{t(block.text)}</h2>;
    case "paragraph":
      return <p className="mt-4"><Highlighted text={t(block.text)} /></p>;
    case "list":
      return (
        <ul className="mt-3 list-disc space-y-1.5 pl-6">
          {block.items.map((item, i) => (
            <li key={i}><Highlighted text={t(item)} /></li>
          ))}
        </ul>
      );
    case "math":
      return (
        <figure className="my-5 overflow-x-auto rounded-lg border border-slate-200 bg-slate-50/50 px-4 py-4">
          <BlockMath math={block.tex} />
          {block.caption && (
            <figcaption className="mt-2 text-center text-xs text-slate-500">{t(block.caption)}</figcaption>
          )}
        </figure>
      );
    case "math-inline-line":
      return (
        <p className="mt-4">
          {block.segments.map((seg, i) =>
            seg.t === "text"
              ? <span key={i}><Highlighted text={t(seg.text)} /></span>
              : <InlineMath key={i} math={seg.tex} />
          )}
        </p>
      );
    case "molecule":
      return (
        <div className="flex justify-center">
          <MoleculeDiagram
            smiles={block.smiles}
            width={block.width}
            height={block.height}
            label={block.label ? t(block.label) : undefined}
          />
        </div>
      );
    case "molecule-row":
      return (
        <MoleculeRow
          width={block.width}
          height={block.height}
          items={block.items.map((it) => ({ smiles: it.smiles, label: it.label ? t(it.label) : undefined }))}
        />
      );
    case "mol3d":
      return (
        <div className="flex justify-center">
          <Mol3DViewer geometry={block.geometry} />
        </div>
      );
    case "callout":
      return (
        <div className="mt-5 rounded-lg border-l-4 border-blue-500 bg-blue-50 p-4">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-700">
            {t(block.label)}
          </div>
          <p className="mt-1 text-sm text-slate-800"><Highlighted text={t(block.text)} /></p>
        </div>
      );
    case "chart":
      switch (block.chartType) {
        case "ppc":
          return <ProductionPossibilitiesChart />;
        case "perfect-comp-firm":
          return <PerfectCompetitionFirmChart />;
        case "monopoly":
          return <MonopolyFirmChart />;
        case "monop-comp-sr":
          return <MonopolisticCompetitionSRChart />;
        case "monop-comp-lr":
          return <MonopolisticCompetitionLRChart />;
        case "monopsony":
          return <MonopsonyChart />;
        case "labor-market":
          return <CompetitiveLaborMarketChart />;
        case "labor-market-shift":
          return <LaborMarketShiftChart />;
        case "labor-market-tax":
          return <LaborMarketTaxChart />;
        case "negative-externality":
          return <NegativeExternalityChart />;
        case "positive-externality":
          return <PositiveExternalityChart />;
        case "lorenz-curve":
          return <LorenzCurveChart />;
        default:
          return <SupplyDemandChart />;
      }
    case "table":
      return (
        <figure className="my-6 overflow-hidden rounded-xl border border-slate-200 bg-white">
          <div className="border-b border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700">
            {t(block.caption)}
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="bg-slate-50/60 text-xs font-semibold uppercase tracking-wide text-slate-600">
                  {block.columns.map((col, i) => (
                    <th key={i} className="px-4 py-2.5">
                      {t(col)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {block.rows.map((row, rIdx) => {
                  const isLast = rIdx === block.rows.length - 1;
                  const highlighted = block.highlightLastRow && isLast;
                  return (
                    <tr
                      key={rIdx}
                      className={
                        highlighted
                          ? "border-t border-slate-200 bg-blue-50/70 font-semibold text-slate-900"
                          : "border-t border-slate-200 text-slate-800"
                      }
                    >
                      {row.map((cell, cIdx) => (
                        <td key={cIdx} className="px-4 py-2.5">
                          {t(cell)}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </figure>
      );
  }
}
