import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const VERTICALS = ["Fragrance", "Apparel", "Spirits & beverages", "Talent & cultural figures", "Institutions"];

export function FirstGenerationSection() {
  return (
    <SectionShell id="10-first-generation" index="10">
      <StickyMediaSection
        imgUrl="/media/10_first_generation.webp"
        subheading="[ The First Generation ]"
        heading="We are not looking for customers. We are looking for the first generation."
      >
        <Eyebrow>[ The First Generation ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          We are not looking for customers. We are looking for the first
          generation.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          The houses, artists, and studios who would rather found a medium
          than buy a billboard, and who understand that a place in an
          origin story outlasts any campaign.
        </p>

        <div className="mt-10">
          <p className="font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
            Verticals in development
          </p>
          <div className="mt-3 flex flex-wrap gap-x-6 gap-y-2">
            {VERTICALS.map((v) => (
              <span key={v} className="font-didone text-lg">
                {v}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-10 max-w-[62ch]">
          <p className="font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
            Founding voices
          </p>
          <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
            Where we can, we commission the artists who carry the lineage of
            improvisation as founding voices of the first works. Homage
            paid, not just spoken.
          </p>
        </div>

        <p className="mt-10 font-didone italic text-xl">
          Access is curated. Being chosen is the status.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
