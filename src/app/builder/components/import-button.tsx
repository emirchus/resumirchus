"use client";

import { importPdfAction } from "@/app/builder/actions/import-pdf.action";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useResumeStore } from "@/stores/resume-data-store";
import { Loader2, Upload } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

export const ImportButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { updateResumeData } = useResumeStore();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    setIsLoading(true);
    try {
      const data = await importPdfAction(formData);
      updateResumeData(() => {
        return data;
      });
      setIsOpen(false);
      toast.success("PDF importado exitosamente");
    } catch (error) {
      console.error(error);
      toast.error("Error importando PDF");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button disabled className="hidden">
          Import
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Import</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-2">
          <form onSubmit={handleSubmit} className="flex flex-col gap-2">
            <input type="file" name="file" />
            <Button type="submit" disabled={isLoading}>
              {isLoading ? (
                <Loader2 className="size-3 mr-2 animate-spin" />
              ) : (
                <Upload className="size-3 mr-2" />
              )}
              Upload PDF
            </Button>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};
