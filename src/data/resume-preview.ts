import type { Resume } from "@/types/resume";

export const previewResume: Resume = {
  id: "preview-01",
  userId: "preview-user",
  title: "Modern Resume Preview",
  templateId: "modern-01",
  color: "black",

  photo: {
    enabled: false,
  },

  personal: {
    fullName: "Alex Morgan",
    jobTitle: "Senior Product Designer",
    email: "alex.morgan@example.com",
    phone: "+1 555 123 4567",
    location: "New York, NY",
    website: "alexmorgan.design",
    linkedin: "linkedin.com/in/alexmorgan",
  },

  summary:
   "Product designer with 6+ years of experience creating thoughtful digital products and scalable design systems. Skilled in translating complex problems into intuitive user experiences through research, prototyping, and close collaboration with product and engineering teams.",

  experience: [
  {
    id: "exp-01",
    company: "Acme Technologies",
    position: "Senior Product Designer",
    location: "New York, NY",
    startDate: "2022",
    current: true,
    bullets: [
      "Led product design initiatives across web and mobile platforms.",
      "Built scalable design systems used across multiple product teams.",
      "Collaborated with engineering and product teams to deliver user-focused experiences.",
    ],
  },
  {
    id: "exp-02",
    company: "Pixel Labs",
    position: "Product Designer",
    location: "Brooklyn, NY",
    startDate: "2019",
    endDate: "2022",
    current: false,
    bullets: [
      "Designed responsive digital experiences for SaaS and consumer products.",
      "Created prototypes and conducted usability testing to validate product decisions.",
      "Improved design workflows by introducing reusable components and documentation.",
    ],
  },

  {
  id: "exp-02",
  company: "Pixel Labs",
  position: "Product Designer",
  location: "Brooklyn, NY",
  startDate: "2019",
  endDate: "2022",
  current: false,
  bullets: [
    "Designed responsive digital experiences for SaaS and consumer products.",
    "Created prototypes and conducted usability testing to validate product decisions.",
    "Collaborated with engineers to build reusable interface components.",
  ],
},


],

  education: [
    {
      id: "edu-01",
      institution: "State University",
      degree: "Bachelor of Arts",
      field: "Design",
      location: "New York, NY",
      startDate: "2015",
      endDate: "2019",
    },
  ],

  skills: [
    "Product Design",
    "UI/UX",
    "Figma",
    "Design Systems",
    "Prototyping",
  ],

  languages: [
    {
      id: "lang-01",
      name: "English",
      level: "Native",
    },
    {
      id: "lang-02",
      name: "Urdu",
      level: "Native",
    },
    {
      id: "lang-03",
      name: "Pashto",
      level: "Native",
    },
    {
      id: "lang-04",
      name: "German",
      level: "Native",
    },
  ],


  awards: [
  {
    id: "award-01",
    title: "Design Excellence Award",
    issuer: "AIGA New York",
    date: "2024",
    description:
      "Recognized for outstanding digital product design and user experience.",
  },
  {
    id: "award-02",
    title: "Best Product Experience",
    issuer: "UX Design Awards",
    date: "2023",
  },
],

achievements: [
  {
    id: "achievement-01",
    title: "Improved product conversion by 28%",
    date: "2024",
    description:
      "Redesigned the onboarding experience and introduced a simplified user flow.",
  },
  {
    id: "achievement-02",
    title: "Built a scalable design system",
    date: "2023",
    description:
      "Created a reusable component system adopted across multiple product teams.",
  },
  {
    id: "achievement-03",
    title: "Led cross-functional product initiatives",
    date: "2022",
    description:
      "Led collaborative design initiatives across product, engineering, and research teams to deliver high-impact customer experiences.",
  },
],

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};