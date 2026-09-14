import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const ROWS: [string, string, string, string][] = [
  ["What it is", "A single, time-locked work in one window", "A seasonal anchor: recurring works across a defined run", "Media rights, authenticated archive, provenance record"],
  ["Who it's for", "A house making a founding statement", "A house building a series; a studio; a label", "Every player — bundled or licensed"],
  ["Pricing basis", "Per work, per window", "Per season, capped at 40% of studio capacity", "Rights & licensing"],
  ["Indicative", "$500K–$2M", "Negotiated, premium to Session", "Included / licensed"],
];

export function OfferSection() {
  return (
    <SectionShell id="08-offer" index="08">
      <StickyMediaSection
        imgUrl="/media/08_offer.webp"
        subheading="[ Offer ]"
        heading="Moments over mass."
      >
        <Eyebrow>[ Offer ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Moments over mass.
        </h2>

        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[560px] border-collapse font-mono-rh text-[13px]">
            <thead>
              <tr className="border-b border-line text-left text-ink-mute">
                <th className="w-[140px] py-3 pr-4 font-normal" />
                <th className="py-3 pr-4 font-normal">The Session</th>
                <th className="py-3 pr-4 font-normal">The Residency</th>
                <th className="py-3 font-normal">The Master</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((row) => (
                <tr key={row[0]} className="border-b border-line-soft align-top">
                  <td className="py-3 pr-4 text-ink-mute">{row[0]}</td>
                  <td className="py-3 pr-4 leading-relaxed">{row[1]}</td>
                  <td className="py-3 pr-4 leading-relaxed">{row[2]}</td>
                  <td className="py-3 leading-relaxed">{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="plate mt-10 p-7">
          <p className="font-mono-rh text-[11px] tracking-[0.1em] text-signal">
            Fourth line — Studio Services
          </p>
          <p className="mt-3 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
            Content production and creative services for the platform&rsquo;s
            own customers — mission storytelling, launch media, brand and
            communications work for sovereign, commercial, and hyperscale
            clients already on contract with the parent. Warm demand, no
            acquisition cost, and the studio&rsquo;s production muscle stays
            exercised between sessions.
          </p>
        </div>

        <p className="mt-8 max-w-[62ch] font-mono-rh text-[12px] leading-relaxed tracking-[0.02em] text-ink-mute">
          Spot sessions carry the margin. The premium is the unrepeatable.
          Long-term anchors are capped so the studio never becomes inventory.
          Studio Services is the floor; Sessions are the ceiling.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
