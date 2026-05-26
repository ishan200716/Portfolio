"use client";

import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Track scroll over the 500vh container
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <main className="w-full bg-[#121212] text-white">
      <Navbar />
      {/* 500vh container for the scrolling animation */}
      <div ref={containerRef} className="h-[500vh] w-full relative">
        <div className="sticky top-0 h-screen w-full overflow-hidden bg-black">
           <ScrollyCanvas scrollProgress={scrollYProgress} />
           <Overlay scrollProgress={scrollYProgress} />
        </div>
      </div>

      <About />
      <Projects />
      <Contact />
      
    </main>
  );
}
