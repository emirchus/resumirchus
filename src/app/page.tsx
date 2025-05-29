import ResumeBuilder from "@/components/resume-builder";
import { SidebarProvider } from "@/components/ui/sidebar";
import { CSSProperties } from "react";
export default function Home() {
  return (
    <main className="h-screen overflow-hidden">
      <SidebarProvider
        style={
          {
            "--sidebar-width": "30vw",
            "--sidebar-width-mobile": "20rem",
          } as CSSProperties
        }
      >
        <ResumeBuilder />
      </SidebarProvider>
    </main>
  );
}
