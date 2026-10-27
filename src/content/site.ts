import type { License } from "./schema";

/**
 * Site-wide configuration. Values that differ per deployment come from
 * environment variables so nothing needs to be edited in code.
 */

const contactEmail = process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || null;
const notionFormUrl = process.env.NEXT_PUBLIC_NOTION_FORM_URL?.trim() || null;

export const site = {
  name: "IT Vidya",
  domain: "ITVidya.com",
  /** "IT" holds two meanings at once. */
  meaning: ["Inner Transformation", "Integral Thinking"] as const,
  meaningLine: "Inner Transformation · Integral Thinking",
  url: (process.env.NEXT_PUBLIC_SITE_URL || "https://itvidya.com").replace(/\/$/, ""),
  headline: "Understand Yourself. Understand Life. Think Integrally.",
  statement:
    "A lifelong learning space for inner transformation, integral thinking and the exploration of all aspects of life.",
  tagline: "Learn Deeply. Live Consciously. Contribute Meaningfully.",
  description:
    "IT Vidya — the learning of Inner Transformation and Integral Thinking. A lifelong learning commons exploring the self, relationships, nature, society and collective prosperity.",
  locale: "en_IN",
  /**
   * Contact channel. Leave NEXT_PUBLIC_CONTACT_EMAIL unset until a real,
   * monitored address exists — the site then shows a clearly labelled
   * placeholder instead of a fake address or a fake form submission.
   */
  contact: {
    email: contactEmail,
    placeholder: "Contact address to be announced",
    /**
     * Public share link of the "Contact Us" Notion Form (Notion database
     * "IT Vidya — Contact Us" → form view → Share form → anyone with the link).
     * Submissions land as rows in that Notion database.
     */
    notionFormUrl,
  },
  editorialTeam: "IT Vidya Editorial Team",
} as const;

/**
 * Default license for editorial content. IT Vidya intends to adopt an open
 * content licence once contributor agreements are in place; until then, no
 * Creative Commons designation is claimed.
 */
export const defaultLicense: License = {
  label: "© IT Vidya — all rights reserved (open licence under consideration)",
  summary:
    "You are welcome to read, link to and quote short passages with attribution. An open content licence is being considered and will be applied only once contributor permissions support it.",
};

export const aiDraftDisclosure =
  "This initial edition was drafted with AI assistance for the Version 1 launch and is awaiting human editorial and subject-matter review. Corrections and improvements are welcome.";

export const mainNav = [
  { href: "/explore", label: "Explore" },
  { href: "/journeys", label: "Learning Journeys" },
  { href: "/about", label: "About" },
  { href: "/contribute", label: "Contribute" },
] as const;

export const footerNav = [
  { href: "/about", label: "About" },
  { href: "/explore", label: "Explore" },
  { href: "/journeys", label: "Journeys" },
  { href: "/knowledge", label: "Knowledge Library" },
  { href: "/contribute", label: "Contribute" },
  { href: "/principles", label: "Principles" },
  { href: "/contact", label: "Contact" },
] as const;
