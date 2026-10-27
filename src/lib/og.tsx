import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

/** Shared Open Graph card layout: paper background, mark, eyebrow, title. */
export function renderOgImage({ eyebrow, title, footer }: { eyebrow: string; title: string; footer: string }) {
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
          <svg width="72" height="72" viewBox="0 0 48 48">
            <rect width="48" height="48" rx="12" fill="#1d4a42" />
            <path d="M19.59 10.62A16 16 0 1 1 12.89 14.49" fill="none" stroke="#f5e6cb" strokeOpacity=".5" strokeWidth="1.3" strokeLinecap="round" />
            <path d="M13.7 19.6h3.6v12.8h-3.6z" fill="#f7f3ec" />
            <path d="M11.2 18h8.6v1.6c-1 0-1.9.2-2.5.6h-3.6c-.6-.4-1.5-.6-2.5-.6z" fill="#f7f3ec" />
            <path d="M11.2 34h8.6v-1.6c-1 0-1.9-.2-2.5-.6h-3.6c-.6.4-1.5.6-2.5.6z" fill="#f7f3ec" />
            <path d="M22.4 18h14.4v5.2h-1.2c-.3-1.7-1-2.7-2.6-2.7h-1.4v11.3h-3.6V20.5h-1.4c-1.6 0-2.3 1-2.6 2.7h-1.2z" fill="#f7f3ec" />
            <path d="M25.3 34h8.6v-1.6c-1 0-1.9-.2-2.5-.6h-3.6c-.6.4-1.5.6-2.5.6z" fill="#f7f3ec" />
            <path d="M15.5 7.4c2.4 2.7 3.2 4.7 3.2 6.3a3.2 3.2 0 0 1-6.4 0c0-1.6.8-3.6 3.2-6.3Z" fill="#e3a64b" />
            <path d="M15.5 11.2c.9 1.1 1.2 1.9 1.2 2.6a1.2 1.2 0 0 1-2.4 0c0-.7.3-1.5 1.2-2.6Z" fill="#fbe9c6" />
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
