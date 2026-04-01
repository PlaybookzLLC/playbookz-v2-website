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
    a: "A couple of different things happen during onboarding.\n\nFirst and most importantly we'll do a deep dive into your business so that we can really understand who you are, who your customers are, and how you help them solve problems. We'll download as much information as we can from your brain and we'll use that as a jumping off point to do an extensive round of our own research into your industry, market, customers, and other influencers in the space.\n\nThen we'll set up a shared workspace and a shared Slack channel, where we can collaborate and where you can invite any other team members you like.\n\nFinally we'll cover some administrative stuff like connecting your LinkedIn account, getting permissions, etc.\n\nOur onboarding is pretty detailed but we've found that it makes the rest of a campaign much smoother.",
  },
  {
    q: "Who writes the content?",
    a: "You'll get an extremely experienced (we like to think top 1%) editor whose job it is to become an expert in your business and craft your content.\n\nWe empower them with AI for research, applying viral structures, outlining, and design.\n\nBut you'll have 1:1 access to a senior editor who will ultimately craft, edit, and revise your content.",
  },
  {
    q: "Do you use AI?",
    a: "Our process is a human + AI process. So yes.\n\nWe do not think AI alone can create content good enough to run a successful LinkedIn campaign, but we strongly believe in empowering exceptional human editors with AI so that they can create even better content.\n\nWe use AI for research, understanding viral structures, applying viral structures, outlining, monitoring other influencers, etc.\n\nOur editors apply craft, voice, creativity, and a deep understanding of your business and who you are as a person to the content.\n\nBasically, we use AI to give great human editors superpowers.",
  },
  {
    q: "How many posts do I get per week?",
    a: "Every account gets 3 posts per week.\n\nThat seems to be the sweet spot for comfortable approvals. It also leaves room for you to still be able to post on your LinkedIn account for two business days out of the week.",
  },
  {
    q: "Do I need to be involved in the content creation?",
    a: "Not if you don't want to be. This is why we invest so much in the onboarding, actually.\n\nOne of the things that sets us apart from our competitors is our willingness and ability to become a reasonable expert in your business as quickly as possible.\n\nOf course, there's always a bit of a learning curve. But we're extremely comfortable crafting content with confidence with minimal involvement.\n\nIf you do want to be involved, we have dedicated places for you to drop notes, research, voice memos, Loom videos, etc. Plus, we'll set up a shared Slack channel and shared workspace for us to collab in.",
  },
  {
    q: "What's included in the Scale tier that isn't in Growth?",
    a: "1. Custom images (at least 1 per week, depending on complexity) for posts.\n2. Automated outbound.\n3. We'll use our own funds to amplify content.\n4. We'll guarantee 20k reach in the first 30 days of posting & 100k reach in the first 6 months.\n\nOf those, #3 is the big one. Your content gets amplified with ads without you having to pay anything extra.",
  },
  {
    q: "Do you really use your own funds to amplify my content?",
    a: "Yes. We strongly believe in stacking paid reach on top of organic reach. They feed each other.\n\nPlus, paid reach on LinkedIn is generally extremely good because, by nature, it's a B2B platform, and you can target firmographically.\n\nIt's one of the best ways to make sure your content gets seen by exactly the right people.\n\nOrganic reach is still great, of course, but combining the two is extremely powerful.\n\nIt's so powerful in fact that we're willing to pay for it ourselves so that you don't miss out (we found that it's tough for most people to spend their own funds on ads without having tested it first).\n\nFor most of our clients, the organic:paid ratio is about 50:50, but it can swing 10%-20% either way.\n\nAs for how we're able to do it, it's pretty boring: We ran a huge amount of experience and figured out a good way to get good, targeted reach really efficiently.",
  },
  {
    q: "What are the reach guarantees?",
    a: "We guarantee 20,000 reach in the first 30 days of posting or we will refund your money.\n\nAnd we guarantee 100,000 reach in the first six months or we will work for free until we hit it.",
  },
  {
    q: "Are there long-term contracts?",
    a: "No.\n\nWe ask that you sign up for at least a 90-day sprint to see if this works for you.\n\nBut no long-term contracts, and after the first 90-day sprint, it's purely month-to-month.",
  },
  {
    q: "How soon will I see results?",
    a: "Immediately. Like, week 1 or 2.\n\nWe guarantee 20k reach in the first 30 days of posting.",
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
        maxHeight: isOpen ? "800px" : "0px",
        opacity: isOpen ? 1 : 0,
        overflow: "hidden",
        transition: "max-height 0.35s ease, opacity 0.25s ease",
      }}>
        <div style={{
          fontSize: "15px",
          lineHeight: 1.65,
          color: tokens.colors.textOnLightMuted,
          margin: "0 0 22px 0",
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          maxWidth: "680px",
        }}>
          {answer.split("\n\n").map((para, i) => (
            <p key={i} style={{ margin: i === 0 ? "0 0 12px 0" : "12px 0" }}>{para}</p>
          ))}
        </div>
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
