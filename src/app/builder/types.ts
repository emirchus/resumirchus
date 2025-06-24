export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  links: Array<{ url: string; label: string }>;
}

export interface Experience {
  position: string;
  company: string;
  periodStart?: string;
  periodEnd?: string;
  description: string;
}

export interface Education {
  degree: string;
  institution: string;
  periodStart?: string;
  periodEnd?: string;
}

export interface TechnicalSkill {
  category: string;
  skills: string[];
}

export interface Skills {
  technical: TechnicalSkill[];
  languages: Array<{ language: string; level: string }>;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  education: Education[];
  skills: Skills;
}

export const initialResumeData: ResumeData = {
  personalInfo: {
    name: "FULL NAME",
    location: "City, State/Province",
    phone: "+1234567890",
    email: "your.email@example.com",
    links: [{ url: "www.linkedin.com/in/your-profile", label: "LinkedIn" }],
  },
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  experience: [
    {
      position: "Job Title",
      company: "Company Name",
      periodStart: "2025-01-01",
      periodEnd: "2025-06-01",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  education: [
    {
      degree: "Degree Name",
      institution: "Institution Name",
      periodStart: "2025-01-01",
      periodEnd: "2025-06-01",
    },
  ],
  skills: {
    technical: [
      {
        category: "Category 1",
        skills: ["Skill 1", "Skill 2", "Skill 3", "Skill 4"],
      },
      {
        category: "Category 2",
        skills: ["Skill 5", "Skill 6", "Skill 7", "Skill 8"],
      },

    ],
    languages: [{ language: "English", level: "Native" }],
  },
};