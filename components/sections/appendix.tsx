import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";

const RISKS = [
  { title: "Program structure and funding", body: "Rhapsody is a Symphony Space program, not a separate legal entity. It does not issue equity or raise independently. The $1M plan is a program budget funded from Symphony's Seed, and revenue books to Symphony." },
  { title: "Targets and modeled revenue", body: "The $1M–$4M target for two founding demonstrator works is not secured contracted value or modeled 2028 revenue. The current model starts brand and advertising revenue in 2029; commercial targets remain subject to contracting and delivery." },
  { title: "Creative leadership", body: "The program budget includes a Founding Director, producer, and curatorial lead. These are planned program roles, not current officers of a separate Rhapsody entity." },
  { title: "Capture partnership", body: "ORBES is Symphony's orbital capture and video partner. Anna Shaposhnik is Founder & CEO of ORBES, not a Rhapsody co-founder." },
  { title: "First claims", body: "Products have been photographed in orbit before. The program's positioning concerns the studio, instrument, and creative medium, not a claim of the first media made in space." },
  { title: "Public perception", body: "Nothing is projected at Earth. Work is made in orbit and shown on Earth: media rights and creative production, not sky billboards." },
  { title: "Brand and data separation", body: "Rhapsody maintains a distinct creative identity and segregated data plane within Symphony. This governance framework does not constitute legal-entity separation." },
  { title: "Pipeline maturity", body: "Verticals in development and planned founding works are not signed contracts. Pipeline progress must be distinguished from confirmed commercial commitments." },
  { title: "Working codename", body: "Project Rhapsody remains a working codename pending trademark clearance. The emblem provides continuity if the name changes." },
  { title: "Platform diligence", body: "Platform engineering and financial diligence belong with Symphony Space. The program overview complements Symphony's Seed materials." },
  { title: "Studio Services screening", body: "Studio Services engagements pass the same counsel-approved screening as Sessions. Defense and government work is delivered unbranded or under a services mark, not under the Rhapsody name. Services must not displace the program's core creative work." },
];

export function AppendixSection() {
  return (
    <SectionShell id="appendix" index="A">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <Eyebrow>[ Appendix ]</Eyebrow>
        <h2 className="font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">The record.</h2>

        <AppendixPanel id="appendix-a" title="A · Financial model snapshot, 2028–2034">
          <p>Brand and advertising revenue is modeled within Symphony Space. Rhapsody has no standalone revenue model; all program revenue books to Symphony.</p>
          <dl className="mt-5 font-mono-rh text-[13px]">
            <ModelRow label="2028" value="$1.075M of total revenue from licensing and consulting. No brand and advertising revenue in the current model." />
            <ModelRow label="2028 target" value="$1M–$4M in total contracted value sought for two founding demonstrator works. A commercial target, not secured contracts or modeled 2028 revenue." />
            <ModelRow label="2029" value="$58.3M of brand and advertising revenue, on 15% of subscription-platform capacity at 90% booked." />
            <ModelRow label="2034" value="Brand and advertising capacity allocation reaches 28%." />
          </dl>
          <p className="mt-4 text-[13px] text-ink-mute">Source: Symphony financial-model figures confirmed by Merry Walker, September 2026. Intermediate annual figures and a 2034 revenue amount are not presented in this overview.</p>
        </AppendixPanel>

        <AppendixPanel id="appendix-b" title="B · Pricing basis">
          <p>Brand and advertising capacity is estimated at $30,000 per kg per month, typically booked as roughly one-month, non-recurring engagements. The annualized equivalent is $360,000 per kg per year, not a recurring revenue commitment.</p>
          <dl className="mt-5 font-mono-rh text-[13px]">
            <ModelRow label="Weighted-average subscription rate" value="Brand and advertising pricing is 4.6× Symphony's weighted-average subscription rate." />
            <ModelRow label="Long-Term Plan rate" value="Brand and advertising pricing is 7.5× Symphony's Long-Term Plan rate." />
            <ModelRow label="Mass and volume" value="Rates are rough estimates. Larger or heavier works cost more; smaller or lighter works cost less. Final pricing depends on both mass and volume." />
          </dl>
          <p className="mt-4 text-[13px] text-ink-mute">Comparisons use Symphony&rsquo;s own rate card, not an external commodity-capacity benchmark.</p>
        </AppendixPanel>

        <AppendixPanel id="appendix-c" title="C · Trademark status">
          <dl className="font-mono-rh text-[13px]">
            <ModelRow label="Class coverage" value="35 / 38 / 41" />
            <ModelRow label="Status" value="In knockout search as of September 2026. Project Rhapsody remains a working codename pending clearance." />
            <ModelRow label="Counsel review" value="Final name clearance and the shortlist remain subject to trademark counsel's review." />
          </dl>
        </AppendixPanel>

        <AppendixPanel id="appendix-d" title="D · Governance detail">
          <p><strong className="text-ink">Program structure.</strong> Rhapsody operates within Symphony Space. It is not a separate legal entity, cannot grant equity or raise independently, and books revenue to Symphony.</p>
          <p className="mt-4"><strong className="text-ink">Brand and data separation.</strong> The governance framework specifies a distinct creative brand and physically and cryptographically segregated program networks. These are operational boundaries, not a legal firewall.</p>
          <p className="mt-4"><strong className="text-ink">Screening.</strong> Session and Studio Services participants pass counsel-approved screening before invitation or engagement.</p>
          <p className="mt-4"><strong className="text-ink">Capacity discipline.</strong> Long-term anchors are capped at 40% of studio capacity. This program constraint is distinct from the financial model&rsquo;s brand and advertising allocation of 15% of subscription-platform capacity in 2029, rising to 28% in 2034.</p>
        </AppendixPanel>

        <AppendixPanel id="appendix-e" title="E · Risk register">
          <ol className="font-mono-rh text-[13px]">
            {RISKS.map((risk, index) => (
              <li key={risk.title} className="ledger-row grid grid-cols-[32px_1fr] gap-4 py-4">
                <span className="text-signal">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h4 className="font-didone text-lg text-ink">{risk.title}</h4>
                  <p className="mt-1">{risk.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </AppendixPanel>
      </div>
    </SectionShell>
  );
}

function AppendixPanel({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-12 scroll-mt-28 border-t border-line pt-6">
      <h3 className="mb-5 font-mono-rh text-[13px] uppercase text-ink">{title}</h3>
      <div className="text-[15px] leading-relaxed text-ink-soft">{children}</div>
    </section>
  );
}

function ModelRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="ledger-row grid grid-cols-1 gap-2 py-4 sm:grid-cols-[180px_1fr] sm:gap-6">
      <dt className="text-ink-mute">{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
