import type { ReactNode } from "react";

interface ExecutiveContactProps {
  icon: ReactNode;
  children: ReactNode;
}
 
export default function ExecutiveContact({
  icon,
  children,
}: ExecutiveContactProps) {
  return (
    <span className="inline-flex min-w-0 items-center gap-1 whitespace-nowrap text-[6.5px] font-medium leading-none text-slate-500">
      <span className="shrink-0 text-slate-400 [&_svg]:size-2">
        {icon}
      </span>

      <span className="truncate">{children}</span>
    </span>
  );
}