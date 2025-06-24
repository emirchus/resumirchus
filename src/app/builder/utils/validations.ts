/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

// Schema para PersonalInfo
const PersonalInfoSchema = z.object({
  name: z.string().optional(),
  location: z.string().optional(),
  phone: z.string().optional(),
  email: z.string().optional(),
  links: z
    .array(
      z.object({
        url: z.string().optional(),
        label: z.string().optional(),
      })
    )
    .optional(),
});

// Schema para Experience
const ExperienceSchema = z.object({
  position: z.string().optional(),
  company: z.string().optional(),
  periodStart: z.string().optional(),
  periodEnd: z.string().optional(),
  description: z.string().optional(),
});

// Schema para Education
const EducationSchema = z.object({
  degree: z.string().optional(),
  institution: z.string().optional(),
  periodStart: z.string().optional(),
  periodEnd: z.string().optional(),
});

// Schema para TechnicalSkill
const TechnicalSkillSchema = z.object({
  category: z.string().optional(),
  skills: z.array(z.string()).optional(),
});

// Schema para Skills
const SkillsSchema = z.object({
  technical: z.array(TechnicalSkillSchema).optional(),
  languages: z
    .array(
      z.object({
        language: z.string().optional(),
        level: z.string().optional(),
      })
    )
    .optional(),
});

// Schema principal para ResumeData
export const ResumeDataSchema = z.object({
  personalInfo: PersonalInfoSchema.optional(),
  summary: z.string().optional(),
  experience: z.array(ExperienceSchema).optional(),
  education: z.array(EducationSchema).optional(),
  skills: SkillsSchema.optional(),
});

// Exportar tipos inferidos para usar en TypeScript
export type PersonalInfo = z.infer<typeof PersonalInfoSchema>;
export type Experience = z.infer<typeof ExperienceSchema>;
export type Education = z.infer<typeof EducationSchema>;
export type TechnicalSkill = z.infer<typeof TechnicalSkillSchema>;
export type Skills = z.infer<typeof SkillsSchema>;
export type ResumeData = z.infer<typeof ResumeDataSchema>;

// Default values
const DEFAULT_VALUES: ResumeData = {
  personalInfo: {
    name: "Name not specified",
    location: "Location not specified",
    phone: "Phone not specified",
    email: "email@example.com",
    links: [],
  },
  summary: "Summary not available",
  experience: [],
  education: [],
  skills: {
    technical: [],
    languages: [],
  },
};

// Función helper para validar datos
export const validateResumeData = (data: unknown) => {
  return ResumeDataSchema.safeParse(data);
};

// Function that validates and applies default values when there are errors
export const validateWithDefaults = (data: unknown): ResumeData => {
  const result = ResumeDataSchema.safeParse(data);

  if (result.success) {
    return result.data;
  }

  // If validation fails, build object with default values
  const safeData =
    typeof data === "object" && data !== null ? (data as any) : {};

  // Helper to get safe value or default
  const getSafeValue = <T>(
    value: any,
    defaultValue: T,
    validator?: (val: any) => boolean
  ): T => {
    if (value === undefined || value === null) return defaultValue;
    if (validator && !validator(value)) return defaultValue;
    return value;
  };

  // Helper to validate email (now lenient)
  const isValidEmail = (email: string): boolean => {
    if (!email || typeof email !== "string") return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Helper to validate URL (now lenient)
  const isValidUrl = (url: string): boolean => {
    if (!url || typeof url !== "string") return false;
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  // Helper to validate non-empty string
  const isValidString = (str: any): boolean => {
    return typeof str === "string" && str.trim().length > 0;
  };

  // Validate and build personalInfo
  const personalInfo = safeData.personalInfo || {};
  const validatedPersonalInfo: PersonalInfo = {
    name: getSafeValue(
      personalInfo.name,
      DEFAULT_VALUES.personalInfo?.name,
      isValidString
    ),
    location: getSafeValue(
      personalInfo.location,
      DEFAULT_VALUES.personalInfo?.location,
      isValidString
    ),
    phone: getSafeValue(
      personalInfo.phone,
      DEFAULT_VALUES.personalInfo?.phone,
      isValidString
    ),
    email: getSafeValue(
      personalInfo.email,
      DEFAULT_VALUES.personalInfo?.email,
      isValidEmail
    ),
    links: Array.isArray(personalInfo.links)
      ? personalInfo.links
          .filter((link: any) => typeof link === "object" && link !== null)
          .map((link: any) => ({
            url: isValidUrl(link.url) ? link.url : "https://example.com",
            label: isValidString(link.label) ? link.label : "Link",
          }))
      : DEFAULT_VALUES.personalInfo?.links,
  };

  // Validate and build experience
  const validatedExperience: Experience[] = Array.isArray(safeData.experience)
    ? safeData.experience
        .filter((exp: any) => typeof exp === "object" && exp !== null)
        .map((exp: any) => ({
          position: getSafeValue(
            exp.position,
            "Position not specified",
            isValidString
          ),
          company: getSafeValue(
            exp.company,
            "Company not specified",
            isValidString
          ),
          periodStart:
            typeof exp.periodStart === "string" ? exp.periodStart : undefined,
          periodEnd:
            typeof exp.periodEnd === "string" ? exp.periodEnd : undefined,
          description: getSafeValue(
            exp.description,
            "Description not available",
            isValidString
          ),
        }))
    : DEFAULT_VALUES.experience;

  // Validate and build education
  const validatedEducation: Education[] = Array.isArray(safeData.education)
    ? safeData.education
        .filter((edu: any) => typeof edu === "object" && edu !== null)
        .map((edu: any) => ({
          degree: getSafeValue(
            edu.degree,
            "Degree not specified",
            isValidString
          ),
          institution: getSafeValue(
            edu.institution,
            "Institution not specified",
            isValidString
          ),
          periodStart:
            typeof edu.periodStart === "string" ? edu.periodStart : undefined,
          periodEnd:
            typeof edu.periodEnd === "string" ? edu.periodEnd : undefined,
        }))
    : DEFAULT_VALUES.education;

  // Validate and build skills
  const skillsData = safeData.skills || {};

  const validatedTechnicalSkills: TechnicalSkill[] = Array.isArray(
    skillsData.technical
  )
    ? skillsData.technical
        .filter((tech: any) => typeof tech === "object" && tech !== null)
        .map((tech: any) => ({
          category: getSafeValue(
            tech.category,
            "Category not specified",
            isValidString
          ),
          skills: Array.isArray(tech.skills)
            ? tech.skills.filter((skill: any) => isValidString(skill)).length >
              0
              ? tech.skills.filter((skill: any) => isValidString(skill))
              : ["Skill not specified"]
            : ["Skill not specified"],
        }))
        .filter((tech: any) => tech.skills && tech.skills.length > 0)
    : DEFAULT_VALUES.skills?.technical;

  const validatedLanguages = Array.isArray(skillsData.languages)
    ? skillsData.languages
        .filter((lang: any) => typeof lang === "object" && lang !== null)
        .map((lang: any) => ({
          language: getSafeValue(
            lang.language,
            "Language not specified",
            isValidString
          ),
          level: getSafeValue(lang.level, "Level not specified", isValidString),
        }))
    : DEFAULT_VALUES.skills?.languages;

  const validatedSkills: Skills = {
    technical: validatedTechnicalSkills,
    languages: validatedLanguages,
  };

  // Build final object
  return {
    personalInfo: validatedPersonalInfo,
    summary: getSafeValue(
      safeData.summary,
      DEFAULT_VALUES.summary,
      isValidString
    ),
    experience: validatedExperience,
    education: validatedEducation,
    skills: validatedSkills,
  };
};
