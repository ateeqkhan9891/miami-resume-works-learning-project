
import type { Resume } from "@/types/resume";

interface ExecutiveSkillsProps {
  skills: Resume["skills"];
}

export default function ExecutiveSkills({
  skills,
}: ExecutiveSkillsProps) {
  if (!skills.length) return null;

  return (
    <div className="flex flex-wrap gap-1.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="
            rounded-sm
            border border-slate-200
            bg-slate-50
            px-1.5 py-1
            font-sans text-[6.5px]
            font-medium leading-none
            text-slate-700
          "
        >
          {skill}
        </span>
      ))}
    </div>
  );
}