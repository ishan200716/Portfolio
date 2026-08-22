"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolledPastHero, setScrolledPastHero] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const scrollY = window.scrollY;

      // Detect if user has scrolled past hero section (approx 3.8 * windowHeight)
      setScrolledPastHero(scrollY > windowHeight * 3.8);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", id: "about" },
    { name: "Timeline", id: "timeline" },
    { name: "Projects", id: "projects" },
    { name: "Contact", id: "contact" }
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navbarOffset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 py-3 ${
          scrolledPastHero
            ? "bg-black/85 backdrop-blur-xl border-b border-white/10 shadow-2xl"
            : "bg-black/30 backdrop-blur-md border-b border-white/10"
        }`}
      >
        <div className="w-full px-6 md:px-10 lg:px-14 flex items-center justify-between">
          {/* Logo Brand */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-3 group pointer-events-auto cursor-pointer"
          >
            <Image
              src="/logo.png"
              alt="Ishan Singh Logo"
              width={48}
              height={48}
              priority
              className="h-10 w-10 md:h-12 md:w-12 object-contain group-hover:scale-105 transition-all duration-300 rounded-full bg-white/5 p-1 border border-white/10"
            />
            <span className="text-lg md:text-xl font-bold tracking-[0.15em] bg-gradient-to-r from-white via-white to-amber-300 bg-clip-text text-transparent group-hover:text-amber-400 transition-colors duration-300">
              ISHAN
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScrollTo(e, link.id)}
                className="text-xs font-semibold uppercase tracking-widest text-white/80 hover:text-amber-300 transition-colors duration-300 relative py-2 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-amber-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              </a>
            ))}

            <a
              href="mailto:ishan200716@gmail.com"
              className="text-xs font-bold uppercase tracking-wider px-4 py-2 bg-amber-400 text-black hover:bg-amber-300 rounded-full transition-all duration-300 shadow-md hover:shadow-amber-400/20 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-amber-400 transition-colors duration-300 p-2 focus:outline-none bg-white/5 rounded-full border border-white/10"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-2xl flex flex-col justify-center items-center md:hidden"
          >
            <div className="flex flex-col items-center gap-8">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => handleScrollTo(e, link.id)}
                  className="text-2xl font-bold uppercase tracking-widest text-white/90 hover:text-amber-400 transition-colors duration-300"
                >
                  {link.name}
                </motion.a>
              ))}

              <a
                href="mailto:ishan200716@gmail.com"
                className="mt-4 px-8 py-3 bg-amber-400 text-black font-bold text-base rounded-full shadow-lg"
              >
                Say Hello
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
