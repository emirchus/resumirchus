"use client";
import { ModeSwitcher } from "@/components/mode-switch";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useResumeStore } from "@/stores/resume-data-store";
import { RotateCcw, Settings } from "lucide-react";
import React from "react";

export const SettingButton = () => {
  const { resetData } = useResumeStore();

  const handleReset = () => {
    const wasReset = resetData();
    if (wasReset) {
      // setActiveTab("personal");
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="flex items-center gap-1">
          <Settings className="size-4" />
          <span className="hidden md:block">Settings</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="!max-w-2xl">
        <DialogHeader>
          <DialogTitle>Settings</DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Here you can change the settings of your resume.
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <ModeSwitcher />
          <Button
            onClick={handleReset}
            variant="outline"
            size="sm"
            className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
          >
            <RotateCcw className="h-3 w-3" />
            Reset
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
