"use client";

import { useEffect, useRef, useState } from "react";
import { useMotionValueEvent, MotionValue } from "framer-motion";

const FRAME_COUNT = 98;

export default function ScrollyCanvas({ scrollProgress }: { scrollProgress: MotionValue<number> }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  
  // Preload images
  useEffect(() => {
    const loadedImages: HTMLImageElement[] = [];
    let loadedCount = 0;
    
    // Create an array to avoid closure capture issues
    for (let i = 0; i < FRAME_COUNT; i++) {
        loadedImages.push(new Image());
    }

    for (let i = 0; i < FRAME_COUNT; i++) {
      const img = loadedImages[i];
      const frameNum = i.toString().padStart(2, "0");
      img.src = `/sequence/frame_${frameNum}_delay-0.066s.webp`;
      img.onload = () => {
        loadedCount++;
        // As soon as the first frame loads, push it to canvas
        if (i === 0 && canvasRef.current) {
          const ctx = canvasRef.current.getContext("2d");
          drawImageCover(ctx, canvasRef.current, img);
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

  return (
    <canvas ref={canvasRef} className="w-full h-full block" />
  );
}
