import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const MOVEMENTS = [
  {
    n: "I",
    name: "Broadcast",
    verb: "Composed.",
    body: "One voice, scripted years out, Earth-bound. The masterpiece is finished before it airs.",
  },
  {
    n: "II",
    name: "Social",
    verb: "Algorithmic.",
    body: "Many voices, still terrestrial, still ruled by the feed. Volume without permanence.",
  },
  {
    n: "III",
    name: "Space-native",
    verb: "Improvised.",
    body: "A new instrument in a place with new physics. Live, reconfigurable, unrepeatable, un-fakeable.",
  },
];

export function ThirdMovementSection() {
  return (
    <SectionShell id="04-third-movement" index="04">
      <StickyMediaSection
        videoUrl="/media/04_third_movement.mp4"
        posterUrl="/media/04_third_movement_poster.jpg"
        subheading="[ The Medium ]"
        heading="Media has had two movements. We are writing the third."
      >
        <Eyebrow>[ The Medium ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Media has had two movements. We are writing the third.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {MOVEMENTS.map((m) => (
            <div key={m.n} className="bg-paper p-7">
              <p className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
                {m.n}
              </p>
              <p className="mt-3 font-didone text-2xl">{m.name}</p>
              <p className="font-didone italic text-ink-soft">{m.verb}</p>
              <p className="mt-3 text-[15px] leading-relaxed text-ink-soft">
                {m.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-14 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          This is literal, not poetic. Legacy space composes a mission over
          years and freezes it at launch-day technology. Our instrument
          reconfigures on orbit in weeks. The story and the hardware are the
          same story.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
