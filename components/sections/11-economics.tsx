import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

export function EconomicsSection() {
  return (
    <SectionShell id="11-economics" index="11">
      <StickyMediaSection
        imgUrl="/media/11_economics.webp"
        subheading="[ Economics ]"
        heading="One work pays like a platform."
      >
        <Eyebrow>[ Economics ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          One work pays like a platform.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              $500K–$2M
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              per work, per window
            </p>
          </div>
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              10–40×
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              the commodity rate for equivalent capacity
            </p>
          </div>
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              90%+
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              contribution margin on marginal platform capacity
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Rhapsody sells the platform&rsquo;s spare and flex capacity as
          moments. The hardware is already funded, launched, and operated
          for other missions; the studio&rsquo;s cost is creative
          production, curation, and rights, not the bus. That is why the
          margin exists.
        </p>

        <div className="mt-10 border-t border-line">
          <Line date="2028 · Demonstrator" body={<>Two founding works fly. Contracted value: <strong className="text-ink">$1M–$4M</strong>, against a $1M pre-seed.</>} />
          <Line date="2029 · First commercial platform" body={<>Studio contribution of $58M on 15% of platform capacity, per the parent&rsquo;s model, carried there as upside, not base case.</>} />
          <Line date="Governance" body="Long-term anchors capped at 40% of studio capacity. The margin lives in the unrepeatable." />
          <Line date="The floor" body="Studio Services to the parent's client book: every platform customer is a warm creative-services lead. Revenue before first light, and a cost base that pays for itself." />
        </div>

        <p className="mt-8 font-mono-rh text-[11px] leading-relaxed tracking-[0.02em] text-ink-mute">
          Full 2029–2034 scenario (contribution and capacity share 15% →
          28%) in Appendix A.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}

function Line({ date, body }: { date: string; body: React.ReactNode }) {
  return (
    <div className="ledger-row grid grid-cols-1 gap-2 py-5 sm:grid-cols-[240px_1fr] sm:gap-8">
      <p className="font-mono-rh text-[12px] tracking-[0.04em] text-ink-mute sm:text-right">
        {date}
      </p>
      <p className="font-mono-rh text-[13px] leading-relaxed text-ink-soft">
        {body}
      </p>
    </div>
  );
}
