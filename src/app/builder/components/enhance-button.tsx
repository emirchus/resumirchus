"use client";

import { RainbowButton } from "@/components/magicui/rainbow-button";
import {
  resumeSelectors,
  useResumeSelector,
  useResumeStore,
} from "@/stores/resume-data-store";
import React, { useState } from "react";
import { toast } from "sonner";

export const EnhanceButton = () => {
  const summary = useResumeSelector(resumeSelectors.summary);
  const { updateSummary } = useResumeStore();
  const [isGenerating, setIsGenerating] = useState(false);

  const handleGenerateSummary = async () => {
    setIsGenerating(true);
    try {
      const response = await fetch("/api/enhance", {
        method: "POST",
        body: JSON.stringify({ summary }),
      });
      const data = await response.json();
      if (data.error) {
        toast.error(data.error, {
          description: `Sorry, you have reached the limit of 10 requests per 10 seconds. Please try again later.`,
        });
      } else {
        updateSummary(data);
        toast.success("Summary enhanced successfully");
      }
    } catch (error) {
      console.error(error);
      toast.error("Error enhancing summary");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <RainbowButton
      className="w-full font-black"
      onClick={handleGenerateSummary}
      disabled={isGenerating}
    >
      {isGenerating ? "Enhancing..." : "Enhance Summary"}
    </RainbowButton>
  );
};
