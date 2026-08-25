import type { Resume } from "@/types/resume";

import { getResumeColorTheme } from "@/lib/resume-colors";

import ExecutiveHeader from "./ExecutiveHeader";
import ExecutiveSection from "./ExecutiveSection";
import ExecutiveExperience from "./ExecutiveExperience";
import ExecutiveSkills from "./ExecutiveSkills";
import ExecutiveLanguages from "./ExecutiveLanguages";
import ExecutiveAwards from "./ExecutiveAwards";
import ExecutiveAchievements from "./ExecutiveAchievements";


interface ExecutiveResumeProps {
  resume: Resume;
}

export default function ExecutiveResume({
  resume,
}: ExecutiveResumeProps) {
  const theme = getResumeColorTheme(resume.color);

  return (
    <article
      className="
        mx-auto aspect-[210/297] w-full max-w-[1200px]
        overflow-hidden bg-white px-[14px] py-[12px]
        text-slate-700 shadow-md
        transition-shadow duration-300
        hover:shadow-2xl
        print:max-w-none print:shadow-none
      "
    >
      <ExecutiveHeader
        personal={resume.personal}
        photo={resume.photo}
        accentText={theme.accentText}
      />

      <div className="mt-4 grid grid-cols-[1.62fr_0.88fr] gap-6">
        
        {/* LEFT COLUMN */}
        <main className="min-w-0 space-y-5">
          {resume.summary && (
            <ExecutiveSection
              title="Summary"
              accentBorder={theme.accentBorder}
            >
              <p className="font-sans text-[6.5px] font-normal leading-[1.55] tracking-[0.01em] text-slate-600">
                {resume.summary}
              </p>
            </ExecutiveSection>
          )}

          {resume.experience.length > 0 && (
            <ExecutiveSection
              title="Experience"
              accentBorder={theme.accentBorder}
            >
              <ExecutiveExperience
                experience={resume.experience}
                accentText={theme.accentText}
              />
            </ExecutiveSection>
          )}
        </main>

        {/* RIGHT COLUMN */}
        <aside className="min-w-0 space-y-5">
          {resume.skills.length > 0 && (
            <ExecutiveSection
              title="Skills"
              accentBorder={theme.accentBorder}
            >
              <ExecutiveSkills skills={resume.skills} />
            </ExecutiveSection>
          )}

          {resume.languages.length > 0 && (
                <ExecutiveSection
                    title="Languages"
                    accentBorder={theme.accentBorder}
                >
                    <ExecutiveLanguages languages={resume.languages} />
                </ExecutiveSection>
                )}

            {resume.awards && resume.awards.length > 0 && (
                <ExecutiveSection
                    title="Awards"
                    accentBorder={theme.accentBorder}
                >
                    <ExecutiveAwards awards={resume.awards} />
                </ExecutiveSection>
                )}

                {resume.achievements && resume.achievements.length > 0 && (
                    <ExecutiveSection
                        title="Achievements"
                        accentBorder={theme.accentBorder}
                    >
                        <ExecutiveAchievements
                        achievements={resume.achievements}
                        />
                    </ExecutiveSection>
                    )}


        </aside>

      </div>
    </article>
  );
}