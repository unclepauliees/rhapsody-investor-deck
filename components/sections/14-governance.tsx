import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const RULES = [
  { name: "Separate brand, segregated data plane.", body: "A distinct creative identity within Symphony Space, with separation of program data from other platform operations. Brand and data separation, not a separate legal entity." },
  { name: "Segregated data plane.", body: "Every work runs on physically and cryptographically separate networks. Client translation: your session is yours alone." },
  { name: "The curatorial gate.", body: "Every player passes counsel-approved screening before invitation. Selection is the screen." },
  { name: "Capacity cap.", body: "Anchors limited to 40% of studio capacity: the margin lives in the unrepeatable." },
  { name: "Language discipline.", body: "The creative offer speaks in sessions, works, windows, and moments. Pricing and financial disclosures state the mass, volume, and model assumptions explicitly." },
];

export function GovernanceSection() {
  return (
    <SectionShell id="14-governance" index="14">
      <StickyMediaSection
        videoUrl="/media/14_governance.mp4"
        webmUrl="/media/14_governance.webm"
        posterUrl="/media/14_governance_poster.jpg"
        subheading="[ Governance ]"
        heading="Separate by design. That is the point."
      >
        <Eyebrow>[ Governance ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Separate by design. That is the point.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Rhapsody&rsquo;s governance is built around brand and data
          separation within Symphony Space. Creative work has a distinct
          identity and segregated data plane; this is an operational
          framework, not a claim of legal separation.
        </p>

        <ol className="mt-10 border-t border-line font-mono-rh text-[13px]">
          {RULES.map((r, i) => (
            <li key={r.name} className="ledger-row grid grid-cols-[32px_1fr] gap-4 py-5">
              <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
              <div>
                <p className="font-didone text-lg not-italic text-ink">
                  {r.name}
                </p>
                <p className="mt-1 max-w-[58ch] leading-relaxed text-ink-soft">
                  {r.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <p className="mt-10 font-didone italic text-xl">
          Clear boundaries protect the work.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
