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
    textOnDark: "#FFFFFF",
    textOnDarkMuted: "#A0A0A5",
    textOnAccent: "#15141A",
    cardDark: "#1E1D24",
    cardDarkBorder: "rgba(255,255,255,0.08)",
  },
  shadows: {
    cardLight: "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
    cardHover: "0 4px 12px rgba(0,0,0,0.08), 0 16px 40px rgba(0,0,0,0.06)",
  },
};
const LOOM_URL = "https://www.loom.com/share/7cd848c6627443b2bd020934b983284d";
const steps = [
  {
    num: "01",
    title: "Onboard & Research",
    desc: "We deep-dive into your business, audience, and voice. You'll fill out a short intake, then we handle the rest — competitor analysis, positioning, and content angles.",
  },
  {
    num: "02",
    title: "Strategy & Frameworks",
    desc: "Your dedicated editor builds a custom posting strategy using our proprietary viral post structures. Every piece of content is engineered for reach.",
  },
  {
    num: "03",
    title: "Create & Publish",
    desc: "3 posts per week, written, edited, and published for you. You approve drafts async via Slack — no calls, no meetings, no calendar bloat.",
  },
  {
    num: "04",
    title: "Grow & Optimize",
    desc: "We track performance in your custom dashboard, optimize what's working, and scale your reach. Tier 2 clients get paid amplification and automated outbound.",
  },
];
/* --- Step Item --- */
function StepItem({ num, title, desc, isLast, isActive, onHover }) {
  return (
    <div
      onMouseEnter={() => onHover(true)}
      onMouseLeave={() => onHover(false)}
      style={{
        display: "flex",
        gap: "24px",
        cursor: "default",
        position: "relative",
      }}
    >
      {/* Number + connector line */}
      <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        flexShrink: 0,
      }}>
        {/* Number badge */}
        <div style={{
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: isActive ? tokens.colors.accent : "transparent",
          border: `2px solid ${isActive ? tokens.colors.accent : "rgba(255,255,255,0.15)"}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "15px",
          fontWeight: 800,
          color: isActive ? tokens.colors.textOnAccent : tokens.colors.textOnDarkMuted,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}>{num}</div>
        {/* Connector line */}
        {!isLast && (
          <div style={{
            width: "2px",
            flex: 1,
            minHeight: "24px",
            background: isActive
              ? `linear-gradient(to bottom, ${tokens.colors.accent}, rgba(195,255,0,0.1))`
              : "rgba(255,255,255,0.06)",
            transition: "background 0.3s ease",
          }} />
        )}
      </div>
      {/* Content */}
      <div style={{
        paddingBottom: isLast ? 0 : "36px",
        flex: 1,
      }}>
        <h3 style={{
          fontSize: "20px",
          fontWeight: 700,
          color: isActive ? tokens.colors.white : "rgba(255,255,255,0.7)",
          margin: "0 0 8px 0",
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "color 0.2s ease",
          paddingTop: "10px",
        }}>{title}</h3>
        <p style={{
          fontSize: "15px",
          lineHeight: 1.6,
          color: isActive ? tokens.colors.textOnDarkMuted : "rgba(255,255,255,0.35)",
          margin: 0,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          transition: "color 0.2s ease",
        }}>{desc}</p>
      </div>
    </div>
  );
}
/* --- Video Card --- */
function VideoCard() {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={LOOM_URL}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "5px",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? "0 8px 32px rgba(0,0,0,0.4)" : "0 4px 16px rgba(0,0,0,0.2)",
        border: `1px solid ${hovered ? "rgba(255,255,255,0.12)" : tokens.colors.cardDarkBorder}`,
        height: "100%",
      }}
    >
      {/* Video preview area */}
      <div style={{
        position: "relative",
        background: `linear-gradient(135deg, ${tokens.colors.primaryMuted} 0%, ${tokens.colors.primary} 100%)`,
        flex: 1,
        minHeight: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {/* Decorative grid lines */}
        <div style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
          pointerEvents: "none",
        }} />
        {/* Play button */}
        <div style={{
          width: "72px",
          height: "72px",
          borderRadius: "50%",
          background: tokens.colors.accent,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "transform 0.2s ease",
          transform: hovered ? "scale(1.08)" : "scale(1)",
          position: "relative",
          zIndex: 2,
          boxShadow: "0 4px 24px rgba(0,0,0,0.3)",
        }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
            <path d="M8 5.5L19 12L8 18.5V5.5Z" fill={tokens.colors.primary} />
          </svg>
        </div>
        {/* Duration badge */}
        <div style={{
          position: "absolute",
          bottom: "16px",
          right: "16px",
          background: "rgba(0,0,0,0.6)",
          borderRadius: "4px",
          padding: "4px 10px",
          fontSize: "12px",
          fontWeight: 600,
          color: tokens.colors.white,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          zIndex: 2,
        }}>1:28</div>
      </div>
      {/* Video info bar */}
      <div style={{
        background: tokens.colors.cardDark,
        padding: "20px 24px",
        borderTop: `1px solid ${tokens.colors.cardDarkBorder}`,
      }}>
        <div style={{
          fontSize: "13px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.06em",
          color: tokens.colors.accent,
          marginBottom: "6px",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>Watch Explainer</div>
        <div style={{
          fontSize: "16px",
          fontWeight: 600,
          color: tokens.colors.white,
          lineHeight: 1.4,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>See how we scale your LinkedIn in under 2 minutes</div>
      </div>
    </a>
  );
}
/* --- Main Section --- */
export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);
  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.primary,
      position: "relative",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .hiw-fade-1 { animation: fadeInUp 0.6s ease both; }
        .hiw-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.15s; }
        .hiw-fade-3 { animation: fadeInUp 0.6s ease both; animation-delay: 0.3s; }
        @media (max-width: 1023px) {
          .hiw-grid { flex-direction: column !important; }
          .hiw-steps, .hiw-video { max-width: 100% !important; }
        }
        @media (max-width: 639px) {
          .hiw-inner { padding: 64px 24px !important; }
          .hiw-heading { font-size: 32px !important; }
        }
      `}</style>
      {/* Subtle background accent glow */}
      <div style={{
        position: "absolute",
        top: "50%",
        right: "-5%",
        width: "400px",
        height: "400px",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(195,255,0,0.03) 0%, transparent 70%)",
        pointerEvents: "none",
        transform: "translateY(-50%)",
      }} />
      <div className="hiw-inner" style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "96px 64px",
        position: "relative",
        zIndex: 1,
      }}>
        {/* --- Heading --- */}
        <div className="hiw-fade-1" style={{ marginBottom: "56px" }}>
          <div style={{
            fontSize: "13px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "0.08em",
            color: tokens.colors.accent,
            marginBottom: "12px",
          }}>HOW IT WORKS</div>
          <h2 className="hiw-heading" style={{
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: tokens.colors.white,
            margin: 0,
            maxWidth: "550px",
          }}>
            Your brand on autopilot<br />in four simple steps.
          </h2>
          <p style={{
            fontSize: "16px",
            lineHeight: 1.6,
            color: tokens.colors.textOnDarkMuted,
            marginTop: "16px",
            maxWidth: "460px",
          }}>
            No calls. No calendar bloat. Just a proven system that turns your LinkedIn into a lead engine.
          </p>
        </div>
        {/* --- Two-Column Grid --- */}
        <div className="hiw-fade-2 hiw-grid" style={{
          display: "flex",
          gap: "48px",
          alignItems: "stretch",
        }}>
          {/* Left: Steps */}
          <div className="hiw-steps" style={{
            flex: "1 1 50%",
            maxWidth: "50%",
          }}>
            {steps.map((step, i) => (
              <StepItem
                key={i}
                num={step.num}
                title={step.title}
                desc={step.desc}
                isLast={i === steps.length - 1}
                isActive={activeStep === i}
                onHover={(hovering) => {
                  if (hovering) setActiveStep(i);
                }}
              />
            ))}
          </div>
          {/* Right: Video */}
          <div className="hiw-fade-3 hiw-video" style={{
            flex: "1 1 50%",
            maxWidth: "50%",
            display: "flex",
          }}>
            <VideoCard />
          </div>
        </div>
      </div>
    </div>
  );
}
