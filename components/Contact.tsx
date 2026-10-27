"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight, CreditCard, Sparkles, ShieldCheck } from "lucide-react";
import PaymentModal from "./PaymentModal";

export default function Contact() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

  return (
    <section id="contact" className="relative z-20 bg-[#121212] py-32 px-6 md:px-12 lg:px-24 border-t border-white/5 overflow-hidden">
      {/* Background glow for aesthetic depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-amber-500/15 via-amber-600/5 to-transparent blur-[120px] -z-10 rounded-full"></div>

      <div className="max-w-4xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 30 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.8 }}
        >
          <span className="text-sm md:text-base font-bold tracking-[0.2em] text-amber-400 uppercase mb-4 block">
            What's Next?
          </span>
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 tracking-tight drop-shadow-xl">
            Get In Touch
          </h2>
          <p className="text-lg md:text-xl text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed font-light">
            I'm currently looking for new opportunities, and my inbox is always open. Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true, margin: "-100px" }}
           transition={{ duration: 0.5, delay: 0.2 }}
           className="flex flex-col sm:flex-row items-center justify-center gap-5 flex-wrap"
        >
          <a 
            href="mailto:ishan200716@gmail.com" 
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold text-lg rounded-full overflow-hidden transition-transform hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Mail size={20} />
              Say Hello
            </span>
            <div className="absolute inset-0 bg-amber-300 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100 z-0"></div>
            <span className="absolute z-10 flex items-center gap-2 text-black opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <Mail size={20} />
              Say Hello
            </span>
          </a>

          {/* Razorpay Payment Window Trigger Button */}
          <button
            onClick={() => setIsPaymentModalOpen(true)}
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-lg rounded-full transition-all duration-300 hover:scale-105 active:scale-95 shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40"
          >
            <CreditCard size={20} className="text-black" />
            <span>Make a Payment</span>
          </button>

          <a 
            href="https://www.linkedin.com/in/ishan-singh-b84b1a346/"
            target="_blank"
            rel="noreferrer"
            className="group flex items-center gap-2 px-8 py-4 glass border border-white/20 text-white font-medium text-lg rounded-full hover:bg-white/10 transition-colors"
          >
            LinkedIn
            <ArrowUpRight size={20} className="text-white/50 group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </a>
        </motion.div>

        {/* Dedicated Razorpay Support & Quick Pay Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-12 max-w-2xl mx-auto p-6 sm:p-7 rounded-3xl bg-white/[0.03] border border-amber-500/20 backdrop-blur-xl relative overflow-hidden text-left shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-48 h-48 bg-amber-500/10 rounded-full blur-2xl pointer-events-none" />
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-400">
                  Razorpay Verified &bull; 100% Secure
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5">
                Support & Direct Payments
              </h3>
              <p className="text-xs sm:text-sm text-white/60 max-w-md leading-relaxed">
                Accepting UPI (GPay, PhonePe, Paytm), Credit/Debit Cards & Net Banking with instant receipts.
              </p>
            </div>

            <button
              onClick={() => setIsPaymentModalOpen(true)}
              className="shrink-0 flex items-center gap-2 px-6 py-3 bg-amber-400 hover:bg-amber-300 text-black font-bold text-sm rounded-full transition-all duration-300 shadow-md hover:scale-105 active:scale-95 cursor-pointer"
            >
              <CreditCard size={17} />
              <span>Pay Now</span>
            </button>
          </div>
        </motion.div>
        
        {/* Social Links Bottom bar */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-white/40 text-sm font-medium">
            Designed & Built by Ishan Singh
          </div>
          <div className="flex gap-6">
            <a 
              href="https://github.com/ishan200716" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="GitHub Profile"
              className="text-white/40 hover:text-white hover:-translate-y-1 transition-all"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            </a>
            <a 
              href="https://linkedin.com/in/ishan-singh-b84b1a346/" 
              target="_blank" 
              rel="noreferrer" 
              aria-label="LinkedIn Profile"
              className="text-white/40 hover:text-[#0077b5] hover:-translate-y-1 transition-all"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </motion.div>
      </div>

      {/* Razorpay Payment Window Modal */}
      <PaymentModal 
        isOpen={isPaymentModalOpen} 
        onClose={() => setIsPaymentModalOpen(false)} 
      />
    </section>
  );
}
