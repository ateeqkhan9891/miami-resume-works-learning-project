interface ModernSkillsProps {
  skills: string[];
}

export default function ModernSkills({ skills }: ModernSkillsProps) {
  return (
    <div className="grid grid-cols-2 gap-x-3 gap-y-1.5">
      {skills.map((skill) => (
        <span
          key={skill}
          className="border-b border-slate-200 pb-1 text-[8px] font-semibold leading-tight text-slate-700"
        >
          {skill}
        </span>
      ))}
    </div>
  );
}