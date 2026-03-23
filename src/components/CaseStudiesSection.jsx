import { useState, useRef } from "react";
import { tokens } from "../design-system/tokens";

const caseStudies = [
  {
    id: 1,
    title: "How We Scaled a Founder's LinkedIn to 400k+ Impressions/Month",
    description:
      "A B2B SaaS founder went from 2k impressions to 400k/month in under 6 months with our content engine and ghostwriting system.",
    stat: "400k",
    statLabel: "monthly reach",
    category: "B2B SaaS",
    screenshot: null,
    fullContent:
      "Starting from a near-zero presence on LinkedIn, we built a content strategy around thought leadership in the DevOps space. By combining a consistent posting cadence with engagement pods and strategic commenting, we grew this founder's reach from 2,000 impressions per month to over 400,000 — generating 120+ inbound demo requests in the process.",
  },
  {
    id: 2,
    title: "121% Follower Growth for a Vertical SaaS CEO in 90 Days",
    description:
      "We took a construction-tech CEO from 1,200 followers to 2,650+ in just 3 months, establishing them as the go-to voice in their niche.",
    stat: "121%",
    statLabel: "follower growth",
    category: "Vertical SaaS",
    screenshot: null,
    fullContent:
      "The construction-tech space is niche — but that's exactly where personal branding shines. We created a mix of contrarian takes, data-driven posts, and behind-the-scenes content that resonated with builders and GCs. The CEO's follower count more than doubled, and three enterprise deals closed directly from LinkedIn conversations.",
  },
  {
    id: 3,
    title: "From Zero to 50k Reach: A B2B Services Firm's LinkedIn Playbook",
    description:
      "A boutique consulting firm's managing partner built a personal brand that now drives 60% of their new business pipeline.",
    stat: "50k",
    statLabel: "monthly reach",
    category: "B2B Services",
    screenshot: null,
    fullContent:
      "This managing partner had never posted on LinkedIn before working with us. We developed a content calendar focused on client transformation stories, industry hot takes, and frameworks. Within 4 months they were averaging 50k impressions per month and attributing the majority of new inbound leads to their LinkedIn presence.",
  },
  {
    id: 4,
    title: "Turning a Fintech Founder into a Top Voice with 200k+ Reach",
    description:
      "Strategic content positioning helped a fintech founder become a recognized thought leader, driving both hiring and sales.",
    stat: "200k+",
    statLabel: "monthly reach",
    category: "B2B SaaS",
    screenshot: null,
    fullContent:
      "In a crowded fintech market, standing out matters. We crafted a narrative arc for this founder — from bootstrapping stories to industry analysis — that resonated with both potential customers and top-tier engineering talent. The result: 200k+ monthly impressions, 3 key hires sourced directly from LinkedIn, and a 40% increase in inbound sales conversations.",
  },
  {
    id: 5,
    title: "How a Staffing Agency Owner 3x'd Their Pipeline via LinkedIn",
    description:
      "A staffing agency owner leveraged personal branding to triple their qualified leads in 5 months.",
    stat: "3x",
    statLabel: "pipeline growth",
    category: "B2B Services",
    screenshot: null,
    fullContent:
      "Staffing is a relationship business — and LinkedIn is where those relationships start. We helped this agency owner share hiring insights, market data, and client success stories consistently. Their qualified pipeline tripled within 5 months, and their cost per lead dropped by over 60% compared to paid advertising.",
  },
];

const ArrowLeft = () => (
  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M0.821247 7.98744L0.821564 7.98713L7.4292 1.37944C7.72124 1.04345 8.23022 1.00543 8.56895 1.29557C8.90919 1.58695 8.94887 2.09903 8.6574 2.4393L8.65737 2.43934C8.63163 2.46937 8.60365 2.49764 8.57356 2.52377L3.35224 7.75143H23.5615C24.0095 7.75143 24.3727 8.11462 24.3727 8.56262C24.3727 9.01065 24.0095 9.37376 23.5615 9.37376H3.35255L8.57355 14.5948C8.90954 14.8868 8.94755 15.3958 8.6574 15.7345C8.36598 16.0747 7.85396 16.1144 7.51368 15.823L7.51365 15.8229C7.4836 15.7972 7.45531 15.7692 7.42917 15.7391L0.821508 9.13142L0.821203 9.13111C0.506708 8.81481 0.506742 8.30383 0.821247 7.98744Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
  </svg>
);

const ArrowRight = () => (
  <svg width="25" height="17" viewBox="0 0 25 17" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M24.1788 7.98744L24.1784 7.98713L17.5708 1.37944C17.2788 1.04345 16.7698 1.00543 16.4311 1.29557C16.0908 1.58695 16.0511 2.09903 16.3426 2.4393L16.3426 2.43934C16.3684 2.46937 16.3964 2.49764 16.4264 2.52377L21.6478 7.75143H1.43848C0.990482 7.75143 0.627289 8.11462 0.627289 8.56262C0.627289 9.01065 0.990482 9.37376 1.43848 9.37376H21.6474L16.4264 14.5948C16.0905 14.8868 16.0525 15.3958 16.3426 15.7345C16.634 16.0747 17.146 16.1144 17.4863 15.823L17.4864 15.8229C17.5164 15.7972 17.5447 15.7692 17.5708 15.7391L24.1785 9.13142L24.1788 9.13111C24.4933 8.81481 24.4933 8.30383 24.1788 7.98744Z"
      fill="currentColor"
      stroke="currentColor"
      strokeWidth="0.3"
    />
  </svg>
);

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

function CaseStudyModal({ study, onClose }) {
  if (!study) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0,0,0,0.6)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "24px",
        animation: "modalFadeIn 0.2s ease",
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: tokens.colors.white,
          borderRadius: tokens.spacing.borderRadius.xl,
          maxWidth: "680px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
          animation: "modalSlideUp 0.25s ease",
        }}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            background: "rgba(0,0,0,0.06)",
            border: "none",
            borderRadius: "50%",
            width: "36px",
            height: "36px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: tokens.colors.textOnLight,
            zIndex: 10,
            transition: "background 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.12)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(0,0,0,0.06)")}
        >
          <CloseIcon />
        </button>

        {/* Screenshot area */}
        <div
          style={{
            width: "100%",
            height: "320px",
            background: tokens.colors.offWhite,
            borderRadius: `${tokens.spacing.borderRadius.xl} ${tokens.spacing.borderRadius.xl} 0 0`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
          }}
        >
          {study.screenshot ? (
            <img
              src={study.screenshot}
              alt={study.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
          ) : (
            <div style={{ textAlign: "center", color: tokens.colors.grayMid }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <polyline points="21 15 16 10 5 21" />
              </svg>
              <p style={{ fontSize: tokens.typography.sizes.bodySM.size, marginTop: "8px", fontWeight: 500 }}>
                Screenshot placeholder
              </p>
            </div>
          )}
        </div>

        {/* Metadata bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "16px 32px",
            borderBottom: `1px solid ${tokens.colors.grayLight}`,
          }}
        >
          <span
            style={{
              fontSize: tokens.typography.sizes.caption.size,
              fontWeight: 700,
              color: tokens.colors.accent,
              background: tokens.colors.primary,
              padding: "4px 12px",
              borderRadius: tokens.spacing.borderRadius.pill,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Case Study
          </span>
          <span
            style={{
              fontSize: tokens.typography.sizes.bodySM.size,
              fontWeight: 600,
              color: tokens.colors.textOnLightMuted,
            }}
          >
            {study.category}
          </span>
          <span
            style={{
              fontSize: tokens.typography.sizes.bodySM.size,
              fontWeight: 700,
              color: tokens.colors.primary,
            }}
          >
            {study.stat}{" "}
            <span style={{ fontWeight: 400, color: tokens.colors.textOnLightMuted }}>
              {study.statLabel}
            </span>
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "32px" }}>
          <h2
            style={{
              fontSize: tokens.typography.sizes.headingLG.size,
              fontWeight: tokens.typography.sizes.headingLG.weight,
              lineHeight: tokens.typography.sizes.headingLG.lineHeight,
              letterSpacing: tokens.typography.sizes.headingLG.tracking,
              color: tokens.colors.textOnLight,
              margin: "0 0 16px 0",
              fontFamily: tokens.typography.headingFont,
            }}
          >
            {study.title}
          </h2>
          <p
            style={{
              fontSize: tokens.typography.sizes.bodyMD.size,
              lineHeight: tokens.typography.sizes.bodyMD.lineHeight,
              color: tokens.colors.textOnLightMuted,
              margin: 0,
              fontFamily: tokens.typography.bodyFont,
            }}
          >
            {study.fullContent}
          </p>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={() => onClick(study)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flexShrink: 0,
        width: "400px",
        background: tokens.colors.white,
        borderRadius: tokens.spacing.borderRadius.xl,
        border: `1px solid ${tokens.colors.cardLightBorder}`,
        cursor: "pointer",
        transition: "box-shadow 0.2s ease, transform 0.2s ease",
        boxShadow: hovered ? tokens.shadows.cardHover : tokens.shadows.cardLight,
        transform: hovered ? "translateY(-2px)" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Screenshot area */}
      <div
        style={{
          width: "100%",
          height: "180px",
          background: tokens.colors.offWhite,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          borderBottom: `1px solid ${tokens.colors.grayLight}`,
        }}
      >
        {study.screenshot ? (
          <img
            src={study.screenshot}
            alt={study.title}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <div style={{ textAlign: "center", color: tokens.colors.grayMid }}>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
            <p style={{ fontSize: "12px", marginTop: "6px", fontWeight: 500 }}>Screenshot</p>
          </div>
        )}
      </div>

      {/* Card content */}
      <div style={{ padding: tokens.spacing.cardPadding, display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Case Study tag */}
        <div style={{ marginBottom: "12px" }}>
          <span
            style={{
              fontSize: tokens.typography.sizes.caption.size,
              fontWeight: 700,
              color: tokens.colors.accent,
              background: tokens.colors.primary,
              padding: "4px 10px",
              borderRadius: tokens.spacing.borderRadius.pill,
              textTransform: "uppercase",
              letterSpacing: "0.06em",
            }}
          >
            Case Study
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: tokens.typography.sizes.headingSM.size,
            fontWeight: tokens.typography.sizes.headingSM.weight,
            lineHeight: tokens.typography.sizes.headingSM.lineHeight,
            letterSpacing: tokens.typography.sizes.headingSM.tracking,
            color: tokens.colors.textOnLight,
            margin: "0 0 8px 0",
            fontFamily: tokens.typography.headingFont,
          }}
        >
          {study.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: tokens.typography.sizes.bodySM.size,
            lineHeight: tokens.typography.sizes.bodySM.lineHeight,
            color: tokens.colors.textOnLightMuted,
            margin: "0 0 16px 0",
            fontFamily: tokens.typography.bodyFont,
            flex: 1,
          }}
        >
          {study.description}
        </p>

        {/* Bottom: stat + category */}
        <div
          style={{
            borderTop: `1px solid ${tokens.colors.grayLight}`,
            paddingTop: "14px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <span
              style={{
                fontSize: "22px",
                fontWeight: 800,
                color: tokens.colors.textOnLight,
                letterSpacing: "-0.02em",
                fontFamily: tokens.typography.headingFont,
              }}
            >
              {study.stat}
            </span>
            <span
              style={{
                fontSize: tokens.typography.sizes.caption.size,
                color: tokens.colors.textOnLightMuted,
                marginLeft: "6px",
                fontWeight: 500,
              }}
            >
              {study.statLabel}
            </span>
          </div>
          <span
            style={{
              fontSize: tokens.typography.sizes.caption.size,
              fontWeight: 600,
              color: tokens.colors.textOnLightMuted,
              background: tokens.colors.offWhite,
              padding: "4px 10px",
              borderRadius: tokens.spacing.borderRadius.pill,
            }}
          >
            {study.category}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const amount = 430;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        fontFamily: tokens.typography.bodyFont,
        background: tokens.colors.offWhite,
        padding: `${tokens.spacing.sectionY} 0`,
        position: "relative",
      }}
    >
      <style>{`
        @keyframes modalFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalSlideUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .cs-scroll-track::-webkit-scrollbar { display: none; }
        .cs-scroll-track { -ms-overflow-style: none; scrollbar-width: none; }
        @media (max-width: 768px) {
          .cs-heading-row { flex-direction: column !important; align-items: flex-start !important; gap: 16px !important; }
          .cs-card { width: 320px !important; }
        }
      `}</style>

      <link
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
        rel="stylesheet"
      />

      {/* Heading row */}
      <div
        className="cs-heading-row"
        style={{
          maxWidth: tokens.spacing.maxWidth,
          margin: "0 auto",
          padding: `0 ${tokens.spacing.sectionX}`,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          marginBottom: "40px",
        }}
      >
        <div>
          <h2
            style={{
              fontSize: tokens.typography.sizes.displayMD.size,
              fontWeight: tokens.typography.sizes.displayMD.weight,
              lineHeight: tokens.typography.sizes.displayMD.lineHeight,
              letterSpacing: tokens.typography.sizes.displayMD.tracking,
              color: tokens.colors.textOnLight,
              margin: 0,
              fontFamily: tokens.typography.headingFont,
            }}
          >
            Proven results for founders
          </h2>
          <p
            style={{
              fontSize: tokens.typography.sizes.bodyMD.size,
              color: tokens.colors.textOnLightMuted,
              margin: "8px 0 0 0",
              lineHeight: tokens.typography.sizes.bodyMD.lineHeight,
            }}
          >
            See how we've helped founders scale their personal brands
          </p>
        </div>
      </div>

      {/* Slider area */}
      <div style={{ position: "relative" }}>
        {/* Left arrow */}
        <button
          onClick={() => scroll("left")}
          style={{
            position: "absolute",
            left: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: tokens.colors.white,
            border: `1px solid ${tokens.colors.grayLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: tokens.colors.textOnLight,
            boxShadow: tokens.shadows.cardLight,
            transition: "box-shadow 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = tokens.shadows.cardHover)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = tokens.shadows.cardLight)}
        >
          <ArrowLeft />
        </button>

        {/* Right arrow */}
        <button
          onClick={() => scroll("right")}
          style={{
            position: "absolute",
            right: "16px",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 10,
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            background: tokens.colors.white,
            border: `1px solid ${tokens.colors.grayLight}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: tokens.colors.textOnLight,
            boxShadow: tokens.shadows.cardLight,
            transition: "box-shadow 0.15s ease",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.boxShadow = tokens.shadows.cardHover)}
          onMouseLeave={(e) => (e.currentTarget.style.boxShadow = tokens.shadows.cardLight)}
        >
          <ArrowRight />
        </button>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          className="cs-scroll-track"
          style={{
            display: "flex",
            gap: "24px",
            overflowX: "auto",
            padding: `8px ${tokens.spacing.sectionX} 8px`,
            scrollSnapType: "x mandatory",
          }}
        >
          {/* Leading spacer to center first card */}
          <div style={{ flexShrink: 0, width: `calc((100vw - ${tokens.spacing.maxWidth}) / 2)` }} />
          {caseStudies.map((study) => (
            <div key={study.id} style={{ scrollSnapAlign: "start" }}>
              <CaseStudyCard study={study} onClick={setActiveModal} />
            </div>
          ))}
          {/* Trailing spacer */}
          <div style={{ flexShrink: 0, width: `calc((100vw - ${tokens.spacing.maxWidth}) / 2)` }} />
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal study={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}
