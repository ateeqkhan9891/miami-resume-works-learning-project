import type { Education } from "@/types/resume";

interface ModernEducationProps {
  education: Education[];
  accentBorder: string;
  accentText: string;
}

export default function ModernEducation({
  education,
  accentBorder,
  accentText,
}: ModernEducationProps) {
  return (
    <div className="space-y-3">
      {education.map((item) => (
        <article
          key={item.id}
          className={`border-l-2 pl-3 ${accentBorder} break-inside-avoid`}
        >
          <h3 className="text-[9.5px] font-black leading-tight text-slate-900">
            {item.degree}
            {item.field ? ` in ${item.field}` : ""}
          </h3>

          <p className={`mt-0.5 text-[8.5px] font-bold ${accentText}`}>
            {item.institution}
          </p>

          <div className="mt-0.5 flex flex-wrap items-center gap-x-2 text-[7.5px] font-medium text-slate-400">
            <span>
              {item.startDate} – {item.endDate || "Present"}
            </span>
            {item.location && (
              <>
                <span>•</span>
                <span>{item.location}</span>
              </>
            )}
          </div>
        </article>
      ))}
    </div>
  );
}