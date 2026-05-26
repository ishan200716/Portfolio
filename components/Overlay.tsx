"use client";

import { motion, MotionValue, useTransform } from "framer-motion";

export default function Overlay({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  // Phase 1: Name fades out early to avoid overlap
  const opacity1 = useTransform(scrollProgress, [0, 0.05, 0.12], [1, 1, 0], { clamp: true });
  const y1 = useTransform(scrollProgress, [0, 0.05, 0.12], [0, 0, -100], { clamp: true });
  const display1 = useTransform(scrollProgress, (v) => v > 0.15 ? "none" : "block");

  // Phase 2: "I turn ideas into scalable digital solutions"
  const opacity2 = useTransform(scrollProgress, [0.12, 0.20, 0.28, 0.35], [0, 1, 1, 0], { clamp: true });
  const y2 = useTransform(scrollProgress, [0.12, 0.35], [100, -100], { clamp: true });

  // Phase 3: "Student of AI Engineering" (Reaches full opacity rapidly)
  const opacity3 = useTransform(scrollProgress, [0.35, 0.42, 0.9, 1], [0, 1, 1, 0], { clamp: true });
  const y3 = useTransform(scrollProgress, [0.35, 1], [100, -100], { clamp: true });

  return (
    <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-center items-center overflow-hidden">
      
      {/* Intro Phase */}
      <motion.div style={{ opacity: opacity1, y: y1, display: display1 }} className="absolute text-center drop-shadow-2xl">
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight text-white mb-4">Ishan Singh</h1>
        <p className="text-xl md:text-2xl text-white/80 font-medium tracking-wide uppercase">Creative Developer</p>
      </motion.div>

      {/* Middle Phase */}
      <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute text-center px-6 md:text-left md:left-24 lg:left-32">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-2xl leading-tight drop-shadow-2xl">
          I turn ideas into scalable digital solutions.
        </h2>
      </motion.div>

      {/* Final Phase */}
      <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute text-center px-6 md:text-right md:right-24 lg:right-32">
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white drop-shadow-2xl">
          Student of AI Engineering.
        </h2>
        <p className="text-xl md:text-2xl text-amber-300 font-medium tracking-wide uppercase mt-4">
          Bridging Code and Intelligence
        </p>
      </motion.div>

    </div>
  );
}
