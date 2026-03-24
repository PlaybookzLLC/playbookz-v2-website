import { useState, useRef, useCallback } from "react";
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
/* ─── Mini LinkedIn Post Mockup ─── */
function LinkedInPost({ variant = "before" }) {
  const isBefore = variant === "before";
  const isAfter = !isBefore;
  const lineColor = isBefore ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)";
  const bgColor = isBefore ? tokens.colors.primaryMuted : tokens.colors.white;
  const borderColor = isBefore ? "rgba(255,255,255,0.06)" : tokens.colors.cardLightBorder;
  const mutedColor = isBefore ? "rgba(255,255,255,0.15)" : tokens.colors.grayMid;
  const engagement = {
    "before": { likes: 2, comments: 0, reposts: 0 },
    "after": { likes: 847, comments: 63, reposts: 42 },
    "after-secondary": { likes: 312, comments: 28, reposts: 19 },
  }[variant] || { likes: 0, comments: 0, reposts: 0 };
  const bodyWidths = variant === "after-secondary" ? [90, 70, 85, 50] : [95, 80, 60, 90, 45];
  return (
    <div style={{
      background: bgColor,
      borderRadius: "5px",
      padding: "20px",
      border: `1px solid ${borderColor}`,
      boxShadow: isBefore ? "none" : "0 1px 3px rgba(0,0,0,0.06), 0 8px 24px rgba(0,0,0,0.04)",
    }}>
      {/* Header */}
      <div style={{ display: "flex", gap: "12px", alignItems: "center", marginBottom: "14px" }}>
        <div style={{
          width: "36px", height: "36px", borderRadius: "50%",
          background: isBefore ? "rgba(255,255,255,0.08)" : tokens.colors.grayLight,
        }} />
        <div>
          <div style={{ width: "100px", height: "10px", borderRadius: "5px", background: isBefore ? "rgba(255,255,255,0.12)" : "rgba(0,0,0,0.12)", marginBottom: "6px" }} />
          <div style={{ width: "70px", height: "7px", borderRadius: "5px", background: isBefore ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)" }} />
        </div>
      </div>
      {/* Body lines */}
      <div style={{ marginBottom: "16px" }}>
        {bodyWidths.map((w, i) => (
          <div key={i} style={{ width: `${w}%`, height: "7px", borderRadius: "4px", background: lineColor, marginBottom: "8px" }} />
        ))}
      </div>
      {/* Engagement */}
      <div style={{
        borderTop: `1px solid ${isBefore ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.06)"}`,
        paddingTop: "12px", display: "flex", gap: "20px",
      }}>
        {[{ l: "likes", c: engagement.likes }, { l: "comments", c: engagement.comments }, { l: "reposts", c: engagement.reposts }].map((item, i) => (
          <div key={i} style={{
            fontSize: "11px", fontWeight: 600, color: mutedColor, fontFamily: "'Plus Jakarta Sans', sans-serif",
          }}>
            <span style={{ color: !isBefore && item.c > 0 ? tokens.colors.textOnLight : mutedColor, fontWeight: 700 }}>{item.c}</span> {item.l}
          </div>
        ))}
      </div>
    </div>
  );
}
/* ─── LinkedIn Sidebar Mockup ─── */
function LinkedInSidebar({ variant = "before" }) {
  const isBefore = variant === "before";
  const cardBg = isBefore ? tokens.colors.primaryMuted : tokens.colors.white;
  const borderColor = isBefore ? "rgba(255,255,255,0.06)" : tokens.colors.cardLightBorder;
  const bannerBg = isBefore ? "rgba(255,255,255,0.04)" : tokens.colors.grayLight;
  const avatarBg = isBefore ? "rgba(255,255,255,0.1)" : "#ccc";
  const avatarBorder = isBefore ? tokens.colors.primaryMuted : tokens.colors.white;
  const lineBg = isBefore ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.08)";
  const lineLight = isBefore ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)";
  const statColor = isBefore ? "rgba(255,255,255,0.2)" : tokens.colors.textOnLight;
  const labelColor = isBefore ? "rgba(255,255,255,0.12)" : tokens.colors.textOnLightMuted;
  const accentStatColor = isBefore ? "rgba(255,255,255,0.15)" : "#0a66c2";
  const profileViews = isBefore ? "11" : "2,847";
  const postImpressions = isBefore ? "3" : "48,219";
  return (
    <div style={{
      width: "160px",
      flexShrink: 0,
      display: "flex",
      flexDirection: "column",
      gap: "12px",
    }}>
      {/* Profile Card */}
      <div style={{
        background: cardBg,
        borderRadius: "5px",
        border: `1px solid ${borderColor}`,
        overflow: "hidden",
      }}>
        {/* Banner */}
        <div style={{ height: "70px", background: bannerBg }} />
        {/* Avatar */}
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          background: avatarBg, border: `3px solid ${avatarBorder}`,
          margin: "-24px auto 0", position: "relative", zIndex: 1,
        }} />
        {/* Name + title lines */}
        <div style={{ padding: "12px 16px 20px", textAlign: "center" }}>
          <div style={{ width: "70%", height: "9px", borderRadius: "5px", background: lineBg, margin: "0 auto 8px" }} />
          <div style={{ width: "90%", height: "6px", borderRadius: "4px", background: lineLight, margin: "0 auto 4px" }} />
          <div style={{ width: "60%", height: "6px", borderRadius: "4px", background: lineLight, margin: "0 auto 6px" }} />
          <div style={{ width: "75%", height: "6px", borderRadius: "4px", background: lineLight, margin: "0 auto 4px" }} />
          <div style={{ width: "50%", height: "6px", borderRadius: "4px", background: lineLight, margin: "0 auto" }} />
        </div>
      </div>
      {/* Stats Card */}
      <div style={{
        background: cardBg,
        borderRadius: "5px",
        border: `1px solid ${borderColor}`,
        padding: "14px 16px",
      }}>
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          marginBottom: "10px", paddingBottom: "10px",
          borderBottom: `1px solid ${isBefore ? "rgba(255,255,255,0.04)" : "rgba(0,0,0,0.04)"}`,
        }}>
          <div style={{ fontSize: "10px", fontWeight: 500, color: labelColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Profile viewers</div>
          <div style={{ fontSize: "11px", fontWeight: 800, color: accentStatColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{profileViews}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{ fontSize: "10px", fontWeight: 500, color: labelColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>Post impressions</div>
          <div style={{ fontSize: "11px", fontWeight: 800, color: accentStatColor, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{postImpressions}</div>
        </div>
      </div>
    </div>
  );
}
/* ─── Before Panel ─── */
function BeforePanel() {
  return (
    <div style={{
      background: tokens.colors.primary,
      padding: "48px 32px",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
    }}>
      <div style={{
        fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
        color: "rgba(255,255,255,0.3)", marginBottom: "24px", fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>Without Playbookz</div>
      {/* Sidebar + Feed row */}
      <div style={{ display: "flex", gap: "16px", flex: 1 }}>
        <LinkedInSidebar variant="before" />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px" }}>
          <LinkedInPost variant="before" />
          <LinkedInPost variant="before" />
        </div>
      </div>
      {/* Stats */}
      <div style={{
        display: "flex", gap: "24px", marginTop: "24px", paddingTop: "20px",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}>
        {[
          { val: "~200", label: "monthly views" },
          { val: "0", label: "inbound leads" },
          { val: "8hrs", label: "wasted / week" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: "rgba(255,255,255,0.25)", fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.val}</div>
            <div style={{ fontSize: "10px", fontWeight: 500, color: "rgba(255,255,255,0.15)", marginTop: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
/* ─── After Panel — Feed-like with sidebar and slider-reactive floating notifications ─── */
function AfterPanel({ sliderPos = 25 }) {
  const notifs = [
    { text: "\u{1F525} Trending in #leadership", top: "-6px", right: "16px", left: "auto", accent: true, drift: [3, -5] },
    { text: "\u{1F4AC} 18 new connection requests", top: "24%", left: "150px", right: "auto", accent: false, drift: [-4, 3] },
    { text: "\u{1F4C8} +4,200 impressions today", top: "10%", right: "-4px", left: "auto", accent: false, drift: [5, -2] },
    { text: "\u{1F91D} 3 warm leads this week", top: "50%", right: "10px", left: "auto", accent: false, drift: [-3, 4] },
    { text: "\u{1F680} Post hit 10k views", top: "67%", left: "180px", right: "auto", accent: true, drift: [4, -6] },
    { text: "\u{1F440} VP at Stripe viewed profile", top: "40%", left: "200px", right: "auto", accent: false, drift: [-5, 2] },
    { text: "\u{1F3AF} 2 meeting requests", top: "80%", right: "20%", left: "auto", accent: false, drift: [3, 5] },
  ];
  const drift = (50 - sliderPos) / 50;
  return (
    <div style={{
      background: tokens.colors.white,
      padding: "48px 32px",
      height: "100%",
      boxSizing: "border-box",
      display: "flex",
      flexDirection: "column",
      position: "relative",
    }}>
      <div style={{
        display: "flex", alignItems: "center", gap: "8px", marginBottom: "24px",
      }}>
        <div style={{
          fontSize: "12px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em",
          color: tokens.colors.textOnLight, fontFamily: "'Plus Jakarta Sans', sans-serif",
        }}>With Playbookz</div>
        <div style={{
          background: tokens.colors.accent, borderRadius: "999px", padding: "2px 10px",
          fontSize: "10px", fontWeight: 700, color: tokens.colors.textOnAccent, fontFamily: "'Plus Jakarta Sans', sans-serif", letterSpacing: "0.02em",
        }}>ACTIVE</div>
      </div>
      {/* Sidebar + Feed row */}
      <div style={{ display: "flex", gap: "16px", flex: 1, position: "relative" }}>
        <LinkedInSidebar variant="after" />
        <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: "12px", position: "relative" }}>
          <LinkedInPost variant="after" />
          <LinkedInPost variant="after-secondary" />
          {/* Floating notifications */}
          {notifs.map((n, i) => {
            const dx = n.drift[0] * drift * 12;
            const dy = n.drift[1] * drift * 8;
            return (
              <div key={i} style={{
                position: "absolute",
                top: n.top, left: n.left, right: n.right,
                background: n.accent ? tokens.colors.accent : tokens.colors.white,
                borderRadius: "999px",
                padding: "8px 18px",
                fontSize: "13px",
                fontWeight: 700,
                color: n.accent ? tokens.colors.textOnAccent : tokens.colors.textOnLight,
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                boxShadow: n.accent ? "0 4px 16px rgba(195,255,0,0.25)" : "0 4px 16px rgba(0,0,0,0.1)",
                border: n.accent ? "none" : `1px solid ${tokens.colors.cardLightBorder}`,
                whiteSpace: "nowrap",
                zIndex: 3,
                transform: `translate(${dx}px, ${dy}px)`,
                transition: "transform 0.15s ease-out",
              }}>{n.text}</div>
            );
          })}
        </div>
      </div>
      {/* After Stats */}
      <div style={{
        display: "flex", gap: "24px", marginTop: "20px", paddingTop: "20px",
        borderTop: "1px solid rgba(0,0,0,0.06)",
      }}>
        {[
          { val: "124k+", label: "monthly reach" },
          { val: "15+", label: "inbound leads / mo" },
          { val: "0hrs", label: "of your time" },
        ].map((s, i) => (
          <div key={i} style={{ textAlign: "center", flex: 1 }}>
            <div style={{ fontSize: "22px", fontWeight: 800, color: tokens.colors.textOnLight, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>{s.val}</div>
            <div style={{ fontSize: "10px", fontWeight: 500, color: tokens.colors.textOnLightMuted, marginTop: "2px", fontFamily: "'Plus Jakarta Sans', sans-serif", textTransform: "uppercase", letterSpacing: "0.04em" }}>{s.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
/* ─── Main Section ─── */
export default function BenefitsSection() {
  const [sliderPos, setSliderPos] = useState(25);
  const containerRef = useRef(null);
  const isDragging = useRef(false);
  const handleMove = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(2, Math.min(98, (x / rect.width) * 100));
    setSliderPos(pct);
  }, []);
  const onMouseDown = () => { isDragging.current = true; };
  const onMouseUp = () => { isDragging.current = false; };
  const onMouseMove = (e) => { if (isDragging.current) handleMove(e.clientX); };
  const onTouchMove = (e) => { handleMove(e.touches[0].clientX); };
  return (
    <div
      style={{
        fontFamily: "'Plus Jakarta Sans', sans-serif",
        background: tokens.colors.offWhite,
        position: "relative",
        userSelect: "none",
      }}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
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
          .benefits-heading { font-size: 32px !important; }
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
        {/* ─── Heading ─── */}
        <div className="benefits-fade-1" style={{ marginBottom: "40px", textAlign: "center" }}>
          <h2 className="benefits-heading" style={{
            fontSize: "48px", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em",
            color: tokens.colors.textOnLight, margin: "0 auto", maxWidth: "700px",
          }}>
            The Difference a Personal Brand Makes
          </h2>
          <p style={{
            fontSize: "16px", lineHeight: 1.6, color: tokens.colors.textOnLightMuted,
            marginTop: "16px", maxWidth: "480px", margin: "16px auto 0",
          }}>
            Drag the slider to see the before and after.
          </p>
        </div>
        {/* ─── Slider Container ─── */}
        <div
          ref={containerRef}
          className="benefits-fade-1"
          onTouchMove={onTouchMove}
          style={{
            position: "relative",
            borderRadius: "5px",
            overflow: "hidden",
            marginBottom: "64px",
            cursor: "ew-resize",
          }}
        >
          {/* After layer (full width, base — visible on right) */}
          <div style={{ position: "relative", width: "100%", zIndex: 1 }}>
            <AfterPanel sliderPos={sliderPos} />
          </div>
          {/* Before layer (clipped overlay — visible on left up to slider) */}
          <div style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2,
            clipPath: `inset(0 ${100 - sliderPos}% 0 0)`,
          }}>
            <BeforePanel />
          </div>
          {/* Slider handle */}
          <div style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            left: `${sliderPos}%`,
            transform: "translateX(-50%)",
            zIndex: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}>
            {/* Vertical line */}
            <div style={{
              width: "3px",
              flex: 1,
              background: tokens.colors.accent,
              borderRadius: "2px",
            }} />
            {/* Handle grip */}
            <div
              onMouseDown={onMouseDown}
              onTouchStart={() => {}}
              style={{
                position: "absolute",
                top: "50%",
                transform: "translateY(-50%)",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                background: tokens.colors.accent,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 12px rgba(0,0,0,0.2)",
                cursor: "ew-resize",
              }}
            >
              {/* Arrows */}
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M7 6L3 10L7 14" stroke={tokens.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M13 6L17 10L13 14" stroke={tokens.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          {/* LinkedIn-style DM popups — bottom right corner */}
          {[
            { name: "Alex W.", initials: "AW", msg: "Loved your post on scaling teams. Would love to chat about working together.", threshold: 45 },
            { name: "Morgan T.", initials: "MT", msg: "Your content keeps showing up in my feed. Are you taking new clients?", threshold: 30 },
            { name: "Jamie L.", initials: "JL", msg: "Our CEO shared your last post internally. Can we book a call?", threshold: 15 },
          ].map((dm, i) => {
            const isVisible = sliderPos < dm.threshold;
            return (
              <div key={i} style={{
                position: "absolute",
                bottom: 0,
                right: `${16 + i * 216}px`,
                width: "200px",
                background: tokens.colors.white,
                borderRadius: "8px 8px 0 0",
                boxShadow: "0 -2px 16px rgba(0,0,0,0.12)",
                border: `1px solid ${tokens.colors.cardLightBorder}`,
                borderBottom: "none",
                zIndex: 4,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 0.35s ease, transform 0.35s ease",
                transitionDelay: isVisible ? `${i * 0.15}s` : "0s",
                pointerEvents: "none",
                overflow: "hidden",
              }}>
                {/* Header bar */}
                <div style={{
                  display: "flex", alignItems: "center", gap: "8px",
                  padding: "10px 12px",
                  background: tokens.colors.primary,
                }}>
                  <div style={{
                    width: "24px", height: "24px", borderRadius: "50%",
                    background: tokens.colors.accent, flexShrink: 0,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "9px", fontWeight: 800, color: tokens.colors.textOnAccent,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>{dm.initials}</div>
                  <span style={{
                    fontSize: "12px", fontWeight: 700, color: tokens.colors.white,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>{dm.name}</span>
                  <div style={{
                    width: "8px", height: "8px", borderRadius: "50%",
                    background: tokens.colors.accent, marginLeft: "auto", flexShrink: 0,
                  }} />
                </div>
                {/* Message body */}
                <div style={{ padding: "12px" }}>
                  <div style={{
                    background: tokens.colors.offWhite, borderRadius: "4px 12px 12px 12px",
                    padding: "10px 12px",
                    fontSize: "12px", lineHeight: 1.45, color: tokens.colors.textOnLight,
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>{dm.msg}</div>
                  <div style={{
                    fontSize: "10px", color: tokens.colors.grayMid, marginTop: "6px",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                  }}>Just now</div>
                </div>
              </div>
            );
          })}
        </div>
        {/* ─── Guarantee Card ─── */}
        <div className="benefits-fade-2">
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
        </div>
      </div>
    </div>
  );
}
