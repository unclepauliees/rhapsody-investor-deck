import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const TEAM = [
  {
    name: "Merry Walker",
    role: "Co-Founder & CEO, Symphony Space",
    proof: "Former White House International S&T Lead; national security and IC background; 2× patent-holding engineer; built a 70-person incubator across four continents; relationships across 60+ governments.",
  },
  {
    name: "Anna Shaposhnik",
    role: "Founder & CEO, ORBES (Techstars '25) · Symphony's Orbital Capture & Video Partner",
    proof: "ORBES is Symphony's orbital capture and video partner. Anna is a space robotics founder building ORB, an autonomous free-flying camera. USC creative technologist; has filmed in zero gravity and for the IMAX giant screen.",
  },
  {
    name: "Nicole Marzan & Kat Nelson",
    role: "The Concrete Group · Public Relations for Symphony Space",
    proof: "Nicole and Kat handle public relations for Symphony, including launch communications and press for the Rhapsody program. Nicole is Founder & CEO of The Concrete Group.",
  },
  {
    name: "Marcus Glover",
    role: "Managing Partner, Obsidian Capital Partners · Capital & International",
    proof: "International markets and deep tech; advisor to Symphony Space.",
  },
  {
    name: "Paul Estevez",
    role: "President & Co-Founder, Intellectual Asset Management; Partner, Obsidian Capital Partners; Co-Founder, IPX; Advisor, Symphony Space",
    proof: "Cross-sector operator across fintech, IP, media ad tech, music, fashion, and film. Authored the Rhapsody branding and brand operating system.",
  },
];

export function TeamSection() {
  return (
    <SectionShell id="17-team" index="17">
      <StickyMediaSection
        imgUrl="/media/17_team.webp"
        subheading="[ Team & Partners ]"
        heading="Symphony's team. Specialist partners. One creative program."
      >
        <Eyebrow>[ Team & Partners ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          Symphony&rsquo;s team. Specialist partners. One creative program.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-px bg-line sm:grid-cols-2">
          {TEAM.map((t) => (
            <div key={t.name} className="bg-paper p-7">
              <p className="font-didone text-xl">{t.name}</p>
              <p className="mt-1 font-mono-rh text-[11px] leading-relaxed tracking-[0.02em] text-signal">
                {t.role}
              </p>
              <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
                {t.proof}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 max-w-[62ch]">
          <p className="font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
            Advisory bench
          </p>
          <p className="mt-2 font-mono-rh text-[13px] leading-relaxed text-ink-soft">
            National security · Commercial space · Civil space ·
            International markets, via Symphony&rsquo;s advisory board.
          </p>
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
