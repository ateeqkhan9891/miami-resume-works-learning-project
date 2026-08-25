import { CalendarDays, MapPin } from "lucide-react";

import type { Experience } from "@/types/resume";

import ModernContact from "./ModernContact";

interface ModernExperienceProps {
  experience: Experience[];
  accentText: string;
}

export default function ModernExperience({
  experience,
  accentText,
}: ModernExperienceProps) {
  return (
    <div className="space-y-4">
      {experience.map((item) => {
        const dateDisplay = `${item.startDate} – ${
          item.current ? "Present" : item.endDate || ""
        }`;

        return (
          <article key={item.id} className="break-inside-avoid">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="text-[10.5px] font-black leading-tight text-slate-900">
                  {item.position}
                </h3>
                <p className={`mt-0.5 text-[9px] font-bold ${accentText}`}>
                  {item.company}
                </p>
              </div>

              <span className="shrink-0 text-right text-[7.5px] font-semibold text-slate-400">
                {dateDisplay}
              </span>
            </div>

            {item.location && (
              <ModernContact icon={<MapPin />}>
                <span className="text-[7.5px]">{item.location}</span>
              </ModernContact>
            )}

            {item.description && (
              <p className="mt-1.5 whitespace-pre-line text-[8.5px] leading-[1.55] text-slate-600">
                {item.description}
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}