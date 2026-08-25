import { Globe, Link2, Mail, MapPin, Phone } from "lucide-react";

import type { PersonalInfo, ResumePhoto } from "@/types/resume";

import ModernContact from "./ModernContact";

interface ModernHeaderProps {
  personal: PersonalInfo;
  photo: ResumePhoto;
  accentText: string;
}

export default function ModernHeader({
  personal,
  photo,
  accentText,
}: ModernHeaderProps) {
  const showPhoto = Boolean(photo?.enabled && photo?.url);

  return (
    <header className="border-b border-slate-300 pb-5">
      <div className="flex items-start justify-between gap-6">
        <div className="min-w-0">
          <h1 className="font-serif text-[26px] font-black leading-none tracking-[-0.02em] text-slate-950">
            {personal.fullName}
          </h1>

          <p
            className={`mt-2 text-[11px] font-bold uppercase tracking-[0.14em] ${accentText}`}
          >
            {personal.jobTitle}
          </p>
        </div>

        {showPhoto && (
          <div className="size-[72px] shrink-0 overflow-hidden rounded-full ring-2 ring-slate-100">
            <img
              src={photo.url}
              alt={personal.fullName}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5">
        {personal.phone && (
          <ModernContact icon={<Phone />}>{personal.phone}</ModernContact>
        )}
        {personal.email && (
          <ModernContact icon={<Mail />}>{personal.email}</ModernContact>
        )}
        {personal.location && (
          <ModernContact icon={<MapPin />}>{personal.location}</ModernContact>
        )}
        {personal.linkedin && (
          <ModernContact icon={<Link2 />}>{personal.linkedin}</ModernContact>
        )}
        {personal.website && (
          <ModernContact icon={<Globe />}>{personal.website}</ModernContact>
        )}
      </div>
    </header>
  );
}