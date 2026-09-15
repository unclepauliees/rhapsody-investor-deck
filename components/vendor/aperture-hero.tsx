"use client";

// PLACEHOLDER — see components/vendor/README.md.
// Re-skin of 21st.dev "sunset-skyline-hero" once vendored: the first-light
// loop fills the frame and brightens as the camera pushes in on scroll,
// with no copy until the very end — where the full lockup (emblem +
// wordmark + "Orbital Media Studio") rises out of real 3D depth alongside
// the headline and footnote, echoing the reference component's "camera
// pushes through a window onto the skyline, ending on a giant brand mark"
// mechanic. Scroll back and it recedes into depth again.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ApertureHero() {
  const ref = useRef<HTMLDivElement>(null);
  // "end end" (not "end start") so progress reaches 1 exactly when the
  // sticky child unpins — using "end start" here would push the back half
  // of the reveal window past the point where the video is even still
  // visible, and it would never be seen.
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const bgBrightness = useTransform(scrollYProgress, [0, 1], [1, 1.85]);
  const bgFilter = useTransform(bgBrightness, (v) => `brightness(${v})`);

  const revealOpacity = useTransform(scrollYProgress, [0.8, 0.94], [0, 1]);
  const revealRotateX = useTransform(scrollYProgress, [0.8, 1], [70, 0]);
  const revealScale = useTransform(scrollYProgress, [0.8, 1], [0.6, 1]);
  const revealZ = useTransform(scrollYProgress, [0.8, 1], [-500, 0]);

  return (
    <div ref={ref} className="relative h-[280vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
        {/* first-light loop, full-bleed, brightening as the camera pushes in */}
        <motion.div style={{ scale: bgScale, filter: bgFilter }} className="absolute inset-0">
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/media/00_hero_firstlight_poster.jpg"
            preload="metadata"
          >
            <source src="/media/00_hero_firstlight.webm" type="video/webm" />
            <source src="/media/00_hero_firstlight.mp4" type="video/mp4" />
          </video>
        </motion.div>

        {/* the reveal: lockup + headline + footnote, held back until the very end */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            style={{
              opacity: revealOpacity,
              scale: revealScale,
              rotateX: revealRotateX,
              z: revealZ,
              transformStyle: "preserve-3d",
            }}
            className="flex flex-col items-center gap-8 px-6 text-center"
          >
            <p className="font-mono-rh text-[10px] tracking-[0.3em] uppercase text-paper/60">
              [ Investor Presentation · September 2026 · Confidential ]
            </p>
            <h1 className="max-w-3xl text-balance font-didone text-[clamp(28px,4.8vw,58px)] leading-[1.05] text-paper">
              Nobody has played this before.
            </h1>
            <Image
              src="/brand/primary-glow-clear.svg"
              alt="Project Rhapsody · Orbital Media Studio"
              width={620}
              height={300}
              className="w-[52vw] max-w-xl"
              priority
            />
            <p className="max-w-xl font-mono-rh text-[10px] leading-relaxed tracking-[0.04em] text-paper/45">
              A subsidiary of Symphony Space Inc. &ldquo;Project Rhapsody&rdquo;
              is a working codename pending trademark clearance; the emblem is
              the durable asset.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
