"use client";

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
      const response = await fetch("/api/generate", {
        method: "POST",
        body: JSON.stringify({ resumeData }),
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.error, {
          description: `Sorry, you have reached the limit of 10 requests per 10 seconds. Please try again later.`,
        });
      } else {
        updateSummary(data);
        toast.success("Summary generated successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error generating summary");
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
