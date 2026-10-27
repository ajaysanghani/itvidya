#!/usr/bin/env node
/**
 * Crawls a running IT Vidya site and verifies that every internal link
 * resolves (HTTP 200) and that every in-page #anchor target exists.
 *
 * Usage:
 *   npm run build && npm run start        # in one terminal
 *   npm run check:links                   # defaults to http://localhost:3000
 *   BASE_URL=http://localhost:3100 npm run check:links
 */

const BASE = (process.env.BASE_URL || "http://localhost:3000").replace(/\/$/, "");

const queue = ["/", "/sitemap.xml", "/robots.txt"];
const seen = new Set();
const pages = new Map(); // path -> { ids:Set, links:[{href, from}] }
const failures = [];

function extract(html) {
  const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  const links = [...html.matchAll(/\shref="([^"]+)"/g)].map((m) => m[1].replace(/&amp;/g, "&"));
  return { ids, links };
}

function normalise(href, from) {
  if (/^(mailto:|tel:|javascript:|data:)/.test(href)) return null;
  const url = new URL(href, BASE + from);
  if (url.origin !== new URL(BASE).origin) return null;
  return { path: url.pathname, hash: url.hash.slice(1), full: url.pathname + url.search };
}

while (queue.length) {
  const path = queue.shift();
  if (seen.has(path)) continue;
  seen.add(path);
  const res = await fetch(BASE + path, { redirect: "manual" });
  if (res.status !== 200) {
    failures.push(`${res.status} ${path}`);
    continue;
  }
  const type = res.headers.get("content-type") || "";
  const body = await res.text();
  if (path === "/sitemap.xml") {
    for (const m of body.matchAll(/<loc>([^<]+)<\/loc>/g)) {
      const p = new URL(m[1]).pathname;
      if (!seen.has(p)) queue.push(p);
    }
    continue;
  }
  if (!type.includes("text/html")) continue;
  const { ids, links } = extract(body);
  pages.set(path, { ids, links });
  for (const href of links) {
    const n = normalise(href, path);
    if (!n) continue;
    if (n.path.startsWith("/_next/")) continue;
    if (!seen.has(n.path)) queue.push(n.path);
  }
}

// Verify anchors once every page has been loaded.
for (const [from, { links }] of pages) {
  for (const href of links) {
    const n = normalise(href, from);
    if (!n || !n.hash || n.path.startsWith("/_next/")) continue;
    const target = pages.get(n.path);
    // Journey step anchors (#step-N, #completion) are rendered by the step navigator.
    if (target && !target.ids.has(n.hash)) failures.push(`missing #${n.hash} on ${n.path} (linked from ${from})`);
  }
}

const unique = [...new Set(failures)];
console.log(`Checked ${seen.size} URLs (${pages.size} HTML pages) at ${BASE}`);
if (unique.length) {
  console.error(`\n${unique.length} problem(s):\n  ${unique.join("\n  ")}`);
  process.exit(1);
}
console.log("All internal links and anchors resolve.");
