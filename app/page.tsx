import ResumeBuilder from "@/components/resume-builder"
import {
  SidebarProvider,
} from "@/components/ui/sidebar"
export default function Home() {
  return (
  
    <main className="min-h-screen">
    <SidebarProvider  style={{
    "--sidebar-width": "30vw",
    "--sidebar-width-mobile": "20rem",
  }}>
     
      <ResumeBuilder />
    </SidebarProvider>
    </main>
  )
}
