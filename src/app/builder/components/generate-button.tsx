"use client";

import { generateSummaryAction } from "@/app/builder/actions/generate-summary.action";
import { RainbowButton } from "@/components/magicui/rainbow-button";
import { useResumeStore } from "@/stores/resume-data-store";
import React, { useState } from "react";
import { toast } from "sonner";
export const GenerateButton = () => {
  const { resumeData, updateSummary } = useResumeStore();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    try {
      const data = await generateSummaryAction(resumeData);
      updateSummary(data);
      toast.success("Summary generated successfully");
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "Rate limit exceeded") {
        toast.error("Rate limit exceeded", {
          description: `Sorry, you have reached the limit of 10 requests per day. Please try again later.`,
        });
      } else {
        toast.error("Error generating summary");
      }
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <RainbowButton
      className="w-full font-black"
      variant="outline"
      onClick={handleGenerateSummary}
      disabled={isGenerating}
    >
      {isGenerating ? "Generating..." : "Generate Summary"}
    </RainbowButton>
  );
};
