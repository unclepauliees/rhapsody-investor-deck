import { Eyebrow } from "@/components/deck/eyebrow";
import { CountUp } from "@/components/deck/count-up";
import { SectionShell } from "@/components/deck/section-shell";
import { StickyMediaSection } from "@/components/vendor/sticky-media-section";

const USE_OF_FUNDS: [string, string, string][] = [
  ["Founding team · 18 months", "$400K", "40%: Founding Director, producer, curatorial lead"],
  ["Studio launch & first-generation acquisition", "$250K", "25%: October 5 New York, Art Basel Miami, founding-voice commissions"],
  ["Creative envelope & integration", "$150K", "15%: the standard instrument kit for the first two works"],
  ["Entity, trademark, rights framework", "$120K", "12%: clearance in classes 35/38/41, media-rights architecture, counsel gate"],
  ["Reserve", "$80K", "8%"],
];

const MILESTONES = [
  { date: "Oct 2026", body: "Studio launched, New York" },
  { date: "Q1 2027", body: "Name cleared; entity formed; Founding Director in seat" },
  { date: "Q2 2027", body: "Two founding works contracted for the demonstrator" },
  { date: "Apr 2028", body: "First works fly" },
];

export function AskSection() {
  return (
    <SectionShell id="18-ask" index="18">
      <StickyMediaSection
        videoUrl="/media/18_ask.mp4"
        webmUrl="/media/18_ask.webm"
        posterUrl="/media/18_ask_poster.jpg"
        subheading="[ The Ask ]"
        heading="$1M to open the studio and fly the first two works."
      >
        <Eyebrow>[ The Ask ]</Eyebrow>
        <h2 className="max-w-[62ch] font-didone text-[clamp(28px,3.8vw,44px)] leading-[1.1]">
          <CountUp display="$1M" /> to open the studio and fly the first two
          works.
        </h2>
        <p className="mt-3 font-mono-rh text-[11px] tracking-[0.12em] uppercase text-ink-mute">
          Pre-seed · Project Rhapsody, a subsidiary of Symphony Space
        </p>

        <p className="mt-8 max-w-[62ch] font-didone text-2xl leading-snug">
          Two founding works on the 2028 demonstrator carry $1M–$4M in
          contracted value. The raise is covered by the first session.
        </p>

        <div className="mt-12">
          <p className="mb-3 font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
            Use of funds
          </p>
          {/* Table at sm+; stacked mono ledger below sm (spec §08) */}
          <table className="hidden w-full border-collapse font-mono-rh text-[13px] sm:table">
            <tbody>
              {USE_OF_FUNDS.map((row) => (
                <tr key={row[0]} className="border-b border-line-soft align-top">
                  <td className="py-3 pr-4 text-ink-soft">{row[0]}</td>
                  <td className="py-3 pr-4 text-ink">{row[1]}</td>
                  <td className="py-3 text-ink-mute">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="font-mono-rh text-[13px] sm:hidden">
            {USE_OF_FUNDS.map((row) => (
              <div key={row[0]} className="ledger-row py-3">
                <div className="flex items-baseline justify-between gap-3">
                  <p className="text-ink-soft">{row[0]}</p>
                  <p className="shrink-0 text-ink">{row[1]}</p>
                </div>
                <p className="mt-1 text-ink-mute">{row[2]}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 border-t border-line font-mono-rh text-[13px]">
          <p className="mb-1 mt-4 font-mono-rh text-[11px] tracking-[0.1em] uppercase text-ink-mute">
            Milestones this round buys
          </p>
          {MILESTONES.map((m) => (
            <div
              key={m.date}
              className="ledger-row grid grid-cols-1 gap-1 py-3 sm:grid-cols-[140px_1fr] sm:gap-8"
            >
              <p className="text-ink-mute sm:text-right">{m.date}</p>
              <p className="text-ink-soft">{m.body}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-mono-rh text-[11px] tracking-[0.02em] text-ink-mute">
          Every dollar maps to a milestone on the path to first light.
        </p>
      </StickyMediaSection>
    </SectionShell>
  );
}
