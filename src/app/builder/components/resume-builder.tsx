"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, FileImage } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import ResumePreview from "@/app/builder/components/resume-preview";
const PDFButton = dynamic(
  () =>
    import("@/app/builder/components/pdf/pdf-button").then(
      (mod) => mod.PDFButton
    ),
  { ssr: false }
);

import { exportAsImage } from "@/app/builder/utils/export-utils";
import { focusOnSection, FocusRefs } from "@/app/builder/utils/focus-utils";

// Secciones
import { PersonalSection } from "@/app/builder/components/sections/personal-section";
import { SummarySection } from "@/app/builder/components/sections/summary-section";
import {
  ExperienceSection,
  EducationSection,
} from "@/app/builder/components/sections/experience-education-sections";
import { SkillsSection } from "@/app/builder/components/sections/skills-section";
import dynamic from "next/dynamic";
import {
  resumeSelectors,
  useResumeSelector,
  useResumeStore,
} from "@/stores/resume-data-store";
import { ResumeData, TechnicalSkill } from "@/app/builder/types";
import { ImportButton } from "@/app/builder/components/import-button";
import { SettingButton } from "@/app/builder/components/settings";

export default function ResumeBuilder() {
  const [activeTab, setActiveTab] = useState("personal");
  const { setOpen, setOpenMobile } = useSidebar();

  // Hook personalizado para manejo de datos
  const personalInfo = useResumeSelector(resumeSelectors.personalInfo);
  const summary = useResumeSelector(resumeSelectors.summary);
  const experience = useResumeSelector(resumeSelectors.experience);
  const education = useResumeSelector(resumeSelectors.education);
  const skills = useResumeSelector(resumeSelectors.skills);
  const {
    updateSummary,
    updateEducation,
    updateExperience,
    addLink,
    addEducation,
    addExperience,
    addLanguage,
    addTechnicalSkill,
    removeEducation,
    removeExperience,
    removeLanguage,
    removeLink,
    removeTechnicalSkill,
    updateLanguage,
    updateLink,
    updatePersonalInfo,
    updateTechnicalSkill,
  } = useResumeStore();

  // Referencias para el focus
  const personalRefs: FocusRefs["personalRefs"] = {
    name: useRef(null),
    location: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    links: useRef(null),
  };

  const summaryRef = useRef<HTMLTextAreaElement>(null);
  const experienceRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const educationRefs = useRef<React.RefObject<HTMLDivElement>[]>([]);
  const technicalSkillsRef = useRef<HTMLDivElement>(null);
  const languagesRef = useRef<HTMLDivElement>(null);

  const refs: FocusRefs = {
    personalRefs,
    summaryRef,
    experienceRefs,
    educationRefs,
    technicalSkillsRef,
    languagesRef,
  };

  // Función para manejar focus en secciones
  const handleSectionFocus = (
    section: string,
    index: number | null = null,
    field: string | null = null
  ) => {
    focusOnSection(
      section,
      refs,
      setActiveTab,
      setOpen,
      setOpenMobile,
      index,
      field
    );
  };

  return (
    <>
      <Sidebar variant="inset">
        <SidebarHeader className="p-4 border-b">
          <div className="flex justify-start items-center gap-2">
            <h1 className="text-lg font-bold flex-1">Resume Builder</h1>
            <SettingButton />
          </div>
          <div className="flex gap-1 mt-3">
            <PDFButton />
            <Button
              onClick={() => exportAsImage("PNG")}
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs"
            >
              <FileImage className="h-3 w-3" />
              PNG
            </Button>
            <Button
              onClick={() => exportAsImage("JPEG")}
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs"
            >
              <Download className="h-3 w-3" />
              JPG
            </Button>
            <ImportButton />
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          <Tabs
            className="w-full rounded-lg h-full relative"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full h-fit sticky top-0 z-10 pt-0">
              <TabsTrigger value="personal" className="text-xs">
                Personal
              </TabsTrigger>
              <TabsTrigger value="summary" className="text-xs">
                Summary
              </TabsTrigger>
              <TabsTrigger value="experience" className="text-xs">
                Experience
              </TabsTrigger>
              <TabsTrigger value="education" className="text-xs">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-xs">
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal">
              <PersonalSection
                personalInfo={personalInfo}
                personalRefs={personalRefs}
                onPersonalInfoChange={updatePersonalInfo}
                onLinkChange={updateLink}
                onRemoveLink={removeLink}
                onAddLink={addLink}
              />
            </TabsContent>

            <TabsContent value="summary">
              <SummarySection
                summary={summary}
                summaryRef={summaryRef}
                onSummaryChange={updateSummary}
              />
            </TabsContent>

            <TabsContent value="experience">
              <ExperienceSection
                experience={experience}
                experienceRefs={experienceRefs}
                onExperienceChange={updateExperience}
                onRemoveExperience={removeExperience}
                onAddExperience={addExperience}
              />
            </TabsContent>

            <TabsContent value="education">
              <EducationSection
                education={education}
                educationRefs={educationRefs}
                onEducationChange={updateEducation}
                onRemoveEducation={removeEducation}
                onAddEducation={addEducation}
              />
            </TabsContent>

            <TabsContent value="skills">
              <SkillsSection
                skills={skills}
                technicalSkillsRef={technicalSkillsRef}
                languagesRef={languagesRef}
                onSkillChange={(category, index, field, value) => {
                  if (category === "technical") {
                    updateTechnicalSkill(
                      index,
                      field as keyof TechnicalSkill,
                      value
                    );
                  } else {
                    updateLanguage(
                      index,
                      field as keyof ResumeData["skills"]["languages"][number],
                      value as string
                    );
                  }
                }}
                onRemoveSkill={(category, index) => {
                  if (category === "technical") {
                    removeTechnicalSkill(index);
                  } else {
                    removeLanguage(index);
                  }
                }}
                onAddTechnicalSkill={addTechnicalSkill}
                onAddLanguage={addLanguage}
              />
            </TabsContent>
          </Tabs>
        </SidebarContent>
      </Sidebar>

      <SidebarInset className="flex flex-1 relative overflow-auto h-[98vh] bg-secondary/50">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4 sticky top-0 bg-muted/50 backdrop-blur-sm z-10">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Resume Preview</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4">
          <ResumePreview onSectionClick={handleSectionFocus} />
        </div>
      </SidebarInset>
    </>
  );
}
