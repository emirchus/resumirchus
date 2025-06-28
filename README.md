# 🚀 AI-Powered Resume Builder

[![Next.js](https://img.shields.io/badge/Next.js-15.3.1-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.5-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

Build your professional resume 10x faster with our cutting-edge AI-powered resume builder. Create polished, professional resumes in minutes without worrying about formatting or structure.

## ✨ Features

- **🤖 AI-Powered Summaries**: Automatically generate professional summaries that highlight your skills and experience
- **📄 PDF Import**: Import existing resumes from PDF files and edit them seamlessly
- **🎨 Professional Design**: Sleek, modern templates optimized for both aesthetics and functionality
- **📱 Responsive Interface**: Works perfectly on desktop and mobile devices
- **🔄 Real-time Preview**: See changes instantly as you build your resume
- **💾 Export Options**: Download your resume as PDF, PNG, or JPG
- **🆓 Completely Free**: No hidden fees, no paywalls, unlimited usage
- **🌙 Dark/Light Mode**: Toggle between themes for comfortable editing

## 🛠️ Tech Stack

### Core Technologies
- **[Next.js 15.3.1](https://nextjs.org/)** - React framework with App Router
- **[React 19.1.0](https://reactjs.org/)** - UI library
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe JavaScript
- **[Tailwind CSS 4.1.5](https://tailwindcss.com/)** - Utility-first CSS framework

### AI & Data Processing
- **[AI SDK](https://sdk.vercel.ai/)** - AI integration for resume enhancement
- **[Groq AI](https://groq.com/)** - Fast AI inference
- **[Upstash Redis](https://upstash.com/redis)** - Rate limiting
- **[PDF Parse](https://www.npmjs.com/package/pdf-parse)** - PDF text extraction
- **[Zod](https://zod.dev/)** - Schema validation

### UI Components & Animation
- **[Radix UI](https://www.radix-ui.com/)** - Headless UI components
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Motion](https://motion.dev/)** - Smooth animations
- **[Sonner](https://sonner.emilkowal.ski/)** - Toast notifications

### State Management & Utils
- **[Zustand](https://zustand-demo.pmnd.rs/)** - Lightweight state management

### Export & Generation
- **[React PDF Renderer](https://react-pdf.org/)** - PDF generation
- **[html2canvas](https://html2canvas.hertzen.com/)** - Canvas screenshots
- **[jsPDF](https://github.com/parallax/jsPDF)** - PDF creation

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- **Node.js** (version 18 or higher)
- **pnpm** (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/emirchus/resumirchus.git
   cd resumirchus
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```

   Add your AI service API keys to `.env.local`:
   ```env
    GROQ_API_KEY=
    KV_URL=
    KV_REST_API_URL=
    KV_REST_API_TOKEN=
    KV_REST_API_READ_ONLY_TOKEN=
    REDIS_URL=
   ```

4. **Run the development server**
   ```bash
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📖 Usage

### Building Your Resume

1. **Start Building**: Click "Get Started" on the landing page
2. **Fill Personal Information**: Add your contact details and links
3. **Add Experience**: Include your work history with descriptions
4. **Add Education**: List your educational background
5. **Add Skills**: Organize technical skills by category and languages
6. **Generate AI Summary**: Use AI to create a professional summary
7. **Enhance Content**: Let AI improve your descriptions
8. **Export**: Download your resume in PDF, PNG, or JPG format

### Importing Existing Resumes

1. Click the **Import PDF** button in the builder
2. Upload your existing resume PDF
3. The system will extract and populate your information
4. Review and edit as needed

### AI Features

- **Generate Summary**: AI creates professional summaries based on your experience
- **Enhance Content**: AI improves existing descriptions and content
- **Smart Suggestions**: Get recommendations for better phrasing

## 📁 Project Structure

```
resumirchus/
├── src/
│   ├── app/
│   │   ├── (landing)/          # Landing page components
│   │   ├── builder/            # Resume builder application
│   │   │   ├── actions/        # Server actions for AI features
│   │   │   ├── components/     # Builder-specific components
│   │   │   └── utils/          # Builder utilities
│   │   └── globals.css         # Global styles
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   └── magicui/            # Special effect components
│   ├── hooks/                  # Custom React hooks
│   ├── lib/                    # Utility libraries
│   └── stores/                 # State management
├── public/                     # Static assets
└── package.json
```

## 🔧 Available Scripts

```bash
# Development
pnpm dev          # Start development server

# Building
pnpm build        # Build for production
pnpm start        # Start production server

# Code Quality
pnpm lint         # Check code quality
```

## 🎨 Customization

### Adding New Resume Templates

1. Create new template components in `src/app/builder/components/`
2. Update the resume data types in `src/app/builder/types.ts`
3. Add template selection logic to the builder

### Modifying AI Prompts

Edit the AI action files in `src/app/builder/actions/` to customize:
- Summary generation prompts
- Content enhancement instructions
- PDF parsing logic

### Styling

The project uses Tailwind CSS with custom configurations:
- Colors and themes in `src/app/globals.css`
- Component variants with `class-variance-authority`
- Responsive design patterns throughout

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/) and the React ecosystem
- UI components powered by [Radix UI](https://www.radix-ui.com/)
- AI capabilities through [Vercel AI SDK](https://sdk.vercel.ai/)
- Design inspiration from modern web applications

## 📞 Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/emirchus/resumirchus/issues) page
2. Create a new issue if your problem isn't already reported
3. Provide detailed information about your environment and the issue

---

**Made with ❤️ by [@emirchus](https://github.com/emirchus)**
