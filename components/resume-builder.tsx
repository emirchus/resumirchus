"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileImage, FileText, Trash2, Sparkles, RotateCcw } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import html2canvas from "html2canvas"
import jsPDF from "jspdf"
import ResumePreview from "./resume-preview"

const initialResumeData = {
  personalInfo: {
    name: "FULL NAME",
    location: "City, State/Province",
    phone: "+1234567890",
    email: "your.email@example.com",
    links: [
      { url: "www.linkedin.com/in/your-profile", label: "LinkedIn" },
      { url: "github.com/your-username", label: "GitHub" },
    ],
  },
  summary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  experience: [
    {
      title: "Job Title | Company Name",
      period: "Month Year - Month Year",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      title: "Previous Job Title | Previous Company",
      period: "Month Year - Month Year",
      description:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ],
  education: [
    {
      degree: "Degree Name",
      institution: "Institution Name",
      period: "Month Year - Month Year",
    },
  ],
  skills: {
    technical: [
      "Category 1: Skill 1, Skill 2, Skill 3, Skill 4",
      "Category 2: Skill 5, Skill 6, Skill 7, Skill 8",
      "Category 3: Skill 9, Skill 10, Skill 11, Skill 12",
    ],
    languages: [
      { language: "Language 1", level: "Native" },
      { language: "Language 2", level: "Advanced" },
      { language: "Language 3", level: "Intermediate" },
    ],
  },
}

export default function ResumeBuilder() {
  const [] = useSidebar
  const [resumeData, setResumeData] = useState(initialResumeData)
  const [aiPrompt, setAiPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [activeTab, setActiveTab] = useState("personal")

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem("resumeData")
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData)
        setResumeData(parsedData)
      } catch (error) {
        console.error("Error parsing saved resume data:", error)
      }
    }
  }, [])

  // Save data to localStorage whenever resumeData changes
  useEffect(() => {
    localStorage.setItem("resumeData", JSON.stringify(resumeData))
  }, [resumeData])

  // Reset function
  const resetResumeData = () => {
    if (confirm("Are you sure you want to reset all data? This action cannot be undone.")) {
      localStorage.removeItem("resumeData")
      setResumeData(initialResumeData)
      setActiveTab("personal")
    }
  }

  // Refs for scrolling to specific elements
  const personalRefs = {
    name: useRef(null),
    location: useRef(null),
    phone: useRef(null),
    email: useRef(null),
    links: useRef(null),
  }

  const summaryRef = useRef(null)
  const experienceRefs = useRef([])
  const educationRefs = useRef([])
  const technicalSkillsRef = useRef(null)
  const languagesRef = useRef(null)

  const handleInputChange = (section, field, value) => {
    setResumeData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }))
  }

  const handleLinkChange = (index, field, value) => {
    const updatedLinks = [...resumeData.personalInfo.links]
    updatedLinks[index] = {
      ...updatedLinks[index],
      [field]: value,
    }
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: updatedLinks,
      },
    }))
  }

  const removeLink = (index) => {
    const updatedLinks = [...resumeData.personalInfo.links]
    updatedLinks.splice(index, 1)
    setResumeData((prev) => ({
      ...prev,
      personalInfo: {
        ...prev.personalInfo,
        links: updatedLinks,
      },
    }))
  }

  const handleExperienceChange = (index, field, value) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience[index] = {
      ...updatedExperience[index],
      [field]: value,
    }
    setResumeData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }))
  }

  const handleEducationChange = (index, field, value) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation[index] = {
      ...updatedEducation[index],
      [field]: value,
    }
    setResumeData((prev) => ({
      ...prev,
      education: updatedEducation,
    }))
  }

  const handleSkillsChange = (category, index, value) => {
    const updatedSkills = { ...resumeData.skills }
    updatedSkills[category][index] = value
    setResumeData((prev) => ({
      ...prev,
      skills: updatedSkills,
    }))
  }

  const handleLanguageChange = (index, field, value) => {
    const updatedLanguages = [...resumeData.skills.languages]
    updatedLanguages[index] = {
      ...updatedLanguages[index],
      [field]: value,
    }
    setResumeData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        languages: updatedLanguages,
      },
    }))
  }

  const removeExperience = (index) => {
    const updatedExperience = [...resumeData.experience]
    updatedExperience.splice(index, 1)
    setResumeData((prev) => ({
      ...prev,
      experience: updatedExperience,
    }))
  }

  const removeEducation = (index) => {
    const updatedEducation = [...resumeData.education]
    updatedEducation.splice(index, 1)
    setResumeData((prev) => ({
      ...prev,
      education: updatedEducation,
    }))
  }

  const removeLanguage = (index) => {
    const updatedLanguages = [...resumeData.skills.languages]
    updatedLanguages.splice(index, 1)
    setResumeData((prev) => ({
      ...prev,
      skills: {
        ...prev.skills,
        languages: updatedLanguages,
      },
    }))
  }

  const generateSummaryWithAI = async () => {
    if (!aiPrompt) return

    setIsGenerating(true)

    // Simulate AI generation with a timeout
    setTimeout(() => {
      const generatedSummary = `Professional ${aiPrompt} with strong skills in problem-solving and teamwork. Experienced in developing innovative solutions and adapting to new technologies. Seeking opportunities to apply technical expertise in a dynamic, growth-focused environment.`

      setResumeData((prev) => ({
        ...prev,
        summary: generatedSummary,
      }))

      setIsGenerating(false)
      setAiPrompt("")
    }, 1500)
  }

  const exportAsPDF = () => {
    const element = document.getElementById("resume-preview")

    // Temporarily remove shadow, add white background, and set width to 80%
    const originalStyle = element.style.cssText
    element.style.boxShadow = "none"
    element.style.background = "white"

    html2canvas(element, {
      backgroundColor: "#ffffff",
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF("p", "mm", "a4")
      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = pdf.internal.pageSize.getHeight()
      const imgWidth = canvas.width
      const imgHeight = canvas.height
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight)
      const imgX = (pdfWidth - imgWidth * ratio) / 2
      const imgY = 0
      pdf.addImage(imgData, "PNG", imgX, imgY, imgWidth * ratio, imgHeight * ratio)
      pdf.save("resume.pdf")

      // Restore original style
      element.style.cssText = originalStyle
    })
  }

  const exportAsImage = (format) => {
    const element = document.getElementById("resume-preview")

    // Temporarily remove shadow, add white background
    const originalStyle = element.style.cssText
    element.style.boxShadow = "none"
    element.style.background = "white"

    html2canvas(element, {
      backgroundColor: "#ffffff",
      scale: 2, // Higher quality
      useCORS: true,
      logging: false,
    }).then((canvas) => {
      const link = document.createElement("a")
      link.download = `resume.${format.toLowerCase()}`
      link.href = canvas.toDataURL(`image/${format.toLowerCase()}`)
      link.click()

      // Restore original style
      element.style.cssText = originalStyle
    })
  }

  // Function to focus on a specific section
  const focusOnSection = (section, index = null, field = null) => {
    setActiveTab(section)

    // Use setTimeout to ensure the tab has changed before trying to focus
    setTimeout(() => {
      if (section === "personal" && field && personalRefs[field]?.current) {
        personalRefs[field].current.focus()
      } else if (section === "summary" && summaryRef.current) {
        summaryRef.current.focus()
      } else if (section === "experience" && index !== null && experienceRefs.current[index]) {
        experienceRefs.current[index].scrollIntoView({ behavior: "smooth" })
      } else if (section === "education" && index !== null && educationRefs.current[index]) {
        educationRefs.current[index].scrollIntoView({ behavior: "smooth" })
      } else if (section === "skills") {
        if (field === "technical" && technicalSkillsRef.current) {
          technicalSkillsRef.current.scrollIntoView({ behavior: "smooth" })
        } else if (field === "languages" && languagesRef.current) {
          languagesRef.current.scrollIntoView({ behavior: "smooth" })
        }
      }
    }, 100)
  }

  return (
  <>
   <Sidebar variant="inset">
        <SidebarHeader className="p-4 border-b">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold">Resume Builder</h1>
            <Button
              onClick={resetResumeData}
              variant="outline"
              size="sm"
              className="flex items-center gap-1 text-red-600 hover:text-red-700 hover:bg-red-50"
            >
              <RotateCcw className="h-3 w-3" />
              Reset
            </Button>
          </div>
          <div className="flex gap-1 mt-3">
            <Button onClick={exportAsPDF} size="sm" className="flex items-center gap-1 text-xs">
              <FileText className="h-3 w-3" />
              PDF
            </Button>
            <Button
              onClick={() => exportAsImage("PNG")}
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs"
            >
              <FileImage className="h-3 w-3" />
              PNG
            </Button>
            <Button
              onClick={() => exportAsImage("JPEG")}
              size="sm"
              variant="outline"
              className="flex items-center gap-1 text-xs"
            >
              <Download className="h-3 w-3" />
              JPG
            </Button>
          </div>
        </SidebarHeader>

        <SidebarContent className="p-4">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-4 h-8">
              <TabsTrigger value="personal" className="text-xs">
                Personal
              </TabsTrigger>
              <TabsTrigger value="summary" className="text-xs">
                Summary
              </TabsTrigger>
              <TabsTrigger value="experience" className="text-xs">
                Work
              </TabsTrigger>
              <TabsTrigger value="education" className="text-xs">
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="text-xs">
                Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-sm">
                  Full Name
                </Label>
                <Input
                  id="name"
                  ref={personalRefs.name}
                  value={resumeData.personalInfo.name}
                  onChange={(e) => handleInputChange("personalInfo", "name", e.target.value)}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location" className="text-sm">
                  Location
                </Label>
                <Input
                  id="location"
                  ref={personalRefs.location}
                  value={resumeData.personalInfo.location}
                  onChange={(e) => handleInputChange("personalInfo", "location", e.target.value)}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm">
                  Phone
                </Label>
                <Input
                  id="phone"
                  ref={personalRefs.phone}
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handleInputChange("personalInfo", "phone", e.target.value)}
                  className="h-8"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm">
                  Email
                </Label>
                <Input
                  id="email"
                  ref={personalRefs.email}
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handleInputChange("personalInfo", "email", e.target.value)}
                  className="h-8"
                />
              </div>

              <div className="space-y-3" ref={personalRefs.links}>
                <h3 className="text-sm font-medium">Links</h3>
                {resumeData.personalInfo.links.map((link, index) => (
                  <div key={index} className="space-y-2 p-2 border rounded">
                    <div className="flex items-center gap-2">
                      <div className="flex-1">
                        <Label htmlFor={`link-label-${index}`} className="text-xs">
                          Label
                        </Label>
                        <Input
                          id={`link-label-${index}`}
                          placeholder="LinkedIn"
                          value={link.label}
                          onChange={(e) => handleLinkChange(index, "label", e.target.value)}
                          className="h-7 text-xs"
                        />
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => removeLink(index)}
                        className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                      >
                        <Trash2 className="h-3 w-3" />
                      </Button>
                    </div>
                    <div>
                      <Label htmlFor={`link-url-${index}`} className="text-xs">
                        URL
                      </Label>
                      <Input
                        id={`link-url-${index}`}
                        placeholder="https://example.com"
                        value={link.url}
                        onChange={(e) => handleLinkChange(index, "url", e.target.value)}
                        className="h-7 text-xs"
                      />
                    </div>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    setResumeData({
                      ...resumeData,
                      personalInfo: {
                        ...resumeData.personalInfo,
                        links: [...resumeData.personalInfo.links, { url: "", label: "" }],
                      },
                    })
                  }
                  size="sm"
                  className="w-full h-8 text-xs"
                >
                  Add Link
                </Button>
              </div>
            </TabsContent>

            <TabsContent value="summary" className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="summary" className="text-sm">
                  Professional Summary
                </Label>
                <Textarea
                  id="summary"
                  ref={summaryRef}
                  rows={4}
                  value={resumeData.summary}
                  onChange={(e) => setResumeData({ ...resumeData, summary: e.target.value })}
                  className="text-xs"
                />
              </div>

              <div className="border p-3 rounded-md bg-gray-50">
                <h3 className="text-sm font-medium mb-2 flex items-center gap-2">
                  <Sparkles className="h-3 w-3" />
                  Generate with AI
                </h3>
                <div className="space-y-2">
                  <Label htmlFor="ai-prompt" className="text-xs">
                    Describe your role
                  </Label>
                  <div className="flex gap-2">
                    <Input
                      id="ai-prompt"
                      placeholder="Software Developer"
                      value={aiPrompt}
                      onChange={(e) => setAiPrompt(e.target.value)}
                      className="h-7 text-xs"
                    />
                    <Button
                      onClick={generateSummaryWithAI}
                      disabled={isGenerating || !aiPrompt}
                      size="sm"
                      className="h-7 text-xs"
                    >
                      {isGenerating ? "..." : "Generate"}
                    </Button>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="experience" className="space-y-4">
              {resumeData.experience.map((exp, index) => (
                <div
                  key={index}
                  className="space-y-3 p-3 border rounded-md"
                  ref={(el) => (experienceRefs.current[index] = el)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Experience #{index + 1}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeExperience(index)}
                      className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`exp-title-${index}`} className="text-xs">
                      Job Title & Company
                    </Label>
                    <Input
                      id={`exp-title-${index}`}
                      value={exp.title}
                      onChange={(e) => handleExperienceChange(index, "title", e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`exp-period-${index}`} className="text-xs">
                      Period
                    </Label>
                    <Input
                      id={`exp-period-${index}`}
                      value={exp.period}
                      onChange={(e) => handleExperienceChange(index, "period", e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`exp-desc-${index}`} className="text-xs">
                      Description
                    </Label>
                    <Textarea
                      id={`exp-desc-${index}`}
                      rows={3}
                      value={exp.description}
                      onChange={(e) => handleExperienceChange(index, "description", e.target.value)}
                      className="text-xs"
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  setResumeData({
                    ...resumeData,
                    experience: [...resumeData.experience, { title: "", period: "", description: "" }],
                  })
                }
                size="sm"
                className="w-full h-8 text-xs"
              >
                Add Experience
              </Button>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              {resumeData.education.map((edu, index) => (
                <div
                  key={index}
                  className="space-y-3 p-3 border rounded-md"
                  ref={(el) => (educationRefs.current[index] = el)}
                >
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-medium">Education #{index + 1}</h3>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeEducation(index)}
                      className="h-6 w-6 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`edu-degree-${index}`} className="text-xs">
                      Degree
                    </Label>
                    <Input
                      id={`edu-degree-${index}`}
                      value={edu.degree}
                      onChange={(e) => handleEducationChange(index, "degree", e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`edu-institution-${index}`} className="text-xs">
                      Institution
                    </Label>
                    <Input
                      id={`edu-institution-${index}`}
                      value={edu.institution}
                      onChange={(e) => handleEducationChange(index, "institution", e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor={`edu-period-${index}`} className="text-xs">
                      Period
                    </Label>
                    <Input
                      id={`edu-period-${index}`}
                      value={edu.period}
                      onChange={(e) => handleEducationChange(index, "period", e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                </div>
              ))}
              <Button
                onClick={() =>
                  setResumeData({
                    ...resumeData,
                    education: [...resumeData.education, { degree: "", institution: "", period: "" }],
                  })
                }
                size="sm"
                className="w-full h-8 text-xs"
              >
                Add Education
              </Button>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <div className="space-y-3" ref={technicalSkillsRef}>
                <h3 className="text-sm font-medium">Technical Skills</h3>
                {resumeData.skills.technical.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <Input
                      value={skill}
                      onChange={(e) => handleSkillsChange("technical", index, e.target.value)}
                      className="h-7 text-xs"
                    />
                  </div>
                ))}
                <Button
                  onClick={() =>
                    setResumeData({
                      ...resumeData,
                      skills: {
                        ...resumeData.skills,
                        technical: [...resumeData.skills.technical, ""],
                      },
                    })
                  }
                  size="sm"
                  className="w-full h-8 text-xs"
                >
                  Add Technical Skill
                </Button>
              </div>

              <div className="space-y-3" ref={languagesRef}>
                <h3 className="text-sm font-medium">Languages</h3>
                {resumeData.skills.languages.map((lang, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="flex-1">
                      <Select
                        value={lang.language}
                        onValueChange={(value) => handleLanguageChange(index, "language", value)}
                      >
                        <SelectTrigger className="h-7 text-xs">
                          <SelectValue placeholder="Language" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="English">English</SelectItem>
                          <SelectItem value="Spanish">Spanish</SelectItem>
                          <SelectItem value="French">French</SelectItem>
                          <SelectItem value="German">German</SelectItem>
                          <SelectItem value="Italian">Italian</SelectItem>
                          <SelectItem value="Portuguese">Portuguese</SelectItem>
                          <SelectItem value="Chinese">Chinese</SelectItem>
                          <SelectItem value="Japanese">Japanese</SelectItem>
                          <SelectItem value="Korean">Korean</SelectItem>
                          <SelectItem value="Russian">Russian</SelectItem>
                          <SelectItem value="Arabic">Arabic</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <Select value={lang.level} onValueChange={(value) => handleLanguageChange(index, "level", value)}>
                        <SelectTrigger className="h-7 text-xs">
                          <SelectValue placeholder="Level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Native">Native</SelectItem>
                          <SelectItem value="Fluent">Fluent</SelectItem>
                          <SelectItem value="Advanced (C2)">Advanced (C2)</SelectItem>
                          <SelectItem value="Advanced (C1)">Advanced (C1)</SelectItem>
                          <SelectItem value="Upper Intermediate (B2)">Upper Intermediate (B2)</SelectItem>
                          <SelectItem value="Intermediate (B1)">Intermediate (B1)</SelectItem>
                          <SelectItem value="Elementary (A2)">Elementary (A2)</SelectItem>
                          <SelectItem value="Beginner (A1)">Beginner (A1)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => removeLanguage(index)}
                      className="h-7 w-7 p-0 text-red-500 hover:text-red-700 hover:bg-red-100"
                    >
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                ))}
                <Button
                  onClick={() =>
                    setResumeData({
                      ...resumeData,
                      skills: {
                        ...resumeData.skills,
                        languages: [...resumeData.skills.languages, { language: "", level: "" }],
                      },
                    })
                  }
                  size="sm"
                  className="w-full h-8 text-xs"
                >
                  Add Language
                </Button>
              </div>
            </TabsContent>
          </Tabs>
        </SidebarContent>
      </Sidebar>

      <SidebarInset >
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Resume Preview</span>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 bg-gray-100 min-h-screen">
          <div className="flex justify-center">
            <ResumePreview data={resumeData} onSectionClick={focusOnSection} />
          </div>
        </div>
      </SidebarInset></>
  )
}
