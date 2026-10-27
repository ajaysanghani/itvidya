import { buildSearchIndex } from "@/lib/content";

// Generated once at build time; fetched lazily by the Explore search.
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildSearchIndex());
}
