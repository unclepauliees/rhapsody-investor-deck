import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const RINGS = [
  { name: "Core", body: "Luxury houses & maisons — fashion, fragrance, spirits, horology, beauty." },
  { name: "Adjacent", body: "Film, music, and talent — the artists who found movements." },
  { name: "Frontier", body: "Institutions & collectors — museums, biennales, foundations commissioning the first works of a medium." },
];

export function MarketSection() {
  return (
    <SectionShell id="09-market" index="09">
      <StickyMediaSection
        videoUrl="/media/09_market.mp4"
        webmUrl="/media/09_market.webm"
        posterUrl="/media/09_market_poster.jpg"
        subheading="[ Opportunity ]"
        heading="We are not competing for media budgets. We are competing for the founding moment."
      >
        <Eyebrow>[ Opportunity ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          We are not competing for media budgets. We are competing for the
          founding moment.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          The luxury brand & media opportunity in orbit is sized at{" "}
          <span className="font-didone text-ink">$60B</span>, opening
          2030–2035 as reconfigurable platforms come online. But the nearer
          comparison is the money luxury already spends on cultural capital:
          pavilions, patronage, motorsport, the gala, the monograph. That
          budget buys being there first. Rhapsody is the only venue where
          &ldquo;first&rdquo; is still available.
        </p>

        <div className="mx-auto mt-14 flex justify-center">
          <div className="relative flex h-[280px] w-[280px] items-center justify-center sm:h-[340px] sm:w-[340px]">
            <div className="absolute inset-0 rounded-full border border-line" />
            <div className="absolute inset-[15%] rounded-full border border-line" />
            <div className="absolute inset-[32%] rounded-full border border-signal/60" />
            <p className="font-mono-rh text-[10px] tracking-[0.1em] text-ink">
              Core
            </p>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {RINGS.map((r) => (
            <div key={r.name}>
              <p className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
                {r.name}
              </p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
