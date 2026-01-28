import { useState, useRef } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  RefreshCw,
  Code2,
  Server,
  Layers,
  ArrowRight,
  Terminal,
  Cpu,
  CheckCircle2,
  AlertTriangle,
  ArrowDown,
  Rocket,
  LayoutTemplate,
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// THEME COLORS
const LEGACY_BG = "#0A0F1C"; // Dark Terminal Background
const LEGACY_TEXT = "#00FF94"; // Terminal Green
const MODERN_ACCENT = "#43BAF4"; // Brand Blue

const services = [
  {
    icon: Code2,
    title: "Application Development",
    desc: "Build cloud-native applications from scratch using modern microservices architectures that scale effortlessly.",
    tags: ["React/Node", "Cloud-Native", "Microservices"],
  },
  {
    icon: RefreshCw,
    title: "Application Modernization",
    desc: "Refactor monolithic legacy systems into modular, agile applications without disrupting business operations.",
    tags: ["Containerization", "DevOps", "API-First"],
  },
  {
    icon: Layers,
    title: "Application Re-engineering",
    desc: "Redesign core logic and user interfaces to improve performance, usability, and maintainability.",
    tags: ["UX/UI Redesign", "Performance Tuning", "Tech Refresh"],
  },
  {
    icon: Server,
    title: "Legacy Migration",
    desc: "Securely move critical data and logic from on-premise mainframes to secure cloud environments.",
    tags: ["Lift & Shift", "Re-platforming", "Data Integrity"],
  },
];

export default function ApplicationModernizationPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* SECTION 1: THE LEGACY TRAP (Retro Terminal Style) */}
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#050a10] text-green-500 font-mono border-b-4 border-green-900">
          {/* Retro Grid Background */}
          <div
            className="absolute inset-0 opacity-20 pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0, 255, 148, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 148, 0.1) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
          {/* Scanline Effect */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent h-2 w-full animate-scanline pointer-events-none opacity-10" />

          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
                className="border border-green-800 bg-black/80 p-6 rounded-sm shadow-2xl backdrop-blur-sm"
              >
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-green-900 pb-2 mb-4">
                  <span className="text-xs uppercase">
                    Legacy_System_Mainframe.exe
                  </span>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-900 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-900 rounded-full" />
                    <div className="w-3 h-3 bg-green-900 rounded-full" />
                  </div>
                </div>

                {/* Terminal Content */}
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    <span className="text-green-700">{">"}</span>{" "}
                    SYSTEM_CHECK_INITIATED...
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 }}
                  >
                    <span className="text-green-700">{">"}</span> WARNING:
                    ARCHITECTURE_OBSOLETE
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.9 }}
                  >
                    <span className="text-green-700">{">"}</span> ERROR:
                    SCALABILITY_LIMIT_REACHED
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.8 }}
                    className="pt-6"
                  >
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
                      Is your legacy code <br />
                      <span className="text-red-500">holding you back?</span>
                    </h1>
                    <p className="text-green-400/80 text-lg max-w-xl leading-relaxed">
                      Monolithic structures. Technical debt. Security
                      vulnerabilities. The cost of doing nothing is higher than
                      the cost of change.
                    </p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 3.5 }}
                    className="pt-8"
                  >
                    <button
                      onClick={() =>
                        document
                          .getElementById("modern-future")
                          ?.scrollIntoView({ behavior: "smooth" })
                      }
                      className="group flex items-center gap-3 text-white border border-green-500 px-6 py-3 hover:bg-green-500/10 transition-colors"
                    >
                      <Terminal className="w-5 h-5" />
                      <span>INITIATE_MODERNIZATION_PROTOCOL</span>
                      <ArrowDown className="w-4 h-4 animate-bounce group-hover:text-green-400" />
                    </button>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* TRANSITION BAR */}
        <div className="h-24 bg-gradient-to-b from-[#050a10] to-slate-50 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center gap-2 opacity-20">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-12 bg-blue-500/50 transform rotate-12"
              />
            ))}
          </div>
          <div className="bg-white px-6 py-2 rounded-full shadow-lg border border-blue-100 flex items-center gap-2 z-10">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
              Upgrade Complete
            </span>
          </div>
        </div>

        {/* SECTION 2: THE MODERN SOLUTION (Clean, White, Blue) */}
        <section id="modern-future" className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16 max-w-3xl mx-auto">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4 bg-blue-50 text-blue-600 border border-blue-100">
                  The Future State
                </span>
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                  Build for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Speed & Scale
                  </span>
                </h2>
                <p className="text-slate-600 text-lg leading-relaxed">
                  We transform rigid, outdated systems into flexible,
                  cloud-native powerhouses. Keep your business logic, but lose
                  the technical debt.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-300 h-full relative overflow-hidden">
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Icon className="w-32 h-32 text-blue-600" />
                      </div>

                      <div className="relative z-10">
                        <div className="w-14 h-14 rounded-2xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-7 h-7 text-blue-600" />
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-slate-600 leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="flex items-center gap-1.5 text-xs font-semibold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md"
                            >
                              <CheckCircle2 className="w-3 h-3 text-blue-500" />{" "}
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* VISUAL FEATURE: "Before vs After" */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left: Text */}
              <FadeUp>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-600">
                    <LayoutTemplate className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">
                      Evolution
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                    From Monolith to <br />
                    <span className="text-blue-600">Microservices</span>
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    We don't just patch old code. We re-architect it. By
                    decoupling your services, we enable independent scaling,
                    faster deployments, and better fault isolation.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                      <div className="p-2 bg-red-100 rounded-lg text-red-600">
                        <AlertTriangle className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          Before: Tightly Coupled
                        </h4>
                        <p className="text-xs text-slate-500">
                          One error crashes the whole system.
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-center text-slate-300">
                      <ArrowDown className="w-5 h-5" />
                    </div>
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-blue-50 border border-blue-100">
                      <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                        <Rocket className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">
                          After: Distributed & Resilient
                        </h4>
                        <p className="text-xs text-slate-500">
                          Services scale and fail independently.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>

              {/* Right: Abstract Graphic */}
              <FadeUp>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-60" />
                  <div className="relative bg-white border border-slate-200 rounded-2xl shadow-2xl p-8">
                    {/* The "Architecture" Visual */}
                    <div className="flex flex-col gap-6">
                      {/* Cloud Layer */}
                      <div className="border-2 border-dashed border-blue-200 rounded-xl p-4 bg-blue-50/50">
                        <div className="flex justify-between text-xs font-bold text-blue-400 mb-4 uppercase tracking-wider">
                          Cloud Environment
                        </div>
                        <div className="grid grid-cols-3 gap-3">
                          {[1, 2, 3].map((i) => (
                            <motion.div
                              key={i}
                              initial={{ y: 20, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ delay: i * 0.2 }}
                              className="bg-white p-3 rounded-lg shadow-sm border border-blue-100 flex flex-col items-center gap-2"
                            >
                              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                                <Cpu className="w-4 h-4 text-blue-600" />
                              </div>
                              <div className="h-2 w-12 bg-slate-100 rounded-full" />
                            </motion.div>
                          ))}
                        </div>
                      </div>

                      {/* Connection Lines */}
                      <div className="h-8 flex justify-center gap-12">
                        <div className="w-0.5 h-full bg-blue-200" />
                        <div className="w-0.5 h-full bg-blue-200" />
                        <div className="w-0.5 h-full bg-blue-200" />
                      </div>

                      {/* Database Layer */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center gap-3">
                          <Server className="w-5 h-5 text-green-400" />
                          <div className="text-xs">
                            <p className="font-bold">Redis Cache</p>
                            <p className="text-slate-500">Hot Data</p>
                          </div>
                        </div>
                        <div className="bg-slate-900 text-white p-4 rounded-xl flex items-center gap-3">
                          <Server className="w-5 h-5 text-blue-400" />
                          <div className="text-xs">
                            <p className="font-bold">PostgreSQL</p>
                            <p className="text-slate-500">Persistent</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage: "radial-gradient(#43BAF4 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          ></div>
          <div className="container mx-auto px-6 text-center relative z-10">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to modernize?
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto mb-10">
                Stop patching yesterday's problems. Start building tomorrow's
                solutions. Let's create a modernization roadmap for your
                enterprise.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 rounded-full font-bold text-lg"
                >
                  Schedule Assessment
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-700 text-white hover:bg-white/10 px-8 py-6 rounded-full font-bold text-lg bg-transparent"
                >
                  Calculate ROI
                </Button>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
