import type { Resume } from "@/types/resume";

export const demoResume: Resume = {
  id: "demo-resume",
  userId: "demo-user",

  title: "Frontend Developer Resume",

  templateId: "modern-01",
  color: "black",

  photo: {
    enabled: false,
  },

  personal: {
    fullName: "Alex Morgan",
    jobTitle: "Frontend Developer",
    email: "alex.morgan@example.com",
    phone: "+1 555 123 4567",
    location: "New York, NY",
    website: "alexmorgan.dev",
    linkedin: "linkedin.com/in/alexmorgan",
  },

  summary:
    "Frontend Developer with 4+ years of experience building responsive, accessible, and high-performance web applications using React, TypeScript, and modern web technologies.",

  experience: [
    {
      id: "experience-1",
      company: "Acme Technologies",
      position: "Frontend Developer",
      location: "New York, NY",
      startDate: "2023",
      endDate: "",
      current: true,
      description:
        "Built and maintained production React applications, improved frontend performance, and collaborated with designers and backend engineers to deliver scalable product experiences.",
    },
    {
      id: "experience-2",
      company: "Creative Labs",
      position: "Junior Frontend Developer",
      location: "New York, NY",
      startDate: "2021",
      endDate: "2023",
      current: false,
      description:
        "Developed responsive interfaces and reusable UI components using React, JavaScript, and Tailwind CSS.",
    },
  ],

  education: [
    {
      id: "education-1",
      institution: "New York University",
      degree: "Bachelor of Science",
      field: "Computer Science",
      location: "New York, NY",
      startDate: "2017",
      endDate: "2021",
    },
  ],

  skills: [
    "React",
    "TypeScript",
    "Next.js",
    "JavaScript",
    "Tailwind CSS",
    "Git",
  ],

  languages: [
    {
      id: "language-1",
      name: "English",
      level: "Native",
    },
    {
      id: "language-2",
      name: "Spanish",
      level: "Professional",
    },
  ],

  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};