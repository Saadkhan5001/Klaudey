import {
  SharepointLogoIcon,
  OfficeLogoIcon,
  PowerAppsLogoIcon,
} from "@fluentui/react-icons-mdl2-branded";
import { SparkleFilled } from "@fluentui/react-icons";
import { motion } from "framer-motion";
import type { ComponentType } from "react";

// ---------- TYPES ----------
type Service = {
  Icon: ComponentType<any>;
  title: string;
  description: string;
  iconColor: string;
  bgGradient: string;
};

// ---------- DATA ----------
const services: Service[] = [
  {
    Icon: SharepointLogoIcon,
    title: "SharePoint",
    description:
      "Enable intelligent content management and seamless team collaboration with modern intranets and document management.",
    iconColor: "text-cyan-400",
    bgGradient: "bg-cyan-950/30",
  },
  {
    Icon: OfficeLogoIcon,
    title: "Microsoft 365",
    description:
      "Empower your workforce with the complete suite of productivity tools, email, and cloud storage in one intelligent platform.",
    iconColor: "text-purple-400",
    bgGradient: "bg-purple-950/30",
  },
  {
    Icon: SparkleFilled,
    title: "Microsoft Copilot",
    description:
      "Transform productivity with AI that works alongside you, automating tasks and generating insights from your data.",
    iconColor: "text-emerald-400",
    bgGradient: "bg-emerald-950/30",
  },
  {
    Icon: PowerAppsLogoIcon,
    title: "Power Platform",
    description:
      "Build sophisticated low-code applications and automate complex workflows with enterprise-grade governance.",
    iconColor: "text-orange-400",
    bgGradient: "bg-orange-950/30",
  },
];

// ---------- COMPONENT ----------
export default function MicrosoftServices() {
  return (
    <section
      id="microsoft"
      className="relative py-32 bg-slate-950 overflow-hidden selection:bg-blue-500 selection:text-white"
    >
      {/* Static Background Only - No Animations */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-24"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span className="text-[11px] font-bold uppercase tracking-widest">
              Microsoft Ecosystem
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight">
            Power Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              Digital Evolution
            </span>
          </h2>

          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed font-light">
            Leverage the world's most trusted cloud platform. We architect,
            deploy, and optimize secure workspaces built on Microsoft 365 and
            Azure.
          </p>
        </motion.div>

        {/* Cards Grid - Using CSS-only hover effects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const { Icon, title, description, iconColor, bgGradient } = service;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.4,
                  ease: [0.25, 0.1, 0.25, 1], // Simple cubic-bezier, no spring physics
                }}
              >
                <div className="group h-full bg-slate-900/50 border border-white/5 rounded-2xl p-8 hover:bg-slate-800/50 hover:border-white/10 hover:-translate-y-1 transition-all duration-300 will-change-transform">
                  {/* Icon - No animations, simple scale on hover */}
                  <div
                    className={`w-16 h-16 rounded-2xl ${bgGradient} border border-white/5 flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300`}
                  >
                    <Icon className={`text-3xl ${iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed font-light group-hover:text-slate-300 transition-colors duration-300">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
