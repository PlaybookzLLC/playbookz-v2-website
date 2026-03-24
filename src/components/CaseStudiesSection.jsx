import { useState, useRef, useEffect, useCallback } from "react";
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
    screenshot: "/screenshots/case-study-1.png",
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
    screenshot: "/screenshots/case-study-2.png",
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
    screenshot: "/screenshots/case-study-3.png",
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
    screenshot: "/screenshots/case-study-4.png",
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
    screenshot: "/screenshots/case-study-5.png",
    fullContent:
      "Staffing is a relationship business — and LinkedIn is where those relationships start. We helped this agency owner share hiring insights, market data, and client success stories consistently. Their qualified pipeline tripled within 5 months, and their cost per lead dropped by over 60% compared to paid advertising.",
  },
];

const BookIcon = ({ hovered } = {}) => {
  const strokeColor = hovered ? "#A0A0A5" : "#64748B";
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transition: "all 0.3s ease" }}>
      <path d="M12 7V21" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 18C2.73478 18 2.48043 17.8946 2.29289 17.7071C2.10536 17.5196 2 17.2652 2 17V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3H8C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 5.93913 12.4214 4.92172 13.1716 4.17157C13.9217 3.42143 14.9391 3 16 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V17C22 17.2652 21.8946 17.5196 21.7071 17.7071C21.5196 17.8946 21.2652 18 21 18H15C14.2044 18 13.4413 18.3161 12.8787 18.8787C12.3161 19.4413 12 20.2044 12 21C12 20.2044 11.6839 19.4413 11.1213 18.8787C10.5587 18.3161 9.79565 18 9 18H3Z" stroke={strokeColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

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

const CloseIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ImagePlaceholder = ({ size = 36 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="#CBD5E1" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
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
          borderRadius: "8px",
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

        {/* Screenshot area with padding */}
        <div style={{ padding: "24px 24px 0" }}>
          <div
            style={{
              width: "100%",
              height: "320px",
              background: "#F8FAFC",
              borderRadius: "6px",
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
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
              />
            ) : (
              <div style={{ textAlign: "center", color: "#CBD5E1" }}>
                <ImagePlaceholder size={48} />
                <p style={{ fontSize: "13px", marginTop: "8px", fontWeight: 500, color: "#94A3B8" }}>
                  Screenshot
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Metadata row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
            padding: "20px 24px",
            borderBottom: "1px solid #E2E8F0",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <BookIcon />
            <span style={{ fontSize: "14px", fontWeight: 400, color: "#64748B", margin: 0 }}>
              Case Study
            </span>
          </div>
          <span style={{ color: "#E2E8F0" }}>|</span>
          <span style={{ fontSize: "14px", fontWeight: 600, color: tokens.colors.textOnLight }}>
            {study.stat}{" "}
            <span style={{ fontWeight: 400, color: "#64748B" }}>{study.statLabel}</span>
          </span>
          <span style={{ color: "#E2E8F0" }}>|</span>
          <span style={{ fontSize: "14px", fontWeight: 400, color: "#64748B" }}>
            {study.category}
          </span>
        </div>

        {/* Content */}
        <div style={{ padding: "24px" }}>
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
              color: "#64748B",
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
        width: "407px",
        background: hovered ? tokens.colors.primary : tokens.colors.white,
        borderRadius: "8px",
        border: hovered ? `1px solid ${tokens.colors.primaryMuted}` : "1px solid #E2E8F0",
        borderLeft: hovered ? `4px solid ${tokens.colors.primaryMuted}` : "4px solid #CBD5E1",
        cursor: "pointer",
        transition: "all 0.3s ease",
        boxShadow: hovered
          ? "0 8px 24px rgba(0,0,0,0.15), 0 16px 40px rgba(0,0,0,0.1)"
          : "0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.02)",
        transform: hovered ? "rotate(-1deg) translateY(-4px)" : "none",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Screenshot area — padded with whitespace */}
      <div style={{ padding: "20px 20px 0" }}>
        <div
          style={{
            width: "100%",
            height: "200px",
            background: hovered ? tokens.colors.primaryLight : "#F8FAFC",
            borderRadius: "6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transition: "background 0.3s ease",
          }}
        >
          {study.screenshot ? (
            <img
              src={study.screenshot}
              alt={study.title}
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "6px" }}
            />
          ) : (
            <div style={{ textAlign: "center", color: hovered ? "#4A4A50" : "#CBD5E1", transition: "color 0.3s ease" }}>
              <ImagePlaceholder size={36} />
              <p style={{ fontSize: "12px", marginTop: "6px", fontWeight: 500, color: hovered ? "#6B6B6F" : "#94A3B8", transition: "color 0.3s ease" }}>
                Screenshot
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Card body */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Tag row — plain text with icon, matching reference style */}
        <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "12px" }}>
          <BookIcon hovered={hovered} />
          <p style={{ fontSize: "14px", fontWeight: 400, color: hovered ? tokens.colors.textOnDarkMuted : "#64748B", margin: 0, transition: "color 0.3s ease" }}>
            Case Study
          </p>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: "18px",
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: "-0.01em",
            color: hovered ? tokens.colors.textOnDark : tokens.colors.textOnLight,
            margin: "0 0 8px 0",
            fontFamily: tokens.typography.headingFont,
            transition: "color 0.3s ease",
          }}
        >
          {study.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontSize: "14px",
            lineHeight: 1.6,
            color: hovered ? tokens.colors.textOnDarkMuted : "#64748B",
            margin: "0",
            fontFamily: tokens.typography.bodyFont,
            flex: 1,
            transition: "color 0.3s ease",
          }}
        >
          {study.description}
        </p>

        {/* Divider + bottom stats row */}
        <div>
          <hr style={{ border: "none", borderTop: hovered ? "1px solid rgba(255,255,255,0.1)" : "1px solid #E2E8F0", margin: "16px 0 12px", transition: "border-color 0.3s ease" }} />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
              <span
                style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: hovered ? tokens.colors.textOnDark : tokens.colors.textOnLight,
                  letterSpacing: "-0.01em",
                  fontFamily: tokens.typography.bodyFont,
                  lineHeight: 1.4,
                  transition: "color 0.3s ease",
                }}
              >
                {study.stat}
              </span>
              <span style={{ fontSize: "14px", fontWeight: 400, color: hovered ? tokens.colors.textOnDarkMuted : "#64748B", fontFamily: tokens.typography.bodyFont, transition: "color 0.3s ease" }}>
                {study.statLabel}
              </span>
            </div>
            <span style={{ fontSize: "14px", fontWeight: 400, color: hovered ? tokens.colors.textOnDarkMuted : "#64748B", fontFamily: tokens.typography.bodyFont, transition: "color 0.3s ease" }}>
              {study.category}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function CaseStudiesSection() {
  const [activeModal, setActiveModal] = useState(null);
  const scrollRef = useRef(null);
  const isResetting = useRef(false);

  // Triple the cards for infinite illusion
  const tripled = [...caseStudies, ...caseStudies, ...caseStudies];
  const cardWidth = 407 + 26; // card width + gap

  // On mount, scroll to the middle set so we can scroll both directions
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = caseStudies.length * cardWidth;
    }
  }, []);

  // When scroll reaches near edges, jump to the middle set
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el || isResetting.current) return;
    const oneSetWidth = caseStudies.length * cardWidth;
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
    const amount = cardWidth;
    scrollRef.current.scrollBy({
      left: direction === "right" ? amount : -amount,
      behavior: "smooth",
    });
  };

  return (
    <section
      style={{
        fontFamily: tokens.typography.bodyFont,
        background: tokens.colors.white,
        padding: `76px 0 ${tokens.spacing.sectionY}`,
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
        }
      `}</style>

      {/* Constrained container for everything */}
      <div style={{ maxWidth: tokens.spacing.maxWidth, margin: "0 auto", padding: `0 ${tokens.spacing.sectionX}` }}>
        {/* Heading row */}
        <div className="cs-heading-row" style={{ marginBottom: "40px" }}>
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
            Some of our results
          </h2>
          <p
            style={{
              fontSize: tokens.typography.sizes.bodyMD.size,
              color: "#64748B",
              margin: "8px 0 0 0",
              lineHeight: tokens.typography.sizes.bodyMD.lineHeight,
            }}
          >
            See how we've helped founders scale their personal brands
          </p>
        </div>

        {/* Slider wrapper — constrained, with relative positioning for arrows */}
        <div style={{ position: "relative" }}>
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            style={{
              position: "absolute",
              left: "-24px",
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
            <ArrowLeft />
          </button>

          {/* Right arrow */}
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
            className="cs-scroll-track"
            onScroll={handleScroll}
            style={{
              display: "flex",
              alignItems: "stretch",
              gap: "26px",
              overflowX: "auto",
              padding: "4px 0",
              borderRadius: "8px",
            }}
          >
            {tripled.map((study, i) => (
              <div key={`${study.id}-${i}`} style={{ display: "flex" }}>
                <CaseStudyCard study={study} onClick={setActiveModal} />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      <CaseStudyModal study={activeModal} onClose={() => setActiveModal(null)} />
    </section>
  );
}
