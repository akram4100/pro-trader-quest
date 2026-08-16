import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  BookOpen,
  CheckCircle2,
  Lock,
  PlayCircle,
  ShieldCheck,
  Target,
  TrendingUp,
} from "lucide-react";

export const Route = createFileRoute("/learn")({
  component: LearningPath,
});

const levels = [
  {
    number: 1,
    title: "أساسيات التداول",
    description: "افهم الأسواق، الأصول، الأوامر، والمنصات.",
    lessons: 14,
    icon: BookOpen,
    color: "bg-blue-500/10 text-blue-500",
    available: true,
  },
  {
    number: 2,
    title: "قراءة الرسوم البيانية",
    description: "تعلم الشموع، الاتجاهات، الدعوم والمقاومات.",
    lessons: 13,
    icon: TrendingUp,
    color: "bg-emerald-500/10 text-emerald-500",
    available: true,
  },
  {
    number: 3,
    title: "التحليل الفني",
    description: "المؤشرات، الأنماط، والزخم.",
    lessons: 8,
    icon: Target,
    color: "bg-purple-500/10 text-purple-500",
    available: true,
  },
  {
    number: 4,
    title: "Price Action",
    description: "اقرأ حركة السعر بدون الاعتماد الكامل على المؤشرات.",
    lessons: 9,
    icon: TrendingUp,
    color: "bg-orange-500/10 text-orange-500",
    available: true,
  },
  {
    number: 5,
    title: "إدارة المخاطر",
    description: "احمِ رأس مالك وتعلم حساب حجم الصفقة ووقف الخسارة.",
    lessons: 10,
    icon: ShieldCheck,
    color: "bg-red-500/10 text-red-500",
    available: true,
  },
  {
    number: 6,
    title: "الاستراتيجيات",
    description: "تعلم كيف تبني استراتيجية تداول قابلة للاختبار.",
    lessons: 7,
    icon: Target,
    color: "bg-cyan-500/10 text-cyan-500",
    available: true,
  },
  {
    number: 7,
    title: "علم نفس المتداول",
    description: "السيطرة على الخوف والطمع والانضباط أثناء التداول.",
    lessons: 7,
    icon: ShieldCheck,
    color: "bg-pink-500/10 text-pink-500",
    available: true,
  },
  {
    number: 8,
    title: "Backtesting",
    description: "اختبر استراتيجيتك على البيانات التاريخية قبل المخاطرة.",
    lessons: 6,
    icon: Target,
    color: "bg-yellow-500/10 text-yellow-500",
    available: true,
  },
  {
    number: 9,
    title: "المتداول المحترف",
    description: "حوّل معرفتك إلى نظام تداول احترافي ومنضبط.",
    lessons: 7,
    icon: TrendingUp,
    color: "bg-green-500/10 text-green-500",
    available: true,
  },
];

function LearningPath() {
  const totalLessons = levels.reduce((sum, level) => sum + level.lessons, 0);

  return (
    <main dir="rtl" className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-6xl px-5 py-8 md:px-8">
        <header className="mb-10 flex items-center justify-between gap-4">
          <div>
            <Link
              to="/"
              className="mb-5 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4 rotate-180" />
              الرئيسية
            </Link>

            <h1 className="text-3xl font-bold md:text-4xl">
              مسار المتداول المحترف
            </h1>

            <p className="mt-3 text-muted-foreground">
              {levels.length} مستويات • {totalLessons} درسًا تفاعليًا
            </p>
          </div>

          <div className="hidden rounded-2xl border bg-card px-5 py-4 text-center sm:block">
            <div className="text-2xl font-bold text-primary">0%</div>
            <div className="text-xs text-muted-foreground">تقدمك</div>
          </div>
        </header>

        <div className="mb-10 rounded-3xl border bg-card p-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>

            <div>
              <h2 className="text-lg font-bold">هدفك</h2>
              <p className="mt-1 text-sm leading-6 text-muted-foreground">
                ابدأ من الأساسيات وتقدم مستوى بعد مستوى. لا نريد منك حفظ
                المعلومات فقط؛ ستتعلم من خلال الأسئلة والتمارين والتطبيق.
              </p>
            </div>
          </div>
        </div>

        <div className="relative space-y-5">
          <div className="absolute right-7 top-8 hidden h-[calc(100%-4rem)] w-px bg-border md:block" />

          {levels.map((level) => {
            const Icon = level.icon;

            return (
              <div
                key={level.number}
                className="relative rounded-3xl border bg-card p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md md:p-6"
              >
                <div className="flex flex-col gap-5 md:flex-row md:items-center">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-background ring-8 ring-background">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl ${level.color}`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">
                        المستوى {level.number}
                      </span>

                      {level.number === 1 && (
                        <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600">
                          البداية
                        </span>
                      )}
                    </div>

                    <h2 className="text-xl font-bold">{level.title}</h2>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {level.description}
                    </p>

                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1.5">
                        <BookOpen className="h-4 w-4" />
                        {level.lessons} درس
                      </span>

                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="h-4 w-4" />
                        0% مكتمل
                      </span>
                    </div>
                  </div>

                  <Link
                    to="/learn/$levelId"
                    params={{ levelId: String(level.number) }}
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
                  >
                    <PlayCircle className="h-4 w-4" />
                    ابدأ المستوى
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 rounded-3xl border border-dashed p-6 text-center">
          <Lock className="mx-auto h-7 w-7 text-muted-foreground" />

          <h3 className="mt-3 font-bold">التقدم محفوظ</h3>

          <p className="mt-2 text-sm text-muted-foreground">
            عند تفعيل الحساب سنحفظ الدروس المكتملة، نتائج الاختبارات، XP
            والشارات الخاصة بك.
          </p>
        </div>
      </div>
    </main>
  );
}
