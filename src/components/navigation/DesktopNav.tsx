import Link from "next/link";

import NavDropdown from "./NavDropdown";

import {
  resumeNavigation,
  coverLetterNavigation,
} from "@/data/navigation";

export default function DesktopNav() {
  return (
    <nav className="ml-12 hidden items-center gap-7 md:flex">
      <NavDropdown
        label="Resume"
        featured={resumeNavigation.featured}
        links={resumeNavigation.links}
      />

      <NavDropdown
        label="Cover Letter"
        featured={coverLetterNavigation.featured}
        links={coverLetterNavigation.links}
      />

      <Link
        href="/about"
        className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        About
      </Link>

      <Link
        href="/pricing"
        className="text-sm font-medium text-slate-500 transition-colors hover:text-slate-900"
      >
        Pricing
      </Link>
    </nav>
  );
}