import { useState } from "react";
const tokens = {
  colors: {
    primary: "#15141A",
    accent: "#C3FF00",
    white: "#FFFFFF",
    offWhite: "#F5F5F7",
    grayLight: "#E5E5E7",
    grayMid: "#8A8A8E",
    textOnLight: "#15141A",
    textOnLightMuted: "#6B6B6F",
    textOnAccent: "#15141A",
  },
};
const faqs = [
  {
    q: "How does the onboarding process work?",
    a: "After you sign up, we'll send you a short intake form to learn about your business, audience, and voice. From there, your dedicated editor handles everything — competitor analysis, positioning, and content angles. Most clients are fully onboarded within 48 hours.",
  },
  {
    q: "Who writes the content?",
    a: "Every client gets a dedicated human editor who learns your voice and industry inside out. We don't use generic AI-generated content — everything is researched, written, and edited specifically for you.",
  },
  {
    q: "How many posts per week do I get?",
    a: "All plans include 3 posts per week, published directly to your LinkedIn. That's 12+ pieces of high-quality content per month, optimized using our proprietary viral post structures.",
  },
  {
    q: "Do I need to be involved in the content creation?",
    a: "Nope. We handle research, writing, editing, and publishing. You'll have the option to review and approve drafts async via Slack, but it's not required. Most clients spend less than 10 minutes per week.",
  },
  {
    q: "What's included in the Scale tier that isn't in Growth?",
    a: "Scale includes everything in Growth, plus custom images for every post, paid amplification using our own funds, automated outbound (connections + first messages), and lead identification. You also get our reach guarantees.",
  },
  {
    q: "What are the reach guarantees?",
    a: "On the Scale tier, we guarantee 20k reach in your first 30 days of posting or your money back. We also guarantee 100k reach in the first 6 months, or we'll work for free until we hit it.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No. Both plans are month-to-month. You can cancel anytime — though most clients stay because the results speak for themselves.",
  },
  {
    q: "How soon will I see results?",
    a: "Most clients see meaningful engagement within the first 1–2 weeks of posting. Inbound leads typically start flowing within 30–60 days depending on your industry and audience size.",
  },
];
/* ─── FAQ Row ─── */
function FAQRow({ question, answer, isOpen, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        background: isOpen ? tokens.colors.white : tokens.colors.offWhite,
        borderRadius: "5px",
        padding: "0 28px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: `1px solid ${isOpen ? "rgba(0,0,0,0.08)" : "transparent"}`,
        boxShadow: isOpen ? "0 1px 3px rgba(0,0,0,0.04)" : "none",
      }}
    >
      {/* Question row */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
        padding: "22px 0",
      }}>
        <h3 style={{
          fontSize: "16px",
          fontWeight: 600,
          color: tokens.colors.textOnLight,
          margin: 0,
          lineHeight: 1.4,
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          flex: 1,
        }}>{question}</h3>
        {/* Toggle */}
        <div style={{
          width: "32px",
          height: "32px",
          borderRadius: "50%",
          background: isOpen ? tokens.colors.accent : "transparent",
          border: isOpen ? "none" : `1.5px solid ${tokens.colors.grayLight}`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transition: "all 0.2s ease",
          flexShrink: 0,
        }}>
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            style={{
              transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
              transition: "transform 0.25s ease",
            }}
          >
            <path d="M3 5L7 9L11 5" stroke={isOpen ? tokens.colors.textOnAccent : tokens.colors.grayMid} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
      {/* Answer */}
      <div style={{
        maxHeight: isOpen ? "200px" : "0px",
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease, opacity 0.25s ease",
      }}>
        <p style={{
          fontSize: "15px",
          lineHeight: 1.65,
          color: tokens.colors.textOnLightMuted,
          margin: "0 0 22px 0",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          maxWidth: "680px",
        }}>{answer}</p>
      </div>
    </div>
  );
}
/* ─── Main Section ─── */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);
  return (
    <div id="faq" style={{
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      background: tokens.colors.white,
      position: "relative",
    }}>
      <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .faq-fade-1 { animation: fadeInUp 0.6s ease both; }
        .faq-fade-2 { animation: fadeInUp 0.6s ease both; animation-delay: 0.15s; }
        @media (max-width: 639px) {
          .faq-section-inner { padding: 64px 24px !important; }
          .faq-heading { font-size: 32px !important; }
        }
      `}</style>
      <div className="faq-section-inner" style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "96px 64px",
      }}>
        {/* ─── Heading ─── */}
        <div className="faq-fade-1" style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="faq-heading" style={{
            fontSize: "48px",
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            color: tokens.colors.textOnLight,
            margin: 0,
          }}>
            Frequently Asked Questions
          </h2>
        </div>
        {/* ─── Accordion ─── */}
        <div className="faq-fade-2" style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}>
          {faqs.map((faq, i) => (
            <FAQRow
              key={i}
              question={faq.q}
              answer={faq.a}
              isOpen={openIndex === i}
              onClick={() => setOpenIndex(openIndex === i ? -1 : i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
