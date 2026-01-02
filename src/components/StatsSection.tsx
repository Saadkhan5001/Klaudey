import { Globe2, Cpu, Server, ShieldCheck } from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { motion } from "framer-motion";

// Extracted key themes from your text to replace the numeric stats
const highlights = [
  {
    icon: Globe2,
    title: "Dubai-Based Powerhouse",
    description: "A strategic technology hub transforming businesses globally.",
    color: "blue",
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    icon: Cpu,
    title: "Cloud & AI Native",
    description: "Modernizing apps with next-gen intelligence and scalability.",
    color: "violet",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    icon: Server,
    title: "Managed Services",
    description: "Optimizing on-prem data centres and hybrid infrastructures.",
    color: "emerald",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
  {
    icon: ShieldCheck,
    title: "End-to-End QA",
    description: "Engineering reliability and security across every platform.",
    color: "amber",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
];

export default function StatsSection() {
  return (
    <section id="about" className="relative py-24 overflow-hidden bg-slate-50">
      {/* --- Decorative Background Elements --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* --- LEFT: Text Content --- */}
          <FadeUp>
            <div className="text-left">
              <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold tracking-wide text-xs uppercase mb-6 border border-blue-200">
                About Us
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-slate-900 leading-tight">
                Engineering Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                  Digital Future
                </span>
              </h2>

              <p className="text-lg text-slate-600 leading-relaxed mb-8">
                We are a Dubai-based technology powerhouse transforming
                businesses with Cloud, AI, and next-gen Managed Services. From
                modernizing applications to managing on-prem data centres and
                delivering end-to-end QA across every platform, we engineer
                reliability and innovation. Your digital future - built,
                secured, and optimized.
              </p>
            </div>
          </FadeUp>

          {/* --- RIGHT: Feature Cards Grid (Replaces Numbers) --- */}
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index} className="h-full">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="h-full bg-white/60 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 group"
                  >
                    {/* Icon with Dynamic Colors */}
                    <div
                      className={`w-12 h-12 rounded-2xl ${item.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-6 h-6 ${item.text}`} />
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {item.title}
                    </h3>

                    <p className="text-sm text-slate-500 leading-relaxed">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
