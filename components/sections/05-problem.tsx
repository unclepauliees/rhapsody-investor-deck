import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const REASONS = [
  { n: "01", title: "Access is bespoke.", body: "Getting anything to orbit takes 3–7 years and a dedicated mission. Creative timelines are measured in seasons." },
  { n: "02", title: "Capacity is sold by weight.", body: "The industry prices kilograms to engineers. Nobody prices moments to culture-makers." },
  { n: "03", title: "Nothing comes back.", body: "Built once, discarded. A campaign can't be swapped, iterated, or archived as a master." },
];

export function ProblemSection() {
  return (
    <SectionShell id="05-problem" index="05">
      <StickyMediaSection
        imgUrl="/media/05_problem.webp"
        subheading="[ Problem ]"
        heading="Space has been a stunt, never a studio."
      >
        <Eyebrow>[ Problem ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Space has been a stunt, never a studio.
        </h2>

        <div className="mt-8 max-w-[62ch] space-y-4 text-lg leading-relaxed text-ink-soft">
          <p>
            Every brand moment in orbit to date has been a one-off — a
            product photographed against the void, a single launch, a press
            cycle. No instrument. No repeatability. No rights. No medium.
          </p>
          <p>The reason is structural, not creative:</p>
        </div>

        <div className="mt-10 space-y-6">
          {REASONS.map((r) => (
            <div key={r.n} className="ledger-row grid grid-cols-[48px_1fr] gap-4 pb-6">
              <span className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
                {r.n}
              </span>
              <div>
                <p className="font-didone italic text-lg">{r.title}</p>
                <p className="mt-1 text-[15px] leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[62ch] font-didone italic text-xl">
          The old world composes. Nobody has built the instrument to
          improvise.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
