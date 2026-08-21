"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowUpRight } from "lucide-react";

export default function Projects() {
  const [showAll, setShowAll] = useState(false);

  const projects = [
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
              A curated collection of my recent projects in AI agents, web applications, and management platforms.
            </p>
          </div>
          <div className="flex gap-6 items-center">
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
              className="font-semibold text-black bg-white px-5 py-2 rounded-full hover:bg-amber-400 hover:text-black transition-colors shadow-lg"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {visibleProjects.map((proj, i) => (
              <motion.div
                key={proj.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                layout
                className="glass p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/10 hover:scale-[1.02] transition-all duration-500 min-h-[320px] border border-white/10"
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
                    <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity text-amber-300 shrink-0 ml-2" />
                  </h3>
                  <p className="text-white/60 leading-relaxed font-medium">{proj.desc}</p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        <div className="mt-16 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-base rounded-full shadow-xl hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>{showAll ? "Show Less" : "View More Work"}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-300 ${showAll ? "rotate-180" : ""}`}
            />
          </button>
        </div>
      </div>
    </section>
  );
}
