import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card layout: paper background, mark, eyebrow, title. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
  const dots = Array.from({ length: 8 }, (_, i) => {
    const a = ((-90 + i * 45) * Math.PI) / 180;
    return { x: 16 + 11 * Math.cos(a), y: 16 + 11 * Math.sin(a) };
  });
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f7f3ec",
          padding: "72px 80px",
          color: "#1b2422",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            right: -120,
            top: -120,
            width: 520,
            height: 520,
            borderRadius: 9999,
            border: "2px solid #dbe7e1",
            display: "flex",
          }}
        />
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <svg width="64" height="64" viewBox="0 0 32 32">
            <circle cx="16" cy="16" r="11" fill="none" stroke="#1d4a42" strokeWidth="1.25" />
            {dots.map((d, i) => (
              <circle key={i} cx={d.x} cy={d.y} r="2" fill="#1d4a42" />
            ))}
            <circle cx="16" cy="16" r="4" fill="#c98a2e" />
          </svg>
          <div style={{ fontSize: 40, fontWeight: 700, display: "flex", gap: 10 }}>
            <span>IT</span>
            <span style={{ color: "#1d4a42" }}>Vidya</span>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 26, letterSpacing: 4, textTransform: "uppercase", color: "#2a6f66", fontWeight: 600 }}>
            {eyebrow}
          </div>
          <div style={{ fontSize: title.length > 60 ? 60 : 72, lineHeight: 1.08, marginTop: 20, fontWeight: 600, maxWidth: 1000 }}>
            {title}
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#5a6461", borderTop: "2px solid #ddd3c3", paddingTop: 24 }}>
          {footer}
        </div>
      </div>
    ),
    ogSize,
  );
}
