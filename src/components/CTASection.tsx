import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/MotionWrappers";

// ---------- STYLES (Matched to MicrosoftServices) ----------
const styles = `
  @keyframes aurora-move {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-aurora {
    animation: aurora-move 20s ease-in-out infinite;
  }
  .animate-aurora-delayed {
    animation: aurora-move 25s ease-in-out infinite reverse;
  }
`;

interface CTASectionProps {
  onGetStartedClick: () => void;
}

export default function CTASection({ onGetStartedClick }: CTASectionProps) {
  return (
    <section className="relative py-24 md:py-32 bg-slate-950 overflow-hidden">
      <style>{styles}</style>

      {/* --- Deep Space Background --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Glows */}
        <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-aurora" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-aurora-delayed" />

        {/* Star-like Grid Texture */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center relative z-10">
        <FadeUp>
          {/* Tagline */}
          <div className="inline-block px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 backdrop-blur-md mb-8 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
            <span className="text-xs font-bold uppercase tracking-widest">
              Ready to Scale?
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="text-4xl md:text-6xl font-bold mb-8 tracking-tight text-white leading-tight">
            Enterprise-Grade Solutions for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
              AI Driven Businesses
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-lg md:text-xl mb-10 text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Don't just adapt to the future—define it. Book a free consultation
            today to talk about our services and transform your operations.
          </p>

          {/* Primary CTA Button */}
          <Button
            size="sm"
            onClick={onGetStartedClick}
            className="text-lg font-semibold px-10 py-7 rounded-full bg-blue-600 hover:bg-blue-500 text-white shadow-[0_0_30px_-5px_rgba(37,99,235,0.4)] transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50"
            data-testid="button-get-started"
          >
            Get Started Today
          </Button>
        </FadeUp>
      </div>
    </section>
  );
}
