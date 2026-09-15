"use client";

import { motion } from "framer-motion";
import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const STEPS = [
  { n: "01", name: "The Invitation.", body: "Curatorial selection. Every player passes the studio's counsel-approved gate before an invitation is extended. Access is the first luxury." },
  { n: "02", name: "The Composition.", body: "The house and the studio design the work and choose the window: pass, light, city, moment." },
  { n: "03", name: "The Integration.", body: "The work is delivered in the standard creative envelope and integrated in weeks." },
  { n: "04", name: "The Take.", body: "The window opens. The take happens once. It cannot be re-run, re-shot, or generated after the fact." },
  { n: "05", name: "The Master.", body: "Authenticated, downlinked on a segregated plane, archived. Rights are returned. The next work is swapped in." },
];

export function SessionSection() {
  return (
    <SectionShell id="07-session" index="07">
      <StickyMediaSection
        videoUrl="/media/07_session.mp4"
        webmUrl="/media/07_session.webm"
        posterUrl="/media/07_session_poster.jpg"
        subheading="[ The Session ]"
        heading="Invited. Composed. Flown. Captured. Mastered."
      >
        <Eyebrow>[ The Session ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Invited. Composed. Flown. Captured. Mastered.
        </h2>

        <div className="mt-12 border-t border-line">
          {STEPS.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0.4 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
              className="ledger-row relative grid grid-cols-[48px_1fr] gap-6 py-6 pl-2"
            >
              <motion.span
                aria-hidden
                initial={{ backgroundColor: "var(--line)" }}
                whileInView={{ backgroundColor: "var(--signal)" }}
                viewport={{ once: false, margin: "-40% 0px -40% 0px" }}
                className="absolute -left-[1px] top-7 h-1.5 w-1.5 rounded-full"
              />
              <span className="font-mono-rh text-[11px] tracking-[0.1em] text-ink-mute">
                {s.n}
              </span>
              <div>
                <p className="font-didone text-lg">{s.name}</p>
                <p className="mt-1 max-w-[58ch] text-[15px] leading-relaxed text-ink-soft">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="mt-8 font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
          Your session is yours alone.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
