import { useState } from "react";
import { tokens } from "../design-system/tokens";

/* --- Stars Component --- */
function Stars({ count = 5, size = 16 }) {
  return (
    <div style={{ display: "flex", gap: "2px" }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} style={{
          fontSize: `${size}px`,
          color: i <= count ? tokens.colors.reviewOrange : tokens.colors.reviewStarEmpty,
          lineHeight: 1,
        }}>&#9733;</span>
      ))}
    </div>
  );
}

/* --- Mini Bar Chart (decorative) --- */
function MiniBarChart() {
  const bars = [
    { label: "5 Stars", pct: 88, count: "88%" },
    { label: "4 Stars", pct: 8, count: "8%" },
    { label: "3 Stars", pct: 3, count: "3%" },
    { label: "2 Stars", pct: 1, count: "1%" },
  ];
  return (
    <div style={{ width: "100%" }}>
      {bars.map((bar, i) => (
        <div key={i} style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: i < bars.length - 1 ? "8px" : 0,
        }}>
          <span style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.55)",
            width: "48px",
            flexShrink: 0,
            textAlign: "right",
          }}>{bar.label}</span>
          <div style={{
            flex: 1,
            height: "8px",
            background: "rgba(255,255,255,0.06)",
            borderRadius: "4px",
            overflow: "hidden",
          }}>
            <div style={{
              width: `${bar.pct}%`,
              height: "100%",
              background: bar.pct > 50 ? tokens.colors.accent : "rgba(255,255,255,0.2)",
              borderRadius: "4px",
              transition: "width 1s ease",
            }} />
          </div>
          <span style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.45)",
            width: "28px",
            flexShrink: 0,
          }}>{bar.count}</span>
        </div>
      ))}
    </div>
  );
}

/* --- Decorative loop-de-loop dashed arrow SVG --- */
function CurlyArrow({ flip = false }) {
  return (
    <svg
      width="120" height="64" viewBox="0 0 120 64"
      fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{
        flexShrink: 0,
        transform: flip ? "scaleX(-1)" : "none",
      }}
    >
      <path
        d="M 2 50 L 38 50 A 16 16 0 1 0 54 50 L 114 44"
        stroke="rgba(255,255,255,0.3)"
        strokeWidth="2"
        strokeDasharray="4 4"
        strokeLinecap="round"
        fill="none"
      />
      <polygon
        points="109,38 118,44 109,50"
        fill="rgba(255,255,255,0.3)"
      />
    </svg>
  );
}

/* --- Video Testimonial Card --- */
const LOOM_URL = "https://www.loom.com/share/7cd848c6627443b2bd020934b983284d";

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
        borderRadius: "5px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "320px",
        height: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? tokens.shadows.cardHover : tokens.shadows.cardLight,
        position: "relative",
        overflow: "hidden",
        textDecoration: "none",
        color: "inherit",
      }}
    >
      {/* Thumbnail background */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${tokens.colors.primaryMuted} 0%, ${tokens.colors.primary} 100%)`,
        zIndex: 0,
      }} />
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.15)",
        zIndex: 1,
      }} />
      {/* Play button */}
      <div style={{
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        background: tokens.colors.accent,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "transform 0.2s ease",
        transform: hovered ? "scale(1.05)" : "scale(1)",
        flexShrink: 0,
        position: "relative",
        zIndex: 2,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M8 5.5L19 12L8 18.5V5.5Z" fill={tokens.colors.primary} />
        </svg>
      </div>
      {/* Content */}
      <div style={{ marginTop: "auto", position: "relative", zIndex: 2 }}>
        <div style={{
          fontSize: "13px",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          color: tokens.colors.accent,
          marginBottom: "10px",
        }}>Video Testimonial</div>
        <div style={{
          fontSize: "20px",
          fontWeight: 700,
          color: tokens.colors.white,
          lineHeight: 1.3,
          letterSpacing: "-0.01em",
          marginBottom: "12px",
        }}>&ldquo;The ROI has been incredible — we&rsquo;re getting inbound leads every week now.&rdquo;</div>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
        }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            background: tokens.colors.primaryMuted,
            border: `2px solid rgba(255,255,255,0.1)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "14px",
            fontWeight: 700,
            color: tokens.colors.accent,
          }}>JR</div>
          <div>
            <div style={{ fontSize: "14px", fontWeight: 600, color: tokens.colors.white }}>James R.</div>
            <div style={{ fontSize: "12px", color: "rgba(255,255,255,0.5)" }}>CEO, SaaS Company</div>
          </div>
        </div>
      </div>
    </a>
  );
}

/* --- Text Testimonial Card --- */
function TestimonialCard({ stars, text, name, role, time, initials }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: tokens.colors.white,
        border: `1px solid ${tokens.colors.cardLightBorder}`,
        borderRadius: "5px",
        padding: "28px",
        boxShadow: hovered ? tokens.shadows.cardHover : tokens.shadows.cardLight,
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header: stars + time */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "16px",
      }}>
        <Stars count={stars} />
        <span style={{
          fontSize: "12px",
          fontWeight: 500,
          color: tokens.colors.grayMid,
        }}>{time}</span>
      </div>
      {/* Body */}
      <div style={{
        fontSize: "15px",
        lineHeight: 1.6,
        color: tokens.colors.textOnLight,
        flex: 1,
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>&ldquo;{text}&rdquo;</div>
      {/* Footer */}
      <div style={{
        marginTop: "20px",
        paddingTop: "16px",
        borderTop: `1px solid ${tokens.colors.grayLight}`,
        display: "flex",
        alignItems: "center",
        gap: "12px",
      }}>
        <div style={{
          width: "36px",
          height: "36px",
          borderRadius: "50%",
          background: tokens.colors.offWhite,
          border: `1px solid ${tokens.colors.grayLight}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "13px",
          fontWeight: 700,
          color: tokens.colors.primary,
        }}>{initials}</div>
        <div>
          <div style={{ fontSize: "14px", fontWeight: 600, color: tokens.colors.textOnLight }}>{name}</div>
          <div style={{ fontSize: "12px", color: tokens.colors.textOnLightMuted }}>{role}</div>
        </div>
      </div>
    </div>
  );
}

/* --- Main Section --- */
export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      stars: 5,
      text: "We went from zero LinkedIn presence to 50k+ impressions in the first month. The team nailed our voice from day one.",
      name: "Sarah K.",
      role: "Founder, Marketing Agency",
      time: "2 weeks ago",
      initials: "SK",
    },
    {
      stars: 5,
      text: "Playbookz completely freed up my calendar. I used to spend hours on content — now I just approve drafts and watch the engagement roll in.",
      name: "David M.",
      role: "VP Sales, B2B SaaS",
      time: "3 weeks ago",
      initials: "DM",
    },
    {
      stars: 5,
      text: "The viral post structures actually work. Had a post hit 200k views in my second week. Never happened before.",
      name: "Rachel T.",
      role: "CEO, Consulting Firm",
      time: "1 month ago",
      initials: "RT",
    },
    {
      stars: 5,
      text: "Best investment we've made this year. Our CEO's LinkedIn went from ghost town to generating 3–4 warm leads a week.",
      name: "Mark L.",
      role: "Head of Growth, FinTech",
      time: "1 month ago",
      initials: "ML",
    },
    {
      stars: 4,
      text: "Onboarding was seamless and the posts feel authentically ours. Genuinely impressed by how fast they dialed in our tone.",
      name: "Priya S.",
      role: "COO, Staffing Agency",
      time: "6 weeks ago",
      initials: "PS",
    },
    {
      stars: 5,
      text: "We tried doing LinkedIn in-house for a year and got nowhere. Playbookz got us more traction in 30 days than we managed in 12 months.",
      name: "Alex W.",
      role: "Founder, Dev Agency",
      time: "2 months ago",
      initials: "AW",
    },
  ];

  const cardsPerView = 2;
  const totalSlides = Math.ceil(testimonials.length / cardsPerView);
  const goNext = () => setCurrentSlide(prev => (prev + 1) % totalSlides);
  const goPrev = () => setCurrentSlide(prev => (prev - 1 + totalSlides) % totalSlides);

  return (
    <div style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.offWhite,
      position: "relative",
    }}>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .testimonial-fade-1 { animation: fadeInUp 0.6s ease both; }
        .testimonial-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.1s; }
        .testimonial-fade-3 { animation: fadeInUp 0.6s ease both; animation-delay: 0.2s; }
        @media (max-width: 1023px) {
          .testimonial-split { flex-direction: column !important; }
          .testimonial-video-half, .testimonial-carousel-half { flex: 1 1 100% !important; max-width: 100% !important; }
          .stats-visual-row { flex-wrap: wrap !important; justify-content: center !important; gap: 32px !important; }
          .stat-connector { display: none !important; }
          .stat-block { min-width: 140px !important; }
        }
        @media (max-width: 639px) {
          .testimonial-section-inner { padding: 64px 24px !important; }
          .stats-visual-row { flex-direction: column !important; gap: 32px !important; }
          .section-heading { font-size: 32px !important; }
          .dark-banner-inner { padding: 32px 24px 36px !important; }
        }
      `}</style>

      <div className="testimonial-section-inner" style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "96px 64px",
      }}>
        {/* --- Dark Hero Banner --- */}
        <div className="testimonial-fade-1" style={{
          background: tokens.colors.primary,
          borderRadius: "5px",
          padding: "48px 48px 52px",
          marginBottom: "48px",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Subtle grid texture */}
          <div style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }} />

          {/* Heading row */}
          <div style={{ position: "relative", zIndex: 1, marginBottom: "40px" }}>
            <div style={{
              fontSize: "13px",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              color: tokens.colors.accent,
              marginBottom: "12px",
            }}>TESTIMONIALS</div>
            <h2 className="section-heading" style={{
              fontSize: "48px",
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: tokens.colors.white,
              margin: 0,
            }}>
              Don&rsquo;t take our word for it.
            </h2>
            <p style={{
              fontSize: "16px",
              lineHeight: 1.6,
              color: "rgba(255,255,255,0.6)",
              marginTop: "12px",
              maxWidth: "420px",
            }}>
              Hear from founders and marketing leaders who scaled their LinkedIn presence on autopilot.
            </p>
          </div>

          {/* Stats visual row */}
          <div className="stats-visual-row" style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "0",
            position: "relative",
            zIndex: 1,
          }}>
            {/* Left: Big percentage stat */}
            <div className="stat-block" style={{ flex: "0 0 auto", textAlign: "center", minWidth: "160px" }}>
              <div style={{
                fontSize: "64px",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                lineHeight: 1,
                color: tokens.colors.white,
              }}>100<span style={{ color: tokens.colors.accent }}>%</span></div>
              <div style={{
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.6)",
                marginTop: "8px",
                lineHeight: 1.4,
                maxWidth: "160px",
              }}>of clients see measurable reach growth in 30 days</div>
            </div>

            {/* Connector — arrow pointing left */}
            <div className="stat-connector">
              <CurlyArrow flip />
            </div>

            {/* Center: Overall rating */}
            <div className="stat-block" style={{ flex: "0 0 auto", textAlign: "center" }}>
              <div style={{
                fontSize: "13px",
                fontWeight: 600,
                color: "rgba(255,255,255,0.6)",
                textTransform: "uppercase",
                letterSpacing: "0.06em",
                marginBottom: "8px",
              }}>Overall Rating</div>
              <div style={{ display: "flex", gap: "4px", justifyContent: "center", marginBottom: "6px" }}>
                {[1,2,3,4,5].map(i => (
                  <span key={i} style={{ fontSize: "28px", color: tokens.colors.reviewOrange, lineHeight: 1 }}>&#9733;</span>
                ))}
              </div>
              <div style={{
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.55)",
              }}>Based on 100+ clients</div>
            </div>

            {/* Connector — arrow pointing right */}
            <div className="stat-connector">
              <CurlyArrow />
            </div>

            {/* Right: Score + mini bar chart */}
            <div className="stat-block" style={{ flex: "0 0 auto", minWidth: "220px" }}>
              <div style={{
                fontSize: "48px",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                lineHeight: 1,
                color: tokens.colors.white,
                marginBottom: "16px",
                textAlign: "center",
              }}>4.9<span style={{ fontSize: "24px", fontWeight: 600, color: "rgba(255,255,255,0.45)" }}>/5</span></div>
              <MiniBarChart />
            </div>
          </div>
        </div>

        {/* --- Single Row: Video + Horizontal Carousel --- */}
        <div className="testimonial-fade-3 testimonial-split" style={{
          display: "flex",
          gap: "16px",
          alignItems: "stretch",
        }}>
          {/* Video Card — 50% */}
          <div className="testimonial-video-half" style={{
            flex: "0 0 calc(50% - 8px)",
            display: "flex",
          }}>
            <VideoCard />
          </div>

          {/* Horizontal Carousel — 50% */}
          <div className="testimonial-carousel-half" style={{
            flex: "0 0 calc(50% - 8px)",
            display: "flex",
            flexDirection: "column",
            minWidth: 0,
          }}>
            {/* Overflow wrapper */}
            <div style={{ overflow: "hidden", flex: 1 }}>
              <div style={{
                display: "flex",
                transition: "transform 0.4s ease",
                transform: `translateX(-${currentSlide * 100}%)`,
                height: "100%",
              }}>
                {Array.from({ length: Math.ceil(testimonials.length / cardsPerView) }).map((_, groupIdx) => (
                  <div key={groupIdx} style={{
                    display: "flex",
                    gap: "16px",
                    flex: "0 0 100%",
                    minWidth: 0,
                    width: "100%",
                    boxSizing: "border-box",
                  }}>
                    {testimonials.slice(groupIdx * cardsPerView, groupIdx * cardsPerView + cardsPerView).map((t, i) => (
                      <div key={i} style={{ flex: 1, minWidth: 0, display: "flex" }}>
                        <TestimonialCard {...t} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation: dots + arrows */}
            <div style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: "16px",
            }}>
              {/* Dots */}
              <div style={{ display: "flex", gap: "6px" }}>
                {Array.from({ length: totalSlides }).map((_, i) => (
                  <div
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    style={{
                      width: currentSlide === i ? "20px" : "8px",
                      height: "8px",
                      borderRadius: "4px",
                      background: currentSlide === i ? tokens.colors.primary : tokens.colors.grayLight,
                      cursor: "pointer",
                      transition: "all 0.2s ease",
                    }}
                  />
                ))}
              </div>
              {/* Arrows */}
              <div style={{ display: "flex", gap: "8px" }}>
                <button
                  onClick={goPrev}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1.5px solid ${tokens.colors.primary}`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M10 4L6 8L10 12" stroke={tokens.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  onClick={goNext}
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    border: `1.5px solid ${tokens.colors.primary}`,
                    background: "transparent",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    transition: "all 0.15s ease",
                  }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 4L10 8L6 12" stroke={tokens.colors.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
