"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { animationImages } from "@/components/helper/constants";

export const LogoAnimation = () => {
  // Double the array instances to guarantee seamless frame tracking loop resets
  const duplicatedImages = [...animationImages, ...animationImages];

  return (
    <div className="py-12 bg-gradient-to-r from-slate-950 via-[#0c0a24]/20 to-slate-950 border-y border-slate-900/80 backdrop-blur-sm relative">
      
      {/* Subtle Background Inner Glow Path */}
      <div className="absolute inset-0 bg-purple-500/[0.02] pointer-events-none" />

      <div className="w-full max-w-[1400px] mx-auto px-4">
        {/* Advanced Ultra-Smooth Alpha Layer Gradient Masking */}
        <div className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent_0%,black_15%,black_85%,transparent_100%)]">
          
          <motion.div
            className="flex gap-8 flex-none pr-8 w-max"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 25, // Tweaked for a smoother cinematic sweep speed
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div
                key={`${image.alt}-${index}`}
                className="relative w-[260px] sm:w-[340px] aspect-[16/9] rounded-xl overflow-hidden border border-slate-900 bg-slate-950/60 shadow-lg shadow-black/40 group hover:border-purple-500/30 transition-colors duration-300 shrink-0"
              >
                {/* Image Mask Engine preserving asset aspect integrity without skewing */}
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 260px, 340px"
                  className="object-cover object-center grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                  priority={index < 4}
                />
                
                {/* Premium Inner Ambient Glass Vignette Edge */}
                <div className="absolute inset-0 ring-1 ring-inset ring-white/5 rounded-xl pointer-events-none" />
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </div>
  );
};