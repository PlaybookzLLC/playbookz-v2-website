import { tokens } from "../design-system/tokens";

const columns = [
  { key: "playbookz", label: "Playbookz", highlight: true },
  { key: "inhouse", label: "In-House" },
  { key: "ghostwriter", label: "Ghostwriter" },
  { key: "agency", label: "Other Agencies" },
];
const rows = [
  {
    label: "Monthly Cost",
    playbookz: "$1,450 – $2,450",
    inhouse: "$0 (but 8+ hrs/week)",
    ghostwriter: "$2,000 – $5,000",
    agency: "$3,000 – $10,000+",
  },
  {
    label: "Done For You",
    playbookz: true,
    inhouse: false,
    ghostwriter: "Partially",
    agency: true,
  },
  {
    label: "Dedicated Editor",
    playbookz: true,
    inhouse: false,
    ghostwriter: true,
    agency: "Varies",
  },
  {
    label: "Proven Viral Frameworks",
    playbookz: true,
    inhouse: false,
    ghostwriter: false,
    agency: false,
  },
  {
    label: "Paid Amplification",
    playbookz: "Scale tier",
    inhouse: false,
    ghostwriter: false,
    agency: "Rare",
  },
  {
    label: "Automated Outbound",
    playbookz: "Scale tier",
    inhouse: false,
    ghostwriter: false,
    agency: false,
  },
  {
    label: "Custom Dashboard",
    playbookz: true,
    inhouse: false,
    ghostwriter: false,
    agency: "Sometimes",
  },
  {
    label: "Reach Guarantee",
    playbookz: true,
    inhouse: false,
    ghostwriter: false,
    agency: false,
  },
  {
    label: "Time Commitment",
    playbookz: "~30 min/week",
    inhouse: "8+ hrs/week",
    ghostwriter: "2–10 hrs/week",
    agency: "2–5 hrs/week",
  },
  {
    label: "Long-Term Contract",
    playbookz: false,
    inhouse: false,
    ghostwriter: "Often",
    agency: "Usually",
  },
];
/* ─── Cell Value ─── */
function CellValue({ value, isHighlightCol }) {
  if (value === true) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: "24px", height: "24px", borderRadius: "50%",
          background: isHighlightCol ? tokens.colors.accent : "rgba(195,255,0,0.2)",
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M3 7.5L5.5 10L11 4" stroke={isHighlightCol ? tokens.colors.textOnAccent : "#15141A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{
          width: "24px", height: "24px", borderRadius: "50%",
          background: tokens.colors.offWhite,
          display: "flex", alignItems: "center", justifyContent: "center",
        }}>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M3 3L9 9M9 3L3 9" stroke={tokens.colors.grayMid} strokeWidth="2" strokeLinecap="round" />
          </svg>
        </div>
      </div>
    );
  }
  return (
    <div style={{
      fontSize: "13px",
      fontWeight: 500,
      color: isHighlightCol ? tokens.colors.textOnDark : tokens.colors.textOnLight,
      textAlign: "center",
      lineHeight: 1.4,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>{value}</div>
  );
}
/* ─── Mobile Cell Value ─── */
function MobileCellValue({ value, highlight = false }) {
  if (value === true) {
    return (
      <div style={{
        width: "22px", height: "22px", borderRadius: "50%",
        background: highlight ? tokens.colors.accent : "rgba(195,255,0,0.2)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
          <path d="M3 7.5L5.5 10L11 4" stroke={highlight ? tokens.colors.textOnAccent : "#15141A"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  if (value === false) {
    return (
      <div style={{
        width: "22px", height: "22px", borderRadius: "50%",
        background: tokens.colors.grayLight,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
          <path d="M3 3L9 9M9 3L3 9" stroke={tokens.colors.grayMid} strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
    );
  }
  const displayValue = highlight && value === "Scale tier" ? "On Scale tier" : value;
  const isScaleTier = highlight && value === "Scale tier";
  if (isScaleTier) {
    return (
      <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
        <div style={{
          width: "18px", height: "18px", borderRadius: "50%",
          background: tokens.colors.accent,
          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
        }}>
          <svg width="10" height="10" viewBox="0 0 14 14" fill="none">
            <path d="M3 7.5L5.5 10L11 4" stroke={tokens.colors.textOnAccent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <span style={{
          fontSize: "12px", fontWeight: 700, color: tokens.colors.primary,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>{displayValue}</span>
      </div>
    );
  }
  return (
    <span style={{
      fontSize: "12px", fontWeight: highlight ? 700 : 600,
      color: highlight ? tokens.colors.primary : tokens.colors.textOnLight,
      fontFamily: "'Plus Jakarta Sans', sans-serif",
    }}>{displayValue}</span>
  );
}
export default function ComparisonSection() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.white,
      position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .comp-fade-1 { animation: fadeInUp 0.6s ease both; }
        .comp-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.15s; }
        .comp-mobile { display: none; }
        @media (max-width: 767px) {
          .comp-section-inner { padding: 64px 24px !important; }
          .comp-heading { font-size: 28px !important; }
          .comp-desktop { display: none !important; }
          .comp-mobile { display: block !important; }
          .guarantee-heading { font-size: 28px !important; }
          .guarantee-card { padding: 32px 24px !important; }
          .guarantee-inner { flex-direction: column !important; gap: 24px !important; }
          .guarantee-divider { display: none !important; }
        }
      `}</style>
      <div className="comp-section-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "96px 64px",
      }}>
        {/* ─── Heading ─── */}
        <div className="comp-fade-1" style={{ textAlign: "center", marginBottom: "56px" }}>
          <div style={{
            fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em",
            color: tokens.colors.grayMid, marginBottom: "12px",
          }}>WHY PLAYBOOKZ</div>
          <h2 className="comp-heading" style={{
            fontSize: "36px", fontWeight: 700, lineHeight: 1.15, letterSpacing: "-0.02em",
            color: tokens.colors.textOnLight, margin: "0 auto", maxWidth: "700px",
          }}>
            How Do We Stack Up?
          </h2>
          <p style={{
            fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnLightMuted,
            marginTop: "16px", maxWidth: "500px", margin: "16px auto 0",
          }}>
            A premium agency at a fraction of the price (and you won't have to babysit us like a freelancer).
          </p>
        </div>
        {/* ─── Desktop Table ─── */}
        <div className="comp-fade-2 comp-desktop">
          <div>
            {/* Column Headers */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 1fr 1fr 1fr",
              gap: "0",
              marginBottom: "4px",
            }}>
              {/* Empty corner */}
              <div />
              {columns.map((col) => (
                <div key={col.key} style={{
                  textAlign: "center",
                  padding: "16px 12px 20px",
                  borderRadius: col.highlight ? "5px 5px 0 0" : "0",
                  background: col.highlight ? tokens.colors.primary : "transparent",
                }}>
                  {col.highlight && (
                    <div style={{
                      fontSize: "10px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em",
                      color: tokens.colors.accent, marginBottom: "6px", fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>Recommended</div>
                  )}
                  <div style={{
                    fontSize: "15px",
                    fontWeight: 700,
                    color: col.highlight ? tokens.colors.white : tokens.colors.textOnLight,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>{col.label}</div>
                </div>
              ))}
            </div>
            {/* Rows */}
            {rows.map((row, i) => (
              <div key={i} style={{
                display: "grid",
                gridTemplateColumns: "200px 1fr 1fr 1fr 1fr",
                gap: "0",
                borderTop: `1px solid ${tokens.colors.grayLight}`,
              }}>
                {/* Row label */}
                <div style={{
                  padding: "18px 16px 18px 0",
                  fontSize: "14px",
                  fontWeight: 600,
                  color: tokens.colors.textOnLight,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                  display: "flex",
                  alignItems: "center",
                }}>{row.label}</div>
                {/* Values */}
                {columns.map((col) => (
                  <div key={col.key} style={{
                    padding: "18px 12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: col.highlight ? tokens.colors.primary : "transparent",
                  }}>
                    <CellValue value={row[col.key]} isHighlightCol={col.highlight} />
                  </div>
                ))}
              </div>
            ))}
            {/* Bottom accent bar for highlight column */}
            <div style={{
              display: "grid",
              gridTemplateColumns: "200px 1fr 1fr 1fr 1fr",
              gap: "0",
            }}>
              <div />
              <div style={{
                height: "4px", borderRadius: "0 0 5px 5px",
                background: tokens.colors.accent,
              }} />
              <div /><div /><div />
            </div>
          </div>
        </div>
        {/* ─── Mobile Cards ─── */}
        <div className="comp-fade-2 comp-mobile">
          {rows.map((row, i) => (
            <div key={i} style={{
              borderRadius: "5px",
              overflow: "hidden",
              marginBottom: "12px",
            }}>
              {/* Feature name — dark header */}
              <div style={{
                background: tokens.colors.primary,
                padding: "16px 20px",
              }}>
                <span style={{
                  fontSize: "14px", fontWeight: 600, color: tokens.colors.white,
                  fontFamily: "'Plus Jakarta Sans', sans-serif",
                }}>{row.label}</span>
              </div>
              {/* All providers — gray body */}
              <div style={{
                background: tokens.colors.offWhite,
                padding: "12px 20px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}>
                {/* Playbookz — top row, accented */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  paddingBottom: "10px",
                  borderBottom: `1px solid ${tokens.colors.grayLight}`,
                }}>
                  <span style={{
                    fontSize: "14px", fontWeight: 700, color: tokens.colors.primary,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>Playbookz</span>
                  <MobileCellValue value={row.playbookz} highlight />
                </div>
                {/* Other 3 competitors */}
                {columns.filter(c => !c.highlight).map((col) => (
                  <div key={col.key} style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}>
                    <span style={{
                      fontSize: "13px", fontWeight: 500, color: tokens.colors.textOnLightMuted,
                      fontFamily: "'Plus Jakarta Sans', sans-serif",
                    }}>{col.label}</span>
                    <MobileCellValue value={row[col.key]} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* ─── Guarantee Card ─── */}
        <div className="comp-fade-2" style={{ position: "relative", paddingBottom: "24px", marginTop: "64px" }}>
          <div className="guarantee-card guarantee-inner" style={{
            background: tokens.colors.primary,
            borderRadius: "5px",
            padding: "48px",
            display: "flex",
            gap: "48px",
            alignItems: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
              backgroundSize: "40px 40px", pointerEvents: "none",
            }} />
            <div style={{ flex: "0 0 auto", position: "relative", zIndex: 1 }}>
              <div style={{
                fontSize: "13px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em",
                color: tokens.colors.accent, marginBottom: "8px",
              }}>Completely risk free</div>
              <div className="guarantee-heading" style={{
                fontSize: "36px", fontWeight: 800, lineHeight: 1.15, letterSpacing: "-0.02em",
                color: "#FFFFFF", maxWidth: "320px",
              }}>100% Money Back Guarantee</div>
            </div>
            <div className="guarantee-divider" style={{
              width: "1px", height: "100px", background: "rgba(255,255,255,0.1)", flexShrink: 0,
            }} />
            <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
              <p style={{
                fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnLightMuted,
                margin: "0 0 16px 0", maxWidth: "540px",
              }}>
                We believe in our service so much that we make your investment{" "}
                <span style={{ color: "#FFFFFF", fontStyle: "italic", fontWeight: 500 }}>completely risk-free.</span>
              </p>
              <p style={{
                fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnLightMuted,
                margin: 0, maxWidth: "540px",
              }}>
                20k reach in your first 30 days or your money back. 100k reach in 6 months or we work for free until we hit it. Simple as that.
              </p>
            </div>
          </div>
          {/* Trust strip */}
          <div style={{
            position: "absolute",
            bottom: "4px",
            left: "50%",
            transform: "translateX(-50%)",
            background: "#FFFFFF",
            borderRadius: "999px",
            padding: "10px 28px",
            display: "flex",
            alignItems: "center",
            gap: "16px",
            boxShadow: "0 2px 12px rgba(0,0,0,0.1)",
            whiteSpace: "nowrap",
            zIndex: 5,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{ fontSize: "13px", fontWeight: 700, color: "#15141A" }}>Rated 4.9/5</span>
            <div style={{ display: "flex", gap: "2px" }}>
              {[1,2,3,4,5].map(i => (
                <span key={i} style={{ fontSize: "14px", color: "#E8880A", lineHeight: 1 }}>★</span>
              ))}
            </div>
            <span style={{ fontSize: "13px", color: "#6B6B6F" }}>Trusted by <span style={{ fontWeight: 700, color: "#15141A" }}>100+ founders</span></span>
          </div>
        </div>
      </div>
    </div>
  );
}
