"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const TILES = [
  {
    n: "01",
    title: "A new scarcity.",
    body: "Infinite generation made the live moment the only thing left that can't be faked. Rhapsody sells the unrepeatable.",
  },
  {
    n: "02",
    title: "Booked orbit.",
    body: "The instrument flies on a platform with a secured April 2028 launch and a Q2 2029 commercial follow-on. We are not waiting on a rocket.",
  },
  {
    n: "03",
    title: "Reconfigurable, not frozen.",
    body: "Legacy production plans for years and freezes at launch. Our instrument reconfigures on orbit in weeks. Improvisation is the machine's literal behavior.",
  },
  {
    n: "04",
    title: "Moments-over-mass economics.",
    body: "We price the take, not the tonnage: $500K–$2M per work, 90%+ contribution on the platform's marginal capacity, plus a second line: creative services to the parent's existing client book, at zero acquisition cost.",
  },
  {
    n: "05",
    title: "Curation is the moat.",
    body: "Invitation-only access, governed by a counsel-approved gate. Being chosen is the status, and the screen keeps the entity clean.",
  },
  {
    n: "06",
    title: "From instrument to movement.",
    body: "Launch as a studio; grow into a school, a catalogue, and a named medium once the work earns it.",
  },
];

export function HighlightsSection() {
  return (
    <SectionShell id="02-highlights" index="02">
      <StickyMediaSection
        imgUrl="/media/02_highlights.webp"
        subheading="[ Highlights ]"
        heading="Six reasons this is a studio, not a stunt."
      >
        <Eyebrow>[ Highlights ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Six reasons this is a studio, not a stunt.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {TILES.map((t, i) => (
            <motion.div
              key={t.n}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="bg-paper p-7"
            >
              <p className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
                {t.n}
              </p>
              <p className="mt-3 font-didone text-xl leading-tight">
                {t.title}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {t.body}
              </p>
            </motion.div>
          ))}
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
