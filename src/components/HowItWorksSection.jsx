import { tokens } from "../design-system/tokens";

/* ── spiky "Watch me" badge as SVG ── */
function WatchMeBadge() {
  const size = 72;
  const cx = size / 2;
  const cy = size / 2;
  const outerR = 34;
  const innerR = 28;
  const spikes = 14;

  let points = "";
  for (let i = 0; i < spikes * 2; i++) {
    const angle = (Math.PI * i) / spikes - Math.PI / 2;
    const r = i % 2 === 0 ? outerR : innerR;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    points += `${x},${y} `;
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      style={{
        position: "absolute",
        top: "-12px",
        right: "-12px",
        zIndex: 2,
        filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))",
      }}
    >
      <polygon
        points={points.trim()}
        fill={tokens.colors.accent}
        stroke={tokens.colors.accent}
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <text
        x={cx}
        y={cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill={tokens.colors.textOnAccent}
        fontFamily={tokens.typography.headingFont}
        fontWeight="700"
        fontSize="11"
        letterSpacing="0.01em"
      >
        Watch me
      </text>
    </svg>
  );
}

/* ── checkmark badge icon (matches the reference's green seal checkmark) ── */
function CheckBadge() {
  return (
    <svg width="34" height="32" viewBox="0 0 29 27" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M26.55 10.77c-.33-.26-.87-.7-.94-.91-.07-.21.11-.91.22-1.32.26-1 .58-2.23-.14-3.21-.72-.97-2.01-1.05-3.05-1.12-.43-.03-1.15-.08-1.33-.21-.18-.13-.46-.8-.62-1.21-.41-1-.88-2.14-2.01-2.5-1.13-.37-2.16.26-3.07.83-.4.25-1 .63-1.25.63-.24 0-.84-.38-1.23-.64C12.25.57 11.15-.13 10 .26 8.87.64 8.41 1.77 8 2.76c-.16.4-.44 1.07-.62 1.21-.18.13-.92.18-1.36.21-1.09.07-2.33.16-3.03 1.13-.68.96-.38 2.14-.1 3.18.1.42.29 1.11.22 1.32-.07.2-.61.64-.93.9C1.37 11.38.35 12.2.35 13.44c0 1.23.99 2.05 1.79 2.7.35.28.87.71.94.93.07.21-.11.9-.22 1.3-.26 1-.59 2.25.13 3.24.73.96 2.01 1.04 3.05 1.11.43.03 1.15.07 1.33.21.18.13.46.8.62 1.21.41 1 .88 2.14 2.01 2.5.23.07.46.11.68.11.87 0 1.67-.5 2.4-.96.4-.25 1-.63 1.25-.63.25 0 .84.37 1.23.63.87.55 1.95 1.23 3.1.84 1.13-.38 1.59-1.51 2-2.51.16-.4.44-1.07.62-1.21.18-.13.91-.18 1.35-.21 1.09-.07 2.32-.16 3.03-1.12.71-.97.41-2.16.14-3.21-.11-.41-.28-1.1-.22-1.3.07-.2.61-.64.93-.9.81-.66 1.83-1.49 1.83-2.73 0-1.23-.99-2.03-1.8-2.67zm-1.5 3.64c-.68.55-1.38 1.12-1.65 1.94-.28.83-.05 1.73.17 2.59.11.42.29 1.13.26 1.27-.18.13-.9.18-1.34.21-.86.06-1.83.12-2.56.65-.72.52-1.07 1.37-1.4 2.19-.16.41-.44 1.08-.56 1.19-.21 0-.8-.37-1.15-.6-.73-.46-1.55-.98-2.48-.98-.92 0-1.75.52-2.49.98-.36.22-.96.6-1.08.63-.18-.13-.45-.8-.62-1.2-.34-.83-.69-1.69-1.42-2.21-.72-.51-1.64-.57-2.53-.63-.42-.03-1.2-.08-1.34-.17-.07-.2.11-.9.22-1.31.21-.82.46-1.74.18-2.59-.28-.84-1.01-1.45-1.66-1.98-.32-.26-.91-.75-.96-.93.05-.22.66-.71.99-.98.68-.55 1.38-1.12 1.65-1.94.28-.84.05-1.74-.17-2.61-.11-.42-.29-1.12-.26-1.26.18-.13.9-.18 1.33-.21.9-.06 1.84-.12 2.57-.65.72-.52 1.07-1.37 1.4-2.19.16-.41.44-1.08.55-1.19.21 0 .81.39 1.17.61.73.47 1.56.98 2.49.98.92 0 1.76-.52 2.49-.98.36-.22.95-.6 1.08-.63.18.13.45.8.62 1.2.34.83.69 1.69 1.42 2.21.72.52 1.64.57 2.53.63.44.03 1.18.08 1.31.16.07.2-.11.9-.22 1.31-.21.82-.46 1.75-.18 2.6.28.85 1.03 1.45 1.69 1.98.3.24.85.69.94.9-.08.22-.66.7-.98.96z"
        fill={tokens.colors.accent}
      />
      <path
        d="M19.53 9.13c-.49-.41-1.22-.34-1.63.14l-5.16 6.11-2.2-2.17a1.15 1.15 0 0 0-1.63 0 1.15 1.15 0 0 0 0 1.62l3.09 3.06c.22.22.51.34.82.34h.05c.33-.02.63-.17.84-.41l5.97-7.07c.41-.49.34-1.21-.15-1.62z"
        fill={tokens.colors.accent}
      />
    </svg>
  );
}

/* ── placeholder data for the 4 feature cards ── */
const features = [
  {
    id: 1,
    title: "Add Your Team",
    description: "Easily add multiple users to place and manage orders.",
  },
  {
    id: 2,
    title: "Easy Ordering",
    description: "Place orders easily, including one-click repeat ordering.",
  },
  {
    id: 3,
    title: "White Label",
    description: "All services are white label for easy reselling.",
  },
  {
    id: 4,
    title: "Scalable Prices",
    description:
      "We offer reliable low prices that are designed with resellers in mind.",
  },
];

/* ── main section ── */
export default function HowItWorksSection() {
  const t = tokens.typography.sizes;

  return (
    <section
      style={{
        background: tokens.colors.primary,
        padding: `${tokens.spacing.sectionY} 0`,
      }}
    >
      <style>{`
        .hiw-grid {
          display: flex;
          gap: 48px;
          align-items: center;
        }
        .hiw-col-left { flex: 1; min-width: 0; }
        .hiw-col-right { flex: 1; min-width: 0; }
        .hiw-features-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
        }
        .hiw-video-wrap {
          position: relative;
          border-radius: ${tokens.spacing.borderRadius.lg};
          overflow: visible;
        }
        .hiw-video-wrap iframe {
          width: 100%;
          aspect-ratio: 16 / 9;
          display: block;
          border-radius: ${tokens.spacing.borderRadius.lg};
          border: 1px solid ${tokens.colors.accent};
        }

        @media (max-width: 900px) {
          .hiw-grid {
            flex-direction: column;
            gap: 40px;
          }
          .hiw-features-grid {
            grid-template-columns: 1fr 1fr;
            gap: 28px;
          }
        }
        @media (max-width: 580px) {
          .hiw-features-grid {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: `0 ${tokens.spacing.sectionX}`,
        }}
      >
        {/* ── heading ── */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontFamily: t.displayLG.fontFamily || tokens.typography.headingFont,
              fontSize: t.displayLG.size,
              fontWeight: t.displayLG.weight,
              lineHeight: t.displayLG.lineHeight,
              letterSpacing: t.displayLG.tracking,
              color: tokens.colors.textOnDark,
              margin: 0,
            }}
          >
            How it works
          </h2>
          <p
            style={{
              fontFamily: tokens.typography.bodyFont,
              fontSize: t.bodySM.size,
              lineHeight: t.bodySM.lineHeight,
              color: tokens.colors.textOnDarkMuted,
              marginTop: "16px",
              maxWidth: "600px",
              marginLeft: "auto",
              marginRight: "auto",
            }}
          >
            A proven, battle-tested process that is 100% set-and-forget on your
            end.
          </p>
        </div>

        {/* ── two-column layout ── */}
        <div className="hiw-grid">
          {/* left: video with badge */}
          <div className="hiw-col-left">
            <div className="hiw-video-wrap">
              <WatchMeBadge />
              <iframe
                src="https://www.loom.com/embed/7cd848c6627443b2bd020934b983284d"
                title="How it works walkthrough video"
                allowFullScreen
                allow="autoplay; fullscreen"
                frameBorder="0"
              />
            </div>
          </div>

          {/* right: 2×2 feature grid */}
          <div className="hiw-col-right">
            <div className="hiw-features-grid">
              {features.map((f) => (
                <div key={f.id}>
                  <div style={{ marginBottom: "12px" }}>
                    <CheckBadge />
                  </div>
                  <h3
                    style={{
                      fontFamily: tokens.typography.headingFont,
                      fontSize: t.headingMD.size,
                      fontWeight: t.headingMD.weight,
                      lineHeight: t.headingMD.lineHeight,
                      letterSpacing: t.headingMD.tracking,
                      color: tokens.colors.textOnDark,
                      margin: "0 0 8px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: tokens.typography.bodyFont,
                      fontSize: t.bodyMD.size,
                      lineHeight: t.bodyMD.lineHeight,
                      color: tokens.colors.textOnDarkMuted,
                      margin: 0,
                    }}
                  >
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
