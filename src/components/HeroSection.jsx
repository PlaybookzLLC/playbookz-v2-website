import { useState } from "react";
import { tokens } from "../design-system/tokens";
import DemoModal from "./DemoModal";

const clientLogos = [
  { name: "The Outloud Group", src: "/logos/the-outloud-group.svg" },
  { name: "Torchstone", src: "/logos/torchstone.svg" },
  { name: "Citation Labs", src: "/logos/citation-labs.svg" },
  { name: "dofollow.com", src: "/logos/dofollow.svg" },
  { name: "Monograph", src: "/logos/monograph.svg" },
  { name: "Pathways", src: "/logos/pathways.svg" },
  { name: "Projectworks", src: "/logos/projectworks.svg" },
  { name: "Traefik Labs", src: "/logos/traefik-labs.svg" },
];

const CheckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="14" cy="14" r="13" stroke={tokens.colors.accent} strokeWidth="2" fill="none" />
    <path d="M9 14.5L12.5 18L19 10" stroke={tokens.colors.accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
  </svg>
);

const TrendingUpIcon = ({ size = 40 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
    <polyline points="16 7 22 7 22 13" />
  </svg>
);

const StarIcon = ({ size = 14 }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const BarChartIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="12" width="4" height="9" rx="1" />
    <rect x="10" y="7" width="4" height="14" rx="1" />
    <rect x="17" y="3" width="4" height="18" rx="1" />
  </svg>
);

const ProfileIcon = ({ size = 20 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 21v-1a6 6 0 0 1 12 0v1" />
    <line x1="16" y1="3" x2="22" y2="3" />
    <line x1="16" y1="7" x2="20" y2="7" />
    <line x1="16" y1="11" x2="22" y2="11" />
  </svg>
);

function BgCard({ top, left, width, height, delay, rotate = 0, opacity = 0.7 }) {
  return (
    <div style={{
      position: "absolute",
      top, left, width, height,
      background: tokens.colors.cardDark,
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "5px",
      opacity,
      transform: `rotate(${rotate}deg)`,
      animation: `floatCard 4s ease-in-out ${delay}s infinite alternate`,
      boxShadow: "0 4px 20px rgba(0,0,0,0.3)",
    }}>
      <div style={{ padding: "16px" }}>
        <div style={{ width: "40%", height: "8px", background: "rgba(255,255,255,0.12)", borderRadius: "4px", marginBottom: "10px" }} />
        <div style={{ width: "70%", height: "6px", background: "rgba(255,255,255,0.08)", borderRadius: "4px", marginBottom: "8px" }} />
        <div style={{ width: "55%", height: "6px", background: "rgba(255,255,255,0.06)", borderRadius: "4px" }} />
      </div>
    </div>
  );
}

function ReachCard({ top, left, right, value, delay, scale = 1 }) {
  return (
    <div style={{
      position: "absolute",
      top, left, right,
      background: tokens.colors.cardDark,
      border: "1px solid rgba(255,255,255,0.1)",
      borderRadius: "5px",
      padding: "14px 18px",
      display: "flex",
      alignItems: "center",
      gap: "10px",
      animation: `floatCard 5s ease-in-out ${delay}s infinite alternate`,
      boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
      transform: `scale(${scale})`,
      zIndex: 20,
    }}>
      <div style={{
        width: "32px", height: "32px", borderRadius: "50%",
        background: "rgba(195,255,0,0.15)",
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{ width: "12px", height: "12px", borderRadius: "50%", background: tokens.colors.accent }} />
      </div>
      <div>
        <div style={{
          fontSize: "10px", fontWeight: 700, color: tokens.colors.textOnDarkMuted,
          textTransform: "uppercase", letterSpacing: "0.08em", lineHeight: 1,
        }}>Reach</div>
        <div style={{
          fontSize: "18px", fontWeight: 800, color: tokens.colors.white,
          letterSpacing: "-0.02em", lineHeight: 1.2, marginTop: "2px",
        }}>{value}</div>
      </div>
    </div>
  );
}

export default function HeroSection() {
  const [hoveredBtn, setHoveredBtn] = useState(null);
  const [showDemoModal, setShowDemoModal] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Prices", href: "#pricing" },
    { label: "Case Studies", href: "#results" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <>
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.primary,
      color: tokens.colors.textOnDark,
      minHeight: "0",
      position: "relative",
      overflow: "hidden",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

      <style>{`
        @keyframes floatCard {
          0% { transform: translateY(0px); }
          100% { transform: translateY(-20px); }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scrollLogos {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .hero-fade-1 { animation: fadeInUp 0.7s ease both; animation-delay: 0.1s; }
        .hero-fade-2 { animation: fadeInUp 0.7s ease both; animation-delay: 0.25s; }
        .hero-fade-3 { animation: fadeInUp 0.7s ease both; animation-delay: 0.4s; }
        .hero-fade-4 { animation: fadeInUp 0.7s ease both; animation-delay: 0.55s; }
        .hero-fade-5 { animation: fadeInUp 0.7s ease both; animation-delay: 0.7s; }
        .hero-fade-6 { animation: fadeInUp 0.7s ease both; animation-delay: 0.85s; }
        @media (max-width: 1023px) {
          .hero-row { flex-direction: column !important; }
          .hero-left { max-width: 100% !important; padding-right: 0 !important; }
          .hero-right { display: none !important; }
          .hero-h1 { font-size: 40px !important; }
        }
        @media (max-width: 767px) {
          .hero-nav { padding: 20px 24px !important; }
          .hero-desktop-links { display: none !important; }
          .hero-hamburger { display: flex !important; }
          .hero-section-inner { padding: 64px 24px !important; }
          .hero-h1 { font-size: 32px !important; }
          .hero-cta-row { flex-direction: column !important; }
          .hero-cta-row button, .hero-cta-row a { width: 100% !important; text-align: center !important; }
          .hero-trust-bar { padding: 8px 14px !important; gap: 6px !important; font-size: 12px !important; }
          .hero-trust-bar span { font-size: 11px !important; }
          .hero-trust-bar .hero-star { font-size: 11px !important; }
        }
      `}</style>

      {/* NAV */}
      <nav className="hero-nav" style={{
        display: "flex", alignItems: "center", justifyContent: "space-between",
        padding: "20px 64px", maxWidth: "1200px", margin: "0 auto",
        position: "relative", zIndex: 50,
      }}>
        <div style={{ fontSize: "24px", fontWeight: 800, letterSpacing: "-0.03em", color: tokens.colors.white }}>
          playbook<span style={{ color: tokens.colors.accent }}>z</span>
        </div>
        {/* Desktop nav */}
        <div className="hero-desktop-links" style={{ display: "flex", gap: "32px", alignItems: "center" }}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} style={{
              fontSize: "15px", fontWeight: 500, color: tokens.colors.textOnDarkMuted,
              textDecoration: "none", transition: "color 0.15s ease",
            }}
            onMouseEnter={e => e.target.style.color = tokens.colors.white}
            onMouseLeave={e => e.target.style.color = tokens.colors.textOnDarkMuted}
            >{item.label}</a>
          ))}
          <button onClick={() => setShowDemoModal(true)} style={{
            background: tokens.colors.accent, color: tokens.colors.textOnAccent,
            border: "none", borderRadius: "999px",
            padding: "12px 24px", fontSize: "14px", fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
            transition: "all 0.15s ease",
          }}>Get Demo</button>
        </div>
        {/* Hamburger button — mobile only */}
        <button
          className="hero-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{
            display: "none", background: "none", border: "none", cursor: "pointer",
            padding: "8px", alignItems: "center", justifyContent: "center",
          }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileMenuOpen ? (
              <path d="M6 6L18 18M18 6L6 18" stroke={tokens.colors.white} strokeWidth="2" strokeLinecap="round" />
            ) : (
              <>
                <path d="M4 7h16" stroke={tokens.colors.white} strokeWidth="2" strokeLinecap="round" />
                <path d="M4 12h16" stroke={tokens.colors.white} strokeWidth="2" strokeLinecap="round" />
                <path d="M4 17h16" stroke={tokens.colors.white} strokeWidth="2" strokeLinecap="round" />
              </>
            )}
          </svg>
        </button>
      </nav>
      {/* Mobile menu overlay */}
      {mobileMenuOpen && (
        <div style={{
          position: "absolute", top: "64px", left: 0, right: 0, zIndex: 100,
          background: tokens.colors.primary,
          borderTop: `1px solid rgba(255,255,255,0.08)`,
          padding: "24px",
          display: "flex", flexDirection: "column", gap: "16px",
          animation: "fadeInUp 0.2s ease both",
        }}>
          {navItems.map((item) => (
            <a key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)} style={{
              fontSize: "16px", fontWeight: 600, color: tokens.colors.white,
              textDecoration: "none", padding: "8px 0",
              fontFamily: "'Plus Jakarta Sans', sans-serif",
            }}>{item.label}</a>
          ))}
          <button onClick={() => { setMobileMenuOpen(false); setShowDemoModal(true); }} style={{
            background: tokens.colors.accent, color: tokens.colors.textOnAccent,
            border: "none", borderRadius: "999px",
            padding: "14px 24px", fontSize: "15px", fontWeight: 700,
            fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
            marginTop: "8px",
          }}>Get Demo</button>
        </div>
      )}

      {/* HERO CONTENT */}
      <div className="hero-section-inner" style={{
        maxWidth: "1200px", margin: "0 auto", padding: "72px 64px 96px",
        position: "relative", zIndex: 10,
      }}>
        <div className="hero-row" style={{ display: "flex", alignItems: "center", gap: "48px" }}>
          {/* LEFT COLUMN */}
          <div className="hero-left" style={{ flex: "1 1 55%", maxWidth: "620px", paddingRight: "24px" }}>
            <h1 className="hero-h1 hero-fade-1" style={{
              fontSize: "70px", fontWeight: 800, lineHeight: 1.05,
              letterSpacing: "-0.03em", margin: 0, color: tokens.colors.white,
            }}>
              Scale your{" "}
              <span style={{ color: tokens.colors.accent }}>LinkedIn</span>
              {" "}
              <span style={{ color: tokens.colors.accent }}>personal brand</span>
              {" "}on autopilot.
            </h1>

            <p className="hero-fade-2" style={{
              fontSize: "17px", fontWeight: 400, color: tokens.colors.textOnDarkMuted,
              margin: "24px 0 0 0", lineHeight: 1.5,
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 72 72" style={{ verticalAlign: "middle", marginRight: "6px", display: "inline-block", position: "relative", top: "-1px" }}><rect width="72" height="72" rx="12" fill="#0A66C2"/><g transform="translate(36,36) scale(1.2) translate(-36,-36)"><path d="M21 28h7v22h-7V28zm3.5-10a4.05 4.05 0 110 8.1 4.05 4.05 0 010-8.1zM33 28h6.7v3h.1c.9-1.8 3.2-3.6 6.6-3.6 7.1 0 8.4 4.7 8.4 10.7V50h-7V39.7c0-2.5 0-5.6-3.4-5.6s-3.9 2.7-3.9 5.4V50h-7V28z" fill="#fff"/></g></svg><span style={{ fontWeight: 700, color: tokens.colors.white }}>3.2+ million</span> views &{" "}
              <span style={{ fontWeight: 700, color: tokens.colors.white }}>6,000+</span> leads in the last 12mo
            </p>

            <div className="hero-fade-3" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "12px" }}>
              {[
                "Dedicated editor & account manager for every client",
                "20k reach in 30 days or you don't pay",
                "100k reach in 6 mo or we work for free",
              ].map((text, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "14px" }}>
                  <div style={{ flexShrink: 0, marginTop: "1px" }}><CheckIcon /></div>
                  <p style={{ margin: 0, fontSize: "15px", fontWeight: 400, color: tokens.colors.textOnDarkMuted, lineHeight: 1.55 }}>{text}</p>
                </div>
              ))}
            </div>

            <div className="hero-fade-4 hero-trust-bar" style={{
              marginTop: "32px", display: "inline-flex", alignItems: "center", gap: "8px",
              background: tokens.colors.primaryMuted, borderRadius: "999px",
              padding: "10px 20px", border: `1px solid ${tokens.colors.cardDarkBorder}`,
              whiteSpace: "nowrap",
            }}>
              <span style={{ fontSize: "14px", fontWeight: 700, color: tokens.colors.white, marginRight: "2px" }}>
                Rated 4.9/5
              </span>
              <div style={{ display: "flex", gap: "2px" }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} className="hero-star" style={{ color: "#E8880A", fontSize: "15px" }}>★</span>
                ))}
              </div>
              <span style={{ fontSize: "14px", color: tokens.colors.textOnDarkMuted }}>
                Trusted by <span style={{ fontWeight: 700, color: tokens.colors.white }}>100+ founders</span>
              </span>
            </div>

            <div className="hero-fade-5 hero-cta-row" style={{ marginTop: "36px", display: "flex", gap: "16px", alignItems: "center" }}>
              <button
                onClick={() => setShowDemoModal(true)}
                onMouseEnter={(e) => { setHoveredBtn("primary"); e.target.style.transform = "translateY(-1px)"; e.target.style.boxShadow = "0 4px 12px rgba(0,0,0,0.3)"; }}
                onMouseLeave={(e) => { setHoveredBtn(null); e.target.style.transform = ""; e.target.style.boxShadow = ""; }}
                style={{
                  background: tokens.colors.accent, color: tokens.colors.textOnAccent,
                  border: "none", borderRadius: "999px", padding: "16px 36px",
                  fontSize: "16px", fontWeight: 700, fontFamily: "'Plus Jakarta Sans', sans-serif",
                  cursor: "pointer", transition: "all 0.15s ease",
                }}
              >Get Demo</button>
              <a
                href="#pricing"
                onMouseEnter={(e) => { setHoveredBtn("secondary"); e.target.style.transform = "translateY(-1px)"; e.target.style.borderColor = tokens.colors.accent; e.target.style.color = tokens.colors.accent; }}
                onMouseLeave={(e) => { setHoveredBtn(null); e.target.style.transform = ""; e.target.style.borderColor = tokens.colors.white; e.target.style.color = tokens.colors.white; }}
                style={{
                  background: "transparent", color: tokens.colors.white,
                  border: `2px solid ${tokens.colors.white}`, borderRadius: "999px",
                  padding: "14px 32px", fontSize: "16px", fontWeight: 700,
                  fontFamily: "'Plus Jakarta Sans', sans-serif", cursor: "pointer",
                  transition: "all 0.15s ease", textDecoration: "none", display: "inline-block",
                }}
              >See Pricing</a>
            </div>

            <p className="hero-fade-6" style={{ fontSize: "13px", color: tokens.colors.grayMid, marginTop: "20px", fontWeight: 500 }}>
              🔔 11 founders signed up in the last 30 days
            </p>
          </div>

          {/* RIGHT COLUMN — Dashboard Mockup */}
          <div className="hero-right" style={{ flex: "1 1 50%", position: "relative", height: "600px", minWidth: 0 }}>
            <BgCard top="2%" left="5%" width="180px" height="200px" delay={0} rotate={-2} opacity={0.7} />
            <BgCard top="5%" left="52%" width="175px" height="150px" delay={1.2} rotate={1} opacity={0.6} />
            <BgCard top="52%" left="-2%" width="170px" height="190px" delay={0.6} rotate={-1} opacity={0.55} />
            <BgCard top="58%" left="58%" width="190px" height="170px" delay={1.5} rotate={2} opacity={0.6} />
            <BgCard top="28%" left="68%" width="150px" height="130px" delay={0.3} rotate={-3} opacity={0.45} />
            <BgCard top="75%" left="28%" width="155px" height="140px" delay={0.9} rotate={1} opacity={0.5} />

            {[
              { top: "4%", left: "15%", delay: 0.3, opacity: 0.7 },
              { top: "10%", left: "62%", delay: 1.4, opacity: 0.6 },
              { top: "68%", left: "5%", delay: 0.8, opacity: 0.6 },
              { top: "76%", left: "55%", delay: 0.4, opacity: 0.55 },
            ].map((card, i) => (
              <div key={i} style={{
                position: "absolute", top: card.top, left: card.left,
                width: "130px", height: "100px", background: tokens.colors.cardDark,
                border: "1px solid rgba(255,255,255,0.1)", borderRadius: "5px",
                padding: "14px", opacity: card.opacity,
                animation: `floatCard 4.5s ease-in-out ${card.delay}s infinite alternate`,
                boxShadow: "0 4px 16px rgba(0,0,0,0.25)",
              }}>
                <div style={{ color: tokens.colors.textOnDarkMuted, marginBottom: "10px" }}>
                  {i % 2 === 0 ? <BarChartIcon size={18} /> : <ProfileIcon size={18} />}
                </div>
                <div style={{ width: "60%", height: "5px", background: "rgba(255,255,255,0.1)", borderRadius: "3px", marginBottom: "6px" }} />
                <div style={{ width: "80%", height: "5px", background: "rgba(255,255,255,0.07)", borderRadius: "3px", marginBottom: "6px" }} />
                <div style={{ width: "45%", height: "5px", background: "rgba(255,255,255,0.05)", borderRadius: "3px" }} />
              </div>
            ))}

            <ReachCard top="22%" right="2%" value="21,500+" delay={1} scale={0.9} />
            <ReachCard top="68%" right="8%" value="98,200+" delay={1.8} scale={0.95} />
            <ReachCard top="80%" left="2%" value="112,000+" delay={0.5} scale={0.85} />

            {/* CENTER HERO CARD */}
            <div style={{
              position: "absolute", top: "50%", left: "50%",
              transform: "translate(-50%, -50%)",
              background: "rgba(30, 29, 36, 0.92)",
              backdropFilter: "blur(20px)", WebkitBackdropFilter: "blur(20px)",
              padding: "44px 48px", borderRadius: "5px",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: "0 24px 80px rgba(0,0,0,0.6)",
              zIndex: 30, minWidth: "300px", textAlign: "center",
            }}>
              <div style={{
                width: "72px", height: "72px", borderRadius: "50%",
                background: tokens.colors.accent, display: "flex",
                alignItems: "center", justifyContent: "center",
                margin: "0 auto 24px", color: tokens.colors.textOnAccent,
              }}>
                <TrendingUpIcon size={36} />
              </div>
              <p style={{
                fontSize: "11px", fontWeight: 800, color: tokens.colors.grayMid,
                textTransform: "uppercase", letterSpacing: "0.35em", margin: "0 0 8px 0",
              }}>Total Network Reach</p>
              <p style={{
                fontSize: "48px", fontWeight: 800, color: tokens.colors.white,
                letterSpacing: "-0.03em", lineHeight: 1.05, margin: "0 0 8px 0",
              }}>100,000+</p>
              <div style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                gap: "6px", color: tokens.colors.accent, fontSize: "12px",
                fontWeight: 800, textTransform: "uppercase", letterSpacing: "0.12em",
              }}>
                <StarIcon size={14} />
                Guaranteed Results
              </div>
            </div>

            {/* Gradient fade edges */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "80px", background: `linear-gradient(to bottom, ${tokens.colors.primary}, transparent)`, zIndex: 25, pointerEvents: "none" }} />
            <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "80px", background: `linear-gradient(to top, ${tokens.colors.primary}, transparent)`, zIndex: 25, pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "60px", background: `linear-gradient(to right, ${tokens.colors.primary}, transparent)`, zIndex: 25, pointerEvents: "none" }} />
            <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "60px", background: `linear-gradient(to left, ${tokens.colors.primary}, transparent)`, zIndex: 25, pointerEvents: "none" }} />
          </div>
        </div>
      </div>

      {/* LOGO BAR */}
      <div style={{
        borderTop: "1px solid rgba(0,0,0,0.08)", borderBottom: "1px solid rgba(0,0,0,0.08)",
        background: tokens.colors.white, padding: "52px 0",
        overflow: "hidden", position: "relative", zIndex: 10,
      }}>
        <div style={{ position: "relative", width: "100%", overflow: "hidden" }}>
          <div style={{ position: "absolute", top: 0, left: 0, bottom: 0, width: "120px", background: `linear-gradient(to right, ${tokens.colors.white}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
          <div style={{ position: "absolute", top: 0, right: 0, bottom: 0, width: "120px", background: `linear-gradient(to left, ${tokens.colors.white}, transparent)`, zIndex: 2, pointerEvents: "none" }} />
          <div style={{
            display: "flex", alignItems: "center",
            animation: "scrollLogos 30s linear infinite", width: "max-content",
          }}>
            {[...clientLogos, ...clientLogos, ...clientLogos].map((logo, i) => (
              <div key={i} style={{
                flexShrink: 0, padding: "0 48px",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <img
                  src={logo.src}
                  alt={logo.name}
                  style={{ height: "26px", width: "auto", opacity: 0.7, transition: "opacity 0.2s ease" }}
                  title={logo.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>

      {showDemoModal && <DemoModal onClose={() => setShowDemoModal(false)} />}
    </>
  );
}
