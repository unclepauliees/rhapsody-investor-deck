"use client";

// PLACEHOLDER — see components/vendor/README.md.
// Re-skin of 21st.dev "sunset-skyline-hero" once vendored: scroll pushes
// through an aperture onto the first-light loop, ending on the wordmark +
// emblem behind a horizon-line cutout. Scroll-back closes the aperture.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export function ApertureHero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const apertureScale = useTransform(scrollYProgress, [0, 0.55], [0.34, 1.35]);
  const frameOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0.35, 0.6], [0, 1]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  return (
    <div ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
        {/* first-light loop, masked by the expanding aperture */}
        <motion.div
          style={{ scale: apertureScale }}
          className="absolute left-1/2 top-1/2 aspect-video w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 overflow-hidden border border-paper/25"
        >
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

          {/* horizon-line cutout carrying the wordmark + emblem */}
          <motion.div
            style={{ opacity: wordmarkOpacity }}
            className="absolute inset-0 flex flex-col items-center justify-center gap-6 bg-ink/55"
          >
            <Image
              src="/brand/emblem-on-dark.svg"
              alt=""
              width={96}
              height={61}
            />
            <Image
              src="/brand/wordmark-inverted.svg"
              alt="Rhapsody"
              width={360}
              height={90}
              className="w-[46vw] max-w-md"
            />
          </motion.div>
        </motion.div>

        {/* aperture frame — ink-line rectangle on paper */}
        <motion.div
          style={{ opacity: frameOpacity }}
          className="pointer-events-none absolute left-1/2 top-1/2 aspect-video w-[92vw] max-w-5xl -translate-x-1/2 -translate-y-1/2 border border-paper/70"
        />

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
