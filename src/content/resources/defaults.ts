import { aiDraftDisclosure, site } from "../site";
import type { Resource } from "../schema";

/** Shared editorial metadata for the Version 1 sample resources. */
export const initialEdition = {
  author: { name: site.editorialTeam, role: "Initial edition" },
  status: "published",
  published: "2026-10-27",
  review: {
    stage: "editorial-draft",
    lastReviewed: "2026-10-27",
    note: "Initial edition. Not yet reviewed by external subject-matter experts.",
  },
  aiAssistance: aiDraftDisclosure,
} satisfies Pick<Resource, "author" | "status" | "published" | "review" | "aiAssistance">;

export const mentalHealthCare =
  "This resource is educational and reflective. It is not therapy, diagnosis or medical advice. If you are experiencing persistent distress, please reach out to a qualified professional or a trusted person in your life.";
