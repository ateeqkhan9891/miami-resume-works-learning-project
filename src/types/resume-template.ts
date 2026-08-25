export interface ResumeTemplate {
  id: string;
  name: string;
  category: ResumeTemplateCategory;
  description: string;
  supportsPhoto: boolean;
  colors: ResumeTemplateColor[];
  featured?: boolean;
}

export type ResumeTemplateCategory =
  | "professional"
  | "modern"
  | "creative"
  | "simple"
  | "ats";

export type ResumeTemplateColor =
  | "black"
  | "emerald"
  | "navy"
  | "burgundy"
  | "gray";