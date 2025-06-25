import {
  CheckCircle,
  Clock,
  Folder,
  Globe,
  Paperclip,
  Pencil,
  Phone,
  Rocket,
  Share,
  Sparkles,
  Users,
  Zap,
  Target,
  TrendingUp,
  Shield,
  Palette,
  Search,
  MessageCircle,
  Award,
  BarChart3,
  Download,
  Eye,
  Github,
} from "lucide-react";

const roadmap = [
  {
    title: "Open Source",
    description:
      "I'm planning to make Resume Builder open source and free to use.",
    icon: <Github className="text-gray-500 w-6 h-6" />,
  },
  {
    title: "AI-Powered Work Experience Editor",
    description:
      "Automatically generate your professional history based on simple inputs.",
    icon: <Sparkles className="text-violet-600 w-6 h-6" />,
  },
  {
    title: "Fully Customizable Templates",
    description:
      "Change fonts, colors, and section order to match your style and goals.",
    icon: <Rocket className="text-orange-500 w-6 h-6" />,
  },
  {
    title: "Export to Word and JSON",
    description:
      "In addition to PDF and PNG, you'll be able to export your resume in editable and structured formats.",
    icon: <CheckCircle className="text-green-600 w-6 h-6" />,
  },
  {
    title: "Save Progress Without Registration",
    description:
      "Your resume will be saved locally and optionally in the cloud—no login required.",
    icon: <Clock className="text-blue-500 w-6 h-6" />,
  },
  {
    title: "Multi-language Support",
    description:
      "Create your resume in multiple languages to make it more accessible to a wider audience.",
    icon: <Globe className="text-purple-500 w-6 h-6" />,
  },
  {
    title: "Shareable Resume",
    description:
      "Share your resume with others via link or QR code to make it more accessible to a wider audience.",
    icon: <Share className="text-pink-500 w-6 h-6" />,
  },
  {
    title: "Project Management",
    description:
      "Create a project management section to showcase your skills and experience in a project-based environment.",
    icon: <Folder className="text-amber-400 w-6 h-6" />,
  },
  {
    title: "Attachments",
    description:
      "Add attachments to your resume to showcase your skills and experience in a project-based environment.",
    icon: <Paperclip className="text-emerald-400 w-6 h-6" />,
  },
  {
    title: "Customizable Sections",
    description:
      "Create a customizable sections to showcase your skills and experience in a project-based environment.",
    icon: <Pencil className="text-indigo-400 w-6 h-6" />,
  },
  {
    title: "PWA",
    description:
      "Make Resume Builder a PWA to make it more accessible and easier to use.",
    icon: <Phone className="text-cyan-400 w-6 h-6" />,
  },
  {
    title: "AI Resume Review & Optimization",
    description:
      "Get AI-powered feedback and suggestions to improve your resume's content and structure for better ATS compatibility.",
    icon: <Target className="text-red-500 w-6 h-6" />,
  },
  {
    title: "Industry-Specific Templates",
    description:
      "Access specialized resume templates tailored for different industries like tech, healthcare, finance, and creative fields.",
    icon: <Users className="text-teal-500 w-6 h-6" />,
  },
  {
    title: "Real-time Collaboration",
    description:
      "Collaborate with mentors, career coaches, or friends to get feedback and suggestions in real-time.",
    icon: <MessageCircle className="text-lime-500 w-6 h-6" />,
  },
  {
    title: "Resume Analytics Dashboard",
    description:
      "Track views, downloads, and engagement metrics when you share your resume with potential employers.",
    icon: <BarChart3 className="text-blue-600 w-6 h-6" />,
  },
  {
    title: "ATS Score Checker",
    description:
      "Analyze your resume against Applicant Tracking Systems to ensure it passes automated screening processes.",
    icon: <Shield className="text-slate-600 w-6 h-6" />,
  },
  {
    title: "Smart Content Suggestions",
    description:
      "Get AI-powered suggestions for keywords, skills, and phrases based on your target job descriptions.",
    icon: <Zap className="text-yellow-500 w-6 h-6" />,
  },
  {
    title: "Portfolio Integration",
    description:
      "Seamlessly integrate your work portfolio, GitHub projects, and online presence into your resume.",
    icon: <Eye className="text-violet-500 w-6 h-6" />,
  },
  {
    title: "Career Progression Tracker",
    description:
      "Visualize your career growth and track your professional development over time with interactive timelines.",
    icon: <TrendingUp className="text-green-500 w-6 h-6" />,
  },
  {
    title: "Theme Builder",
    description:
      "Create and save your own custom themes with advanced styling options, gradients, and layout variations.",
    icon: <Palette className="text-pink-600 w-6 h-6" />,
  },
  {
    title: "Job Application Tracker",
    description:
      "Keep track of your job applications, interview schedules, and follow-ups directly within the platform.",
    icon: <Search className="text-orange-600 w-6 h-6" />,
  },
  {
    title: "Skills Assessment Integration",
    description:
      "Validate your skills with integrated assessments and automatically add verified competencies to your resume.",
    icon: <Award className="text-amber-600 w-6 h-6" />,
  },
  {
    title: "Bulk Export & Management",
    description:
      "Create multiple resume versions for different roles and export them in bulk with customized naming conventions.",
    icon: <Download className="text-indigo-600 w-6 h-6" />,
  },
];

export default function RoadmapPage() {
  return (
    <main className="container mx-auto py-20 px-6 pt-32">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
        What&apos;s Coming Next ✨
      </h1>
      <p className="text-muted-foreground text-lg text-center mb-16 max-w-2xl mx-auto">
        We&apos;re constantly improving Resume Builder to make resume creation
        faster, easier, and more professional—stay tuned!
      </p>
      <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4 container mx-auto">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 overflow-hidden bg-card border rounded-xl shadow-md p-6 flex gap-4 items-start backdrop-blur-sm border-border hover:bg-card/20 "
          >
            <div className="flex-shrink-0">{item.icon}</div>
            <div>
              <h2 className="text-xl font-semibold">{item.title}</h2>
              <p className="text-muted-foreground mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
