import Image from "next/image";
import { SectionShell } from "@/components/deck/section-shell";

export function CloseSection() {
  return (
    <SectionShell id="19-close" index="19" dark>
      <div className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden px-6 text-center">
        <video
          className="absolute inset-0 h-full w-full object-cover opacity-60"
          autoPlay
          muted
          loop
          playsInline
          poster="/media/19_close_poster.jpg"
          preload="metadata"
        >
          <source src="/media/19_close.webm" type="video/webm" />
          <source src="/media/19_close.mp4" type="video/mp4" />
        </video>

        <div className="relative flex flex-col items-center gap-8">
          <Image
            src="/brand/emblem-halo.svg"
            alt=""
            width={140}
            height={89}
          />
          <h2 className="max-w-3xl text-balance font-didone text-[clamp(28px,4.6vw,54px)] leading-[1.08] text-paper">
            Improvised on Earth for a century. Now it leaves the planet.
          </h2>
          <p className="font-didone italic text-lg text-paper/75">
            Project Rhapsody · Orbital Media Studio
          </p>
          <p className="font-mono-rh text-[11px] tracking-[0.14em] uppercase text-paper/55">
            [name] · [email] · New York · Orbit
          </p>
        </div>
      </div>
    </SectionShell>
  );
}
