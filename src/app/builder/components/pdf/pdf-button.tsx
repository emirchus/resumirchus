"use client";
import React, { useEffect, useState } from "react";
import { usePDF } from "@react-pdf/renderer";
import { FileText, Loader2 } from "lucide-react";
import { ResumePDF } from "@/app/builder/components/pdf/pdf-file";
import { ResumeData } from "@/app/builder/types";
import { Button } from "@/components/ui/button";

// Componente principal con datos de ejemplo
export const PDFButton = ({ resumeData }: { resumeData: ResumeData }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const [instance] = usePDF({
    document: <ResumePDF resumeData={resumeData} />,
  });

  if (!isMounted) return null;

  if (instance.loading)
    return (
      <Button size="sm" disabled>
        <Loader2 className="h-3 w-3 animate-spin" />
      </Button>
    );

  if (instance.error) return null;

  return (
    <Button size="sm" className="gap-1 text-xs" asChild>
      <a href={instance.url!} download="resume.pdf">
        <FileText className="size-3" />
        PDF
      </a>
    </Button>
  );
};
