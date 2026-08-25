import { resumeTemplates } from "@/data/resume-templates";
import TemplateCard from "@/components/templates/TemplateCard";

export default function TemplateGrid() {
  return (
    <section className="px-4 lg:px-6">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {resumeTemplates.map((template) => (
          <TemplateCard
            key={template.id}
            template={template}
          />
        ))}
      </div>
    </section>
  );
}