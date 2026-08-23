"use client";

import Link from "next/link";
import {
  ChevronDown,
  FileText,
  Sparkles,
  LayoutTemplate,
  Search,
  PenLine,
  BookOpen,
} from "lucide-react";
import { useState } from "react";

interface NavDropdownProps {
  label: string;

  featured: {
    title: string;
    description: string;
    href: string;
  }[];

  links: {
    label: string;
    href: string;
  }[];
}

const icons = {
  "AI Resume Builder": Sparkles,
  "Resume Templates": LayoutTemplate,
  "Resume Checker": Search,
  "Cover Letter Builder": PenLine,
  "Cover Letter Templates": FileText,
  "Cover Letter Guides": BookOpen,
};

export default function NavDropdown({
  label,
  featured,
  links,
}: NavDropdownProps) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
         className="group flex items-center gap-1 text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        {label}

        <ChevronDown
          className={`size-4 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown */}
      <div
        className={`absolute left-0 top-full z-50 pt-3 transition-all duration-200 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible -translate-y-2 opacity-0"
        }`}
      >
        <div className="w-[620px] rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
          <div className="grid grid-cols-2 gap-3">

            {/* Left — Featured */}
            <div className="space-y-1">
              {featured.map((item) => {
                const Icon =
                  icons[item.title as keyof typeof icons] ?? FileText;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex gap-3 rounded-lg p-3 transition-colors hover:bg-slate-50"
                  >
                    <div className="flex size-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 text-emerald-600 transition-colors group-hover:border-emerald-200 group-hover:bg-emerald-50">
                      <Icon className="size-4" strokeWidth={2} />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {item.title}
                      </p>

                      <p className="mt-1 text-xs leading-relaxed text-slate-500">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>

            {/* Right — Explore */}
            <div className="border-l border-slate-200 pl-4">
              <p className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                Explore
              </p>

              <div className="grid gap-1">
                {links.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-2 py-2 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-950">
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}