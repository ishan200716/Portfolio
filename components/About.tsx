"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Sparkles, Terminal } from "lucide-react";

export default function About() {
  const skills = [
    "JavaScript", "Python", "CSS", "HTML", "SQL",
    "Front end", "Backend", "Full Stack", "AI", "HuggingFace"
  ];

  return (
    <section className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24 border-t border-white/5">
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
          <div className="w-24 h-1 bg-gradient-to-r from-rose-400 to-purple-500 rounded-full mt-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Biography */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="lg:col-span-7 space-y-8 text-lg md:text-xl text-white/70 leading-relaxed font-light"
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
            
            <div className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl glass mt-4">
              <MapPin className="text-rose-400" size={24} />
              <span className="text-white font-medium">Kolkata, West Bengal</span>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            {/* Glowing background blob */}
            <div className="absolute inset-0 bg-gradient-to-tr from-rose-500/10 to-purple-500/10 blur-3xl -z-10 rounded-full"></div>
            
            <div className="glass p-8 md:p-10 rounded-3xl h-full border border-white/10">
              <div className="flex items-center gap-3 mb-8">
                 <Terminal className="text-purple-400" size={28} />
                 <h3 className="text-2xl font-bold text-white tracking-wide">Core Traits</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, i) => (
                  <motion.span 
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.5 + i * 0.05 }}
                    className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-white/90 text-sm font-medium tracking-wide transition-all hover:scale-105 hover:text-white hover:border-white/30 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
