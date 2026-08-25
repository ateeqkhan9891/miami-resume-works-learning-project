import ResumeTemplateRenderer from "@/components/templates/ResumeTemplateRenderer";
import { demoResume } from "@/data/demo-resume";

export default function ResumeTemplatesHeroPreview() {
  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      {/* Background glow */}
      <div className="absolute -inset-10 -z-10 rounded-full bg-emerald-100/60 blur-3xl" />

      {/* Floating UI */}
      <div className="absolute -left-6 top-16 z-20 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
        <p className="text-xs font-medium text-slate-500">
          Professional template
        </p>

        <p className="mt-1 text-sm font-semibold text-slate-900">
          Modern Resume
        </p>
      </div>

      {/* Resume */}
      <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl shadow-slate-300/40">
        <div className="overflow-hidden rounded-xl">
          <ResumeTemplateRenderer resume={demoResume} />
        </div>
      </div>

      {/* Bottom floating card */}
      <div className="absolute -bottom-5 -right-5 z-20 hidden rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-lg sm:block">
        <div className="flex items-center gap-3">
          <div className="flex size-8 items-center justify-center rounded-lg bg-emerald-50 text-xs font-semibold text-emerald-700">
            ✓
          </div>

          <div>
            <p className="text-xs font-medium text-slate-500">
              Ready to customize
            </p>

            <p className="text-sm font-semibold text-slate-900">
              Your resume
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}