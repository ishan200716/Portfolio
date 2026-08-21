"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue, motion, AnimatePresence } from "framer-motion";
import { Loader2, Sparkles } from "lucide-react";

const FRAME_COUNT = 98;

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [loadedCount, setLoadedCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let count = 0;
    
    for (let i = 0; i < FRAME_COUNT; i++) {
      loadedImages.push(new Image());
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = loadedImages[i];
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;
      
      img.onload = () => {
        count++;
        setLoadedCount(count);

        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          drawImageCover(ctx, canvasRef.current, img);
        }

        if (count === FRAME_COUNT) {
          setTimeout(() => {
            setIsLoading(false);
          }, 300);
        }
      };

      img.onerror = () => {
        count++;
        setLoadedCount(count);
        if (count === FRAME_COUNT) {
          setIsLoading(false);
        }
      };
    }
    setImages(loadedImages);
  }, []);

  const drawImageCover = (ctx: CanvasRenderingContext2D | null, canvas: HTMLCanvasElement, img: HTMLImageElement) => {
    if (!ctx || !img || !img.complete) return;
    
    const { innerWidth: width, innerHeight: height } = window;
    canvas.width = width;
    canvas.height = height;

    const imgRatio = img.width / img.height;
    const canvasRatio = width / height;
    
    let renderWidth, renderHeight, offsetX = 0, offsetY = 0;

    if (canvasRatio > imgRatio) {
      renderWidth = width;
      renderHeight = width / imgRatio;
      offsetY = (height - renderHeight) / 2;
    } else {
      renderWidth = height * imgRatio;
      renderHeight = height;
      offsetX = (width - renderWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, renderWidth, renderHeight);
  };

  useMotionValueEvent(scrollProgress, "change", (latest: number) => {
    if (images.length === 0 || !canvasRef.current) return;
    const frameIndex = Math.min(
      FRAME_COUNT - 1,
      Math.max(0, Math.floor(latest * FRAME_COUNT))
    );
    const ctx = canvasRef.current.getContext("2d");
    if (ctx && images[frameIndex]) {
      drawImageCover(ctx, canvasRef.current, images[frameIndex]);
    }
  });

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
       if (images.length > 0 && canvasRef.current) {
          const frameIndex = Math.min(
            FRAME_COUNT - 1,
            Math.max(0, Math.floor(scrollProgress.get() * FRAME_COUNT))
          );
          if (images[frameIndex]) {
             drawImageCover(canvasRef.current.getContext("2d"), canvasRef.current, images[frameIndex]);
          }
       }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [images, scrollProgress]);

  const loadPercent = Math.min(100, Math.round((loadedCount / FRAME_COUNT) * 100));

  return (
    <div className="relative w-full h-full">
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Preloader Overlay */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 z-30 bg-[#121212] flex flex-col items-center justify-center p-6"
          >
            <div className="glass p-8 md:p-12 rounded-3xl max-w-sm w-full flex flex-col items-center text-center shadow-2xl border border-white/10">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-amber-400/20 blur-xl rounded-full"></div>
                <Loader2 className="w-12 h-12 text-amber-400 animate-spin relative z-10" />
              </div>

              <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-400" />
                Loading Experience
              </h3>
              <p className="text-xs text-white/50 mb-6 uppercase tracking-widest font-mono">
                Optimizing 3D Canvas Sequence
              </p>

              {/* Progress Bar */}
              <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden mb-3 border border-white/5">
                <motion.div
                  className="bg-gradient-to-r from-amber-400 to-amber-600 h-full rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: `${loadPercent}%` }}
                  transition={{ duration: 0.1 }}
                />
              </div>

              <span className="text-sm font-mono font-semibold text-amber-300">
                {loadPercent}%
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
