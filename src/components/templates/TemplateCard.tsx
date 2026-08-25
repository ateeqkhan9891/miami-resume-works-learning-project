import type { ResumeTemplate } from "@/types/resume-template";

import { previewResume } from "@/data/resume-preview";

import ResumeTemplateRenderer from "@/components/templates/ResumeTemplateRenderer";

interface TemplateCardProps {
  template: ResumeTemplate;
}

export default function TemplateCard({
  template,
}: TemplateCardProps) {
  const resume = {
    ...previewResume,
    templateId: template.id,
  };

  return (
    <article className="group flex flex-col rounded-2xl p-1">
      {/* Template Preview */}
      <div
        className="
          relative cursor-pointer overflow-hidden rounded-2xl
          bg-gradient-to-br
          from-stone-100
          via-white
          to-slate-200
          p-2

          ring-1 ring-slate-200/80
          shadow-sm shadow-slate-900/5

          transition-all duration-500 ease-out

          group-hover:-translate-y-1.5
          group-hover:scale-[1.02]

          group-hover:from-stone-200
          group-hover:via-white
          group-hover:to-slate-300

          group-hover:ring-slate-300
          group-hover:shadow-[0_25px_60px_-18px_rgba(15,23,42,0.30)]
        "
      >
        <div
          className="
            transition-transform
            duration-500
            ease-out
            group-hover:scale-[1.015]
          "
        >
          <ResumeTemplateRenderer resume={resume} />
        </div>
      </div>

      {/* Template Name */}
      <h3
        className="
          mt-4
          text-center
          font-sans
          text-sm
          font-bold
          tracking-tight
          text-slate-900

          underline
          decoration-slate-300
          underline-offset-4

          transition-all
          duration-300

          group-hover:decoration-slate-500
        "
      >
        {template.name}
      </h3>
    </article>
  );
}