export type SkillKey =
  | "foundations"
  | "candlesticks"
  | "market_structure"
  | "technical_analysis"
  | "price_action"
  | "risk"
  | "strategy"
  | "psychology"
  | "backtesting"
  | "professional";

export const SKILL_LABELS: Record<SkillKey, string> = {
  foundations: "الأساسيات",
  candlesticks: "الشموع اليابانية",
  market_structure: "هيكل السوق",
  technical_analysis: "التحليل الفني",
  price_action: "الحركة السعرية",
  risk: "إدارة المخاطر",
  strategy: "الاستراتيجيات",
  psychology: "علم النفس",
  backtesting: "الاختبار الخلفي",
  professional: "الاحتراف",
};

export type Question =
  | {
      id: string;
      type: "mcq";
      prompt: string;
      options: string[];
      answer: number;
      explanation: string;
    }
  | {
      id: string;
      type: "tf";
      prompt: string;
      answer: boolean;
      explanation: string;
    }
  | {
      id: string;
      type: "calc";
      prompt: string;
      answer: number;
      tolerance?: number;
      unit?: string;
      explanation: string;
    }
  | {
      id: string;
      type: "chart";
      prompt: string;
      chart: ChartSpec;
      answer: string;
      explanation: string;
    };

export type ChartZone = {
  id: string;
  label: string;
  /** نسبة من ارتفاع الرسم (0 = الأعلى، 1 = الأسفل) */
  from: number;
  to: number;
  /** نطاق أفقي اختياري بالنسبة المئوية */
  xFrom?: number;
  xTo?: number;
};

export type ChartSpec = {
  seed: number;
  bias: "up" | "down" | "range";
  candles?: number;
  zones: ChartZone[];
};

export type Lesson = {
  slug: string;
  title: string;
  objective: string;
  explanation: string;
  keyPoints: string[];
  skill: SkillKey;
  xp?: number;
  chart?: ChartSpec;
  exercise?: string;
  questions: Question[];
};

export type Course = {
  slug: string;
  order: number;
  title: string;
  subtitle: string;
  skill: SkillKey;
  icon: string;
  lessons: Lesson[];
};
