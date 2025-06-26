import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { DatePicker } from "@/components/ui/date-picker";
import { Education, Experience } from "@/app/builder/types";

interface ExperienceSectionProps {
  experience: Experience[];
  experienceRefs: RefObject<RefObject<HTMLDivElement>[]>;
  onExperienceChange: (
    index: number,
    field: keyof Experience,
    value: string
  ) => void;
  onRemoveExperience: (index: number) => void;
  onAddExperience: () => void;
}

export function ExperienceSection({
  experience,
  experienceRefs,
  onExperienceChange,
  onRemoveExperience,
  onAddExperience,
}: ExperienceSectionProps) {
  return (
    <div className="space-y-4 p-6">
      {experience.map((exp, index) => (
        <div
          key={index}
          className="space-y-3 p-3 border rounded-md"
          ref={experienceRefs.current?.[index]}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Experience #{index + 1}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveExperience(index)}
              className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`exp-title-${index}`} className="text-xs">
              Position
            </Label>
            <Input
              id={`exp-title-${index}`}
              value={exp.position}
              onChange={(e) =>
                onExperienceChange(index, "position", e.target.value)
              }
              className="h-7 text-xs"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor={`exp-company-${index}`} className="text-xs">
              Company
            </Label>
            <Input
              id={`exp-company-${index}`}
              value={exp.company}
              onChange={(e) =>
                onExperienceChange(index, "company", e.target.value)
              }
              className="h-7 text-xs"
            />
          </div>

          <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-2">
            <DatePicker
              label="Start Date"
              date={exp.periodStart ? new Date(exp.periodStart) : undefined}
              setDate={(date) =>
                onExperienceChange(
                  index,
                  "periodStart",
                  date?.toISOString() || ""
                )
              }
            />
            <DatePicker
              label="End Date"
              date={exp.periodEnd ? new Date(exp.periodEnd) : undefined}
              setDate={(date) =>
                onExperienceChange(
                  index,
                  "periodEnd",
                  date?.toISOString() || ""
                )
              }
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`exp-desc-${index}`} className="text-xs">
              Description
            </Label>
            <Textarea
              id={`exp-desc-${index}`}
              rows={3}
              value={exp.description}
              onChange={(e) =>
                onExperienceChange(index, "description", e.target.value)
              }
              className="text-xs"
            />
          </div>
        </div>
      ))}

      <Button
        onClick={onAddExperience}
        size="sm"
        className="w-full h-8 text-xs"
      >
        Add Experience
      </Button>
    </div>
  );
}

interface EducationSectionProps {
  education: Education[];
  educationRefs: RefObject<RefObject<HTMLDivElement>[]>;
  onEducationChange: (
    index: number,
    field: keyof Education,
    value: string
  ) => void;
  onRemoveEducation: (index: number) => void;
  onAddEducation: () => void;
}

export function EducationSection({
  education,
  educationRefs,
  onEducationChange,
  onRemoveEducation,
  onAddEducation,
}: EducationSectionProps) {
  return (
    <div className="space-y-4 p-6">
      {education.map((edu, index) => (
        <div
          key={index}
          className="space-y-3 p-3 border rounded-md"
          ref={educationRefs.current?.[index]}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-sm font-medium">Education #{index + 1}</h3>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onRemoveEducation(index)}
              className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
            >
              <Trash2 className="h-3 w-3" />
            </Button>
          </div>

          <div className="space-y-2">
            <Label htmlFor={`edu-degree-${index}`} className="text-xs">
              Degree
            </Label>
            <Input
              id={`edu-degree-${index}`}
              value={edu.degree}
              onChange={(e) =>
                onEducationChange(index, "degree", e.target.value)
              }
              className="h-7 text-xs"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor={`edu-institution-${index}`} className="text-xs">
              Institution
            </Label>
            <Input
              id={`edu-institution-${index}`}
              value={edu.institution}
              onChange={(e) =>
                onEducationChange(index, "institution", e.target.value)
              }
              className="h-7 text-xs"
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
            <DatePicker
              label="Start Date"
              date={edu.periodStart ? new Date(edu.periodStart) : undefined}
              setDate={(date) =>
                onEducationChange(
                  index,
                  "periodStart",
                  date?.toISOString() || ""
                )
              }
            />
            <DatePicker
              label="End Date"
              date={edu.periodEnd ? new Date(edu.periodEnd) : undefined}
              setDate={(date) =>
                onEducationChange(index, "periodEnd", date?.toISOString() || "")
              }
            />
          </div>
        </div>
      ))}

      <Button onClick={onAddEducation} size="sm" className="w-full h-8 text-xs">
        Add Education
      </Button>
    </div>
  );
}
