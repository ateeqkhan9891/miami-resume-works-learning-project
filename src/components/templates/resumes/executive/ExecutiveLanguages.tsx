
import type { Resume } from "@/types/resume";

interface ExecutiveLanguagesProps {
  languages: Resume["languages"];
}

export default function ExecutiveLanguages({
  languages,
}: ExecutiveLanguagesProps) {
  if (!languages.length) return null;

  return (
    <div className="space-y-1.5">
      {languages.map((language) => (
        <div
          key={language.id}
          className="flex items-center justify-between gap-2"
        >
          <span className="font-sans text-[7px] font-semibold text-slate-800">
            {language.name}
          </span>

          <span className="font-sans text-[6.5px] font-medium text-slate-400">
            {language.level}
          </span>
        </div>
      ))}
    </div>
  );
}