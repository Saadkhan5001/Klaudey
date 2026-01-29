import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Lock,
  ScanEye,
  Fingerprint,
  Siren,
  Radar,
  FileKey,
  Globe,
  CheckCircle2,
  AlertTriangle,
  Server,
  Eye,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - "Defense Blue" & "Secure Teal"
const BRAND_COLOR = "#0078D4";
const SECURE_COLOR = "#0EA5E9"; // Sky blue/Teal for "Security" accents
const BG_COLOR = "#F8FAFC";
const DARK_BG = "#0F172A"; // Deep Navy for SOC section

const services = [
  {
    icon: Fingerprint,
    title: "Identity & Access (IAM)",
    desc: "We implement Zero Trust architectures. Ensure the right people have the right access to the right resources, contextually and securely.",
    features: [
      "Multi-Factor Auth (MFA)",
      "Single Sign-On (SSO)",
      "Privileged Access",
    ],
  },
  {
    icon: Eye,
    title: "SOC as a Service",
    desc: "Your 24/7 cyber watchtower. Our Security Operations Center monitors your environment around the clock to detect and neutralize threats in real-time.",
    features: ["Threat Hunting", "SIEM Management", "Incident Response"],
  },
  {
    icon: ScanEye,
    title: "Vulnerability Management",
    desc: "We find the cracks before attackers do. Continuous scanning and patch management to harden your attack surface against known exploits.",
    features: ["Penetration Testing", "Automated Patching", "Risk Compliance"],
  },
];

export default function ManagedCybersecurityPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "The Digital Shield" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Abstract Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(${BRAND_COLOR} 1px, transparent 1px), linear-gradient(90deg, ${BRAND_COLOR} 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-blue-50 border border-blue-100">
                  <ShieldCheck className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                    Managed Security Provider
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Secure Your Future <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                    Against Every Threat
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Cyber threats never sleep, and neither do we. We provide
                  enterprise-grade defense, proactive monitoring, and rapid
                  response to keep your data safe.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all border-0"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Analyze My Risk
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 px-8 py-6 rounded-full font-bold text-sm"
                  >
                    View Security Stack
                  </Button>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Hero Visual: "The Radar" */}
                <div className="relative flex justify-center items-center">
                  {/* Pulsing Circles */}
                  <div
                    className="absolute w-[500px] h-[500px] border border-blue-100 rounded-full animate-ping opacity-20"
                    style={{ animationDuration: "3s" }}
                  />
                  <div className="absolute w-[350px] h-[350px] border border-blue-200 rounded-full" />
                  <div className="absolute w-[200px] h-[200px] bg-blue-50 rounded-full blur-2xl opacity-50" />

                  {/* Central Shield */}
                  <div className="relative bg-white p-6 rounded-2xl shadow-2xl border border-blue-100 z-10">
                    <Lock className="w-16 h-16 text-blue-600 mb-4 mx-auto" />
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-slate-700">
                          Endpoint Secured
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-slate-700">
                          Network Filter Active
                        </span>
                      </div>
                      <div className="flex items-center gap-3 bg-slate-50 px-4 py-2 rounded-lg">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span className="text-xs font-bold text-slate-700">
                          Identity Verified
                        </span>
                      </div>
                    </div>

                    {/* Floating "Blocked" Badge */}
                    <motion.div
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 1, duration: 0.5 }}
                      className="absolute -right-12 top-1/2 bg-red-50 border border-red-100 text-red-600 px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-2"
                    >
                      <AlertTriangle className="w-3 h-3" />
                      <span className="text-[10px] font-bold uppercase">
                        Threat Blocked
                      </span>
                    </motion.div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section className="py-24" style={{ backgroundColor: BG_COLOR }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Defense in Depth
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  We employ a multi-layered security strategy. From the user's
                  identity to the network edge, every layer is fortified.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl h-full relative overflow-hidden">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <div className="space-y-3 pt-6 border-t border-slate-50">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-500"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* DARK MODE FEATURE: "SOC DASHBOARD" */}
        <section className="py-24 bg-[#0F172A] text-white relative overflow-hidden">
          {/* Map Background */}
          <div className="absolute inset-0 opacity-10 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-contain" />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-cyan-400">
                    <Radar className="w-5 h-5 animate-spin-slow" />
                    <span className="font-bold text-sm uppercase tracking-wider">
                      Active Monitoring
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6">
                    24/7 Security <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                      Operations Center
                    </span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Attacks don't stop at 5 PM. Neither do we. Our SOC analysts
                    utilize AI-driven SIEM tools to filter noise and detect
                    sophisticated threats across your entire digital estate.
                  </p>

                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="text-3xl font-bold text-white">
                        15
                        <span className="text-sm font-normal text-slate-400">
                          min
                        </span>
                      </p>
                      <p className="text-xs text-cyan-400 mt-1 uppercase tracking-wide">
                        Mean Time to Detect
                      </p>
                    </div>
                    <div className="p-4 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm">
                      <p className="text-3xl font-bold text-white">
                        365
                        <span className="text-sm font-normal text-slate-400">
                          days
                        </span>
                      </p>
                      <p className="text-xs text-cyan-400 mt-1 uppercase tracking-wide">
                        Continuous Uptime
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Visual: "The Command Line" */}
                <div className="bg-black/40 rounded-xl border border-slate-700 p-2 shadow-2xl backdrop-blur-md">
                  <div className="bg-[#0c0c0c] rounded-lg p-6 font-mono text-xs md:text-sm text-slate-300 h-80 overflow-hidden relative">
                    {/* Header */}
                    <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-4">
                      <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500" />
                        <div className="w-3 h-3 rounded-full bg-green-500" />
                      </div>
                      <span className="text-slate-500">
                        Secure_Shell — ssh user@soc-node-01
                      </span>
                    </div>

                    {/* Logs Animation */}
                    <div className="space-y-2">
                      <p>
                        <span className="text-green-500">admin@klaudey:~$</span>{" "}
                        init_security_protocol --level=MAX
                      </p>
                      <p className="text-slate-500">
                        [INFO] Establishing encrypted tunnel...
                      </p>
                      <p className="text-slate-500">
                        [INFO] Connection secured (AES-256).
                      </p>
                      <p className="text-slate-500">
                        [SCAN] Analyzing traffic patterns...
                      </p>
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{
                          repeat: Infinity,
                          duration: 2,
                          repeatType: "reverse",
                        }}
                        className="text-yellow-400"
                      >
                        [ALERT] Suspicious IP detected: 192.168.X.X
                      </motion.div>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-cyan-400"
                      >
                        [ACTION] Firewall rule updated. Threat mitigated.
                      </motion.p>
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2 }}
                      >
                        <span className="text-green-500">admin@klaudey:~$</span>{" "}
                        <span className="animate-pulse">_</span>
                      </motion.p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 text-center">
            <FadeUp>
              <div className="max-w-3xl mx-auto bg-blue-50 rounded-3xl p-12 border border-blue-100">
                <FileKey className="w-12 h-12 text-blue-600 mx-auto mb-6" />
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Don't Wait for a Breach
                </h2>
                <p className="text-slate-600 text-lg mb-8">
                  The cost of a cyberattack is far higher than the cost of
                  prevention. Let us audit your security posture today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-base shadow-lg"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Schedule Security Audit
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
