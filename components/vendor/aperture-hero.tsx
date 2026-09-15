"use client";

// PLACEHOLDER — see components/vendor/README.md.
// Re-skin of 21st.dev "sunset-skyline-hero" once vendored: the first-light
// loop fills the frame as the camera pushes in on scroll, and the wordmark
// tilts up out of 3D depth (rotateX + translateZ on a perspective layer) to
// stand full-height over it, echoing the reference component's "camera
// pushes through a window onto the skyline, ending on a giant brand mark"
// mechanic. Scroll back and the wordmark recedes into depth again.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ApertureHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.22]);
  const bgDarken = useTransform(scrollYProgress, [0, 0.6], [0.45, 0.75]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.22], [1, 0]);

  const markOpacity = useTransform(scrollYProgress, [0.14, 0.32], [0, 1]);
  const markRotateX = useTransform(scrollYProgress, [0.14, 0.58], [70, 0]);
  const markScale = useTransform(scrollYProgress, [0.14, 0.58, 0.9], [0.55, 1.06, 1]);
  const markZ = useTransform(scrollYProgress, [0.14, 0.58], [-500, 0]);

  return (
    <div ref={ref} className="relative h-[240vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
        {/* first-light loop, full-bleed, camera pushing slowly in on scroll */}
        <motion.div style={{ scale: bgScale }} className="absolute inset-0">
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
          <motion.div
            style={{ opacity: bgDarken }}
            className="absolute inset-0 bg-ink"
          />
        </motion.div>

        {/* wordmark tilts up out of 3D depth as the camera arrives */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ perspective: "1400px" }}
        >
          <motion.div
            style={{
              opacity: markOpacity,
              scale: markScale,
              rotateX: markRotateX,
              z: markZ,
              transformStyle: "preserve-3d",
            }}
            className="flex flex-col items-center gap-6"
          >
            <Image
              src="/brand/emblem-on-dark.svg"
              alt=""
              width={110}
              height={70}
            />
            <Image
              src="/brand/wordmark-inverted.svg"
              alt="Rhapsody"
              width={520}
              height={130}
              className="w-[54vw] max-w-2xl"
            />
          </motion.div>
        </div>

        <motion.div
          style={{ opacity: copyOpacity }}
          className="pointer-events-none absolute inset-x-0 bottom-16 flex flex-col items-center gap-3 px-6 text-center text-paper"
        >
          <p className="font-mono-rh text-[10px] tracking-[0.3em] uppercase text-paper/60">
            [ Investor Presentation · September 2026 · Confidential ]
          </p>
          <h1 className="max-w-3xl text-balance font-didone text-[clamp(30px,5.4vw,64px)] leading-[1.04]">
            Nobody has played this before.
          </h1>
          <p className="font-didone italic text-lg text-paper/80">
            Project Rhapsody · Orbital Media Studio
          </p>
          <p className="mt-4 max-w-xl font-mono-rh text-[10px] leading-relaxed tracking-[0.04em] text-paper/45">
            A subsidiary of Symphony Space Inc. &ldquo;Project Rhapsody&rdquo;
            is a working codename pending trademark clearance; the emblem is
            the durable asset.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
