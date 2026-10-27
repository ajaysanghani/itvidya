import type { NextConfig } from "next";

// Set STATIC_EXPORT=true to emit a fully static `out/` folder that can be
// hosted on any static file host (see README).
const staticExport = process.env.STATIC_EXPORT === "true";

const nextConfig: NextConfig = {
  output: staticExport ? "export" : undefined,
  trailingSlash: false,
  poweredByHeader: false,
  images: {
    // The site ships original SVG illustrations only. Unoptimized images keep
    // static export working if raster images are added later.
    unoptimized: staticExport,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
