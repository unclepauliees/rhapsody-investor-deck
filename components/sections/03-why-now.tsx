import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const SHIFTS = [
  {
    n: "01",
    body: "Generative abundance collapsed the value of the image. When any campaign can be prompted in seconds, the asset a house pays for is no longer the picture: it is the proof that a real thing happened, once, somewhere no one else could go.",
  },
  {
    n: "02",
    body: "Luxury ran out of altitude. Every terrestrial venue has been used: the museum steps, the desert, the runway on ice. Cultural capital now comes from founding moments, not attending them. The budget line is the pavilion, not the placement.",
  },
  {
    n: "03",
    body: "Orbit became reconfigurable. For the first time, a platform can host a creative work, swap it, and host the next, on the timeline of a season, not a decade.",
  },
];

export function WhyNowSection() {
  return (
    <SectionShell id="03-why-now" index="03">
      <StickyMediaSection
        imgUrl="/media/03_why_now.webp"
        subheading="[ Why Now ]"
        heading="Anything can be generated. Nothing can be re-lived."
      >
        <Eyebrow>[ Why Now ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Anything can be generated. Nothing can be re-lived.
        </h2>
        <p className="mt-6 max-w-[62ch] text-lg text-ink-soft">
          Three shifts converged in 2026:
        </p>

        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {SHIFTS.map((s) => (
            <div key={s.n}>
              <p className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
                {s.n}
              </p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {s.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-[62ch] font-didone italic text-xl text-ink">
          You cannot prompt a session that already happened.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
