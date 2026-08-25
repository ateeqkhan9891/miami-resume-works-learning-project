import type { Resume } from "@/types/resume";

import ModernResume from "@/components/templates/resumes/modern/ModernResume";
import CreativeResume from "@/components/templates/resumes/creative/CreativeResume";
import ExecutiveResume from "./resumes/executive/ExecutiveResume";
import MinimalResume from "@/components/templates/resumes/minimal/MinimalResume";

interface ResumeTemplateRendererProps {
  resume: Resume;
}

export default function ResumeTemplateRenderer({
  resume,
}: ResumeTemplateRendererProps) {
  switch (resume.templateId) {
    case "modern-01":
      return <ModernResume resume={resume} />;

    case "creative-01":
      return <CreativeResume resume={resume} />;

    case "professional-01":
      return <ExecutiveResume resume={resume} />

    case "simple-01":
      return <MinimalResume resume={resume} />

    default:
      return <ModernResume resume={resume} />;
  }
}