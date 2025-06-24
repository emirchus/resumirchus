/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useCallback } from "react";
import { initialResumeData, ResumeData } from "@/app/builder/types";

export function useResumeData() {
  // Inicializar con datos del localStorage si existen, sino usar datos iniciales
  const [resumeData, setResumeData] = useState<ResumeData>(() => {
    if (typeof window !== "undefined") {
      const savedData = localStorage.getItem("resumeData");
      if (savedData) {
        try {
          return JSON.parse(savedData);
        } catch (error) {
          console.error("Error parsing saved resume data:", error);
        }
      }
    }
    return initialResumeData;
  });

  // Función para actualizar y guardar automáticamente
  const updateResumeData = useCallback(
    (updater: (prev: ResumeData) => ResumeData) => {
      setResumeData((prev) => {
        const newData = updater(prev);
        if (typeof window !== "undefined") {
          localStorage.setItem("resumeData", JSON.stringify(newData));
        }
        return newData;
      });
    },
    []
  );

  // Funciones helper para actualizaciones específicas
  const updatePersonalInfo = useCallback(
    (field: string, value: string) => {
      updateResumeData((prev) => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [field]: value,
        },
      }));
    },
    [updateResumeData]
  );

  const updateSummary = useCallback(
    (summary: string) => {
      updateResumeData((prev) => ({
        ...prev,
        summary,
      }));
    },
    [updateResumeData]
  );

  const updateLink = useCallback(
    (index: number, field: string, value: string) => {
      updateResumeData((prev) => {
        const updatedLinks = [...prev.personalInfo.links];
        updatedLinks[index] = {
          ...updatedLinks[index],
          [field]: value,
        };
        return {
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            links: updatedLinks,
          },
        };
      });
    },
    [updateResumeData]
  );

  const removeLink = useCallback(
    (index: number) => {
      updateResumeData((prev) => {
        const updatedLinks = [...prev.personalInfo.links];
        updatedLinks.splice(index, 1);
        return {
          ...prev,
          personalInfo: {
            ...prev.personalInfo,
            links: updatedLinks,
          },
        };
      });
    },
    [updateResumeData]
  );

  const addLink = useCallback(() => {
    updateResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: [...prev.personalInfo.links, { url: "", label: "" }],
      },
    }));
  }, [updateResumeData]);

  const updateExperience = useCallback(
    (index: number, field: string, value: string) => {
      updateResumeData((prev) => {
        const updatedExperience = [...prev.experience];
        updatedExperience[index] = {
          ...updatedExperience[index],
          [field]: value,
        };
        return {
          ...prev,
          experience: updatedExperience,
        };
      });
    },
    [updateResumeData]
  );

  const removeExperience = useCallback(
    (index: number) => {
      updateResumeData((prev) => {
        const updatedExperience = [...prev.experience];
        updatedExperience.splice(index, 1);
        return {
          ...prev,
          experience: updatedExperience,
        };
      });
    },
    [updateResumeData]
  );

  const addExperience = useCallback(() => {
    updateResumeData((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { position: "", company: "", period: "", description: "" },
      ],
    }));
  }, [updateResumeData]);

  const updateEducation = useCallback(
    (index: number, field: string, value: string) => {
      updateResumeData((prev) => {
        const updatedEducation = [...prev.education];
        updatedEducation[index] = {
          ...updatedEducation[index],
          [field]: value,
        };
        return {
          ...prev,
          education: updatedEducation,
        };
      });
    },
    [updateResumeData]
  );

  const removeEducation = useCallback(
    (index: number) => {
      updateResumeData((prev) => {
        const updatedEducation = [...prev.education];
        updatedEducation.splice(index, 1);
        return {
          ...prev,
          education: updatedEducation,
        };
      });
    },
    [updateResumeData]
  );

  const addEducation = useCallback(() => {
    updateResumeData((prev) => ({
      ...prev,
      education: [
        ...prev.education,
        { degree: "", institution: "", period: "" },
      ],
    }));
  }, [updateResumeData]);

  const updateSkill = useCallback(
    (category: "technical" | "languages", index: number, value: any) => {
      updateResumeData((prev) => {
        const updatedSkills = { ...prev.skills };
        updatedSkills[category][index] = value;
        return {
          ...prev,
          skills: updatedSkills,
        };
      });
    },
    [updateResumeData]
  );

  const removeSkill = useCallback(
    (category: "technical" | "languages", index: number) => {
      updateResumeData((prev) => {
        const updatedSkills = { ...prev.skills };
        updatedSkills[category].splice(index, 1);
        return {
          ...prev,
          skills: updatedSkills,
        };
      });
    },
    [updateResumeData]
  );

  const addTechnicalSkill = useCallback(() => {
    updateResumeData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        technical: [...prev.skills.technical, { category: "", skills: [] }],
      },
    }));
  }, [updateResumeData]);

  const addLanguage = useCallback(() => {
    updateResumeData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        languages: [...prev.skills.languages, { language: "", level: "" }],
      },
    }));
  }, [updateResumeData]);

  const resetData = useCallback(() => {
    if (
      confirm(
        "¿Are you sure you want to reset all data? This action cannot be undone."
      )
    ) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("resumeData");
      }
      setResumeData(initialResumeData);
      return true;
    }
    return false;
  }, []);

  return {
    resumeData,
    updateResumeData,
    updatePersonalInfo,
    updateSummary,
    updateLink,
    removeLink,
    addLink,
    updateExperience,
    removeExperience,
    addExperience,
    updateEducation,
    removeEducation,
    addEducation,
    updateSkill,
    removeSkill,
    addTechnicalSkill,
    addLanguage,
    resetData,
  };
}
