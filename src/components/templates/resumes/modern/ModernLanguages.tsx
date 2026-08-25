import type { Language } from "@/types/resume";

interface ModernLanguagesProps {
  languages: Language[];
}

export default function ModernLanguages({ languages }: ModernLanguagesProps) {
  return (
    <div className="space-y-2">
      {languages.map((language) => (
        <div key={language.id} className="flex items-baseline justify-between gap-2">
          <span className="text-[8.5px] font-bold text-slate-900">
            {language.name}
          </span>
          <span className="text-[7.5px] font-semibold text-slate-400">
            {language.level}
          </span>
        </div>
      ))}
    </div>
  );
}