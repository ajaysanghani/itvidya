export interface Principle {
  id: string;
  title: string;
  statement: string;
  practice: string[];
}

export const principles: Principle[] = [
  {
    id: "respectful-inquiry",
    title: "Respectful inquiry",
    statement:
      "We approach every question — and every person — with curiosity and respect. Inquiry means being willing to learn, to be questioned and to change our minds.",
    practice: [
      "Disagreement is welcome; contempt, ridicule and personal attacks are not.",
      "We describe views we disagree with in terms their holders would recognise.",
      "We prefer questions that open understanding over arguments that seek only to win.",
    ],
  },
  {
    id: "source-transparency",
    title: "Source transparency",
    statement:
      "Readers should be able to tell what a claim rests on. We distinguish established evidence, interpretation, philosophical perspective, open questions and reflective practice.",
    practice: [
      "Resource sections carry labels showing what kind of claim they make.",
      "We do not present philosophical or spiritual claims as scientifically proven.",
      "We never invent quotations, studies, statistics or citations.",
      "Further-reading lists are offered as starting points, not as proof of every statement.",
    ],
  },
  {
    id: "attribution",
    title: "Attribution",
    statement:
      "Ideas have origins. We credit the thinkers, traditions, communities and contributors whose work we draw on, and we name who wrote and reviewed each resource.",
    practice: [
      "Every resource shows its author or editorial attribution.",
      "Traditions and thinkers are named when their ideas are presented.",
      "Contributors are credited by name, unless they ask to remain anonymous.",
    ],
  },
  {
    id: "licensing",
    title: "Copyright and licensing",
    statement:
      "We respect the rights of creators and are honest about how our own content may be used. We do not label content as openly licensed unless the necessary permissions are actually in place.",
    practice: [
      "At present, IT Vidya content is © IT Vidya, all rights reserved. You may read it, link to it and quote short passages with attribution.",
      "We intend to consider an open content licence (such as a Creative Commons licence) once contributor agreements make that possible. Until then, no such licence is claimed.",
      "Contributors must only submit work they have the right to share, and must identify any third-party material.",
      "Each resource shows the licence that applies to it.",
    ],
  },
  {
    id: "correction",
    title: "Correction and revision",
    statement:
      "Knowledge improves through correction. We welcome reports of errors and unfair summaries, and we revise content openly.",
    practice: [
      "Every resource includes a way to suggest a correction.",
      "Resources show their review status and when they were last revised.",
      "Significant corrections will be noted on the resource once a revision history is in place.",
    ],
  },
  {
    id: "diversity",
    title: "Diversity of perspectives",
    statement:
      "No single tradition, discipline or culture holds all wisdom. IT Vidya draws on Indian and world traditions, the sciences and lived experience — and does not claim to represent one universally accepted worldview.",
    practice: [
      "On contested topics we present meaningful alternative views fairly.",
      "We actively seek contributors from different backgrounds, regions, disciplines and traditions.",
      "We avoid ranking traditions or reducing them to slogans.",
    ],
  },
  {
    id: "privacy",
    title: "Privacy",
    statement:
      "Learning should not require surveillance. Version 1 of IT Vidya has no accounts, no tracking of individual learners and no forms that send personal data to a server.",
    practice: [
      "Journey progress, if you mark it, is stored only in your own browser.",
      "We collect only the information people choose to send us directly, and use it only for the purpose it was sent.",
      "Any future analytics or data collection will be disclosed here before it is introduced.",
    ],
  },
  {
    id: "contributor-recognition",
    title: "Contributor recognition",
    statement:
      "A commons is built by many hands. We recognise the people who write, review, correct, translate and facilitate.",
    practice: [
      "Authors and reviewers are named on the resources they shaped.",
      "Smaller contributions, such as corrections, will be acknowledged collectively.",
      "Recognition never depends on the contributor's credentials or institutional status alone.",
    ],
  },
  {
    id: "responsible-ai",
    title: "Responsible AI assistance",
    statement:
      "AI tools can help draft, summarise and check — but they can also invent facts and flatten nuance. We use them with care and disclose their use.",
    practice: [
      "Resources drafted with AI assistance say so, and remain marked as awaiting human review until reviewed.",
      "AI output is never treated as a source. Claims must be checked against reliable evidence by people.",
      "Contributors must disclose significant AI assistance in their submissions.",
      "The initial Version 1 resources were drafted with AI assistance and are labelled accordingly.",
    ],
  },
  {
    id: "editorial-independence",
    title: "Editorial independence",
    statement:
      "Editorial decisions are made on the basis of accuracy, clarity, fairness and usefulness to learners — not commercial, political or institutional pressure.",
    practice: [
      "IT Vidya content does not promote products, services, parties or organisations.",
      "Any future sponsorship or partnership will be disclosed and will not influence content.",
      "Contributors must disclose relevant conflicts of interest.",
    ],
  },
];
