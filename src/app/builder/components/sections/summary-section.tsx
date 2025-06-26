import { RefObject } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { GenerateButton } from "@/app/builder/components/generate-button";
import { EnhanceButton } from "@/app/builder/components/enhance-button";

interface SummarySectionProps {
  summary: string;
  summaryRef: RefObject<HTMLTextAreaElement | null>;
  onSummaryChange: (summary: string) => void;
}

export function SummarySection({
  summary,
  summaryRef,
  onSummaryChange,
}: SummarySectionProps) {
  return (
    <div className="space-y-4 p-6 pb-8">
      <div className="space-y-2">
        <Label htmlFor="summary" className="text-sm">
          Professional Summary
        </Label>
        <Textarea
          placeholder="Describe your experiences, skills, education, etc."
          id="summary"
          ref={summaryRef}
          rows={4}
          value={summary}
          onChange={(e) => {
            onSummaryChange(e.target.value);
          }}
          className="text-xs bg-secondary dark:bg-muted"
        />
      </div>
      <EnhanceButton />
      <GenerateButton />
    </div>
  );
}
