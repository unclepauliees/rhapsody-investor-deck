export type SectionMeta = {
  id: string;
  index: string; // "00".."19" or "A"
  label: string; // short nav label
};

export const SECTIONS: SectionMeta[] = [
  { id: "00-cover", index: "00", label: "Cover" },
  { id: "01-thesis", index: "01", label: "Thesis" },
  { id: "02-highlights", index: "02", label: "Highlights" },
  { id: "03-why-now", index: "03", label: "Why Now" },
  { id: "04-third-movement", index: "04", label: "Third Movement" },
  { id: "05-problem", index: "05", label: "Problem" },
  { id: "06-solution", index: "06", label: "Solution" },
  { id: "07-session", index: "07", label: "Session" },
  { id: "08-offer", index: "08", label: "Offer" },
  { id: "09-market", index: "09", label: "Market" },
  { id: "10-first-generation", index: "10", label: "First Generation" },
  { id: "11-economics", index: "11", label: "Economics" },
  { id: "12-landscape", index: "12", label: "Landscape" },
  { id: "13-infrastructure", index: "13", label: "Infrastructure" },
  { id: "14-governance", index: "14", label: "Governance" },
  { id: "15-traction", index: "15", label: "Traction" },
  { id: "16-roadmap", index: "16", label: "Roadmap" },
  { id: "17-team", index: "17", label: "Team" },
  { id: "18-ask", index: "18", label: "The Ask" },
  { id: "19-close", index: "19", label: "Close" },
  { id: "appendix", index: "A", label: "Appendix" },
];

export const TOTAL_NUMBERED = 19; // NN / 19 excludes the appendix
