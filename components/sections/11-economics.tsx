import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

export function EconomicsSection() {
  return (
    <SectionShell id="11-economics" index="11">
      <StickyMediaSection
        mobileImgUrl="/media/mobile/11_economics.webp"
        imgUrl="/media/11_economics.webp"
        subheading="[ Economics ]"
        heading="Creative engagements. Symphony revenue."
      >
        <Eyebrow>[ Economics ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          Creative engagements. Symphony revenue.
        </h2>

        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-3">
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              $30K
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              estimated capacity rate per kg per month
            </p>
          </div>
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              4.6–7.5×
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              Symphony subscription rates: 4.6× weighted average; 7.5× Long-Term Plan
            </p>
          </div>
          <div>
            <p className="font-didone text-[clamp(28px,3vw,36px)] leading-none">
              $58.3M
            </p>
            <p className="mt-3 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
              modeled 2029 brand and advertising revenue, booked to Symphony
            </p>
          </div>
        </div>

        <p className="mt-10 max-w-[62ch] text-lg leading-relaxed text-ink-soft">
          Rhapsody is a Symphony Space program. Brand and advertising
          revenue books directly to Symphony; the program does not buy
          capacity from Symphony or operate a standalone revenue model.
          Capacity is priced at approximately $30,000 per kg per month,
          typically as one-month, non-recurring engagements.
        </p>
        <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-ink-soft">
          The $360,000 per kg per year equivalent is a rate comparison,
          not an annual recurring contract. Estimates depend on both mass
          and volume: larger or heavier works cost more; smaller or lighter
          works cost less.
        </p>

        <div className="mt-10 border-t border-line">
          <Line date="2028 · Commercial target" body={<>Pursuing <strong className="text-ink">$1M–$4M</strong> in total contracted value for two founding demonstrator works. This is a target, not secured contracts or modeled revenue. Symphony models $1.075M in licensing and consulting revenue in 2028, with no brand and advertising revenue that year.</>} />
          <Line date="2029 · Modeled revenue" body={<>$58.3M of brand and advertising revenue, using 15% of subscription-platform capacity at 90% booked. Revenue books to Symphony Space.</>} />
          <Line date="2034 · Capacity allocation" body="Brand and advertising capacity share ramps to 28% in Symphony's model. This allocation is distinct from the 40% cap on long-term studio anchors." />
          <Line date="Studio Services" body="Creative services for Symphony's existing customers are delivered within the program; all associated revenue books to Symphony." />
        </div>

        <p className="mt-8 font-mono-rh text-[11px] leading-relaxed tracking-[0.02em] text-ink-mute">
          Model snapshot and capacity share (15% → 28%) in{" "}
          <a href="#appendix-a" className="underline underline-offset-4">Appendix A</a>.
          {" "}Pricing assumptions and rate-card comparisons in Appendix B.
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
