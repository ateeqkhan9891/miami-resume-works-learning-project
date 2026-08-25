import type { ReactNode } from "react";

interface ModernSectionProps {
  title: string;
  children: ReactNode;
  accentBorder: string;
  className?: string;
}

export default function ExecutiveSection({
  title,
  children,
  accentBorder,
  className,
}: ModernSectionProps) {
  return (
    <section className={className}>
      <h2
        className={`
            mb-1 border-b pb-0.2
            font-sans text-[8px] font-bold uppercase
            tracking-[0.14em] text-slate-900
            ${accentBorder}
    `}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}