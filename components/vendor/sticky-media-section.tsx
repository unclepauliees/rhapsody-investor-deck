"use client";

// PLACEHOLDER — see components/vendor/README.md.
// Re-skin of 21st.dev "text-parallax-content-scroll" once vendored: this
// implements the same imgUrl/videoUrl/subheading/heading/children contract
// (sticky media that scales down + fades as headline/subheading crossfade)
// so it is a near drop-in swap.

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

type Props = {
  imgUrl?: string;
  videoUrl?: string;
  webmUrl?: string;
  posterUrl?: string;
  subheading: string;
  heading: string;
  children?: React.ReactNode;
  priority?: boolean;
};

export function StickyMediaSection({
  imgUrl,
  videoUrl,
  webmUrl,
  posterUrl,
  subheading,
  heading,
  children,
  priority,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.86]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 1, 0]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <div ref={ref} className="relative">
      <div className="sticky top-0 flex h-[100svh] flex-col items-center justify-center overflow-hidden">
        <motion.div
          style={{ scale, opacity }}
          className="relative mx-6 aspect-video w-full max-w-5xl border border-ink/70"
        >
          {videoUrl ? (
            <video
              className="h-full w-full object-cover"
              autoPlay
              muted
              loop
              playsInline
              poster={posterUrl}
              preload="metadata"
            >
              {webmUrl && <source src={webmUrl} type="video/webm" />}
              <source src={videoUrl} type="video/mp4" />
            </video>
          ) : imgUrl ? (
            <Image
              src={imgUrl}
              alt=""
              fill
              priority={priority}
              className="object-cover"
              sizes="(min-width: 1440px) 1120px, 100vw"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-paper-3 font-mono-rh text-[10px] uppercase tracking-[0.2em] text-ink-mute">
              media pending
            </div>
          )}
        </motion.div>

        <motion.div
          style={{ opacity: textOpacity }}
          className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-4 px-6 text-center"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(236,231,218,0.92)_0%,rgba(236,231,218,0.55)_55%,transparent_78%)]" />
          <p className="eyebrow relative">{subheading}</p>
          <h2 className="relative max-w-4xl text-balance font-didone text-[clamp(28px,4.6vw,58px)] leading-[1.06] text-ink">
            {heading}
          </h2>
        </motion.div>
      </div>

      <div className="relative bg-paper px-6 py-20 sm:px-10">
        <div className="mx-auto max-w-4xl">{children}</div>
      </div>
    </div>
  );
}
