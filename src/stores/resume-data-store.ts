/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import {
  initialResumeData,
  PersonalInfo,
  ResumeData,
} from "@/app/builder/types";
import {
  ResumeDataSchema,
  validateWithDefaults,
} from "@/app/builder/utils/validations";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
// Interfaz del store
interface ResumeStore {
  // Estado
  resumeData: ResumeData;

  // Acciones
  updateResumeData: (updater: (prev: ResumeData) => ResumeData) => void;
  updatePersonalInfo: (field: keyof PersonalInfo, value: string) => void;
  updateSummary: (summary: string) => void;

  // Links
  updateLink: (
    index: number,
    field: keyof PersonalInfo["links"][number],
    value: string
  ) => void;
  removeLink: (index: number) => void;
  addLink: () => void;

  // Experience
  updateExperience: (
    index: number,
    field: keyof ResumeData["experience"][number],
    value: string
  ) => void;
  removeExperience: (index: number) => void;
  addExperience: () => void;

  // Education
  updateEducation: (
    index: number,
    field: keyof ResumeData["education"][number],
    value: string
  ) => void;
  removeEducation: (index: number) => void;
  addEducation: () => void;

  // Skills
  updateTechnicalSkill: (
    index: number,
    field: keyof ResumeData["skills"]["technical"][number],
    value: any
  ) => void;
  updateLanguage: (
    index: number,
    field: keyof ResumeData["skills"]["languages"][number],
    value: string
  ) => void;
  removeTechnicalSkill: (index: number) => void;
  removeLanguage: (index: number) => void;
  addTechnicalSkill: () => void;
  addLanguage: () => void;

  // Utilidades
  resetData: () => boolean;
  validateData: () => boolean;
}

// Store con persistencia
export const useResumeStore = create<ResumeStore>()(
  persist(
    (set, get) => ({
      // Estado inicial
      resumeData: initialResumeData,

      // Función principal de actualización
      updateResumeData: (updater) => {
        set((state) => {
          const newData = updater(state.resumeData);
          const validatedData = validateWithDefaults(newData) as ResumeData;
          return { resumeData: validatedData };
        });
      },

      // Personal Info
      updatePersonalInfo: (field, value) => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: {
              ...state.resumeData.personalInfo,
              [field]: value,
            },
          },
        }));
      },

      updateSummary: (summary) => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            summary,
          },
        }));
      },

      // Links
      updateLink: (index, field, value) => {
        set((state) => {
          const updatedLinks = [...state.resumeData.personalInfo.links];
          updatedLinks[index] = {
            ...updatedLinks[index],
            [field]: value,
          };
          return {
            resumeData: {
              ...state.resumeData,
              personalInfo: {
                ...state.resumeData.personalInfo,
                links: updatedLinks,
              },
            },
          };
        });
      },

      removeLink: (index) => {
        set((state) => {
          const updatedLinks = [...state.resumeData.personalInfo.links];
          updatedLinks.splice(index, 1);
          return {
            resumeData: {
              ...state.resumeData,
              personalInfo: {
                ...state.resumeData.personalInfo,
                links: updatedLinks,
              },
            },
          };
        });
      },

      addLink: () => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            personalInfo: {
              ...state.resumeData.personalInfo,
              links: [
                ...state.resumeData.personalInfo.links,
                { url: "", label: "" },
              ],
            },
          },
        }));
      },

      // Experience
      updateExperience: (index, field, value) => {
        set((state) => {
          const updatedExperience = [...state.resumeData.experience];
          updatedExperience[index] = {
            ...updatedExperience[index],
            [field]: value,
          };
          return {
            resumeData: {
              ...state.resumeData,
              experience: updatedExperience,
            },
          };
        });
      },

      removeExperience: (index) => {
        set((state) => {
          const updatedExperience = [...state.resumeData.experience];
          updatedExperience.splice(index, 1);
          return {
            resumeData: {
              ...state.resumeData,
              experience: updatedExperience,
            },
          };
        });
      },

      addExperience: () => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            experience: [
              ...state.resumeData.experience,
              { position: "", company: "", period: "", description: "" },
            ],
          },
        }));
      },

      // Education
      updateEducation: (index, field, value) => {
        set((state) => {
          const updatedEducation = [...state.resumeData.education];
          updatedEducation[index] = {
            ...updatedEducation[index],
            [field]: value,
          };
          return {
            resumeData: {
              ...state.resumeData,
              education: updatedEducation,
            },
          };
        });
      },

      removeEducation: (index) => {
        set((state) => {
          const updatedEducation = [...state.resumeData.education];
          updatedEducation.splice(index, 1);
          return {
            resumeData: {
              ...state.resumeData,
              education: updatedEducation,
            },
          };
        });
      },

      addEducation: () => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            education: [
              ...state.resumeData.education,
              { degree: "", institution: "", period: "" },
            ],
          },
        }));
      },

      // Technical Skills
      updateTechnicalSkill: (index, field, value) => {
        set((state) => {
          const updatedTechnical = [...state.resumeData.skills.technical];
          updatedTechnical[index] = {
            ...updatedTechnical[index],
            [field]: value,
          };
          return {
            resumeData: {
              ...state.resumeData,
              skills: {
                ...state.resumeData.skills,
                technical: updatedTechnical,
              },
            },
          };
        });
      },

      removeTechnicalSkill: (index) => {
        set((state) => {
          const updatedTechnical = [...state.resumeData.skills.technical];
          updatedTechnical.splice(index, 1);
          return {
            resumeData: {
              ...state.resumeData,
              skills: {
                ...state.resumeData.skills,
                technical: updatedTechnical,
              },
            },
          };
        });
      },

      addTechnicalSkill: () => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: {
              ...state.resumeData.skills,
              technical: [
                ...state.resumeData.skills.technical,
                { category: "", skills: [] },
              ],
            },
          },
        }));
      },

      // Languages
      updateLanguage: (index, field, value) => {
        set((state) => {
          const updatedLanguages = [...state.resumeData.skills.languages];
          updatedLanguages[index] = {
            ...updatedLanguages[index],
            [field]: value,
          };
          return {
            resumeData: {
              ...state.resumeData,
              skills: {
                ...state.resumeData.skills,
                languages: updatedLanguages,
              },
            },
          };
        });
      },

      removeLanguage: (index) => {
        set((state) => {
          const updatedLanguages = [...state.resumeData.skills.languages];
          updatedLanguages.splice(index, 1);
          return {
            resumeData: {
              ...state.resumeData,
              skills: {
                ...state.resumeData.skills,
                languages: updatedLanguages,
              },
            },
          };
        });
      },

      addLanguage: () => {
        set((state) => ({
          resumeData: {
            ...state.resumeData,
            skills: {
              ...state.resumeData.skills,
              languages: [
                ...state.resumeData.skills.languages,
                { language: "", level: "" },
              ],
            },
          },
        }));
      },

      // Utilidades
      resetData: () => {
        if (
          confirm(
            "¿Are you sure you want to reset all data? This action cannot be undone."
          )
        ) {
          set({ resumeData: initialResumeData });
          return true;
        }
        return false;
      },

      validateData: () => {
        const { resumeData } = get();
        try {
          ResumeDataSchema.parse(resumeData);
          return true;
        } catch (error) {
          console.error("Validation error:", error);
          return false;
        }
      },
    }),
    {
      name: "resume-storage",
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({ resumeData: state.resumeData }),
      onRehydrateStorage: () => (state) => {
        if (state?.resumeData) {
          state.resumeData = validateWithDefaults(
            state.resumeData
          ) as ResumeData;
        }
      },
    }
  )
);

export const useResumeSelector = <T>(selector: (state: ResumeStore) => T) =>
  useResumeStore(selector);

export const resumeSelectors = {
  personalInfo: (state: ResumeStore) => state.resumeData.personalInfo,
  summary: (state: ResumeStore) => state.resumeData.summary,
  experience: (state: ResumeStore) => state.resumeData.experience,
  education: (state: ResumeStore) => state.resumeData.education,
  skills: (state: ResumeStore) => state.resumeData.skills,
  isValid: (state: ResumeStore) => state.validateData(),
};
