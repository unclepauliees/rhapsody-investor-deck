import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

export function TractionSection() {
  return (
    <SectionShell id="15-traction" index="15">
      <StickyMediaSection
        videoUrl="/media/15_traction.mp4"
        webmUrl="/media/15_traction.webm"
        posterUrl="/media/15_traction_poster.jpg"
        subheading="[ Traction ]"
        heading="The studio opens in October. The first works fly in 2028."
      >
        <Eyebrow>[ Traction ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          The studio opens in October. The first works fly in 2028.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          <div className="bg-paper p-7">
            <p className="font-didone text-lg">The Launch.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Studio launch announcement,{" "}
              <strong className="text-ink">
                October 5, 2026, New York, Advertising Week
              </strong>
              . Art Basel Miami VIP days follow in December. Objective: two
              founding works confirmed for the 2028 demonstrator.
            </p>
          </div>
          <div className="bg-paper p-7">
            <p className="font-didone text-lg">The Pipeline.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Conversations open across fragrance, apparel, spirits, and
              talent. Named houses under NDA to follow as available.
            </p>
          </div>
          <div className="bg-paper p-7">
            <p className="font-didone text-lg">The Foundation.</p>
            <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
              Brand operating system complete. Identity system
              production-ready. Name in trademark knockout (classes
              35/38/41). Governance framework adopted.
            </p>
          </div>
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
