import type { Resume } from "@/types/resume";

interface ExecutiveAwardsProps {
  awards: NonNullable<Resume["awards"]>;
}

export default function ExecutiveAwards({
  awards,
}: ExecutiveAwardsProps) {
  if (!awards.length) return null;

  return (
    <div className="space-y-2.5">
      {awards.map((award) => (
        <article key={award.id} className="break-inside-avoid">
          <div className="flex items-start justify-between gap-2">
            <h3 className="min-w-0 font-sans text-[7px] font-semibold leading-tight text-slate-800">
              {award.title}
            </h3>

            <span className="shrink-0 font-sans text-[6px] font-medium text-slate-400">
              {award.date}
            </span>
          </div>

          <p className="mt-0.5 font-sans text-[6.5px] font-medium leading-tight text-slate-500">
            {award.issuer}
          </p>

          {award.description && (
            <p className="mt-1 font-sans text-[6.5px] leading-[1.45] text-slate-500">
              {award.description}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}