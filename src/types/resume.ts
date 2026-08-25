export interface Resume {
  id: string;
  userId: string;

  title: string;

  templateId: string;
  color: ResumeColor;
  photo: ResumePhoto;

  personal: PersonalInfo;
  summary: string;

  experience: Experience[];
  education: Education[];
  skills: string[];
  languages: Language[];

  awards?: Award[];
  achievements?: Achievement[];

  createdAt: string;
  updatedAt: string;
}

export type ResumeColor =
  | "black"
  | "emerald"
  | "navy"
  | "burgundy"
  | "gray";

export type ResumePhoto = {
  enabled: boolean;
  url?: string;
};

export interface PersonalInfo {
  fullName: string;
  jobTitle: string;
  email: string;
  phone: string;
  location: string;
  website?: string;
  linkedin?: string;
}

export interface Award {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description?: string;
}

export interface Achievement {
  id: string;
  title: string;
  date?: string;
  description?: string;
}

export interface Experience {
  id: string;
  company: string;
  position: string;
  location?: string;
  startDate: string;
  endDate?: string;
  current: boolean;
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  field?: string;
  location?: string;
  startDate: string;
  endDate?: string;
}

export interface Language {
  id: string;
  name: string;
  level: string;
}