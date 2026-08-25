import type { Resume } from "@/types/resume";
import { getResumeColorTheme } from "@/lib/resume-colors";

import ModernHeader from "./ModernHeader";
import ModernSection from "./ModernSection";
import ModernExperience from "./ModernExperience";
import ModernEducation from "./ModernEducation";
import ModernSkills from "./ModernSkills";
import ModernLanguages from "./ModernLanguages";

interface ModernResumeProps {
  resume: Resume;
}

export default function ModernResume({ resume }: ModernResumeProps) {
  const theme = getResumeColorTheme(resume.color);

  return (
    <article
      className="
        mx-auto aspect-[210/297] w-full max-w-[794px]
        overflow-hidden bg-white px-[38px] py-[34px]
        text-slate-700 shadow-xl
        print:max-w-none print:shadow-none
      "
    >
      <ModernHeader
        personal={resume.personal}
        photo={resume.photo}
        accentText={theme.accentText}
      />

      <div className="mt-6 grid grid-cols-[1.62fr_0.88fr] gap-8">
        <main className="min-w-0 space-y-6">
          {resume.summary && (
            <ModernSection title="Summary" accentBorder={theme.accentBorder}>
              <p className="text-[9px] leading-[1.65] text-slate-600">
                {resume.summary}
              </p>
            </ModernSection> 
          )}

          {resume.experience.length > 0 && (
            <ModernSection title="Experience" accentBorder={theme.accentBorder}>
              <ModernExperience
                experience={resume.experience}
                accentText={theme.accentText}
              />
            </ModernSection>
          )}

          {resume.education.length > 0 && (
            <ModernSection title="Education" accentBorder={theme.accentBorder}>
              <ModernEducation
                education={resume.education}
                accentBorder={theme.accentBorder}
                accentText={theme.accentText}
              />
            </ModernSection>
          )}
        </main>

        <aside className="min-w-0 space-y-6 border-l border-slate-200 pl-6">
          {resume.skills.length > 0 && (
            <ModernSection title="Skills" accentBorder={theme.accentBorder}>
              <ModernSkills skills={resume.skills} />
            </ModernSection>
          )}

          {resume.languages.length > 0 && (
            <ModernSection title="Languages" accentBorder={theme.accentBorder}>
              <ModernLanguages languages={resume.languages} />
            </ModernSection>
          )}
        </aside>
      </div>
    </article>
  );
}