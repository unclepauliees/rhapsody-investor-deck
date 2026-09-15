"use client";

// PLACEHOLDER — see components/vendor/README.md.
// Re-skin of 21st.dev "sunset-skyline-hero" once vendored: a still
// first-light frame that lightens as the user scrolls down and dims back
// if they scroll up (pure scroll position, no autoplay). Near the bottom
// of the scroll range the light fades back down for contrast and the full
// lockup + headline + footnote rise out of 3D depth, then hold there
// while the pin finishes before releasing into Section 01.

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import Image from "next/image";

export function ApertureHero() {
  const ref = useRef<HTMLDivElement>(null);
  // Framer's useScroll(target) derives progress from the target's own
  // bounding rect, and that rect briefly destabilizes at the exact instant
  // this element's sticky child un-pins (verified: revealOpacity would
  // collapse toward 0 for a span of scroll right at that boundary — a
  // rect-tracking edge case, not anything in our keyframes). Driving it
  // from plain window.scrollY compared against precomputed pixel bounds
  // sidesteps that entirely: it's just arithmetic, clamped by hand, with
  // no dependency on whether the element is still intersecting anything.
  const progress = useMotionValue(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let pinTop = 0;
    let pinRange = 1;

    const measure = () => {
      const rect = el.getBoundingClientRect();
      pinTop = rect.top + window.scrollY;
      const unpinAt = pinTop + el.offsetHeight - window.innerHeight;
      pinRange = Math.max(1, unpinAt - pinTop);
    };

    const onScroll = () => {
      const raw = (window.scrollY - pinTop) / pinRange;
      progress.set(Math.min(1, Math.max(0, raw)));
    };

    measure();
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
    };
  }, [progress]);

  const bgScale = useTransform(progress, [0, 1], [1, 1.15]);

  // Light builds as you scroll down, then fades back for contrast once the
  // copy starts revealing — and reverses cleanly if you scroll back up,
  // since this all reads straight off scroll position, not a timeline.
  const bgBrightness = useTransform(progress, [0, 0.62, 0.8, 1], [1, 2.15, 0.85, 0.85]);
  const bgFilter = useTransform(bgBrightness, (v) => `brightness(${v})`);

  const glowOpacity = useTransform(progress, [0, 0.62, 0.8, 1], [0, 0.9, 0, 0]);
  const scrimOpacity = useTransform(progress, [0.68, 0.85, 1], [0, 0.55, 0.55]);

  const revealOpacity = useTransform(progress, [0.78, 0.92], [0, 1]);
  const revealRotateX = useTransform(progress, [0.78, 0.94], [70, 0]);
  const revealScale = useTransform(progress, [0.78, 0.94], [0.6, 1]);
  const revealZ = useTransform(progress, [0.78, 0.94], [-500, 0]);

  return (
    <div ref={ref} className="relative h-[260vh]">
      <div className="sticky top-0 h-[100svh] overflow-hidden bg-ink">
        {/* still first-light frame — brightens/dims with scroll, never plays */}
        <motion.div style={{ scale: bgScale, filter: bgFilter }} className="absolute inset-0">
          <Image
            src="/media/00_hero_firstlight_poster.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </motion.div>

        {/* additive glow that blooms in and fades back out with scroll */}
        <motion.div
          style={{ opacity: glowOpacity }}
          className="pointer-events-none absolute left-1/2 top-[38%] h-[70vh] w-[70vh] -translate-x-1/2 -translate-y-1/2 rounded-full"
          aria-hidden
        >
          <div
            className="h-full w-full rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(251,227,216,0.9) 0%, rgba(201,58,30,0.55) 32%, rgba(201,58,30,0) 70%)",
              mixBlendMode: "screen",
            }}
          />
        </motion.div>

        {/* dark scrim so the reveal always has contrast, regardless of the frame */}
        <motion.div
          style={{ opacity: scrimOpacity }}
          className="pointer-events-none absolute inset-0 bg-ink"
        />

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
