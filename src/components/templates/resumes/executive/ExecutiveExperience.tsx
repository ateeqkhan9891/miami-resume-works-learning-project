import { MapPin } from "lucide-react";

import type { Experience } from "@/types/resume";

import ExecutiveContact from "./ExecutiveContact";

interface ExecutiveExperienceProps {
  experience: Experience[];
  accentText: string;
}

export default function ExecutiveExperience({
  experience,
  accentText,
}: ExecutiveExperienceProps) {
  return (
    <div className="space-y-3">
      {experience.map((item) => {
        const dateDisplay = `${item.startDate} – ${
          item.current ? "Present" : item.endDate || ""
        }`;

        return (
          <article
            key={item.id}
            className="break-inside-avoid"
          >
            {/* Position + Date */}
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="font-sans text-[8px] font-bold leading-tight text-slate-900">
                  {item.position}
                </h3>

                <p
                  className={`mt-0.5 font-sans text-[7px] font-semibold leading-tight ${accentText}`}
                >
                  {item.company}
                </p>
              </div>

              <span className="shrink-0 pt-0.5 text-right font-sans text-[6.5px] font-medium leading-tight text-slate-400">
                {dateDisplay}
              </span>
            </div>

            {/* Location */}
            {item.location && (
              <div className="mt-1">
                <ExecutiveContact icon={<MapPin />}>
                  {item.location}
                </ExecutiveContact>
              </div>
            )}

            {/* Responsibilities */}
            {item.bullets?.length > 0 && (
              <ul className="mt-1.5 space-y-0.5">
                {item.bullets.map((bullet, index) => (
                  <li
                    key={index}
                    className="relative pl-2.5 font-sans text-[6.5px] font-normal leading-[1.5] text-slate-600"
                  >
                    <span className="absolute left-0 top-[0.45em] size-1 rounded-full bg-slate-400" />

                    {bullet}
                  </li>
                ))}
              </ul>
            )}
          </article>
        );
      })}
    </div>
  );
}