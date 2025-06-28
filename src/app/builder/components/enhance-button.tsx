"use client";

import { enhanceSummaryAction } from "@/app/builder/actions/enhance-summary.action";
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
      const data = await enhanceSummaryAction(summary);
      updateSummary(data);
      toast.success("Summary enhanced successfully");
    } catch (error) {
      console.error(error);
      if (error instanceof Error && error.message === "Rate limit exceeded") {
        toast.error("Rate limit exceeded", {
          description: `Sorry, you have reached the limit of 10 requests per day. Please try again later.`,
        });
      } else {
        toast.error("Error enhancing summary");
      }
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
