"use client";

import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projectsData } from "@/lib/projectsData";

export default function Projects() {
  // Show featured projects on home page
  const visibleProjects = projectsData.filter((p) => p.featured).slice(0, 6);

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
                  key={proj.id}
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

                  {/* Links Footer */}
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
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
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
          <Link
            href="/projects"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-black font-bold text-base rounded-full shadow-xl hover:shadow-amber-500/20 hover:scale-105 active:scale-95 transition-all duration-300 group cursor-pointer"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </Link>
        </div>
      </div>
    </section>
  );
}
