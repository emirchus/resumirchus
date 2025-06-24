import { RefObject } from "react";

export interface FocusRefs {
  personalRefs: {
    [key: string]: RefObject<HTMLInputElement | null>;
  };
  summaryRef: RefObject<HTMLTextAreaElement | null>;
  experienceRefs: RefObject<RefObject<HTMLDivElement>[]>;
  educationRefs: RefObject<RefObject<HTMLDivElement>[]>;
  technicalSkillsRef: RefObject<HTMLDivElement | null>;
  languagesRef: RefObject<HTMLDivElement | null>;
}

export const focusOnSection = (
  section: string,
  refs: FocusRefs,
  setActiveTab: (tab: string) => void,
  setOpen: (open: boolean) => void,
  setOpenMobile: (open: boolean) => void,
  index: number | null = null,
  field: string | null = null
) => {
  setOpen(true);
  setOpenMobile(true);
  setActiveTab(section);

  // Usar setTimeout para asegurar que el tab haya cambiado antes de intentar hacer focus
  setTimeout(() => {
    if (section === "personal" && field && refs.personalRefs[field]?.current) {
      refs.personalRefs[field].current!.focus();
    } else if (section === "summary" && refs.summaryRef.current) {
      refs.summaryRef.current.focus();
    } else if (
      section === "experience" &&
      index !== null &&
      refs.experienceRefs.current?.[index]
    ) {
      refs.experienceRefs.current[index]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (
      section === "education" &&
      index !== null &&
      refs.educationRefs.current?.[index]
    ) {
      refs.educationRefs.current[index]?.current?.scrollIntoView({
        behavior: "smooth",
      });
    } else if (section === "skills") {
      if (field === "technical" && refs.technicalSkillsRef.current) {
        refs.technicalSkillsRef.current.scrollIntoView({ behavior: "smooth" });
      } else if (field === "languages" && refs.languagesRef.current) {
        refs.languagesRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, 100);
};