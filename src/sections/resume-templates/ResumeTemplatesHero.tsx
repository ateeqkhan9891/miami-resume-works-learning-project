import Link from "next/link";
import {
  ArrowRight,
  Check,
  Sparkles,
  FileText,
  Download,
} from "lucide-react";

import ResumeTemplateRenderer from "@/components/templates/ResumeTemplateRenderer";
import { demoResume } from "@/data/demo-resume";

import BackgroundPattern from "@/components/marketing/BackgroundPattern";

export default function ResumeHeroSection() {
  return (
    <section className="relative overflow-hidden bg-white py-20 text-slate-950 sm:py-28 lg:py-32">
      {/* Subtle dot background */}
      {/* <BackgroundPattern /> */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(15,23,42,0.10) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
          maskImage:
            "linear-gradient(to bottom, black 0%, black 55%, transparent 100%)",
        }}
      />

      {/* Soft ambient glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-180px] h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-40 top-1/3 h-[420px] w-[420px] rounded-full bg-emerald-50/80 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-12 lg:gap-16">
          {/* LEFT */}
          <div className="flex flex-col items-start lg:col-span-6">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3.5 py-1.5 text-xs font-semibold text-emerald-700">
              <Sparkles className="size-3.5" />

              <span>Professionally designed templates</span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 max-w-2xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
              Find a resume template that{" "}
              <span className="text-emerald-600">
                fits your career.
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base leading-7 text-slate-500 sm:text-lg">
              Choose from professional, modern, creative, and simple resume
              designs. Customize your resume directly in the editor and
              download a polished PDF when you're ready.
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#templates"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 text-sm font-semibold text-white shadow-sm transition-all hover:bg-emerald-700 hover:shadow-md active:scale-[0.98]"
              >
                Browse templates
                <ArrowRight className="size-4" />
              </Link>

              <Link
                href="/signup"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:border-slate-300 hover:bg-slate-50 active:scale-[0.98]"
              >
                Create your resume
              </Link>
            </div>

            {/* Trust indicators */}
            <div className="mt-9 grid grid-cols-1 gap-3 border-t border-slate-200 pt-7 sm:grid-cols-3 sm:gap-5">
              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Check className="size-4 shrink-0 text-emerald-600" />
                ATS-friendly
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Check className="size-4 shrink-0 text-emerald-600" />
                Easy to customize
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                <Check className="size-4 shrink-0 text-emerald-600" />
                PDF ready
              </div>
            </div>
          </div>

          {/* RIGHT — RESUME PREVIEW */}
          <div className="relative flex justify-center lg:col-span-6">
            {/* Soft preview glow */}
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-100/70 blur-3xl"
            />

            <div className="relative w-full max-w-[480px]">
              {/* Top floating badge */}
              <div className="absolute -left-5 -top-7 z-20 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-2.5">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
                    <FileText className="size-4" />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Template style
                    </p>

                    <p className="text-xs font-semibold text-slate-900">
                      Modern & Professional
                    </p>
                  </div>
                </div>
              </div>

              {/* Resume frame */}
              <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-2.5 shadow-2xl shadow-slate-300/40">
                <div className="max-h-[580px] overflow-hidden rounded-xl bg-white">
                  <div className="pointer-events-none w-[210mm] origin-top-left scale-[0.58] sm:scale-[0.62]">
                    <ResumeTemplateRenderer resume={demoResume} />
                  </div>
                </div>
              </div>

              {/* Bottom floating badge */}
              <div className="absolute -bottom-5 -right-5 z-20 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Download className="size-4" />
                  </div>

                  <div>
                    <p className="text-[11px] font-medium text-slate-400">
                      Export your resume
                    </p>

                    <p className="text-xs font-semibold text-slate-900">
                      Print-ready PDF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}