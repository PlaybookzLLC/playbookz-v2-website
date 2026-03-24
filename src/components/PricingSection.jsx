import { useState } from "react";
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
  },
};
const tiers = [
  {
    name: "Growth",
    tagline: "Perfect for founders starting their brand journey.",
    price: "997",
    features: [
      "3 Posts Per Week",
      "Dedicated Human Editor",
      "Custom Client Dashboard",
      "Deep Industry Research",
      "Async Communication",
      "Private Slack Channel",
      "No Long-Term Contracts",
    ],
    cta: "Get Started",
    highlighted: false,
  },
  {
    name: "Scale",
    tagline: "For founders ready to dominate their industry.",
    price: "1,997",
    prefix: "Everything in Growth, plus:",
    features: [
      "Custom Images for Posts",
      "Paid Content Amplification",
      "Automated Outbound Engine",
      "Lead Identification",
      "20k Reach Guarantee (30 days)",
      "100k Reach Guarantee (6 months)",
    ],
    cta: "Get Started",
    highlighted: true,
  },
];
/* --- Check Icon --- */
function CheckIcon({ accent = false }) {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
      <path d="M4 9.5L7.5 13L14 5" stroke={accent ? tokens.colors.accent : "rgba(255,255,255,0.3)"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
/* --- Pricing Card --- */
function PricingCard({ name, tagline, price, features, prefix, cta, highlighted }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: tokens.colors.cardDark,
        borderRadius: "5px",
        border: `1px solid ${highlighted ? "rgba(195,255,0,0.2)" : tokens.colors.cardDarkBorder}`,
        padding: "40px",
        flex: 1,
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.3)" : "none",
      }}
    >
      {/* Popular badge */}
      {highlighted && (
        <div style={{
          position: "absolute",
          top: "20px",
          right: "-32px",
          background: tokens.colors.accent,
          color: tokens.colors.textOnAccent,
          fontSize: "10px",
          fontWeight: 800,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          padding: "5px 40px",
          transform: "rotate(45deg)",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>Popular</div>
      )}
      {/* Tier name */}
      <div style={{
        fontSize: "13px",
        fontWeight: 700,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        color: highlighted ? tokens.colors.accent : tokens.colors.white,
        marginBottom: "8px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>{name} Tier</div>
      {/* Tagline */}
      <div style={{
        fontSize: "14px",
        color: tokens.colors.textOnDarkMuted,
        lineHeight: 1.5,
        marginBottom: "24px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>{tagline}</div>
      {/* Price */}
      <div style={{
        display: "flex",
        alignItems: "baseline",
        gap: "6px",
        marginBottom: "32px",
      }}>
        <span style={{
          fontSize: "56px",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          color: tokens.colors.white,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>${price}</span>
        <span style={{
          fontSize: "14px",
          fontWeight: 500,
          color: tokens.colors.textOnDarkMuted,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          textTransform: "uppercase",
          letterSpacing: "0.04em",
        }}>/ month</span>
      </div>
      {/* Divider */}
      <div style={{
        height: "1px",
        background: tokens.colors.cardDarkBorder,
        marginBottom: "24px",
      }} />
      {/* Features */}
      <div style={{ display: "flex", flexDirection: "column", gap: "14px", flex: 1 }}>
        {prefix && (
          <div style={{
            fontSize: "12px",
            fontWeight: 700,
            textTransform: "uppercase",
            letterSpacing: "0.04em",
            color: tokens.colors.accent,
            fontFamily: "'Plus Jakarta Sans', sans-serif",
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}>
            <CheckIcon accent />
            {prefix}
          </div>
        )}
        {features.map((f, i) => (
          <div key={i} style={{
            display: "flex",
            alignItems: "flex-start",
            gap: "10px",
          }}>
            <CheckIcon accent={highlighted} />
            <span style={{
              fontSize: "14px",
              fontWeight: 500,
              color: tokens.colors.textOnDarkMuted,
              lineHeight: 1.4,
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>{f}</span>
          </div>
        ))}
      </div>
      {/* CTA */}
      <button
        style={{
          marginTop: "36px",
          width: "100%",
          padding: "16px",
          borderRadius: "999px",
          fontSize: "14px",
          fontWeight: 700,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          cursor: "pointer",
          transition: "all 0.15s ease",
          background: highlighted ? tokens.colors.accent : "transparent",
          color: highlighted ? tokens.colors.textOnAccent : tokens.colors.white,
          border: highlighted ? "none" : `2px solid rgba(255,255,255,0.15)`,
        }}
      >{cta}</button>
    </div>
  );
}
/* --- Main Section --- */
export default function PricingSection() {
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.primary,
      position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .pricing-fade-1 { animation: fadeInUp 0.6s ease both; }
        .pricing-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.15s; }
        @media (max-width: 767px) {
          .pricing-section-inner { padding: 64px 24px !important; }
          .pricing-heading { font-size: 32px !important; }
          .pricing-grid { flex-direction: column !important; }
        }
      `}</style>
      <div className="pricing-section-inner" style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "96px 64px",
      }}>
        {/* --- Heading --- */}
        <div className="pricing-fade-1" style={{ textAlign: "center", marginBottom: "56px" }}>
          <h2 className="pricing-heading" style={{
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: tokens.colors.white,
            margin: "0 0 16px 0",
          }}>
            Simple, Transparent Pricing
          </h2>
          <p style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: tokens.colors.textOnDarkMuted,
            maxWidth: "440px",
            margin: "0 auto",
          }}>
            No long-term contracts. No hidden fees. Just results.
          </p>
        </div>
        {/* --- Pricing Cards --- */}
        <div className="pricing-fade-2 pricing-grid" style={{
          display: "flex",
          gap: "20px",
          alignItems: "stretch",
        }}>
          {tiers.map((tier, i) => (
            <PricingCard key={i} {...tier} />
          ))}
        </div>
        {/* --- Talk to a human --- */}
        <p className="pricing-fade-2" style={{
          textAlign: "center",
          marginTop: "32px",
          fontSize: "15px",
          color: tokens.colors.textOnDarkMuted,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>
          Not sure which plan is right? We'll help you figure it out.{" "}
          <a href="#" style={{
            color: tokens.colors.white,
            fontWeight: 500,
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            transition: "color 0.15s ease",
          }}>Click here to book a call</a>.
        </p>
      </div>
    </div>
  );
}
