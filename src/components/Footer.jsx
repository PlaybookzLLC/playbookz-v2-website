export default function Footer() {
  const tokens = {
    colors: {
      primary: "#15141A",
      primaryLight: "#1E1D24",
      accent: "#C3FF00",
      white: "#FFFFFF",
      textOnDarkMuted: "#A0A0A5",
      cardDarkBorder: "rgba(255,255,255,0.08)",
    },
  };
  const linkStyle = {
    fontSize: "14px",
    fontWeight: 500,
    color: tokens.colors.textOnDarkMuted,
    textDecoration: "none",
    transition: "color 0.15s ease",
    fontFamily: "'Plus Jakarta Sans', sans-serif",
    cursor: "pointer",
  };
  return (
    <footer style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.primary,
      borderTop: `1px solid ${tokens.colors.cardDarkBorder}`,
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        .footer-link:hover { color: #FFFFFF !important; }
        @media (max-width: 767px) {
          .footer-inner { padding: 48px 24px !important; }
          .footer-grid { flex-direction: column !important; gap: 40px !important; }
        }
      `}</style>
      <div className="footer-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "56px 64px 48px",
      }}>
        {/* ─── Main Row ─── */}
        <div className="footer-grid" style={{
          display: "flex",
          gap: "64px",
          marginBottom: "40px",
        }}>
          {/* Logo + Address */}
          <div style={{ flex: "0 0 auto", maxWidth: "260px" }}>
            <div style={{
              fontSize: "22px",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: tokens.colors.white,
              marginBottom: "16px",
            }}>
              playbook<span style={{ color: tokens.colors.accent }}>z</span>
            </div>
            <div style={{
              fontSize: "14px",
              lineHeight: 1.6,
              color: tokens.colors.textOnDarkMuted,
            }}>
              611 South DuPont Highway<br />
              Dover, DE 19901
            </div>
          </div>
          {/* Links columns */}
          <div style={{ display: "flex", gap: "64px", flex: 1 }}>
            {/* Company */}
            <div>
              <div style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: tokens.colors.white,
                marginBottom: "16px",
              }}>Company</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="#" className="footer-link" style={linkStyle}>Pricing</a>
                <a href="#" className="footer-link" style={linkStyle}>Case Studies</a>
                <a href="#" className="footer-link" style={linkStyle}>Contact</a>
              </div>
            </div>
            {/* Legal */}
            <div>
              <div style={{
                fontSize: "12px",
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
                color: tokens.colors.white,
                marginBottom: "16px",
              }}>Legal</div>
              <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                <a href="#" className="footer-link" style={linkStyle}>Terms of Service</a>
                <a href="#" className="footer-link" style={linkStyle}>Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
        {/* ─── Bottom Bar ─── */}
        <div style={{
          borderTop: `1px solid ${tokens.colors.cardDarkBorder}`,
          paddingTop: "24px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}>
          <div style={{
            fontSize: "13px",
            color: tokens.colors.textOnDarkMuted,
          }}>
            © {new Date().getFullYear()} Playbookz. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
