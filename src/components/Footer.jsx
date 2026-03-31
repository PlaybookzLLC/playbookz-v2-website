import { useState } from "react";
import { createPortal } from "react-dom";
import DemoModal from "./DemoModal";

export default function Footer() {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [showTerms, setShowTerms] = useState(false);
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
                <a href="#pricing" className="footer-link" style={linkStyle}>Pricing</a>
                <a href="#results" className="footer-link" style={linkStyle}>Case Studies</a>
                <a href="#" onClick={(e) => { e.preventDefault(); setShowDemoModal(true); }} className="footer-link" style={linkStyle}>Contact</a>
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
                <a href="#" onClick={(e) => { e.preventDefault(); setShowTerms(true); }} className="footer-link" style={linkStyle}>Terms of Service</a>
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
      {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
      {showTerms && createPortal(
        <div
          onClick={() => setShowTerms(false)}
          style={{
            position: "fixed", inset: 0, zIndex: 9999,
            background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
            display: "flex", alignItems: "center", justifyContent: "center",
            padding: "24px",
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "#fff", borderRadius: "16px",
              width: "90%", maxWidth: "680px", maxHeight: "85vh",
              overflow: "auto", position: "relative",
              padding: "40px",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
              color: "#15141A",
            }}
          >
            <button
              onClick={() => setShowTerms(false)}
              style={{
                position: "absolute", top: "16px", right: "16px",
                background: "none", border: "none", cursor: "pointer",
                fontSize: "24px", color: "#6B6B6F", lineHeight: 1,
              }}
            >&times;</button>
            <h2 style={{ fontSize: "24px", fontWeight: 800, margin: "0 0 4px 0" }}>Terms of Service</h2>
            <p style={{ fontSize: "13px", color: "#6B6B6F", margin: "0 0 24px 0" }}>Last updated: March 31, 2026</p>
            {[
              { title: "1. Overview", body: "These Terms of Service govern your use of the Playbookz website (playbookz.com). By accessing or using this site, you agree to be bound by these terms." },
              { title: "2. Services", body: "Playbookz provides LinkedIn personal branding services. Information on this website is for general informational purposes and does not constitute a binding offer. All service engagements are governed by separate client agreements." },
              { title: "3. No Guarantees of Results", body: "While we share real client results and case studies on this site, past performance does not guarantee future results. Individual outcomes vary based on factors including industry, audience, content, and engagement." },
              { title: "4. Intellectual Property", body: "All content on this website, including text, graphics, logos, and design, is the property of Playbookz and may not be reproduced, distributed, or used without written permission." },
              { title: "5. User Conduct", body: "You agree not to misuse this website, attempt to gain unauthorized access to any part of the site, or use the site for any unlawful purpose." },
              { title: "6. Third-Party Links", body: "This site may contain links to third-party websites. Playbookz is not responsible for the content or practices of any linked sites." },
              { title: "7. Limitation of Liability", body: "Playbookz is not liable for any indirect, incidental, or consequential damages arising from your use of this website." },
              { title: "8. Changes to Terms", body: "We reserve the right to update these terms at any time. Continued use of the site after changes constitutes acceptance of the revised terms." },
              { title: "9. Contact", body: "Playbookz, 611 South DuPont Highway, Dover, DE 19901" },
            ].map((section, i) => (
              <div key={i} style={{ marginBottom: "20px" }}>
                <h3 style={{ fontSize: "16px", fontWeight: 700, margin: "0 0 6px 0" }}>{section.title}</h3>
                <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#6B6B6F", margin: 0 }}>{section.body}</p>
              </div>
            ))}
          </div>
        </div>,
        document.body
      )}
    </footer>
  );
}
