import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Eyebrow } from "@/components/deck/eyebrow";
import { SectionShell } from "@/components/deck/section-shell";

const RISKS = [
  {
    n: "01",
    title: "The parent's own deck undercuts this one.",
    body: "Symphony's seed deck carries Rhapsody as “upside, not base case.” A crossover investor will ask why a side bet needs its own raise. Answer lives on Slides 13 and 18: additive economics on an already-funded asset, and a $1M raise covered by the first session. If that isn't crisp, the deck is a brochure.",
  },
  {
    n: "02",
    title: "$2.9B by 2034 is an optics liability.",
    body: "It exceeds the parent's entire core revenue. It stays in the appendix as a scenario; one work's economics is the hero.",
  },
  {
    n: "03",
    title: "No Founding Director yet.",
    body: "The team slide is now strong on orbit, capture, communications, and capital — but the studio still has no named curatorial or creative lead. Slide 18 funds the seat; say so out loud in the room rather than let them find the gap.",
  },
  {
    n: "04",
    title: "ORBES is either the capture partner or the perceived competitor.",
    body: "Anna's product is literally a camera in orbit. Declare the relationship on the slide (partner / advisor / capture supplier) so no one reads it as a conflict.",
  },
  {
    n: "05",
    title: "“First” claims will be challenged.",
    body: "Products have been photographed in orbit before. We never say “first media in space.” We say first instrument, first studio, first medium. Wording is load-bearing everywhere.",
  },
  {
    n: "06",
    title: "Space-billboard backlash.",
    body: "Orbital advertising has a hostile public history (astronomy community, dark-sky advocacy, “commercializing the sky”). Rhapsody's stance must be explicit in the deck or Q&A: nothing is projected at Earth; the work is made in orbit and shown on Earth. Media rights, not sky billboards.",
  },
  {
    n: "07",
    title: "Subco disclosure vs. visual firewall.",
    body: "Naming Symphony Space is fine; the moment a parent logo, colorway, or orbit diagram appears in this deck, the brand collision the whole project exists to avoid is on screen. Words only.",
  },
  {
    n: "08",
    title: "Pipeline slide is thin.",
    body: "Verticals “in development” is not traction. Two houses under NDA before October 5 or Slide 15 reads as a plan, not proof.",
  },
  {
    n: "09",
    title: "Codename in a live raise.",
    body: "Fine with the footnote — as long as the emblem is on every slide so a name change mid-round doesn't break continuity.",
  },
  {
    n: "10",
    title: "Firewall vs. diligence.",
    body: "Investors will want the platform's engineering. Data room, not deck. The deck stays museum-grade.",
  },
  {
    n: "11",
    title: "Studio Services is the firewall's stress test.",
    body: "The parent's client book is sovereign, defense, and IC-adjacent. If the Rhapsody name produces mission media for a defense customer, the “no aerospace or defense association” rule is broken by the studio's own revenue line. Guardrails, stated in the deck: (a) every Studio Services engagement passes the same counsel gate as a Session; (b) defense and government work is delivered unbranded or under a services mark, never under the Rhapsody name; (c) Services is capped — it is the floor, and the moment it competes with Sessions for capacity or attention, the studio is a production vendor, not a medium.",
  },
];

export function AppendixSection() {
  return (
    <SectionShell id="appendix" index="A">
      <div className="mx-auto max-w-4xl px-6 py-24 sm:px-10">
        <Eyebrow>[ Appendix ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(26px,3.4vw,40px)] leading-[1.12]">
          The record.
        </h2>

        <Accordion multiple className="mt-12 border-t border-line">
          <AccordionItem value="a" className="border-b border-line py-2">
            <AccordionTrigger className="py-5 font-mono-rh text-[13px] uppercase tracking-[0.08em] text-ink hover:no-underline data-[slot=accordion-trigger]:rounded-none">
              A · Financial scenario 2029–2034
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                Full contribution trajectory and capacity share, presented
                as capacity-derived and explicitly labeled a{" "}
                <em className="font-didone not-italic italic">scenario</em>{" "}
                — carried in the parent&rsquo;s model as upside, not base
                case (see Slide 11).
              </p>
              <div className="mt-5 border-t border-line-soft font-mono-rh text-[13px]">
                <div className="ledger-row grid grid-cols-[140px_1fr_1fr] gap-4 py-3">
                  <span className="text-ink-mute">2029</span>
                  <span className="text-ink-soft">$58M studio contribution</span>
                  <span className="text-ink-soft">15% of platform capacity</span>
                </div>
                <div className="grid grid-cols-[140px_1fr_1fr] gap-4 py-3">
                  <span className="text-ink-mute">2034</span>
                  <span className="text-ink-soft">$2.9B studio contribution</span>
                  <span className="text-ink-soft">28% of platform capacity</span>
                </div>
              </div>
              <p className="mt-4 font-mono-rh text-[11px] leading-relaxed text-ink-mute">
                Interpolated 2030–2033 line items are not specified in the
                locked copy — populate from the parent&rsquo;s model before
                send rather than infer intermediate figures here.
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="b" className="border-b border-line py-2">
            <AccordionTrigger className="py-5 font-mono-rh text-[13px] uppercase tracking-[0.08em] text-ink hover:no-underline">
              B · Pricing basis
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <p className="text-[15px] leading-relaxed text-ink-soft">
                The only place a $/kg comparison appears in this deck,
                framed as commodity rate vs. studio rate — Mass Silence
                applies everywhere else (see Slide 14, rule 5).
              </p>
              <div className="mt-5 border-t border-line-soft font-mono-rh text-[13px]">
                <div className="ledger-row grid grid-cols-[180px_1fr] gap-4 py-3">
                  <span className="text-ink-mute">Commodity rate</span>
                  <span className="text-ink-soft">
                    [ TK — $/kg figure from data room; not specified in
                    locked copy ]
                  </span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4 py-3">
                  <span className="text-ink-mute">Studio rate</span>
                  <span className="text-ink-soft">
                    10–40× the commodity rate, per work (Slide 01 / 11)
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="c" className="border-b border-line py-2">
            <AccordionTrigger className="py-5 font-mono-rh text-[13px] uppercase tracking-[0.08em] text-ink hover:no-underline">
              C · Trademark status
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="border-t border-line-soft font-mono-rh text-[13px]">
                <div className="ledger-row grid grid-cols-[180px_1fr] gap-4 py-3">
                  <span className="text-ink-mute">Class coverage</span>
                  <span className="text-ink-soft">35 / 38 / 41</span>
                </div>
                <div className="ledger-row grid grid-cols-[180px_1fr] gap-4 py-3">
                  <span className="text-ink-mute">Status</span>
                  <span className="text-ink-soft">
                    In knockout search as of Sept 2026; &ldquo;Project
                    Rhapsody&rdquo; is a working codename pending clearance
                    (Slide 00 footnote).
                  </span>
                </div>
                <div className="grid grid-cols-[180px_1fr] gap-4 py-3">
                  <span className="text-ink-mute">Shortlist / ruled-out</span>
                  <span className="text-ink-soft">
                    [ TK — trademark counsel to populate before send ]
                  </span>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="d" className="border-b border-line py-2">
            <AccordionTrigger className="py-5 font-mono-rh text-[13px] uppercase tracking-[0.08em] text-ink hover:no-underline">
              D · Governance detail
            </AccordionTrigger>
            <AccordionContent className="pb-6 text-[15px] leading-relaxed text-ink-soft">
              <p>
                <strong className="text-ink">Entity structure.</strong>{" "}
                Rhapsody is architected as a separate entity and brand from
                the platform partner — no shared identity, ever (Slide 14,
                rule 1).
              </p>
              <p>
                <strong className="text-ink">Data-plane architecture.</strong>{" "}
                Every work runs on physically and cryptographically
                separate networks from platform operations; the client
                translation is &ldquo;your session is yours alone&rdquo;
                (Slide 14, rule 2).
              </p>
              <p>
                <strong className="text-ink">Screening process.</strong>{" "}
                Every player — Session client or Studio Services client
                alike — passes counsel-approved screening before invitation
                or engagement (Slide 14, rule 3; Risk 11).
              </p>
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="e" className="py-2">
            <AccordionTrigger className="py-5 font-mono-rh text-[13px] uppercase tracking-[0.08em] text-ink hover:no-underline">
              E · Risk register
            </AccordionTrigger>
            <AccordionContent className="pb-6">
              <div className="border-t border-line-soft font-mono-rh text-[13px]">
                {RISKS.map((r) => (
                  <div
                    key={r.n}
                    className="ledger-row grid grid-cols-[32px_1fr] gap-4 py-4"
                  >
                    <span className="text-signal">{r.n}</span>
                    <div>
                      <p className="font-didone text-base not-italic text-ink">
                        {r.title}
                      </p>
                      <p className="mt-1 leading-relaxed text-ink-soft">
                        {r.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </SectionShell>
  );
}
