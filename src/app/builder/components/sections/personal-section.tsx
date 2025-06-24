import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Trash2 } from "lucide-react";
import { PersonalInfo } from "@/app/builder/types";

interface PersonalSectionProps {
  personalInfo: PersonalInfo;
  personalRefs: {
    [key: string]: RefObject<HTMLInputElement | null>;
  };
  onPersonalInfoChange: (field: string, value: string) => void;
  onLinkChange: (index: number, field: string, value: string) => void;
  onRemoveLink: (index: number) => void;
  onAddLink: () => void;
}

export function PersonalSection({
  personalInfo,
  personalRefs,
  onPersonalInfoChange,
  onLinkChange,
  onRemoveLink,
  onAddLink,
}: PersonalSectionProps) {
  return (
    <div className="space-y-4 p-6">
      <div className="space-y-2">
        <Label htmlFor="name" className="text-sm">
          Full Name
        </Label>
        <Input
          id="name"
          ref={personalRefs.name}
          value={personalInfo.name}
          onChange={(e) => onPersonalInfoChange("name", e.target.value)}
          className="h-8"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="location" className="text-sm">
          Location
        </Label>
        <Input
          id="location"
          ref={personalRefs.location}
          value={personalInfo.location}
          onChange={(e) => onPersonalInfoChange("location", e.target.value)}
          className="h-8"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone" className="text-sm">
          Phone
        </Label>
        <Input
          id="phone"
          ref={personalRefs.phone}
          value={personalInfo.phone}
          onChange={(e) => onPersonalInfoChange("phone", e.target.value)}
          className="h-8"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-sm">
          Email
        </Label>
        <Input
          id="email"
          ref={personalRefs.email}
          value={personalInfo.email}
          onChange={(e) => onPersonalInfoChange("email", e.target.value)}
          className="h-8"
        />
      </div>

      <div className="space-y-3" ref={personalRefs.links}>
        <h3 className="text-sm font-medium">Links</h3>
        {personalInfo.links.map((link, index) => (
          <div key={index} className="space-y-2 p-4 border rounded">
            <div className="flex gap-2">
              <div className="flex-1 flex flex-col gap-2">
                <Label htmlFor={`link-label-${index}`} className="text-xs">
                  Label
                </Label>
                <Input
                  id={`link-label-${index}`}
                  placeholder="LinkedIn"
                  value={link.label}
                  onChange={(e) => onLinkChange(index, "label", e.target.value)}
                  className="h-7 text-xs"
                />
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemoveLink(index)}
                className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
              >
                <Trash2 className="h-3 w-3" />
              </Button>
            </div>
            <div className="grid gap-2">
              <Label htmlFor={`link-url-${index}`} className="text-xs">
                URL
              </Label>
              <Input
                id={`link-url-${index}`}
                placeholder="https://ejemplo.com"
                value={link.url}
                onChange={(e) => onLinkChange(index, "url", e.target.value)}
                className="h-7 text-xs"
              />
            </div>
          </div>
        ))}
        <Button onClick={onAddLink} size="sm" className="w-full h-8 text-xs">
          Add Link
        </Button>
      </div>
    </div>
  );
}
