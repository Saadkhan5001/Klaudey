import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Activity,
  Network,
  Zap,
  Globe,
  AlertCircle,
  BarChart2,
  CheckCircle2,
  ArrowRight,
  Server,
  Wifi,
  Search,
  Clock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - "Connectivity Blue" & "Status Green"
const BRAND_COLOR = "#0078D4";
const ACCENT_COLOR = "#0EA5E9"; // Sky Blue
const BG_COLOR = "#F8FAFC";

const services = [
  {
    icon: Activity,
    title: "Network Monitoring",
    desc: "We provide 24/7/365 surveillance of your entire network estate. From routers to endpoints, we track health, latency, and uptime in real-time.",
    features: [
      "SNMP Monitoring",
      "Bandwidth Analysis",
      "Packet Loss Detection",
    ],
  },
  {
    icon: AlertCircle,
    title: "Incident Management",
    desc: "Rapid response when it matters most. Our tiered support teams detect anomalies, triage alerts, and resolve outages before they impact users.",
    features: ["Automated Ticketing", "Root Cause Analysis", "SLA Management"],
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    desc: "Don't just stay online; run faster. We analyze traffic patterns to optimize routing, reduce jitter, and ensure peak performance for critical apps.",
    features: ["Traffic Shaping", "Capacity Planning", "QoS Configuration"],
  },
];

export default function NocServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "Eyes on Glass" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Map Background Pattern */}
          <div className="absolute inset-0 opacity-[0.05] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-cover bg-center" />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-blue-50 border border-blue-100">
                  <Globe className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                    Global Command Center
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Maximum Uptime. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                    Zero Blind Spots.
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Our Network Operations Center (NOC) acts as the central
                  nervous system of your IT. We monitor, manage, and maintain
                  your infrastructure so you never miss a beat.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all border-0"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Tour Our NOC
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 px-8 py-6 rounded-full font-bold text-sm"
                  >
                    Service Levels
                  </Button>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Hero Visual: "The Live Map" */}
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-100 to-cyan-50 rounded-full blur-3xl opacity-60" />
                  <div className="relative bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl p-6 min-h-[350px] overflow-hidden">
                    {/* Map Dots Animation */}
                    <div className="absolute inset-0 opacity-30">
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: [1, 2], opacity: [0.8, 0] }}
                          transition={{
                            repeat: Infinity,
                            duration: 2 + i,
                            delay: i * 0.5,
                          }}
                          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                          style={{
                            top: `${20 + Math.random() * 60}%`,
                            left: `${20 + Math.random() * 60}%`,
                          }}
                        />
                      ))}
                    </div>

                    {/* Status Cards Overlay */}
                    <div className="relative z-10 space-y-4 mt-8">
                      <div className="flex items-center justify-between bg-slate-800/80 backdrop-blur p-3 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-green-500/20 rounded text-green-400">
                            <Wifi className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase font-bold">
                              Latency (Global)
                            </p>
                            <p className="text-white font-mono text-sm">
                              24ms{" "}
                              <span className="text-green-500 text-[10px]">
                                ▼ 2%
                              </span>
                            </p>
                          </div>
                        </div>
                        <div className="h-8 w-24">
                          {/* Fake mini chart */}
                          <div className="flex items-end gap-1 h-full">
                            {[40, 60, 45, 70, 50, 60, 80].map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-green-500/50 rounded-t-sm"
                                style={{ height: `${h}%` }}
                              />
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-between bg-slate-800/80 backdrop-blur p-3 rounded-lg border border-slate-700">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-blue-500/20 rounded text-blue-400">
                            <Server className="w-4 h-4" />
                          </div>
                          <div>
                            <p className="text-xs text-slate-400 uppercase font-bold">
                              Node Status
                            </p>
                            <p className="text-white font-mono text-sm">
                              482/482 Online
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                          <span className="text-xs text-green-400 font-bold">
                            Healthy
                          </span>
                        </div>
                      </div>
                    </div>
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
                  Full-Spectrum Observability
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  We provide the tools, people, and processes to ensure your
                  network delivers the performance your business demands.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full">
                      {/* Connecting Line Decoration */}
                      <div className="absolute top-8 right-8 text-slate-100 group-hover:text-blue-50 transition-colors">
                        <Network className="w-24 h-24 opacity-20" />
                      </div>

                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300 relative z-10">
                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3 relative z-10">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6 relative z-10">
                        {service.desc}
                      </p>

                      <div className="space-y-3 pt-4 border-t border-slate-50 relative z-10">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors"
                          >
                            <CheckCircle2 className="w-3.5 h-3.5" />
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

        {/* FEATURE: "THE INCIDENT LIFECYCLE" */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                    Our Process
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                    When Minutes Count
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Downtime is expensive. Our structured incident management
                    process ensures that when an alert fires, the right people
                    are mobilized instantly.
                  </p>

                  <div className="relative border-l-2 border-slate-100 space-y-8 pl-8">
                    {[
                      {
                        title: "Detect",
                        desc: "Automated monitoring tools catch the anomaly instantly.",
                        icon: Search,
                      },
                      {
                        title: "Isolate",
                        desc: "NOC engineers determine scope and impact.",
                        icon: Network,
                      },
                      {
                        title: "Resolve",
                        desc: "Remediation scripts or expert intervention restores service.",
                        icon: CheckCircle2,
                      },
                    ].map((step, i) => (
                      <div key={i} className="relative">
                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center">
                          <div className="w-2 h-2 bg-blue-500 rounded-full" />
                        </div>
                        <h4 className="font-bold text-slate-900 flex items-center gap-2">
                          {step.title}
                        </h4>
                        <p className="text-sm text-slate-500 mt-1">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="bg-slate-50 rounded-2xl p-8 border border-slate-100">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-white rounded-lg shadow-sm">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900">
                        MTTR Reduction
                      </h4>
                      <p className="text-xs text-slate-500">
                        Mean Time To Recovery
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-bold text-slate-700">
                          Industry Average
                        </span>
                        <span className="text-slate-500">4 Hours</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full w-full" />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="font-bold text-blue-600">
                          Klaudey NOC
                        </span>
                        <span className="text-blue-600 font-bold">15 Mins</span>
                      </div>
                      <div className="h-2 bg-blue-100 rounded-full w-full">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "15%" }}
                          transition={{ duration: 1, delay: 0.5 }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-4 bg-blue-600 text-white rounded-xl text-center">
                    <p className="text-3xl font-bold">95%</p>
                    <p className="text-xs text-blue-100 uppercase tracking-wider mt-1">
                      First Contact Resolution
                    </p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 relative overflow-hidden bg-slate-900 text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />

          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeUp>
              <div className="max-w-2xl mx-auto">
                <BarChart2 className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Optimize Your Uptime
                </h2>
                <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                  Stop reacting to outages and start preventing them. Let our
                  NOC team watch your network so you can watch your business
                  grow.
                </p>
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-10 py-7 rounded-full font-bold text-lg shadow-2xl transition-transform hover:scale-105 border-0"
                >
                  Get NOC Pricing
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
