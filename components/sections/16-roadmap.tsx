import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const PHASES = [
  { k: "Now", name: "The Instrument (2026–2028).", body: "Open the studio. Clear the name. Invite the first generation. Fly the first two works on the demonstrator." },
  { k: "Next", name: "First Light (2028–2029).", body: "Deliver the first masters. Open Residencies on the commercial platform. Stand up the independent P&L." },
  { k: "Then", name: "The Movement (2029+).", body: "The studio becomes a school; the catalogue becomes a canon; the brand becomes a named medium. Origin, never nationalism." },
];

export function RoadmapSection() {
  return (
    <SectionShell id="16-roadmap" index="16">
      <StickyMediaSection
        videoUrl="/media/16_roadmap.mp4"
        posterUrl="/media/16_roadmap_poster.jpg"
        subheading="[ Roadmap ]"
        heading="From an instrument to a movement."
      >
        <Eyebrow>[ Roadmap ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          From an instrument to a movement.
        </h2>

        <div className="mt-10 border-t border-line font-mono-rh text-[13px]">
          {PHASES.map((p) => (
            <div
              key={p.k}
              className="ledger-row grid grid-cols-1 gap-1 py-6 sm:grid-cols-[100px_1fr] sm:gap-8"
            >
              <p className="text-signal uppercase tracking-[0.1em]">{p.k}</p>
              <div>
                <p className="font-didone text-lg not-italic text-ink">
                  {p.name}
                </p>
                <p className="mt-1 max-w-[58ch] leading-relaxed text-ink-soft">
                  {p.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-[62ch] font-didone italic text-xl">
          We launch grounded and hardware-true — and grow into something
          larger only once the work earns it.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
