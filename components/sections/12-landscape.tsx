import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const COLUMNS = [
  { name: "Terrestrial spectacle.", body: "The gala, the pavilion, the desert runway. Proven, crowded, repeatable. Every rival has done it." },
  { name: "Space stunts.", body: "One-off launches and product shots. Novelty without a medium — no rights, no series, no second act." },
  { name: "Hosted-payload operators.", body: "Sell kilograms to engineers. No creative envelope, no curation, no media practice." },
];

const MOAT = [
  "Booked orbit on a reconfigurable platform — the only one that swaps on orbit.",
  "A creative standard that integrates in weeks.",
  "Curatorial selection as the gate — scarcity by design.",
  "Provenance: the authenticated master as the asset.",
];

export function LandscapeSection() {
  return (
    <SectionShell id="12-landscape" index="12">
      <StickyMediaSection
        imgUrl="/media/12_landscape.webp"
        subheading="[ Landscape ]"
        heading="Nobody else has the venue, the instrument, and the gate."
      >
        <Eyebrow>[ Landscape ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(24px,3.2vw,36px)] leading-[1.14]">
          Nobody else has the venue, the instrument, and the gate.
        </h2>

        <p className="mt-8 font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
          Who a house chooses between
        </p>
        <div className="mt-4 grid grid-cols-1 gap-px bg-line sm:grid-cols-3">
          {COLUMNS.map((c) => (
            <div key={c.name} className="bg-paper p-7">
              <p className="font-didone text-lg">{c.name}</p>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">
                {c.body}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-12 font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
          Rhapsody&rsquo;s moat
        </p>
        <ol className="mt-4 border-t border-line font-mono-rh text-[13px] leading-relaxed text-ink-soft">
          {MOAT.map((m, i) => (
            <li key={m} className="ledger-row flex gap-4 py-4">
              <span className="text-signal">{String(i + 1).padStart(2, "0")}</span>
              <span>{m}</span>
            </li>
          ))}
        </ol>
      </StickyMediaSection>
    </SectionShell>
  );
}
