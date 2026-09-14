import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const PILLARS = [
  { name: "The Instrument.", body: "Standard creative envelope, plug-and-play integration, swapped on orbit by robotics. Mastery without the wait." },
  { name: "The Session.", body: "Sold as a moment — the eclipse crossing, the pass over a named city at first light, the synchronized downlink. Once, and only once." },
  { name: "The Master.", body: "Every take is authenticated at source. The work becomes the master, the catalogue, and the provenance record. Campaigns become on-orbit seasons." },
];

export function SolutionSection() {
  return (
    <SectionShell id="06-solution" index="06">
      <StickyMediaSection
        imgUrl="/media/06_solution.webp"
        subheading="[ Solution ]"
        heading="The first instrument for orbit."
      >
        <Eyebrow>[ Solution ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          The first instrument for orbit.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Rhapsody is a luxury orbital media studio built on a reconfigurable
          platform. A house brings the work — a camera, a material, a
          digital canvas — and it drops into the instrument in weeks, not
          years. The studio composes the window, captures the take,
          authenticates the master, and returns the media rights.
        </p>

        <div className="mt-12 border-t border-line">
          {PILLARS.map((p) => (
            <div
              key={p.name}
              className="ledger-row grid grid-cols-1 gap-2 py-6 sm:grid-cols-[220px_1fr] sm:gap-8"
            >
              <p className="font-didone text-xl">{p.name}</p>
              <p className="font-mono-rh text-[13px] leading-relaxed text-ink-soft">
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
