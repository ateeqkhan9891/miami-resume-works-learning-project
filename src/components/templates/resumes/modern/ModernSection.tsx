import type { ReactNode } from "react";

interface ModernSectionProps {
  title: string;
  children: ReactNode;
  accentBorder: string;
  className?: string;
}

export default function ModernSection({
  title,
  children,
  accentBorder,
  className,
}: ModernSectionProps) {
  return (
    <section className={className}>
      <h2
        className={`mb-2.5 border-b-2 pb-1 font-serif text-[10px] font-black uppercase tracking-[0.1em] text-slate-900 ${accentBorder}`}
      >
        {title}
      </h2>
      {children}
    </section>
  );
}