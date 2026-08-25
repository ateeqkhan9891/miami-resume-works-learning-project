import type { ResumeColor } from "@/types/resume";

interface ResumeColorTheme {
  accentText: string;
  accentBorder: string;
  accentBg: string;
  ring: string;
}

const themes: Record<ResumeColor, ResumeColorTheme> = {
  black: {
    accentText: "text-slate-900",
    accentBorder: "border-slate-900",
    accentBg: "bg-slate-900",
    ring: "ring-slate-200",
  },
  emerald: {
    accentText: "text-emerald-700",
    accentBorder: "border-emerald-700",
    accentBg: "bg-emerald-700",
    ring: "ring-emerald-100",
  },
  navy: {
    accentText: "text-blue-950",
    accentBorder: "border-blue-950",
    accentBg: "bg-blue-950",
    ring: "ring-blue-100",
  },
  burgundy: {
    accentText: "text-rose-900",
    accentBorder: "border-rose-900",
    accentBg: "bg-rose-900",
    ring: "ring-rose-100",
  },
  gray: {
    accentText: "text-slate-600",
    accentBorder: "border-slate-500",
    accentBg: "bg-slate-500",
    ring: "ring-slate-200",
  },
};

export function getResumeColorTheme(color: ResumeColor): ResumeColorTheme {
  return themes[color] ?? themes.black;
}