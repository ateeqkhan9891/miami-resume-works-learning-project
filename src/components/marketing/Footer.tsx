import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Top */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div>
            <h2 className="text-lg font-semibold tracking-tight text-slate-950">
              MiamiResume
            </h2>

            <p className="mt-3 max-w-xs text-sm leading-6 text-slate-500">
               Create a professional resume, build your career, and stand out with
                confidence.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                <span className="size-1.5 rounded-full bg-emerald-500" />
                Built for modern job seekers
            </div>


          </div>

          {/* Resumes */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Resumes</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/ai-resume-builder"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  AI Resume Builder
                </Link>
              </li>

              <li>
                <Link
                  href="/resume-templates"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Resume Templates
                </Link>
              </li>

              <li>
                <Link
                  href="/resume-checker"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Resume Checker
                </Link>
              </li>
            </ul>
          </div>

          {/* Cover Letters */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Cover Letters
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/cover-letter"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Cover Letter Builder
                </Link>
              </li>

              <li>
                <Link
                  href="/cover-letter-templates"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Cover Letter Templates
                </Link>
              </li>

              <li>
                <Link
                  href="/cover-letter/guides"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Cover Letter Guides
                </Link>
              </li>

              <li>
                <Link
                  href="/cover-letter/writing-tips"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Writing Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">
              Resources
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/career-guides"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Career Guides
                </Link>
              </li>

              <li>
                <Link
                  href="/writing-tips"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Writing Tips
                </Link>
              </li>

              <li>
                <Link
                  href="/resume-checker"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Resume Checker
                </Link>
              </li>

              <li>
                <Link
                  href="/ai-resume-builder"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  AI Resume Builder
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Pricing
                </Link>
              </li>

              <li>
                <Link
                  href="/login"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Sign In
                </Link>
              </li>

              <li>
                <Link
                  href="/signup"
                  className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                >
                  Get Started
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 flex flex-col gap-4 border-t border-slate-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-sm text-slate-500">
                    © 2026 MiamiResume. All rights reserved.
                </p>

                <div className="flex items-center gap-5">
                    <Link
                    href="/privacy"
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                    Privacy
                    </Link>

                    <Link
                    href="/terms"
                    className="text-sm text-slate-500 transition-colors hover:text-slate-900"
                    >
                    Terms
                    </Link>
                </div>
                </div>
      </div>
    </footer>
  );
}