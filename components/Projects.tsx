"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight, ExternalLink } from "lucide-react";

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  githubUrl?: string;
  demoUrl?: string;
}

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  // All 14 projects without guessed/placeholder links
  const projects: Project[] = [
    {
      title: "ShikshaBharat (AI Voice Platform)",
      desc: "An interactive AI-powered educational voice platform featuring real-time WebRTC voice streaming, chalkboard UI visualizers, and dynamic multi-agent handoffs between Aarvi and Vigyan Buddy.",
      tags: ["Voice AI", "LiveKit", "Murf Falcon TTS"],
    },
    {
      title: "CommunityPulse",
      desc: "A real-time crisis response and community needs platform built for Google Solution Challenge, utilizing Gemini AI to process NGO survey data, score urgency, and match volunteers.",
      tags: ["Next.js", "Gemini AI", "Crisis Response"],
    },
    {
      title: "Aquiila Labs Platform",
      desc: "An enterprise IT staffing and SAP consulting web platform built with Next.js 16, React 19, Framer Motion animations, and modern client inquiry workflows.",
      tags: ["Next.js", "Staffing", "SAP Consulting"],
    },
    {
      title: "Bangalir Hansal",
      desc: "A high-end scrollytelling web application for traditional Bengali cuisine, built with Next.js 14, Framer Motion, and scroll-linked HTML5 Canvas image sequences.",
      tags: ["Next.js", "Scrollytelling", "Restaurant"],
    },
    {
      title: "AI Image Generator",
      desc: "An advanced image generation web interface built using ComfyUI workflows and Generative AI pipelines for custom artwork rendering.",
      tags: ["AI", "GenAI", "ComfyUI"],
    },
    {
      title: "Hospital Management AI",
      desc: "Civilians can type in their symptoms and AI will analyse health data to recommend appropriate medical specialists and departments.",
      tags: ["AI", "Healthcare", "NLP"],
    },
    {
      title: "Custom Chatbots",
      desc: "A suite of custom LLM-powered chatbots crafted according to precise personal needs, domain knowledge, and unique operational workflows.",
      tags: ["LLM", "Chatbot", "AI"],
    },
    {
      title: "Gamified To-Do App",
      desc: "Productivity application that categorizes tasks based on urgency, awards points upon completion, and includes a real-time daily timetable viewer.",
      tags: ["Productivity", "Gamification", "App"],
    },
    {
      title: "Gym Membership Manager",
      desc: "A web application that manages gym member records, tracks payment histories, and automates active membership tracking.",
      tags: ["Web App", "Management", "Tracker"],
    },
    {
      title: "Sandbox AI Learning",
      desc: "An modern educational platform where AI is deeply integrated into curricula to accelerate learning speeds and personalize study pathways.",
      tags: ["EdTech", "AI", "Platform"],
    },
    {
      title: "Fit For Life Gym Portal",
      desc: "A web application for Fit For Life Unisex Gym backed by Google Sheets CRUD integration and admin authentication for member and payment tracking.",
      tags: ["Streamlit", "Python", "Google Sheets API"],
    },
    {
      title: "Fit For Life Web Platform & Manager",
      desc: "A web management portal and companion website for Fit For Life Gym, facilitating fitness program administration, scheduling, and client onboarding.",
      tags: ["Python", "Gym Management", "Web Portal"],
    },
    {
      title: "Developer Portfolio",
      desc: "A modern developer portfolio built with Next.js 16, React 19, Tailwind CSS, and Framer Motion showcasing software engineering projects and technical skills.",
      tags: ["Next.js", "Portfolio", "Framer Motion"],
    },
    {
      title: "StaysLocal Accommodation Portal",
      desc: "A responsive web application for discovering and booking local stays, featuring dynamic search, Firebase backend integration, and client-side image compression.",
      tags: ["React", "Firebase", "Travel Booking"],
    },
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 6);

  return (
    <section id="projects" className="min-h-screen relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg">Selected Work</h2>
            <p className="text-xl text-white/50 max-w-xl">
              A curated collection of my projects in AI agents, web applications, gamified productivity tools, and management platforms.
            </p>
          </div>
          <div className="flex gap-6 items-center flex-wrap">
            <a
              href="mailto:ishan200716@gmail.com"
              className="text-white hover:text-amber-400 transition-colors tracking-wide"
            >
              ishan200716@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/ishan-singh-b84b1a346/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-black bg-white px-5 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-colors shadow-lg flex items-center gap-1.5"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((proj, i) => {
              const primaryLink = proj.githubUrl || proj.demoUrl;

              return (
                <motion.div
                  key={proj.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  layout
                  className="glass p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/10 hover:border-amber-400/30 hover:scale-[1.02] transition-all duration-500 min-h-[300px] border border-white/10 relative"
                >
                  <div>
                    <div className="flex gap-2 flex-wrap mb-6">
                      {proj.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-white/10 rounded-full text-amber-300/90 border border-amber-400/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors drop-shadow-md flex items-center justify-between">
                      <span>{proj.title}</span>
                    </h3>
                    
                    <p className="text-white/60 leading-relaxed font-medium text-sm mb-6">{proj.desc}</p>
                  </div>

                  {/* Links Footer (Only renders when valid user URLs are provided) */}
                  {primaryLink && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-3">
                        {proj.githubUrl && (
                          <a
                            href={proj.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${proj.title}`}
                            className="p-2.5 bg-white/5 hover:bg-white/15 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                          </a>
                        )}
                        {proj.demoUrl && (
                          <a
                            href={proj.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${proj.title}`}
                            className="p-2.5 bg-white/5 hover:bg-white/15 rounded-full text-white/70 hover:text-amber-300 transition-colors border border-white/10"
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>

                      <a
                        href={primaryLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-amber-300 hover:text-amber-400 transition-colors"
                      >
                        <span>{proj.githubUrl ? "View Code" : "Live Demo"}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-base rounded-full shadow-xl hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>{showAll ? "Show Less" : `View All (${projects.length}) Projects`}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
