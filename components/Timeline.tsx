"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { GraduationCap, School, Briefcase, Sparkles, Calendar, Award, Star } from "lucide-react";

interface Milestone {
  id: number;
  date: string;
  title: string;
  institution: string;
  badge?: string;
  description?: string;
  icon: React.ElementType;
  accentColor: string;
  threshold: number; // scroll progress threshold (0 to 1) to illuminate
}

const milestones: Milestone[] = [
  {
    id: 1,
    date: "2023 - March",
    title: "Graduated Class X",
    institution: "Gospel Home School (ICSE)",
    badge: "94.6%",
    description: "Completed secondary education with high distinction under the ICSE curriculum.",
    icon: GraduationCap,
    accentColor: "from-amber-400 to-amber-600",
    threshold: 0.1,
  },
  {
    id: 2,
    date: "2025 - March",
    title: "Graduated Class XII",
    institution: "Aditya Birla Vani Bharati (CBSE)",
    badge: "91.4%",
    description: "Completed higher secondary education in Science stream under CBSE.",
    icon: Award,
    accentColor: "from-amber-400 to-yellow-500",
    threshold: 0.3,
  },
  {
    id: 3,
    date: "2025 - August",
    title: "Joined Techno India University",
    institution: "Bachelor of Technology / Computer Science",
    badge: "Current CGPA: 9.41",
    description: "Pursuing undergraduate degree with strong academic performance and hands-on projects.",
    icon: School,
    accentColor: "from-amber-300 to-amber-500",
    threshold: 0.52,
  },
  {
    id: 4,
    date: "2026 - August",
    title: "1 Month Paid Internship",
    institution: "Aquiila Labs",
    badge: "Software Engineering Intern",
    description: "Gained hands-on software development experience building real-world applications.",
    icon: Briefcase,
    accentColor: "from-amber-400 to-orange-500",
    threshold: 0.75,
  },
  {
    id: 5,
    date: "Future & Beyond",
    title: "Let's see what happens next...",
    institution: "The Journey Continues",
    badge: "Upcoming Chapter",
    description: "Constantly learning, building, and exploring new horizons in tech and AI.",
    icon: Sparkles,
    accentColor: "from-amber-300 via-yellow-400 to-amber-500",
    threshold: 0.92,
  },
];

function MilestoneCard({
  item,
  index,
  scrollProgress,
}: {
  item: Milestone;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const opacity = useTransform(
    scrollProgress,
    [item.threshold - 0.12, item.threshold, item.threshold + 0.15],
    [0.3, 1, 1]
  );
  const scale = useTransform(
    scrollProgress,
    [item.threshold - 0.12, item.threshold, item.threshold + 0.15],
    [0.94, 1.02, 1]
  );
  const isLeft = index % 2 === 0;

  return (
    <div className="relative flex items-center w-full my-8 lg:my-16">
      {/* Desktop: Card positioned left or right with center gap for the spine */}
      <motion.div
        style={{ opacity, scale }}
        transition={{ duration: 0.4 }}
        className={`w-full lg:w-[calc(50%-3.5rem)] z-10 pl-16 lg:pl-0 ${
          isLeft ? "lg:mr-auto lg:pr-4" : "lg:ml-auto lg:pl-4"
        }`}
      >
        <div className="glass p-6 md:p-8 rounded-3xl relative overflow-hidden group hover:border-amber-400/50 transition-all duration-500 shadow-xl hover:shadow-amber-500/10">
          {/* Ambient Glow inside card */}
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-amber-500/10 rounded-full blur-2xl group-hover:bg-amber-500/20 transition-all duration-500 pointer-events-none" />

          {/* Header: Date & Badge */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/10 text-amber-300 border border-amber-400/20">
              <Calendar size={13} />
              {item.date}
            </span>
            {item.badge && (
              <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-400 to-amber-500 text-black shadow-md">
                {(item.badge.includes("CGPA") || item.badge.includes("%")) && (
                  <Star size={12} className="fill-black" />
                )}
                {item.badge}
              </span>
            )}
          </div>

          {/* Title & Institution */}
          <h3 className="text-xl md:text-2xl font-bold text-white mb-1 group-hover:text-amber-300 transition-colors duration-300">
            {item.title}
          </h3>
          <p className="text-sm md:text-base font-medium text-amber-200/80 mb-3">
            {item.institution}
          </p>

          {/* Description */}
          {item.description && (
            <p className="text-sm text-white/70 leading-relaxed font-light">
              {item.description}
            </p>
          )}

          {/* Subtle Bottom Accent Line */}
          <div
            className={`h-[2px] w-12 bg-gradient-to-r ${item.accentColor} rounded-full mt-4 group-hover:w-24 transition-all duration-500`}
          />
        </div>
      </motion.div>
    </div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track scroll progress over the timeline container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 50%", "end 80%"],
  });

  // Delay the start of the line illumination so it lights up late during the beginning
  const pathLength = useTransform(scrollYProgress, [0, 0.15, 1], [0, 0.01, 1]);

  // Desktop Center Serpentine Curved Path (Center = x=400 in 800-wide viewBox)
  // Gracefully weaves left & right through x=400 at each node position (y=60, 320, 580, 840, 1100)
  const desktopPath = `
    M 400 40
    C 200 140, 600 220, 400 320
    C 200 420, 600 500, 400 580
    C 200 680, 600 760, 400 840
    C 200 940, 600 1020, 400 1100
    C 300 1180, 400 1240, 400 1300
  `;

  // Mobile Curved Line running down left margin (x=24)
  const mobilePath = `
    M 24 30
    C 44 150, 4 270, 24 390
    C 44 510, 4 630, 24 750
    C 44 870, 4 990, 24 1110
    C 44 1210, 24 1270, 24 1300
  `;

  return (
    <section
      id="timeline"
      ref={containerRef}
      className="relative z-20 bg-[#121212] py-24 px-6 md:px-12 lg:px-24 overflow-hidden border-t border-white/5"
    >
      {/* Ambient Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-500/5 blur-[140px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-amber-600/5 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16 md:mb-24"
        >
          <span className="text-xs md:text-sm font-bold uppercase tracking-[0.3em] text-amber-400 mb-3 block">
            Milestones & Experience
          </span>
          <h2 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight drop-shadow-lg">
            My Journey
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-600 rounded-full mx-auto mt-6 shadow-[0_0_12px_rgba(245,158,11,0.5)]" />
        </motion.div>

        {/* Timeline Layout */}
        <div className="relative">
          {/* Desktop SVG Curved Spine (Center) */}
          <div className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none -z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 1340"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="amber-glow-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Unlit Base Line */}
              <path
                d={desktopPath}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              {/* Glowing Scroll-Animated Path */}
              <motion.path
                d={desktopPath}
                stroke="url(#amber-glow-gradient)"
                strokeWidth="5"
                strokeLinecap="round"
                filter="url(#neon-glow)"
                style={{
                  pathLength,
                }}
              />
            </svg>
          </div>

          {/* Mobile SVG Curved Line (Left Margin) */}
          <div className="lg:hidden absolute inset-0 w-full h-full pointer-events-none -z-0">
            <svg
              className="w-full h-full"
              viewBox="0 0 50 1340"
              preserveAspectRatio="none"
              fill="none"
            >
              <defs>
                <linearGradient id="amber-glow-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#f59e0b" />
                  <stop offset="50%" stopColor="#fbbf24" />
                  <stop offset="100%" stopColor="#d97706" />
                </linearGradient>
                <filter id="neon-glow-mobile" x="-30%" y="-30%" width="160%" height="160%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={mobilePath}
                stroke="rgba(255, 255, 255, 0.08)"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <motion.path
                d={mobilePath}
                stroke="url(#amber-glow-mobile)"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#neon-glow-mobile)"
                style={{
                  pathLength,
                }}
              />
            </svg>
          </div>

          {/* List of Milestones */}
          <div className="relative z-10 flex flex-col space-y-4 lg:space-y-0">
            {milestones.map((milestone, idx) => (
              <div key={milestone.id} className="relative">
                {/* Center / Left Node Marker */}
                <NodeMarker
                  milestone={milestone}
                  index={idx}
                  scrollProgress={scrollYProgress}
                />
                {/* Milestone Card */}
                <MilestoneCard
                  item={milestone}
                  index={idx}
                  scrollProgress={scrollYProgress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Glowing Marker Node
function NodeMarker({
  milestone,
  scrollProgress,
}: {
  milestone: Milestone;
  index: number;
  scrollProgress: MotionValue<number>;
}) {
  const Icon = milestone.icon;

  const scale = useTransform(
    scrollProgress,
    [milestone.threshold - 0.08, milestone.threshold, milestone.threshold + 0.15],
    [0.85, 1.2, 1]
  );

  const glowOpacity = useTransform(
    scrollProgress,
    [milestone.threshold - 0.08, milestone.threshold, milestone.threshold + 0.15],
    [0.2, 1, 0.7]
  );

  return (
    <motion.div
      style={{ scale }}
      className="absolute top-1/2 -translate-y-1/2 z-20 pointer-events-none flex items-center justify-center lg:left-1/2 lg:-translate-x-1/2 left-6 -translate-x-1/2"
    >
      <motion.div
        style={{ opacity: glowOpacity }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#121212] border-2 border-amber-400 flex items-center justify-center shadow-[0_0_20px_rgba(245,158,11,0.6)] relative group"
      >
        {/* Pulsing Aura */}
        <div className="absolute inset-0 rounded-full bg-amber-400/20 animate-ping" />
        <Icon size={20} className="text-amber-300 relative z-10" />
      </motion.div>
    </motion.div>
  );
}
