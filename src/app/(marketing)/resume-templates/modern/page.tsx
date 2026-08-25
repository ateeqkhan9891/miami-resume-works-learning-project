import ResumeTemplateRenderer from "@/components/templates/ResumeTemplateRenderer";
import { demoResume } from "@/data/demo-resume";

export default function ModernTemplatePage() {
  return (
    <main className="min-h-screen bg-slate-100 px-6 py-12">
      <ResumeTemplateRenderer resume={demoResume} />
    </main>
  );
}