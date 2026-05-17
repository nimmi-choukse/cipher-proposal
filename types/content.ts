export type ProposalSectionId =
  | "hero"
  | "introduction"
  | "objectives"
  | "scope"
  | "methodology"
  | "timeline"
  | "deliverables"
  | "investment"
  | "contact";

export type ProposalSection = {
  id: ProposalSectionId;
  title: string;
};
