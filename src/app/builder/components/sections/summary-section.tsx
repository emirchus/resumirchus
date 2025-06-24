import { RefObject } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

interface SummarySectionProps {
  summary: string;
  summaryRef: RefObject<HTMLTextAreaElement | null>;
  onSummaryChange: (summary: string) => void;
  aiInput: string;
  onAIInputChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onGenerateSummary: () => void;
  isGenerating: boolean;
}

export function SummarySection({
  summary,
  summaryRef,
  onSummaryChange,
  aiInput,
  onAIInputChange,
  onGenerateSummary,
  isGenerating,
}: SummarySectionProps) {
  return (
    <div className="space-y-4 p-6">
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
          onChange={(e) => onSummaryChange(e.target.value)}
          className="text-xs bg-secondary dark:bg-muted"
        />
      </div>

      <Card>
        <CardHeader>
          <CardTitle className="flex flex-row text-md items-center justify-start">
            <Sparkles className="size-4 mr-2" />
            Generate with AI
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-2">
            <Textarea
              id="ai-prompt"
              placeholder="Web developer with 5 years of experience"
              value={aiInput}
              onChange={onAIInputChange}
              disabled={isGenerating}
              className="h-7 text-xs"
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  onGenerateSummary();
                }
              }}
            />
            <Button
              onClick={onGenerateSummary}
              disabled={isGenerating || !aiInput.trim()}
              size="sm"
              className="h-7 text-xs"
            >
              {isGenerating ? "Generating..." : "Generate"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
