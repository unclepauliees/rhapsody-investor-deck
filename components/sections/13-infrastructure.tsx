import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const MILESTONES = [
  { date: "Q3 2026", body: "Platform demonstrator PDR" },
  { date: "Feb 2027", body: "Flat-sat integration begins" },
  { date: "April 2028", body: "Demonstrator launch, Cape Canaveral · first two Rhapsody works fly" },
  { date: "Q2 2029", body: "First full-scale commercial platform launch" },
  { date: "Q3 2029", body: "Revenue service entry · Residencies open" },
];

export function InfrastructureSection() {
  return (
    <SectionShell id="13-infrastructure" index="13">
      <StickyMediaSection
        imgUrl="/media/13_infrastructure.webp"
        subheading="[ Platform ]"
        heading="The orbit is booked. The instrument is real."
      >
        <Eyebrow>[ Platform ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          The orbit is booked. The instrument is real.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          The studio is a <strong className="font-semibold text-ink">Symphony Space</strong>{" "}
          program operating on Symphony&rsquo;s platforms. Symphony is
          building reconfigurable,
          serviceable platforms, with a secured launch slot and signed
          demand from sovereign, commercial, and hyperscale customers before
          first flight. Rhapsody develops creative engagements on those
          platforms; all program revenue books to Symphony Space.
        </p>

        <div className="mt-10 border-t border-line font-mono-rh text-[13px]">
          {MILESTONES.map((m) => (
            <div
              key={m.date}
              className="ledger-row grid grid-cols-1 gap-1 py-4 sm:grid-cols-[160px_1fr] sm:gap-8"
            >
              <p className="text-ink-mute sm:text-right">{m.date}</p>
              <p className="text-ink-soft">{m.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
          Every customer Symphony signs is a potential Rhapsody creative-services
          lead: mission storytelling, launch media, communications. The
          program can support Symphony&rsquo;s customer relationships before
          the first work flies.
        </p>

        <p className="mt-6 max-w-[62ch] font-mono-rh text-[11px] leading-relaxed tracking-[0.02em] text-ink-mute">
          Rhapsody is not a separate legal entity and does not issue equity
          or raise capital independently. Its program budget is funded from
          Symphony&rsquo;s Seed; brand and advertising revenue begins in
          Symphony&rsquo;s model in 2029.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
