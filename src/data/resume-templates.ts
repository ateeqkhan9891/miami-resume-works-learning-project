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
  | "ats"
  "classic";

export type ResumeTemplateColor =
  | "black"
  | "emerald"
  | "navy"
  | "burgundy"
  | "gray";

export const resumeTemplates: ResumeTemplate[] = [
  {
    id: "modern-01",
    name: "Modern",
    category: "modern",
    description:
      "A sleek, structured resume with strong typography and a contemporary professional layout.",
    supportsPhoto: true,
    colors: ["black", "emerald", "navy", "burgundy", "gray"],
    featured: true,
  },

  {
    id: "professional-01",
    name: "Executive",
    category: "professional",
    description:
      "A polished and professional resume designed for corporate roles, managers, and experienced professionals.",
    supportsPhoto: false,
    colors: ["black", "navy", "gray", "burgundy"],
    featured: true,
  },

  {
    id: "creative-01",
    name: "Creative Pro",
    category: "creative",
    description:
      "A bold creative resume with expressive typography and visual structure for designers and creative professionals.",
    supportsPhoto: true,
    colors: ["black", "emerald", "navy", "burgundy"],
    featured: true,
  },

  {
    id: "simple-01",
    name: "Minimal",
    category: "simple",
    description:
      "A clean and minimal resume focused on readability, clarity, and essential professional information.",
    supportsPhoto: false,
    colors: ["black", "gray", "navy"],
    featured: false,
  },

  // {
  //   id: "classic-01",
  //   name: "Classic",
  //   category: "classic",
  //   description:
  //     "A timeless resume layout with traditional typography and a familiar professional structure.",
  //   supportsPhoto: false,
  //   colors: ["black", "navy", "gray", "burgundy"],
  //   featured: false,
  // },

  // {
  //   id: "tech-01",
  //   name: "Tech",
  //   category: "modern",
  //   description:
  //     "A modern technical resume optimized for software engineers, developers, and technology professionals.",
  //   supportsPhoto: false,
  //   colors: ["black", "emerald", "navy"],
  //   featured: true,
  // },
];