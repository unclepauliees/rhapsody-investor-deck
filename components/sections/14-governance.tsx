import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const RULES = [
  { name: "Separate entity, separate brand.", body: "No shared identity with the platform partner. Ever." },
  { name: "Segregated data plane.", body: "Every work runs on physically and cryptographically separate networks. Client translation: your session is yours alone." },
  { name: "The curatorial gate.", body: "Every player passes counsel-approved screening before invitation. Selection is the screen." },
  { name: "Capacity cap.", body: "Anchors limited to 40% of studio capacity — the margin lives in the unrepeatable." },
  { name: "Language discipline.", body: "The studio speaks in sessions, works, windows, and moments — never in weight or engineering." },
];

export function GovernanceSection() {
  return (
    <SectionShell id="14-governance" index="14">
      <StickyMediaSection
        imgUrl="/media/14_governance.webp"
        subheading="[ Governance ]"
        heading="Separate by design. That is the point."
      >
        <Eyebrow>[ Governance ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Separate by design. That is the point.
        </h2>

        <p className="mt-8 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Investors should read the firewall as risk reduction, not
          constraint. The studio is architected as a distinct entity so that
          creative work and regulated missions never share a name, a
          network, or a room.
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
          Clean lines make a clean exit.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
