import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const TEAM = [
  {
    name: "Merry Walker",
    role: "Founder & Chairman, Project Rhapsody · Co-Founder & CEO, Symphony Space",
    proof: "Former White House International S&T Lead; national security and IC background; 2× patent-holding engineer; built a 70-person incubator across four continents; relationships across 60+ governments.",
  },
  {
    name: "Anna Shaposhnik",
    role: "Co-Founder & Partner, Project Rhapsody · Founder & CEO, ORBES (Techstars '25) · Orbital Capture & Cinematography",
    proof: "Space robotics founder building ORB, an autonomous free-flying camera that captures live media from space stations. USC creative technologist; has filmed in zero gravity and for the IMAX giant screen.",
  },
  {
    name: "Nicole Marzan",
    role: "Founder & CEO, The Concrete Group · Communications & Launch",
    proof: "Senior-led PR, communications, and brand advisory. Leads the October 5 launch and the studio's cultural press strategy.",
  },
  {
    name: "Marcus Glover",
    role: "Managing Partner, Obsidian Capital Partners · Capital & International",
    proof: "International markets and deep tech; advisor to the parent company.",
  },
  {
    name: "Paul Estevez",
    role: "Chief Brand, Creative & Strategy Officer (Advisory) · Brand Architecture, Narrative & GTM",
    proof: "Cross-sector operator across fintech, IP, media ad tech, music, fashion, and film. Authored the Rhapsody brand operating system and governance framework.",
  },
];

export function TeamSection() {
  return (
    <SectionShell id="17-team" index="17">
      <StickyMediaSection
        imgUrl="/media/17_team.webp"
        subheading="[ Team ]"
        heading="Orbit, capture, culture, capital. Every seat filled by someone who has done it before."
      >
        <Eyebrow>[ Team ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          Orbit, capture, culture, capital. Every seat filled by someone who
          has done it before.
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
            International markets, via the parent&rsquo;s advisory board.
          </p>
        </div>
      </StickyMediaSection>
    </SectionShell>
  );
}
