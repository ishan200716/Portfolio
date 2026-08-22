"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, ExternalLink, Search, Sparkles } from "lucide-react";
import { projectsData } from "@/lib/projectsData";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All", "AI", "Web", "Management", "Productivity"];

  // Filter projects by category and search query
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory =
        selectedCategory === "All" || project.category === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        project.title.toLowerCase().includes(q) ||
        project.desc.toLowerCase().includes(q) ||
        project.tags.some((tag) => tag.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <main className="min-h-screen w-full bg-[#121212] text-white relative py-12 px-6 md:px-12 lg:px-24 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-500/10 blur-[160px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[400px] bg-amber-600/5 blur-[140px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Navigation Top Bar */}
        <div className="flex items-center justify-between gap-4 mb-16 pb-6 border-b border-white/10">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full glass hover:bg-white/10 border border-white/10 text-white/90 hover:text-white transition-all hover:scale-105 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-semibold tracking-wide">Back to Portfolio</span>
          </Link>

          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/logo.png"
              alt="Ishan Singh Logo"
              width={40}
              height={40}
              className="h-10 w-10 object-contain rounded-full bg-white/5 p-1 border border-white/10 group-hover:scale-105 transition-transform"
            />
            <span className="text-lg font-bold tracking-widest bg-gradient-to-r from-white to-amber-300 bg-clip-text text-transparent">
              ISHAN
            </span>
          </Link>
        </div>

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-amber-400/10 text-amber-300 border border-amber-400/20 mb-4">
            <Sparkles size={14} />
            <span>Complete Showcase ({projectsData.length} Projects)</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
            All Projects & Builds
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl font-light leading-relaxed">
            Explore my full collection of AI platforms, Web Applications, Management systems, and Developer tools.
          </p>
        </motion.div>

        {/* Search & Category Filter Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 mb-12"
        >
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-amber-400 text-black shadow-lg shadow-amber-400/20 scale-105"
                    : "bg-white/5 hover:bg-white/10 text-white/70 hover:text-white border border-white/10"
                }`}
              >
                {cat === "All" ? `All (${projectsData.length})` : cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-white/40" size={18} />
            <input
              type="text"
              placeholder="Search by title, desc, or tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-2.5 rounded-full glass bg-white/5 border border-white/10 text-white text-sm placeholder-white/40 focus:outline-none focus:border-amber-400/50 transition-colors"
            />
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => {
              const primaryLink = project.githubUrl || project.demoUrl;

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3, delay: idx * 0.03 }}
                  className="glass p-8 rounded-3xl flex flex-col justify-between group hover:bg-white/10 hover:border-amber-400/30 hover:scale-[1.02] transition-all duration-500 min-h-[300px] border border-white/10 relative"
                >
                  <div>
                    {/* Tags */}
                    <div className="flex gap-2 flex-wrap mb-6">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 bg-white/10 rounded-full text-amber-300/90 border border-amber-400/20"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors drop-shadow-md">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/60 leading-relaxed font-medium text-sm mb-6">
                      {project.desc}
                    </p>
                  </div>

                  {/* Links Footer */}
                  {primaryLink && (
                    <div className="pt-4 border-t border-white/10 flex items-center justify-between gap-4 mt-auto">
                      <div className="flex items-center gap-3">
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`GitHub repository for ${project.title}`}
                            className="p-2.5 bg-white/5 hover:bg-white/15 rounded-full text-white/70 hover:text-white transition-colors border border-white/10"
                          >
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" /></svg>
                          </a>
                        )}
                        {project.demoUrl && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live demo for ${project.title}`}
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
                        <span>{project.githubUrl ? "View Code" : "Live Demo"}</span>
                        <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  )}
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 glass rounded-3xl mt-8">
            <p className="text-white/60 text-lg">No projects match your current search or filter.</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="mt-4 px-6 py-2.5 bg-amber-400 text-black font-bold text-sm rounded-full"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
