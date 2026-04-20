import type { Bilingual } from "./content";

export type PastPaperSection = "mcq" | "frq" | "ms";

export type PastPaper = {
  id: string;
  year: number;
  section: PastPaperSection;
  title: Bilingual;
  file: string;
};

export type PastPaperSubject = {
  slug: string;
  title: Bilingual;
  description: Bilingual;
  years: number[];
  papers: PastPaper[];
};

export const sectionLabels: Record<PastPaperSection, Bilingual> = {
  mcq: { en: "Multiple Choice", zh: "选择题" },
  frq: { en: "Free Response", zh: "自由回答题" },
  ms: { en: "Mark Scheme", zh: "评分标准" },
};

export const pastPaperSubjects: PastPaperSubject[] = [
  {
    slug: "ap-micro",
    title: { en: "AP Microeconomics", zh: "AP 微观经济学" },
    description: {
      en: "Released exam papers for AP Microeconomics.",
      zh: "AP 微观经济学历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [
      {
        id: "ap-micro-2025-frq-set-1",
        year: 2025,
        section: "frq",
        title: { en: "2025 Free Response — Set 1", zh: "2025 自由回答题 — 第一套" },
        file: "/past-papers/ap-micro/2025/frq-set-1.pdf",
      },
      {
        id: "ap-micro-2025-frq-set-2",
        year: 2025,
        section: "frq",
        title: { en: "2025 Free Response — Set 2", zh: "2025 自由回答题 — 第二套" },
        file: "/past-papers/ap-micro/2025/frq-set-2.pdf",
      },
      {
        id: "ap-micro-2024-frq-set-1",
        year: 2024,
        section: "frq",
        title: { en: "2024 Free Response — Set 1", zh: "2024 自由回答题 — 第一套" },
        file: "/past-papers/ap-micro/2024/frq-set-1.pdf",
      },
      {
        id: "ap-micro-2024-frq-set-2",
        year: 2024,
        section: "frq",
        title: { en: "2024 Free Response — Set 2", zh: "2024 自由回答题 — 第二套" },
        file: "/past-papers/ap-micro/2024/frq-set-2.pdf",
      },
      {
        id: "ap-micro-2024-ms-set-1",
        year: 2024,
        section: "ms",
        title: { en: "2024 Mark Scheme — Set 1", zh: "2024 评分标准 — 第一套" },
        file: "/past-papers/ap-micro/2024/ms-set-1.pdf",
      },
      {
        id: "ap-micro-2024-ms-set-2",
        year: 2024,
        section: "ms",
        title: { en: "2024 Mark Scheme — Set 2", zh: "2024 评分标准 — 第二套" },
        file: "/past-papers/ap-micro/2024/ms-set-2.pdf",
      },
    ],
  },
  {
    slug: "ap-bio",
    title: { en: "AP Biology", zh: "AP 生物学" },
    description: {
      en: "Released exam papers for AP Biology.",
      zh: "AP 生物学历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [],
  },
  {
    slug: "ap-physics-1",
    title: { en: "AP Physics 1", zh: "AP 物理 1" },
    description: {
      en: "Released exam papers for AP Physics 1.",
      zh: "AP 物理 1 历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [],
  },
  {
    slug: "ap-chem",
    title: { en: "AP Chemistry", zh: "AP 化学" },
    description: {
      en: "Released exam papers for AP Chemistry.",
      zh: "AP 化学历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [],
  },
  {
    slug: "ap-calculus-bc",
    title: { en: "AP Calculus BC", zh: "AP 微积分 BC" },
    description: {
      en: "Released exam papers for AP Calculus BC.",
      zh: "AP 微积分 BC 历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [],
  },
  {
    slug: "ap-eng-lang",
    title: { en: "AP English Language & Composition", zh: "AP 英语语言与写作" },
    description: {
      en: "Released exam papers for AP English Language & Composition.",
      zh: "AP 英语语言与写作历年真题。",
    },
    years: [2025, 2024, 2023, 2022, 2021, 2020, 2019],
    papers: [],
  },
];

export function getPastPaperSubject(slug: string): PastPaperSubject | undefined {
  return pastPaperSubjects.find((s) => s.slug === slug);
}

export function papersFor(
  subject: PastPaperSubject,
  year: number,
  section: PastPaperSection,
): PastPaper[] {
  return subject.papers.filter((p) => p.year === year && p.section === section);
}
