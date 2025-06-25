import { RefObject } from "react";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { AiButton } from "@/app/builder/components/ai-button";

interface SummarySectionProps {
  summary: string;
  summaryRef: RefObject<HTMLTextAreaElement | null>;
  onSummaryChange: (summary: string) => void;
  aiInput: string;
  onAIInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGenerateSummary: () => void;
  isGenerating: boolean;

  aiChatStatus: "submitted" | "streaming" | "ready" | "error";
}

export function SummarySection({
  summary,
  summaryRef,
  onSummaryChange,
  onAIInputChange,
  onGenerateSummary,
  isGenerating,
  aiChatStatus,
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
          disabled={isGenerating}
          onChange={(e) => {
            onSummaryChange(e.target.value);
            onAIInputChange(e);
          }}
          className="text-xs bg-secondary dark:bg-muted"
        />
      </div>
      <AiButton
        onClick={onGenerateSummary}
        disabled={aiChatStatus === "streaming"}
        isGenerating={isGenerating || aiChatStatus === "streaming"}
      />
    </div>
  );
}
