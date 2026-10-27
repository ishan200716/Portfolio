"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ShieldCheck, ExternalLink, CreditCard, Sparkles, CheckCircle2, Lock } from "lucide-react";

interface PaymentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function PaymentModal({ isOpen, onClose }: PaymentModalProps) {
  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleOpenPaymentWindow = (url: string) => {
    // Open in a focused popup window centered on screen
    const width = 520;
    const height = 740;
    const left = window.screenX + (window.outerWidth - width) / 2;
    const top = window.screenY + (window.outerHeight - height) / 2;
    window.open(
      url,
      "RazorpayPaymentWindow",
      `width=${width},height=${height},top=${top},left=${left},scrollbars=yes,resizable=yes,status=no,toolbar=no`
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity"
            aria-hidden="true"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.15 }}
            className="relative w-full max-w-lg bg-[#141416] border border-amber-500/25 rounded-3xl p-6 sm:p-8 shadow-[0_25px_70px_rgba(0,0,0,0.9)] overflow-hidden z-10"
          >
            {/* Background Ambient Glow */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-amber-600/10 rounded-full blur-3xl pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 relative z-10">
              <div className="flex items-center gap-2 px-3 py-1 bg-amber-400/10 border border-amber-400/30 rounded-full">
                <ShieldCheck size={16} className="text-amber-400" />
                <span className="text-xs font-semibold tracking-wider uppercase text-amber-300">
                  Razorpay Verified
                </span>
              </div>

              <button
                onClick={onClose}
                className="p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Content Body */}
            <div className="py-6 relative z-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-3 bg-amber-400/10 border border-amber-400/20 rounded-2xl text-amber-400">
                  <CreditCard size={28} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white tracking-tight">
                    Payment Window
                  </h3>
                  <p className="text-sm text-white/50">
                    Pay Ishan Singh securely via Razorpay
                  </p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-white/70 mb-6 leading-relaxed">
                Whether you are initiating a project payment, booking a consultation, or supporting my open-source work, you can pay directly through my verified Razorpay page.
              </p>

              {/* Supported Payment Channels */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-6 space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/40 block mb-2">
                  Accepted Payment Methods
                </span>
                <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-white/80">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                    <span>UPI (GPay, PhonePe, Paytm)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                    <span>Debit & Credit Cards</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                    <span>Net Banking (All Banks)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={15} className="text-amber-400 shrink-0" />
                    <span>Instant Digital Receipt</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button
                  onClick={() => handleOpenPaymentWindow("https://rzp.io/rzp/XS6zjIZ")}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 text-black font-bold text-base sm:text-lg rounded-2xl shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                >
                  <Sparkles size={20} className="text-black" />
                  <span>Launch Razorpay Payment Window</span>
                  <ExternalLink size={18} className="text-black/70" />
                </button>

                <button
                  onClick={() => handleOpenPaymentWindow("https://razorpay.me/@ishansingh4678")}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/25 text-white/90 hover:text-white font-medium text-sm sm:text-base rounded-2xl transition-all duration-300"
                >
                  <span>Alternative: razorpay.me/@ishansingh4678</span>
                  <ExternalLink size={16} className="text-white/40" />
                </button>
              </div>
            </div>

            {/* Footer Trust Badge */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/40 relative z-10">
              <Lock size={13} className="text-amber-400/80" />
              <span>256-Bit SSL Encrypted &bull; Processed securely by Razorpay</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
