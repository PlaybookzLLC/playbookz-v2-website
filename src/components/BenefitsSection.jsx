const tokens = {
  colors: {
    primary: "#15141A",
    primaryLight: "#1E1D24",
    primaryMuted: "#2A2930",
    accent: "#C3FF00",
    accentHover: "#D4FF33",
    white: "#FFFFFF",
    offWhite: "#F5F5F7",
    grayLight: "#E5E5E7",
    grayMid: "#8A8A8E",
    grayDark: "#6B6B6F",
    textOnLight: "#15141A",
    textOnLightMuted: "#6B6B6F",
    textOnDark: "#FFFFFF",
    textOnDarkMuted: "#A0A0A5",
    textOnAccent: "#15141A",
    cardDark: "#1E1D24",
    cardDarkBorder: "rgba(255,255,255,0.08)",
    cardLightBorder: "rgba(0,0,0,0.08)",
  },
};
/* ─── Main Section ─── */
export default function BenefitsSection() {
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: tokens.colors.offWhite,
        position: "relative",
      }}
    >
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .benefits-fade-1 { animation: fadeInUp 0.6s ease both; }
        .benefits-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.15s; }
        @media (max-width: 639px) {
          .benefits-section-inner { padding: 64px 24px !important; }
          .benefits-heading { font-size: 28px !important; }
          .guarantee-heading { font-size: 28px !important; }
          .guarantee-card { padding: 32px 24px !important; }
          .guarantee-inner { flex-direction: column !important; gap: 24px !important; }
          .guarantee-divider { display: none !important; }
        }
      `}</style>
      <div className="benefits-section-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "96px 64px",
      }}>
        {/* ─── Guarantee Card ─── */}
        <div className="benefits-fade-2" style={{ position: "relative", paddingBottom: "24px" }}>
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
                color: tokens.colors.white, maxWidth: "320px",
              }}>100% Money Back Guarantee</div>
            </div>
            <div className="guarantee-divider" style={{
              width: "1px", height: "100px", background: "rgba(255,255,255,0.1)", flexShrink: 0,
            }} />
            <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
              <p style={{
                fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnDarkMuted,
                margin: "0 0 16px 0", maxWidth: "540px",
              }}>
                We believe in our service so much that we make your investment{" "}
                <span style={{ color: tokens.colors.white, fontStyle: "italic", fontWeight: 500 }}>completely risk-free.</span>
              </p>
              <p style={{
                fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnDarkMuted,
                margin: 0, maxWidth: "540px",
              }}>
                20k reach in your first 30 days or your money back. 100k reach in 6 months or we work for free until we hit it. Simple as that.
              </p>
            </div>
          </div>
          {/* Trust strip — overlaid on bottom edge of guarantee card */}
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
