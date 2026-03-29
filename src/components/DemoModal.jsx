import { useEffect } from "react";
import { tokens } from "../design-system/tokens";

export default function DemoModal({ onClose }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.style.overflow = "";
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        background: "rgba(0,0,0,0.6)", backdropFilter: "blur(4px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        animation: "demoModalFadeIn 0.2s ease",
      }}
    >
      <style>{`
        @keyframes demoModalFadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes demoModalSlideUp { from { opacity: 0; transform: translateY(16px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: tokens.colors.white, borderRadius: "16px",
          width: "90%", maxWidth: "700px", maxHeight: "90vh",
          overflow: "hidden", position: "relative",
          animation: "demoModalSlideUp 0.25s ease",
          display: "flex", flexDirection: "column",
        }}
      >
        <div style={{
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "20px 24px", borderBottom: `1px solid ${tokens.colors.grayLight}`,
        }}>
          <h3 style={{ margin: 0, fontSize: "18px", fontWeight: 700, color: tokens.colors.textOnLight, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>
            Book a Demo
          </h3>
          <button
            onClick={onClose}
            style={{
              background: "none", border: "none", cursor: "pointer",
              fontSize: "24px", color: tokens.colors.grayDark, lineHeight: 1,
            }}
          >&times;</button>
        </div>
        <div style={{ flex: 1, overflow: "auto" }}>
          <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/perrin-playbookz/30min?hide_gdpr_banner=1&primary_color=15141a"
            style={{ minWidth: "320px", height: "700px" }}
          />
        </div>
      </div>
    </div>
  );
}
