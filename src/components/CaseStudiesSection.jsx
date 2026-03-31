import { useState, useRef, useEffect, useCallback } from "react";
import { tokens } from "../design-system/tokens";

const caseStudies = [
  {
    id: 1,
    title: "How a Community Founder Hit 144k Impressions by Breaking Every LinkedIn Rule",
    description:
      "A seven-figure community founder broke conventional LinkedIn rules to develop an authentic voice that drove 40k+ views per post and real pipeline.",
    stat: "144k",
    statLabel: "impressions",
    category: "Community",
    screenshot: "/case-study-1.png",
    fullContent:
      "This founder ran a seven-figure community with a highly specialized, sophisticated audience. The typical LinkedIn playbook didn't just fall flat for him, it was actively counterproductive. The standard formats and tactics felt off-brand and turned his audience away.\n\nWe spent real time developing a voice that was authentic to who he actually was, and what we landed on broke most of the conventional LinkedIn rules. No listicles, no engagement bait, none of the usual plays.\n\nIt worked. Individual posts were reaching north of 40,000 views and generating real pipeline for the community. It was one of the clearest examples we've seen of how getting the voice right matters more than following the formula.\n\nThe Results:\n\n144,417 impressions — +1,124% vs. previous period\n2,857 followers — from near zero\nNew member pipeline — content drove qualified interest into the community",
  },
  {
    id: 2,
    title: "How a Niche CRM Company Hit 421k Impressions by Treating LinkedIn as Part of the Full Marketing Machine",
    description:
      "A highly specific CRM product integrated LinkedIn deeply into their full marketing funnel, outperforming nearly every other client we've worked with.",
    stat: "421k",
    statLabel: "impressions",
    category: "CRM",
    screenshot: "/case-study-2.png",
    fullContent:
      "This was a highly specific CRM product built for a very specific industry. The tone had to be precise, and we had to be deeply integrated with their existing marketing team rather than operating as a standalone channel.\n\nLinkedIn wasn't just a top-of-funnel play here. It was woven into their broader marketing efforts, which meant we had to be more sophisticated in how we operated and more custom in how we plugged into their existing infrastructure.\n\nTheir content outperformed nearly every other client we've worked with, and a big reason for that was their willingness to lean into what was working. They treated LinkedIn like a performance channel, doubling down on the tactics and formats that drove results instead of just posting for the sake of it.\n\nThe Results:\n\n421,625 impressions — +329% vs. previous period\nMeasurable pipeline influence — LinkedIn integrated across their full marketing funnel",
  },
  {
    id: 3,
    title: "How a Vertical SaaS Founder Built 15k Followers and 2,500+ MQLs from Scratch",
    description:
      "A vertical SaaS company with no LinkedIn presence built a following around the personal brand and drove 2,500+ MQLs through content.",
    stat: "15k",
    statLabel: "followers",
    category: "Vertical SaaS",
    screenshot: "/case-study-3.png",
    fullContent:
      "This was a vertical SaaS company with basically no LinkedIn presence. We ran two content tracks at the same time: one speaking directly to their customers about the pain points the product solved, and the other telling a building-in-public founder story that drove broader visibility.\n\nThe customer-facing content created specific, high-intent engagement and fed real pipeline. The founder-led content built a following around the personal brand. They also ran a lead magnet roughly once a quarter, which they produced and we helped promote through the audience we were growing.\n\nThe Results:\n\n124,150 impressions — from zero prior presence\n15,145 followers — from near zero\n2,500+ MQLs — prospects entering their funnel through content\nStronger category ownership — customer education drove awareness and pipeline",
  },
  {
    id: 4,
    title: "How a Technical SaaS Founder Hit 322k Impressions and Used LinkedIn to Open Doors for Fundraising",
    description:
      "A highly technical enterprise SaaS founder used LinkedIn to build credibility, open doors at conferences, and support fundraising conversations.",
    stat: "322k",
    statLabel: "impressions",
    category: "Enterprise SaaS",
    screenshot: "/case-study-4.png",
    fullContent:
      "This was a highly technical enterprise SaaS company where the product and the space required serious depth. We couldn't phone it in on the content. We had to learn the domain inside and out to write anything credible.\n\nWe got deep enough into the technical details that the founder started leaning on us beyond just content. She would send us conversations she was having and ask us to research topics and help inform her point of view. The content we produced reflected that level of depth, which resonated with a very specific, senior audience.\n\nBeyond the top-of-funnel numbers, LinkedIn became a tool she used to open doors at conferences and support fundraising conversations. Investors and potential partners were seeing her content before meetings, which gave her a real edge in rooms where credibility matters.\n\nThe Results:\n\n322,558 impressions — +162% vs. previous period\n10,594 followers — +31% vs. previous period\n4,454 profile views — +31% vs. previous period\nFundraising support — LinkedIn presence helped warm investor and partner conversations",
  },
  {
    id: 5,
    title: "How an Influencer Agency Generated 151k Reach and Shortened Enterprise Sales Cycles",
    description:
      "This founder ran one of the top influencer agencies in the country, working with major household brands and A-list talent. We leaned into his personal POV and made his people a core part of the content strategy.",
    stat: "151k",
    statLabel: "impressions",
    category: "Agency",
    screenshot: "/case-study-5.png",
    fullContent:
      "This founder ran one of the top influencer agencies in the country, working with major household brands and A-list talent.\n\nHe had a very distinct voice: honest, vulnerable, no corporate polish. That gave us something real to build around. We leaned into his personal POV, paired it with proprietary industry data his team was already sitting on, and made his people a core part of the content strategy.\n\nFor an agency where every deal was relationship-driven, the content helped build familiarity and trust with prospects before sales conversations even started.\n\nThe Results:\n\n151,918 impressions — +1,124% vs. previous period\n2,401 followers — from near zero",
  },
  {
    id: 6,
    title: "How dofollow.com Generated 6,000+ Leads and $500k in New Revenue Through LinkedIn",
    description:
      "A vertical agency used LinkedIn as a real pipeline channel, opening doors with companies like Adobe, Squarespace, Zillow, and Wix — and signing Experian.",
    stat: "6,000+",
    statLabel: "leads",
    category: "Agency",
    screenshot: "/lead mag gif.gif",
    fullContent:
      "dofollow.com is a vertical agency that came to us looking to use LinkedIn as a real pipeline channel, not just a brand awareness play.\n\nWe developed a style that leaned heavily on driving measurable business outcomes. Their sales team integrated closely with us, collaborating on campaign launches so they could follow up on conversations while the content was still warm. That coordination between content and sales made a huge difference.\n\nThe results speak for themselves. They opened doors with companies like Adobe, Squarespace, Zillow, and Wix, and signed Experian, a $7 billion company, with LinkedIn playing a direct role in that deal.\n\nThe Results:\n\n500,000+ impressions — in the last 12 months\n6,000+ leads — generated through LinkedIn content\n$500k+ in new contract revenue — including enterprise deals like Experian",
  },
  {
    id: 7,
    title: "How a Pocket Capital Portfolio Company Hit 539k Impressions and Unlocked a New Category of Clients",
    description:
      "A digital services business backed by Pocket Capital used a custom LinkedIn strategy to open doors with billion-dollar companies and unlock an entirely new category of clients.",
    stat: "539k",
    statLabel: "impressions",
    category: "Digital Services",
    screenshot: "/case-study-7.png",
    fullContent:
      "This is a digital services business backed by Pocket Capital. We helped their founder build a LinkedIn presence using a custom, pretty innovative strategy that we developed specifically for their space.\n\nWe worked directly with the founder but also integrated closely with their marketing and sales teams so we weren't eating up too much of his time. That three-way collaboration let us move fast without the founder becoming a bottleneck.\n\nThe content opened doors they didn't have access to before. In their own words, LinkedIn unlocked an entirely new category of clients for them. They went from not being in the room with billion-dollar companies to actively having those conversations, driven directly by the campaigns we ran together.\n\nThe Results:\n\n539,050 impressions — +132% vs. prior year\n200%+ follower growth — over the engagement period\nNew client category unlocked — conversations opened with billion-dollar companies",
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
            className="cs-modal-screenshot"
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
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px", border: "1px solid #E2E8F0" }}
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
          className="cs-modal-meta"
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
          <div
            style={{
              fontSize: tokens.typography.sizes.bodyMD.size,
              lineHeight: tokens.typography.sizes.bodyMD.lineHeight,
              color: "#64748B",
              margin: 0,
              fontFamily: tokens.typography.bodyFont,
            }}
          >
            {study.fullContent.split("\n\n").map((para, i) => {
              // Detect "The Results:" header
              if (para.trim() === "The Results:") {
                return (
                  <h3 key={i} style={{
                    fontSize: "18px", fontWeight: 700, color: tokens.colors.textOnLight,
                    margin: "24px 0 8px 0", fontFamily: tokens.typography.headingFont,
                  }}>The Results</h3>
                );
              }
              // Detect results block (lines with " — ")
              const lines = para.split("\n");
              if (lines.length > 1 && lines.every(l => l.includes(" — "))) {
                return (
                  <div key={i} style={{ margin: "0 0 16px 0" }}>
                    {lines.map((line, j) => {
                      const [metric, change] = line.split(" — ");
                      return (
                        <div key={j} style={{
                          display: "flex", justifyContent: "space-between", alignItems: "center",
                          padding: "14px 0",
                          borderTop: `1px solid ${tokens.colors.grayLight}`,
                        }}>
                          <span style={{ fontSize: "14px", fontWeight: 600, color: tokens.colors.textOnLight, fontFamily: tokens.typography.bodyFont }}>{metric}</span>
                          <span style={{ fontSize: "14px", fontWeight: 500, color: "#64748B", fontFamily: tokens.typography.bodyFont }}>{change}</span>
                        </div>
                      );
                    })}
                  </div>
                );
              }
              // Regular paragraph
              return (
                <p key={i} style={{ margin: "0 0 16px 0" }}>
                  {lines.map((line, j, arr) => (
                    <span key={j}>{line}{j < arr.length - 1 && <br />}</span>
                  ))}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function CaseStudyCard({ study, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="cs-card"
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
          className="cs-card-screenshot"
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
              style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "4px", border: "1px solid #E2E8F0" }}
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
          className="cs-card-desc"
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
  const autoScrollPaused = useRef(false);

  // Triple the cards for infinite illusion
  const tripled = [...caseStudies, ...caseStudies, ...caseStudies];
  const cardWidth = 407 + 26; // card width + gap

  // On mount, scroll to the middle set so we can scroll both directions
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollLeft = caseStudies.length * cardWidth;
    }
  }, []);

  // Auto-scroll slowly
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (autoScrollPaused.current || isResetting.current) return;
      el.scrollLeft += 1;
    }, 30);
    return () => clearInterval(interval);
  }, []);

  // Pause auto-scroll on touch, resume after delay
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let resumeTimer;
    const pause = () => {
      autoScrollPaused.current = true;
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(() => { autoScrollPaused.current = false; }, 3000);
    };
    el.addEventListener("touchstart", pause, { passive: true });
    el.addEventListener("mousedown", pause);
    el.addEventListener("mouseenter", () => { autoScrollPaused.current = true; });
    el.addEventListener("mouseleave", () => { autoScrollPaused.current = false; });
    return () => {
      el.removeEventListener("touchstart", pause);
      el.removeEventListener("mousedown", pause);
      el.removeEventListener("mouseenter", () => { autoScrollPaused.current = true; });
      el.removeEventListener("mouseleave", () => { autoScrollPaused.current = false; });
      clearTimeout(resumeTimer);
    };
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
      className="cs-section"
      id="results"
      style={{
        fontFamily: tokens.typography.bodyFont,
        background: tokens.colors.white,
        padding: `80px 0 0 0`,
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
          .cs-section { padding-top: 60px !important; }
          .cs-heading-row h2 { font-size: 28px !important; }
          .cs-heading-row p { font-size: 14px !important; }
          .cs-card { width: calc(100vw - 80px) !important; min-width: 0 !important; }
          .cs-card h3 { font-size: 16px !important; }
          .cs-card .cs-card-desc { font-size: 13px !important; }
          .cs-card-screenshot { height: 160px !important; }
          .cs-arrow { display: none !important; }
          .cs-modal-screenshot { height: 180px !important; }
          .cs-modal-meta { gap: 8px !important; flex-wrap: wrap !important; }
          .cs-modal-meta span { font-size: 12px !important; }
        }
      `}</style>

      {/* Constrained container for everything */}
      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: `0 ${tokens.spacing.sectionX}` }}>
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
            className="cs-arrow"
            onClick={() => { autoScrollPaused.current = true; setTimeout(() => { autoScrollPaused.current = false; }, 3000); scroll("left"); }}
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
            className="cs-arrow"
            onClick={() => { autoScrollPaused.current = true; setTimeout(() => { autoScrollPaused.current = false; }, 3000); scroll("right"); }}
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
