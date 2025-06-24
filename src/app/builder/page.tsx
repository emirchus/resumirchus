import { SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties } from "react";
import ResumeBuilder from "./components/resume-builder";
export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "32vw",
            "--header-height": "calc(var(--spacing) * 12)",
          } as CSSProperties
        }
      >
        <ResumeBuilder />
      </SidebarProvider>
    </main>
  );
}
