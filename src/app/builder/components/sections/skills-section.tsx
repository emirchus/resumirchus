import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Trash2 } from "lucide-react";
import { ResumeData, Skills } from "@/app/builder/types";

interface SkillsSectionProps {
  skills: Skills;
  technicalSkillsRef: RefObject<HTMLDivElement | null>;
  languagesRef: RefObject<HTMLDivElement | null>;
  onSkillChange: <
    T extends "technical" | "languages",
    F extends keyof ResumeData["skills"][T][number]
  >(
    category: T,
    index: number,
    field: F,
    value: unknown
  ) => void;
  onRemoveSkill: (category: "technical" | "languages", index: number) => void;
  onAddTechnicalSkill: () => void;
  onAddLanguage: () => void;
}

export function SkillsSection({
  skills,
  technicalSkillsRef,
  languagesRef,
  onSkillChange,
  onRemoveSkill,
  onAddTechnicalSkill,
  onAddLanguage,
}: SkillsSectionProps) {
  const handleLanguageChange = (
    index: number,
    field: keyof ResumeData["skills"]["languages"][number],
    value: string
  ) => {
    // const updatedLanguage = { ...skills.languages[index], [field]: value };
    onSkillChange("languages", index, field, value);
  };

  const handleAddSkill = (
    e: React.KeyboardEvent<HTMLInputElement>,
    mainIndex: number,
    mainSkill: ResumeData["skills"]["technical"][number]
  ) => {
    if (e.key === "Enter") {
      const updatedSkills = [...mainSkill.skills];
      updatedSkills.push("");
      onSkillChange("technical", mainIndex, "skills", updatedSkills);
      // Encuentra el elemento actual

      setTimeout(() => {
        const currentElement = document.activeElement;
        if (!currentElement) return;

        const focusableElements = document.querySelectorAll(
          'input:not([tabindex="-1"]), ' +
            'button:not([tabindex="-1"]), ' +
            'select:not([tabindex="-1"]), ' +
            'textarea:not([tabindex="-1"]), ' +
            'a[href]:not([tabindex="-1"]), ' +
            '[tabindex]:not([tabindex="-1"])'
        );

        // Convierte a array y filtra los elementos visibles
        const visibleFocusableElements = Array.from(focusableElements).filter(
          (el) => {
            return (
              (el as HTMLElement).offsetParent !== null && // Elemento visible
              !(el as HTMLInputElement).disabled && // No deshabilitado
              (el as HTMLElement).tabIndex !== -1
            ); // Doble verificación de tabindex
          }
        );

        // Encuentra el índice del elemento actual
        const currentIndex = visibleFocusableElements.indexOf(currentElement);

        // Mueve al siguiente elemento
        if (currentIndex !== -1) {
          const nextIndex =
            (currentIndex + 1) % visibleFocusableElements.length;
          (visibleFocusableElements[nextIndex] as HTMLElement).focus();
        } else {
          // Si el elemento actual no está en la lista, enfoca el primero
          if (visibleFocusableElements.length > 0) {
            (visibleFocusableElements[0] as HTMLElement).focus();
          }
        }
      }, 100);
    }
  };

  return (
    <div className="space-y-4 p-6">
      <div className="space-y-3" ref={technicalSkillsRef}>
        <h3 className="text-sm font-medium">Technical Skills</h3>
        <p className="text-xs text-muted-foreground">
          Add a category and then add skills to it (press enter to add a skill)
        </p>
        {skills.technical.map((mainSkill, mainIndex) => (
          <div
            key={mainIndex}
            className="w-full flex flex-col items-start gap-2"
          >
            <div className="flex items-end w-full flex-1 justify-end gap-2">
              <Input
                value={mainSkill.category}
                onChange={(e) =>
                  onSkillChange(
                    "technical",
                    mainIndex,
                    "category",
                    e.target.value
                  )
                }
                onKeyDown={(e) => handleAddSkill(e, mainIndex, mainSkill)}
                className="h-7 text-xs w-full"
                placeholder="Category: Skill 1, Skill 2, Skill 3"
              />
              <Button
                tabIndex={-1}
                variant="ghost"
                size="sm"
                onClick={() => onRemoveSkill("technical", mainIndex)}
                className="ml-auto h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>

            <div className="flex flex-col gap-2 w-full pl-2.5">
              {mainSkill.skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-2">
                  <Input
                    key={index}
                    value={skill}
                    onChange={(e) => {
                      const updatedSkills = [...mainSkill.skills];
                      updatedSkills[index] = e.target.value;
                      onSkillChange(
                        "technical",
                        mainIndex,
                        "skills",
                        updatedSkills
                      );
                    }}
                    onKeyDown={(e) => handleAddSkill(e, mainIndex, mainSkill)}
                    className="h-7 text-xs"
                  />
                  <Button
                    tabIndex={-1}
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      const updatedSkills = [...mainSkill.skills];
                      updatedSkills.splice(index, 1);
                      onSkillChange(
                        "technical",
                        mainIndex,
                        "skills",
                        updatedSkills
                      );
                    }}
                    className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                  >
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              ))}
            </div>
          </div>
        ))}
        <Button
          onClick={onAddTechnicalSkill}
          size="sm"
          className="w-full h-8 text-xs"
        >
          Add Technical Skill
        </Button>
      </div>

      <div className="space-y-3" ref={languagesRef}>
        <h3 className="text-sm font-medium">Languages</h3>
        {skills.languages.map((lang, index) => (
          <div key={index} className="flex items-center gap-2 w-full flex-wrap">
            <div className="flex-1">
              <Select
                value={lang.language}
                onValueChange={(value) =>
                  handleLanguageChange(index, "language", value)
                }
              >
                <SelectTrigger className="h-7 text-xs w-full">
                  <SelectValue placeholder="Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="English">English</SelectItem>
                  <SelectItem value="Spanish">Spanish</SelectItem>
                  <SelectItem value="French">French</SelectItem>
                  <SelectItem value="German">German</SelectItem>
                  <SelectItem value="Italian">Italian</SelectItem>
                  <SelectItem value="Portuguese">Portuguese</SelectItem>
                  <SelectItem value="Chinese">Chinese</SelectItem>
                  <SelectItem value="Japanese">Japanese</SelectItem>
                  <SelectItem value="Korean">Korean</SelectItem>
                  <SelectItem value="Russian">Russian</SelectItem>
                  <SelectItem value="Arabic">Arabic</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex-1">
              <Select
                value={lang.level}
                onValueChange={(value) =>
                  handleLanguageChange(index, "level", value)
                }
              >
                <SelectTrigger className="h-7 text-xs w-full">
                  <SelectValue placeholder="Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Native">Native</SelectItem>
                  <SelectItem value="Fluent">Fluent</SelectItem>
                  <SelectItem value="Advanced (C2)">Advanced (C2)</SelectItem>
                  <SelectItem value="Advanced (C1)">Advanced (C1)</SelectItem>
                  <SelectItem value="Intermediate (B2)">
                    Intermediate (B2)
                  </SelectItem>
                  <SelectItem value="Intermediate (B1)">
                    Intermediate (B1)
                  </SelectItem>
                  <SelectItem value="Basic (A2)">Basic (A2)</SelectItem>
                  <SelectItem value="Beginner (A1)">Beginner (A1)</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveSkill("languages", index)}
              className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>
        ))}
        <Button
          onClick={onAddLanguage}
          size="sm"
          className="w-full h-8 text-xs"
        >
          Add Language
        </Button>
      </div>
    </div>
  );
}
