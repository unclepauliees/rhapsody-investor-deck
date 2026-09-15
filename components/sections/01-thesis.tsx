import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

export function ThesisSection() {
  return (
    <SectionShell id="01-thesis" index="01">
      <StickyMediaSection
        videoUrl="/media/01_thesis.mp4"
        webmUrl="/media/01_thesis.webm"
        posterUrl="/media/01_thesis_poster.jpg"
        subheading="[ Thesis ]"
        heading="The live and unrepeatable is the last real luxury. We are building the only place it can still be made."
        priority
      >
        <Eyebrow>[ Thesis ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          The live and unrepeatable is the last real luxury. We are building
          the only place it can still be made.
        </h2>

        <div className="mt-10 max-w-[62ch] space-y-5 text-lg leading-[1.6] text-ink-soft">
          <p>
            Every medium is defined by the physics of where it is made.
            Broadcast was invented in a studio. Social was invented in a
            feed. The next one gets invented in orbit, and it hasn&rsquo;t
            been invented yet.
          </p>
          <p>
            Rhapsody is the first instrument for making media in orbit: a
            studio, not a satellite; a session, not a slot. Every work is
            made once, in a place with new physics, and can never be played
            twice.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-8 border-t border-line-soft pt-8 sm:grid-cols-3">
          <Stat value="10–40×" label="premium over commodity orbital capacity, per work" />
          <Stat value="April 2028" label="first works fly on a demonstrator with a secured launch slot" />
          <Stat value="$60B" label="luxury brand & media opportunity opening 2030–2035" />
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none text-ink">
        {value}
      </p>
      <p className="mt-3 font-mono-rh text-[11px] leading-relaxed tracking-[0.04em] text-ink-mute">
        {label}
      </p>
    </div>
  );
}
