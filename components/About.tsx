"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Cpu, Layers } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPython,
  SiNodedotjs,
  SiFirebase,
  SiHuggingface,
  SiWebrtc,
  SiPostgresql,
  SiGit,
  SiHtml5,
  SiCss,
} from "react-icons/si";

interface TechItem {
  name: string;
  category: "Frontend" | "Backend" | "AI & Tools";
  icon: React.ElementType;
  color: string;
}

const techStack: TechItem[] = [
  // Frontend
  { name: "React", category: "Frontend", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", category: "Frontend", icon: SiNextdotjs, color: "#FFFFFF" },
  { name: "TypeScript", category: "Frontend", icon: SiTypescript, color: "#3178C6" },
  { name: "JavaScript", category: "Frontend", icon: SiJavascript, color: "#F7DF1E" },
  { name: "Tailwind CSS", category: "Frontend", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "HTML5", category: "Frontend", icon: SiHtml5, color: "#E34F26" },
  { name: "CSS3", category: "Frontend", icon: SiCss, color: "#1572B6" },

  // Backend & Cloud
  { name: "Python", category: "Backend", icon: SiPython, color: "#3776AB" },
  { name: "Node.js", category: "Backend", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Firebase", category: "Backend", icon: SiFirebase, color: "#FFCA28" },
  { name: "SQL", category: "Backend", icon: SiPostgresql, color: "#4169E1" },
  { name: "Git", category: "Backend", icon: SiGit, color: "#F05032" },

  // AI & Tools
  { name: "Hugging Face", category: "AI & Tools", icon: SiHuggingface, color: "#FFD21E" },
  { name: "LiveKit / WebRTC", category: "AI & Tools", icon: SiWebrtc, color: "#009688" },
];

const categories = ["All", "Frontend", "Backend", "AI & Tools"] as const;

export default function About() {
  const [activeTab, setActiveTab] = useState<string>("All");

  const filteredTech = techStack.filter(
    (item) => activeTab === "All" || item.category === activeTab
  );

  return (
    <section id="about" className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4 drop-shadow-lg flex items-center gap-4">
             About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-light"
          >
            <p>
              Hello! I'm <span className="text-white font-medium">Ishan</span>, a passionate developer based in Kolkata, West Bengal. I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between.
            </p>
            <p>
              My journey in tech started with a curiosity about how things work under the hood. Today, I'm a Student, Full Stack Developer, UI/UX Designer, and AI Engineer, constantly learning and adapting to new technologies.
            </p>
            <p>
              When I'm not at my computer, you can usually find me exploring new design trends, reading about AI advancements, or working on personal projects that challenge my skills.
            </p>
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass mt-4 border border-white/10 shadow-lg">
              <MapPin className="text-amber-400 shrink-0" size={24} />
              <span className="text-white font-medium">Kolkata, West Bengal</span>
            </div>
          </motion.div>

          {/* Tech Stack Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-6 relative"
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/15 via-amber-600/10 to-transparent blur-3xl -z-10 rounded-full"></div>
            
            <div className="glass p-6 md:p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl">
              
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-500/10 rounded-2xl border border-amber-500/20">
                    <Cpu className="text-amber-400" size={24} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-wide">Tech Stack & Tools</h3>
                    <p className="text-xs text-white/50 font-light">Technologies & frameworks I work with</p>
                  </div>
                </div>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 p-1.5 bg-white/5 rounded-2xl border border-white/5">
                {categories.map((cat) => {
                  const isActive = activeTab === cat;
                  return (
                    <button
                      key={cat}
                      onClick={() => setActiveTab(cat)}
                      className={`relative px-4 py-2 rounded-xl text-xs md:text-sm font-medium transition-all duration-300 ${
                        isActive
                          ? "text-amber-300 font-semibold shadow-md"
                          : "text-white/60 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeTabBackground"
                          className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-amber-600/20 rounded-xl border border-amber-500/30 -z-0"
                          transition={{ type: "spring", stiffness: 400, damping: 30 }}
                        />
                      )}
                      <span className="relative z-10">{cat}</span>
                    </button>
                  );
                })}
              </div>

              {/* Tech Cards Grid */}
              <motion.div 
                layout
                className="grid grid-cols-2 sm:grid-cols-3 gap-3"
              >
                <AnimatePresence mode="popLayout">
                  {filteredTech.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={item.name}
                        layout
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.25 }}
                        whileHover={{ y: -3, scale: 1.02 }}
                        className="group relative flex items-center gap-3 p-3.5 rounded-2xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 hover:border-amber-400/40 transition-all duration-300 cursor-default shadow-sm hover:shadow-amber-500/5"
                      >
                        {/* Icon Box */}
                        <div 
                          className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0 bg-white/5 border border-white/10 group-hover:border-white/20 transition-all duration-300 shadow-inner group-hover:scale-110"
                        >
                          <IconComponent 
                            size={20} 
                            style={{ color: item.color }} 
                            className="transition-transform duration-300 drop-shadow-[0_0_8px_rgba(255,255,255,0.15)]" 
                          />
                        </div>

                        {/* Details */}
                        <div className="min-w-0 flex-1">
                          <h4 className="text-sm font-semibold text-white/90 group-hover:text-white truncate transition-colors">
                            {item.name}
                          </h4>
                          <span className="text-[10px] text-white/40 group-hover:text-amber-400/80 transition-colors uppercase tracking-wider font-medium">
                            {item.category}
                          </span>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

