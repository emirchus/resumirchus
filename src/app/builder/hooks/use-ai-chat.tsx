"use client";
import { useChat } from "@ai-sdk/react";
import { defaultChatStore } from "ai";
import { useCallback } from "react";

export function useAIChat(onSummaryGenerated: (summary: string) => void) {
  const aiChat = useChat({
    chatStore: defaultChatStore({
      api: "/api/chat",
      maxSteps: 3,
    }),
    onFinish: ({ message }) => {
      const generatedText = message.parts
        .map((part) => (part.type === "text" ? part.text : ""))
        .join("");
      if (generatedText && generatedText.trim()) {
        onSummaryGenerated(generatedText);
      }
    },
  });

  const generateSummary = useCallback(
    (prompt: string) => {
      aiChat.setInput(prompt);
      aiChat.handleSubmit();
    },
    [aiChat]
  );

  return {
    ...aiChat,
    generateSummary,
    isGenerating: aiChat.status === "streaming",
  };
}
