"use client";

import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

import {
  resumeNavigation,
  coverLetterNavigation,
} from "@/data/navigation";

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);
  const [coverLetterOpen, setCoverLetterOpen] = useState(false);

  return (
    <div className="relative md:hidden">
      {/* Menu Button */}
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex size-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-100"
        aria-label="Toggle menu"
      >
        {open ? (
          <X className="size-5" />
        ) : (
          <Menu className="size-5" />
        )}
      </button>

      {/* Mobile Menu */}
      {open && (
        <div className="fixed inset-x-0 top-16 z-50 border-t border-slate-200 bg-white px-6 py-6 shadow-xl">
          <div className="mx-auto max-w-7xl">

            {/* Resumes */}
            <div className="border-b border-slate-100">
              <button
                type="button"
                onClick={() => setResumeOpen((value) => !value)}
                className="flex w-full items-center justify-between py-4 text-sm font-medium text-slate-800"
              >
                Resumes

                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    resumeOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {resumeOpen && (
                <div className="mb-3 space-y-1 pl-3">
                  {resumeNavigation.featured.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      {item.title}
                    </Link>
                  ))}

                  {resumeNavigation.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Cover Letters */}
            <div className="border-b border-slate-100">
              <button
                type="button"
                onClick={() =>
                  setCoverLetterOpen((value) => !value)
                }
                className="flex w-full items-center justify-between py-4 text-sm font-medium text-slate-800"
              >
                Cover Letters

                <ChevronDown
                  className={`size-4 transition-transform duration-200 ${
                    coverLetterOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {coverLetterOpen && (
                <div className="mb-3 space-y-1 pl-3">
                  {coverLetterNavigation.featured.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      {item.title}
                    </Link>
                  ))}

                  {coverLetterNavigation.links.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* About */}
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-4 text-sm font-medium text-slate-800"
            >
              About
            </Link>

            {/* Pricing */}
            <Link
              href="/pricing"
              onClick={() => setOpen(false)}
              className="block border-b border-slate-100 py-4 text-sm font-medium text-slate-800"
            >
              Pricing
            </Link>

            {/* Auth */}
            <div className="flex flex-col gap-3 pt-6">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="rounded-md border border-slate-300 px-4 py-2.5 text-center text-sm font-medium text-slate-700"
              >
                Sign In
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="rounded-md bg-emerald-500 px-4 py-2.5 text-center text-sm font-medium text-white hover:bg-emerald-600"
              >
                Get Started
              </Link>
            </div>

          </div>
        </div>
      )}
    </div>
  );
}