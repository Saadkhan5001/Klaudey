import {
  SharepointLogoIcon,
  OfficeLogoIcon,
  PowerAppsLogoIcon,
} from "@fluentui/react-icons-mdl2-branded";

import { SparkleFilled } from "@fluentui/react-icons";

import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { ComponentType } from "react";

// ---------- STYLES ----------
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
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  .animate-float {
    animation: float 6s ease-in-out infinite;
  }
`;

// ---------- TYPES ----------
type Service = {
  Icon: ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  glow: string;
};

// ---------- DATA ----------
const services: Service[] = [
  {
    Icon: SharepointLogoIcon,
    title: "SharePoint",
    description:
      "Enable intelligent content management and seamless team collaboration with modern intranets and document management.",
    gradient: "from-cyan-400 to-blue-600",
    iconColor: "text-cyan-400",
    glow: "shadow-[0_0_30px_-5px_rgba(34,211,238,0.6)]",
  },
  {
    Icon: OfficeLogoIcon,
    title: "Microsoft 365",
    description:
      "Empower your workforce with the complete suite of productivity tools, email, and cloud storage in one intelligent platform.",
    gradient: "from-purple-400 to-indigo-600",
    iconColor: "text-purple-400",
    glow: "shadow-[0_0_30px_-5px_rgba(168,85,247,0.6)]",
  },
  {
    Icon: SparkleFilled,
    title: "Microsoft Copilot",
    description:
      "Transform productivity with AI that works alongside you, automating tasks and generating insights from your data.",
    gradient: "from-emerald-400 to-teal-600",
    iconColor: "text-emerald-400",
    glow: "shadow-[0_0_30px_-5px_rgba(52,211,153,0.6)]",
  },
  {
    Icon: PowerAppsLogoIcon,
    title: "Power Platform",
    description:
      "Build sophisticated low-code applications and automate complex workflows with enterprise-grade governance.",
    gradient: "from-orange-400 to-red-600",
    iconColor: "text-orange-400",
    glow: "shadow-[0_0_30px_-5px_rgba(251,146,60,0.6)]",
  },
];

// ---------- SUB-COMPONENTS ----------

// 3D Tilt Card Component
function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
  glowColor?: string; // Kept for API compatibility, though handled internally now
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
  const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

  function onMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    x.set(clientX - left - width / 2);
    y.set(clientY - top - height / 2);
  }

  function onMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const rotateX = useTransform(mouseY, [-200, 200], [4, -4]);
  const rotateY = useTransform(mouseX, [-200, 200], [-4, 4]);

  return (
    <motion.div
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group perspective-1000 ${className}`}
    >
      {/* Dynamic Border Gradient */}
      <motion.div
        style={{
          translateX: mouseX,
          translateY: mouseY,
        }}
        className="absolute -inset-[1px] bg-gradient-to-r from-white/20 to-white/0 rounded-[18px] opacity-0 group-hover:opacity-100 transition duration-500 -z-10"
      />

      {/* Card Body */}
      <div className="relative h-full bg-slate-950/40 backdrop-blur-2xl border border-white/5 rounded-2xl p-8 shadow-2xl overflow-hidden transform transition-all duration-300 group-hover:bg-slate-900/60">
        {/* Subtle Grid Noise */}
        <div className="absolute inset-0 opacity-[0.05] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

        {/* Lighting Glare effect */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-white/5 rounded-full blur-[50px] pointer-events-none group-hover:bg-white/10 transition-colors duration-500" />

        {/* Content Container with Z-Depth */}
        <div
          style={{ transform: "translateZ(20px)" }}
          className="relative z-10 h-full flex flex-col"
        >
          {children}
        </div>
      </div>
    </motion.div>
  );
}

// ---------- MAIN COMPONENT ----------
export default function MicrosoftServices() {
  return (
    <>
      <style>{styles}</style>
      <section
        id="microsoft"
        className="relative py-32 bg-slate-950 overflow-hidden selection:bg-blue-500 selection:text-white"
      >
        {/* 1. Deep Space Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Main Glows */}
          <div className="absolute top-[-20%] left-[20%] w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] animate-aurora" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[120px] animate-aurora-delayed" />

          {/* Star-like particles (CSS Grid) */}
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
          <FadeUp>
            <div className="text-center mb-24">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 backdrop-blur-md mb-6 shadow-[0_0_15px_-3px_rgba(59,130,246,0.3)]">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[11px] font-bold uppercase tracking-widest">
                  Microsoft Ecosystem
                </span>
              </div>

              <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
                Power Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">
                  Digital Evolution
                </span>
              </h2>

              <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
                Leverage the world's most trusted cloud platform. We architect,
                deploy, and optimize secure workspaces built on Microsoft 365
                and Azure.
              </p>
            </div>
          </FadeUp>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const { Icon } = service;

              return (
                <StaggerItem key={index} className="h-full">
                  <TiltCard className="h-full">
                    {/* --- 3D Floating Icon Container --- */}
                    <div className="mb-8 relative group/icon animate-float">
                      {/* Glow Behind (Activates on Hover) */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-tr ${service.gradient} rounded-[20px] blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
                      />

                      {/* Glass Jewel Box */}
                      <div className="relative w-20 h-20 rounded-[20px] bg-gradient-to-br from-white/10 to-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center shadow-lg group-hover:border-white/20 transition-all duration-300">
                        {/* Icon Itself */}
                        <Icon
                          className={`text-4xl ${service.iconColor} drop-shadow-md transition-all duration-300 group-hover:scale-110 group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]`}
                        />

                        {/* Inner Shine */}
                        <div className="absolute inset-0 rounded-[20px] bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* --- Content --- */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-100 transition-colors">
                        {service.title}
                      </h3>

                      <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors flex-1">
                        {service.description}
                      </p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>
    </>
  );
}
