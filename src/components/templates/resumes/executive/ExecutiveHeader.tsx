import { Globe, Link2, Mail, MapPin, Phone } from "lucide-react";

import type { PersonalInfo, ResumePhoto } from "@/types/resume";

import ExecutiveContact from "./ExecutiveContact";

interface ExecutiveHeaderProps {
  personal: PersonalInfo;
  photo: ResumePhoto;
  accentText: string;
}

export default function ExecutiveHeader({
  personal,
  photo,
  accentText,
}: ExecutiveHeaderProps) {
  const showPhoto = Boolean(photo?.enabled && photo?.url);

  return (
    <header className="border-b border-slate-300 pb-2">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h5  className="font-serif text-[15px] font-bold leading-none tracking-tight text-slate-950">
            {personal.fullName}
          </h5>

          <p
            className={`mt-1 text-[6px] font-semibold tracking-[0.13em] ${accentText}`}
          >
            {personal.jobTitle}
          </p>
        </div>

        {showPhoto && (
          <div className="size-10 shrink-0 overflow-hidden rounded-full ring-1 ring-slate-200">
            <img
              src={photo.url}
              alt={personal.fullName}
              className="h-full w-full object-cover"
            />
          </div>
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-x-2 text-[7px] text-slate-500">
  {personal.phone && (
    <ExecutiveContact icon={<Phone />}>
      {personal.phone}
    </ExecutiveContact>
  )}

  {personal.email && (
    <ExecutiveContact icon={<Mail />}>
      {personal.email}
    </ExecutiveContact>
  )}

  {personal.location && (
    <ExecutiveContact icon={<MapPin />}>
      {personal.location}
    </ExecutiveContact>
  )}

  {personal.linkedin && (
    <ExecutiveContact icon={<Link2 />}>
      {personal.linkedin}
    </ExecutiveContact>
  )}

  {personal.website && (
    <ExecutiveContact icon={<Globe />}>
      {personal.website}
    </ExecutiveContact>
  )}
</div>
    </header>
  );
}