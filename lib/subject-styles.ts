import {
  Atom,
  Beaker,
  BookOpen,
  Feather,
  FlaskConical,
  Landmark,
  Leaf,
  Sigma,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type SubjectStyle = {
  Icon: LucideIcon;
  gradient: string;
  ring: string;
  iconBg: string;
};

export const subjectStyles: Record<string, SubjectStyle> = {
  "ap-micro": {
    Icon: TrendingUp,
    gradient: "from-blue-500 via-indigo-500 to-violet-500",
    ring: "ring-blue-200",
    iconBg: "bg-white/20",
  },
  "ap-bio": {
    Icon: Leaf,
    gradient: "from-emerald-500 via-green-500 to-teal-500",
    ring: "ring-emerald-200",
    iconBg: "bg-white/20",
  },
  "ap-physics-1": {
    Icon: Atom,
    gradient: "from-amber-500 via-orange-500 to-rose-500",
    ring: "ring-amber-200",
    iconBg: "bg-white/20",
  },
  "ap-chem": {
    Icon: FlaskConical,
    gradient: "from-fuchsia-500 via-purple-500 to-pink-500",
    ring: "ring-fuchsia-200",
    iconBg: "bg-white/20",
  },
  "ap-calculus-bc": {
    Icon: Sigma,
    gradient: "from-sky-500 via-cyan-500 to-teal-500",
    ring: "ring-sky-200",
    iconBg: "bg-white/20",
  },
  "ap-eng-lang": {
    Icon: Feather,
    gradient: "from-stone-600 via-zinc-700 to-slate-800",
    ring: "ring-stone-200",
    iconBg: "bg-white/20",
  },
  apush: {
    Icon: Landmark,
    gradient: "from-red-600 via-rose-700 to-amber-800",
    ring: "ring-red-200",
    iconBg: "bg-white/20",
  },
  ukcho: {
    Icon: Beaker,
    gradient: "from-blue-700 via-indigo-700 to-slate-900",
    ring: "ring-blue-200",
    iconBg: "bg-white/20",
  },
};

export const defaultSubjectStyle: SubjectStyle = {
  Icon: BookOpen,
  gradient: "from-slate-600 via-slate-700 to-slate-800",
  ring: "ring-slate-200",
  iconBg: "bg-white/20",
};

export function getSubjectStyle(slug: string): SubjectStyle {
  return subjectStyles[slug] ?? defaultSubjectStyle;
}
