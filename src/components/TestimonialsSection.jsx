import { useState, useRef, useEffect, useCallback } from "react";
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

/* --- Arrow icons matching case studies --- */
const ArrowLeft = () => (
  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.821247 7.98744L0.821564 7.98713L7.4292 1.37944C7.72124 1.04345 8.23022 1.00543 8.56895 1.29557C8.90919 1.58695 8.94887 2.09903 8.6574 2.4393L8.65737 2.43934C8.63163 2.46937 8.60365 2.49764 8.57356 2.52377L3.35224 7.75143H23.5615C24.0095 7.75143 24.3727 8.11462 24.3727 8.56262C24.3727 9.01065 24.0095 9.37376 23.5615 9.37376H3.35255L8.57355 14.5948C8.90954 14.8868 8.94755 15.3958 8.6574 15.7345C8.36598 16.0747 7.85396 16.1144 7.51368 15.823L7.51365 15.8229C7.4836 15.7972 7.45531 15.7692 7.42917 15.7391L0.821508 9.13142L0.821203 9.13111C0.506708 8.81481 0.506742 8.30383 0.821247 7.98744Z"
      fill="#15141a"
      stroke="#15141a"
      strokeWidth="0.3"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.1788 7.98744L24.1784 7.98713L17.5708 1.37944C17.2788 1.04345 16.7698 1.00543 16.4311 1.29557C16.0908 1.58695 16.0511 2.09903 16.3426 2.4393L16.3426 2.43934C16.3684 2.46937 16.3964 2.49764 16.4264 2.52377L21.6478 7.75143H1.43848C0.990482 7.75143 0.627289 8.11462 0.627289 8.56262C0.627289 9.01065 0.990482 9.37376 1.43848 9.37376H21.6474L16.4264 14.5948C16.0905 14.8868 16.0525 15.3958 16.3426 15.7345C16.634 16.0747 17.146 16.1144 17.4863 15.823L17.4864 15.8229C17.5164 15.7972 17.5447 15.7692 17.5708 15.7391L24.1785 9.13142L24.1788 9.13111C24.4933 8.81481 24.4933 8.30383 24.1788 7.98744Z"
      fill="#15141a"
      stroke="#15141a"
      strokeWidth="0.3"
    />
  </svg>
);

/* --- Close icon for modal --- */
const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

/* --- Loom Video Modal --- */
const LOOM_SHARE_URL = "https://www.loom.com/share/7cd848c6627443b2bd020934b983284d";
const LOOM_EMBED_URL = "https://www.loom.com/embed/7cd848c6627443b2bd020934b983284d?autoplay=1";

function LoomModal({ open, onClose }) {
  if (!open) return null;
  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.75)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "loomModalFadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "960px",
          aspectRatio: "16/9",
          borderRadius: "8px",
          overflow: "hidden",
          background: "#000",
          animation: "loomModalSlideUp 0.25s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "-48px",
            right: "0",
            background: "rgba(255,255,255,0.15)",
            border: "none",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "#fff",
            zIndex: 10,
            transition: "background 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.25)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.15)")}
        >
          <CloseIcon />
        </button>
        <iframe
          src={LOOM_EMBED_URL}
          frameBorder="0"
          allowFullScreen
          allow="autoplay"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
          }}
        />
      </div>
    </div>
  );
}

/* --- Video Testimonial Card --- */
function VideoCard({ onPlay }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div
      onClick={onPlay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "5px",
        padding: "32px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        boxSizing: "border-box",
        cursor: "pointer",
        transition: "all 0.2s ease",
        transform: hovered ? "translateY(-2px)" : "none",
        boxShadow: hovered ? tokens.shadows.cardHover : tokens.shadows.cardLight,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Thumbnail background image */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundImage: "url(/dofollow-testimonial-thumbnail.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        zIndex: 0,
      }} />
      {/* Fallback gradient (shows if image doesn't load) */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: `linear-gradient(135deg, ${tokens.colors.primaryMuted} 0%, ${tokens.colors.primary} 100%)`,
        zIndex: -1,
      }} />
      {/* Dark overlay at 70% opacity */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(0,0,0,0.70)",
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
    </div>
  );
}

/* --- Text Testimonial Card --- */
const TESTIMONIAL_CARD_WIDTH = 270;
const TESTIMONIAL_GAP = 16;

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
        width: `${TESTIMONIAL_CARD_WIDTH}px`,
        flexShrink: 0,
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

export default function TestimonialsSection() {
  const [loomOpen, setLoomOpen] = useState(false);
  const scrollRef = useRef(null);
  const isResetting = useRef(false);

  // Triple the cards for infinite scroll illusion
  const tripled = [...testimonials, ...testimonials, ...testimonials];
  const cardWidth = TESTIMONIAL_CARD_WIDTH + TESTIMONIAL_GAP;

  // On mount, scroll to the middle set so we can scroll both directions
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = testimonials.length * cardWidth;
    }
  }, []);

  // When scroll reaches near edges, jump to the middle set
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isResetting.current) return;
    const oneSetWidth = testimonials.length * cardWidth;
    if (el.scrollLeft < oneSetWidth * 0.25) {
      isResetting.current = true;
      el.style.scrollBehavior = "auto";
      el.scrollLeft += oneSetWidth;
      el.style.scrollBehavior = "";
      isResetting.current = false;
    } else if (el.scrollLeft > oneSetWidth * 1.75) {
      isResetting.current = true;
      el.style.scrollBehavior = "auto";
      el.scrollLeft -= oneSetWidth;
      el.style.scrollBehavior = "";
      isResetting.current = false;
    }
  }, []);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "right" ? cardWidth : -cardWidth,
      behavior: "smooth",
    });
  };

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
        @keyframes loomModalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes loomModalSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .testimonial-fade-1 { animation: fadeInUp 0.6s ease both; }
        .testimonial-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.1s; }
        .testimonial-fade-3 { animation: fadeInUp 0.6s ease both; animation-delay: 0.2s; }
        .tm-scroll-track::-webkit-scrollbar { display: none; }
        .tm-scroll-track { -ms-overflow-style: none; scrollbar-width: none; }
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

        {/* --- Single Row: Video + Infinite Scroll Carousel --- */}
        <div className="testimonial-fade-3 testimonial-split" style={{
          display: "flex",
          gap: "16px",
          alignItems: "stretch",
        }}>
          {/* Video Card — left half */}
          <div className="testimonial-video-half" style={{
            flex: "0 0 calc(50% - 8px)",
            display: "flex",
          }}>
            <VideoCard onPlay={() => setLoomOpen(true)} />
          </div>

          {/* Infinite Scroll Carousel — right half */}
          <div className="testimonial-carousel-half" style={{
            flex: "0 0 calc(50% - 8px)",
            position: "relative",
            minWidth: 0,
          }}>
            {/* Right arrow — positioned on the right edge */}
            <button
              onClick={() => scroll("right")}
              style={{
                position: "absolute",
                right: "-24px",
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 10,
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                background: tokens.colors.white,
                border: "1px solid #E2E8F0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                transition: "box-shadow 0.15s ease",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,0,0,0.1)")}
              onMouseLeave={(e) => (e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)")}
            >
              <ArrowRight />
            </button>

            {/* Scrollable card track */}
            <div
              ref={scrollRef}
              className="tm-scroll-track"
              onScroll={handleScroll}
              style={{
                display: "flex",
                alignItems: "stretch",
                gap: `${TESTIMONIAL_GAP}px`,
                overflowX: "auto",
                height: "100%",
              }}
            >
              {tripled.map((t, i) => (
                <div key={`${t.initials}-${i}`} style={{ display: "flex", flexShrink: 0 }}>
                  <TestimonialCard {...t} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Loom Video Modal */}
      <LoomModal open={loomOpen} onClose={() => setLoomOpen(false)} />
    </div>
  );
}
