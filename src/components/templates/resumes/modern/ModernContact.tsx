import type { ReactNode } from "react";

interface ModernContactProps {
  icon: ReactNode;
  children: ReactNode;
}

export default function ModernContact({ icon, children }: ModernContactProps) {
  return (
    <span className="inline-flex items-center gap-1 text-[7.5px] font-medium text-slate-500">
      <span className="text-slate-400 [&_svg]:size-2.5">{icon}</span>
      <span>{children}</span>
    </span>
  );
}