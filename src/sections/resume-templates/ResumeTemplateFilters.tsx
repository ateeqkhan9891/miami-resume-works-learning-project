
import { ChevronDown, LayoutTemplate,
    BriefcaseBusiness,Briefcase, GraduationCap,
    FileText, Palette, Sparkles, ShieldCheck } from "lucide-react";
import TemplateColorFilter from "./TemplateColorFilter";
import TemplatePhotoFilter from "./TemplatePhotoFilter";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function ResumeTemplateFilters() {
  return (
    <section className="relative py-10 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-200/80 bg-white/80 p-4 shadow-sm backdrop-blur-xl sm:p-5">
          {/* Top filter row */}
          <div className="flex flex-wrap items-center gap-2">
            {/* Top Picks */}
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-lime-300 hover:shadow-md"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-lime-100 text-lime-600">
                <Sparkles className="size-3.5" />
              </span>

              <span>Top Picks</span>
            </button>

            {/* ATS */}
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-teal-300 hover:shadow-md"
            >
              <span className="flex size-6 items-center justify-center rounded-full bg-teal-100 text-teal-600">
                <ShieldCheck className="size-3.5" />
              </span>

              <span>ATS</span>
            </button>


            




            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-sky-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-sky-100 text-sky-600">
                    <Palette className="size-3.5" />
                </span>

                <span>Styles</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>Modern</DropdownMenuItem>
                <DropdownMenuItem>Professional</DropdownMenuItem>
                <DropdownMenuItem>Creative</DropdownMenuItem>
                <DropdownMenuItem>Simple</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>



            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                    <LayoutTemplate className="size-3.5" />
                </span>

                <span>Layout</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>Single Column</DropdownMenuItem>
                <DropdownMenuItem>Double Column</DropdownMenuItem>
                <DropdownMenuItem>Sidebar</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-purple-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-purple-100 text-purple-600">
                    <BriefcaseBusiness className="size-3.5" />
                </span>

                <span>Experience</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>Entry Level</DropdownMenuItem>
                <DropdownMenuItem>Mid Level</DropdownMenuItem>
                <DropdownMenuItem>Senior Level</DropdownMenuItem>
                <DropdownMenuItem>Executive</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-violet-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-violet-100 text-violet-600">
                    <GraduationCap className="size-3.5" />
                </span>

                <span>Education</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuItem>High School</DropdownMenuItem>
                <DropdownMenuItem>College Student</DropdownMenuItem>
                <DropdownMenuItem>Graduate</DropdownMenuItem>
                <DropdownMenuItem>Postgraduate</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-pink-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-pink-100 text-pink-600">
                    <Briefcase className="size-3.5" />
                </span>

                <span>Job</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-52">
                <DropdownMenuItem>Technology</DropdownMenuItem>
                <DropdownMenuItem>Business</DropdownMenuItem>
                <DropdownMenuItem>Design</DropdownMenuItem>
                <DropdownMenuItem>Marketing</DropdownMenuItem>
                <DropdownMenuItem>Healthcare</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>


            <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                type="button"
                className="inline-flex h-10 items-center gap-2 rounded-full border border-slate-200 bg-white px-4 text-sm font-medium text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-md"
                >
                <span className="flex size-6 items-center justify-center rounded-full bg-amber-100 text-amber-600">
                    <FileText className="size-3.5" />
                </span>

                <span>Format</span>

                <ChevronDown className="size-3.5 text-slate-400" />
                </button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="start" className="w-44">
                <DropdownMenuItem>US Letter</DropdownMenuItem>
                <DropdownMenuItem>A4</DropdownMenuItem>
                <DropdownMenuItem>PDF</DropdownMenuItem>
                <DropdownMenuItem>DOCX</DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>


           <div className="flex w-full items-center justify-between">
                
                    <TemplateColorFilter />

                    <TemplatePhotoFilter />
                
            </div>

















          </div>

          {/* Bottom controls will go here */}
        </div>
      </div>
    </section>
  );
}