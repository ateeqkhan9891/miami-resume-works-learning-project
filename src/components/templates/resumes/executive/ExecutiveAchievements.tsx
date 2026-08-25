import type { Resume } from "@/types/resume";

interface ExecutiveAchievementsProps {
  achievements: NonNullable<Resume["achievements"]>;
}

export default function ExecutiveAchievements({
  achievements,
}: ExecutiveAchievementsProps) {
  if (!achievements.length) return null;

  return (
    <div className="space-y-1.5">
      {achievements.map((achievement) => (
        <article
          key={achievement.id}
          className="break-inside-avoid"
        >
          <div className="flex items-start justify-between gap-1">
            <h3 className="min-w-0 font-sans text-[6px] font-semibold leading-tight text-slate-800">
              {achievement.title}
            </h3>

            {achievement.date && (
              <span className="shrink-0 font-sans text-[5.5px] font-medium leading-tight text-slate-400">
                {achievement.date}
              </span>
            )}
          </div>

          {achievement.description && (
            <p className="mt-0.5 font-sans text-[5.5px] leading-[1.35] text-slate-500">
              {achievement.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}