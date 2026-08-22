export interface Project {
  id: string;
  title: string;
  desc: string;
  tags: string[];
  category: "AI" | "Web" | "Management" | "Productivity";
  githubUrl?: string;
  demoUrl?: string;
  featured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "shiksha-bharat",
    title: "ShikshaBharat (AI Voice Platform)",
    desc: "An interactive AI-powered educational voice platform featuring real-time WebRTC voice streaming, chalkboard UI visualizers, and dynamic multi-agent handoffs between Aarvi and Vigyan Buddy.",
    tags: ["Voice AI", "LiveKit", "Murf Falcon TTS"],
    category: "AI",
    githubUrl: "https://github.com/murf-ai/murf-livekit-starter",
    featured: true,
  },
  {
    id: "community-pulse",
    title: "CommunityPulse",
    desc: "A real-time crisis response and community needs platform built for Google Solution Challenge, utilizing Gemini AI to process NGO survey data, score urgency, and match volunteers.",
    tags: ["Next.js", "Gemini AI", "Crisis Response"],
    category: "AI",
    demoUrl: "https://communitypulse-2026.web.app/",
    featured: true,
  },
  {
    id: "aquiila-labs",
    title: "Aquiila Labs Platform",
    desc: "An enterprise IT staffing and SAP consulting web platform built with Next.js 16, React 19, Framer Motion animations, and modern client inquiry workflows.",
    tags: ["Next.js", "Staffing", "SAP Consulting"],
    category: "Web",
    demoUrl: "https://aquiilalabs.com",
    featured: true,
  },
  {
    id: "bangalir-hansal",
    title: "Bangalir Hansal",
    desc: "A high-end scrollytelling web application for traditional Bengali cuisine, built with Next.js 14, Framer Motion, and scroll-linked HTML5 Canvas image sequences.",
    tags: ["Next.js", "Scrollytelling", "Restaurant"],
    category: "Web",
    demoUrl: "https://bangalir-hansal.web.app/",
    featured: true,
  },
  {
    id: "ai-image-generator",
    title: "AI Image Generator",
    desc: "An advanced image generation web interface built using ComfyUI workflows and Generative AI pipelines for custom artwork rendering.",
    tags: ["AI", "GenAI", "ComfyUI"],
    category: "AI",
    featured: true,
  },
  {
    id: "hospital-management-ai",
    title: "Hospital Management AI",
    desc: "Civilians can type in their symptoms and AI will analyse health data to recommend appropriate medical specialists and departments.",
    tags: ["AI", "Healthcare", "NLP"],
    category: "AI",
    featured: true,
  },
  {
    id: "custom-chatbots",
    title: "Custom Chatbots",
    desc: "A suite of custom LLM-powered chatbots crafted according to precise personal needs, domain knowledge, and unique operational workflows.",
    tags: ["LLM", "Chatbot", "AI"],
    category: "AI",
  },
  {
    id: "gamified-todo",
    title: "Gamified To-Do App",
    desc: "Productivity application that categorizes tasks based on urgency, awards points upon completion, and includes a real-time daily timetable viewer.",
    tags: ["Productivity", "Gamification", "App"],
    category: "Productivity",
    githubUrl: "https://github.com/ishan200716/To-do-timetable",
  },
  {
    id: "gym-membership-manager",
    title: "Gym Membership Manager",
    desc: "A web application that manages gym member records, tracks payment histories, and automates active membership tracking.",
    tags: ["Web App", "Management", "Tracker"],
    category: "Management",
    githubUrl: "https://github.com/ishan200716/fit-for-life-manager",
  },
  {
    id: "sandbox-ai-learning",
    title: "Sandbox AI Learning",
    desc: "An modern educational platform where AI is deeply integrated into curricula to accelerate learning speeds and personalize study pathways.",
    tags: ["EdTech", "AI", "Platform"],
    category: "AI",
    demoUrl: "https://www.linkedin.com/in/ishan-singh-b84b1a346/details/projects/",
  },
  {
    id: "fit-for-life-portal",
    title: "Fit For Life Gym Portal",
    desc: "A web application for Fit For Life Unisex Gym backed by Google Sheets CRUD integration and admin authentication for member and payment tracking.",
    tags: ["Streamlit", "Python", "Google Sheets API"],
    category: "Management",
    demoUrl: "https://fit-for-life-gym-serampore.web.app/",
  },
  {
    id: "developer-portfolio",
    title: "Developer Portfolio",
    desc: "A modern developer portfolio built with Next.js 16, React 19, Tailwind CSS, and Framer Motion showcasing software engineering projects and technical skills.",
    tags: ["Next.js", "Portfolio", "Framer Motion"],
    category: "Web",
    demoUrl: "https://portfoliov1-smoky.vercel.app/",
  },
  {
    id: "stayslocal-portal",
    title: "StaysLocal Accommodation Portal",
    desc: "A responsive web application for discovering and booking local stays, featuring dynamic search, Firebase backend integration, and client-side image compression.",
    tags: ["React", "Firebase", "Travel Booking"],
    category: "Web",
    demoUrl: "https://stayslocal-blr.web.app/",
  },
];
