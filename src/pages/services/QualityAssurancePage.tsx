import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Scan,
  Smartphone,
  Gamepad2,
  Glasses,
  Monitor,
  Bug,
  ShieldCheck,
  Crosshair,
  Gauge,
  ArrowRight,
  GitBranch,
  Repeat,
  Terminal,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// THEME COLORS - Aligned with Microsoft/Azure Blue Theme
const BRAND_COLOR = "#0078D4"; // Deep Azure
const ACCENT_COLOR = "#43BAF4"; // Cyan Bright
const BG_COLOR = "#F8F9FA"; // Standard Light Gray

const qaServices = [
  {
    icon: Glasses,
    title: "AR/VR Testing",
    subtitle: "Immersive Quality",
    desc: "Ensuring spatial accuracy, motion tracking stability, and user comfort to prevent motion sickness in immersive environments.",
    checks: ["Field of View (FOV)", "Motion Latency", "3D Object Interaction"],
  },
  {
    icon: Gamepad2,
    title: "Gaming QA",
    subtitle: "Performance & Physics",
    desc: "Rigorous stress testing for frame-rate stability, collision detection, and multiplayer synchronization across consoles and PC.",
    checks: ["FPS Optimization", "Physics Engine", "Multiplayer Netcode"],
  },
  {
    icon: Smartphone,
    title: "Mobile App QA",
    subtitle: "Android & iOS",
    desc: "Combatting device fragmentation. We test on real devices to ensure UI responsiveness and functional parity across OS versions.",
    checks: ["Device Fragmentation", "Battery Drain", "Network Interruptions"],
  },
  {
    icon: Monitor,
    title: "Web Applications",
    subtitle: "Cross-Browser Compatibility",
    desc: "Validating functionality across Chrome, Safari, and Edge while ensuring responsive layouts for every screen size.",
    checks: ["Responsive Design", "API Integration", "Security Compliance"],
  },
];

const methodologies = [
  {
    icon: Repeat,
    title: "Agile Testing",
    desc: "Testing isn't a phase; it's a constant. We embed QA engineers into your sprints, ensuring continuous feedback and rapid iteration cycles.",
  },
  {
    icon: GitBranch,
    title: "DevOps & CI/CD",
    desc: "We integrate automated test scripts directly into your deployment pipeline (Jenkins, Azure DevOps), catching bugs before they merge.",
  },
  {
    icon: Terminal,
    title: "Test Automation",
    desc: "Using frameworks like Selenium and Cypress to automate repetitive regression tests, freeing up humans for high-value exploratory testing.",
  },
  {
    icon: Lock,
    title: "DevSecOps",
    desc: "Security from day one. We perform static code analysis (SAST) and dynamic scanning (DAST) to identify vulnerabilities early.",
  },
];

export default function QualityAssurancePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "The Blue Scanner" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Blue Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `linear-gradient(${BRAND_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_COLOR} 1px, transparent 1px)`,
              backgroundSize: "40px 40px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-blue-50 border border-blue-100">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                    Zero Defect Policy
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Engineered for <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                    Flawless Performance
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Bugs cost money. We eliminate them. From immersive AR worlds
                  to high-load fintech apps, we validate every pixel,
                  interaction, and API call.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all border-0"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Start Testing
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 px-8 py-6 rounded-full font-bold text-sm"
                    onClick={() => {
                      document
                        .getElementById("methodologies")
                        ?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    View Methodologies
                  </Button>
                </div>
              </FadeUp>

              {/* Hero Visual: "The Scan" (Blue Theme) */}
              <FadeUp>
                <div className="relative">
                  {/* Abstract Phone/Screen Shape */}
                  <div className="relative bg-slate-900 rounded-[2.5rem] p-4 shadow-2xl border-4 border-slate-800 overflow-hidden aspect-[4/5] max-w-md mx-auto">
                    {/* Screen Content */}
                    <div className="absolute inset-0 bg-slate-950 flex flex-col items-center justify-center">
                      {/* Scanning Line Animation - Blue */}
                      <motion.div
                        initial={{ top: "0%" }}
                        animate={{ top: "100%" }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                        }}
                        className="absolute left-0 right-0 h-1 bg-cyan-500 shadow-[0_0_20px_rgba(67,186,244,0.8)] z-20"
                      />

                      {/* Grid of "Modules" being tested */}
                      <div className="grid grid-cols-2 gap-4 p-8 w-full opacity-50">
                        {[1, 2, 3, 4].map((i) => (
                          <div
                            key={i}
                            className="bg-slate-800 rounded-xl h-24 w-full animate-pulse"
                          />
                        ))}
                      </div>

                      {/* Success Badge Popups - Green for Success, Blue border */}
                      <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          repeatDelay: 0.5,
                        }}
                        className="absolute z-30 bg-white/10 backdrop-blur-md border border-cyan-500/50 px-4 py-2 rounded-lg flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                          <CheckCircle2 className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white text-xs font-bold">
                            Test_Case_0{Math.floor(Math.random() * 9)}
                          </p>
                          <p className="text-cyan-300 text-[10px] uppercase">
                            Verified
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION - "The Test Lab" */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Comprehensive Coverage
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  We don't just "click around." We engineer specific test plans
                  for every platform, identifying critical failures before your
                  users do.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {qaServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-lg relative overflow-hidden">
                      {/* Background Number */}
                      <span className="absolute top-4 right-6 text-6xl font-black text-slate-50 group-hover:text-blue-50 transition-colors pointer-events-none">
                        0{index + 1}
                      </span>

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                          <Icon className="w-6 h-6 text-blue-600" />
                        </div>

                        <h3 className="text-xl font-bold text-slate-900 mb-1">
                          {service.title}
                        </h3>
                        <p className="text-xs font-bold text-blue-500 uppercase tracking-wide mb-4">
                          {service.subtitle}
                        </p>

                        <p className="text-slate-600 leading-relaxed mb-6 text-sm">
                          {service.desc}
                        </p>

                        <div className="space-y-2">
                          {service.checks.map((check, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-2 text-xs font-medium text-slate-500"
                            >
                              <Crosshair className="w-3.5 h-3.5 text-blue-400" />
                              {check}
                            </div>
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

        {/* METHODOLOGIES SECTION - Added as requested */}
        <section id="methodologies" className="py-24 bg-white relative">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="mb-16">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-blue-50 text-blue-600 border border-blue-100">
                  Our Process
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                  Modern QA Methodologies
                </h2>
                <p className="text-slate-600 max-w-2xl text-lg">
                  We move fast without breaking things. By integrating Quality
                  Assurance early in the development lifecycle (Shift Left), we
                  reduce costs and accelerate time-to-market.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {methodologies.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="relative pl-8 border-l-2 border-slate-100 hover:border-blue-400 transition-colors duration-300">
                      <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-white border-2 border-blue-400" />
                      <div className="mb-4">
                        <Icon className="w-8 h-8 text-blue-600" />
                      </div>
                      <h3 className="text-lg font-bold text-slate-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* PROCESS / METRICS SECTION - Dark Slate Blue */}
        <section className="py-24 bg-[#0F172A] text-white overflow-hidden relative">
          {/* Abstract "Bugs" Background */}
          <div className="absolute inset-0 opacity-10">
            {[...Array(10)].map((_, i) => (
              <Bug
                key={i}
                className="absolute text-cyan-500 w-8 h-8"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  transform: `rotate(${Math.random() * 360}deg)`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-cyan-400">
                    <Gauge className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">
                      Performance Metrics
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    Don't let glitches <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      kill your retention.
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Users abandon apps that freeze, lag, or crash. Our automated
                    regression suites and load testing protocols ensure you
                    scale without failing.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-cyan-400">99.9%</p>
                      <p className="text-sm text-slate-400 mt-1">
                        Crash-Free Users
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                      <p className="text-3xl font-bold text-cyan-400">
                        &lt;200ms
                      </p>
                      <p className="text-sm text-slate-400 mt-1">
                        API Latency Goal
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Visual Comparison: Bug vs Clean Code */}
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-1 overflow-hidden">
                  <div className="bg-[#1e1e1e] rounded-xl p-6 font-mono text-xs md:text-sm text-slate-300 shadow-inner">
                    <div className="flex gap-2 mb-4 border-b border-white/10 pb-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <span className="ml-auto opacity-50">test_suite.py</span>
                    </div>

                    <div className="space-y-1">
                      <p>
                        <span className="text-purple-400">def</span>{" "}
                        <span className="text-blue-400">run_diagnostics</span>
                        ():
                      </p>
                      <p className="pl-4 text-slate-500">
                        # Initializing environment...
                      </p>
                      <p className="pl-4">
                        check_memory_leaks(){" "}
                        <span className="text-green-500">✓ PASSED</span>
                      </p>
                      <p className="pl-4">
                        validate_assets_3d(){" "}
                        <span className="text-green-500">✓ PASSED</span>
                      </p>
                      <p className="pl-4">
                        stress_test_concurrent(5000){" "}
                        <span className="text-green-500">✓ PASSED</span>
                      </p>
                      <br />
                      <div className="bg-blue-500/10 border border-blue-500/30 p-2 rounded text-blue-400">
                        <p>All Systems Operational.</p>
                        <p>Ready for Deployment.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20" style={{ backgroundColor: "#EFF6FF" }}>
          <div className="container mx-auto px-6 text-center">
            <FadeUp>
              <div className="max-w-3xl mx-auto bg-blue-50 rounded-3xl p-12 border border-blue-100">
                <Scan className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Ready to Polish Your Product?
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  Stop guessing and start validating. Get a comprehensive QA
                  audit for your application today.
                </p>
                <div className="flex justify-center">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-base shadow-lg"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Audit My App
                  </Button>
                </div>
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
