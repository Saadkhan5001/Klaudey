import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  MonitorCheck,
  Headphones,
  Server,
  ShieldCheck,
  Activity,
  ArrowRight,
  Clock,
  Zap,
  CheckCircle2,
  XCircle,
  Laptop2,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - "Trust Blue" & "Operational Green"
const BRAND_COLOR = "#0078D4";
const SUCCESS_COLOR = "#10B981"; // Green for "Online/Healthy" status
const BG_COLOR = "#F8FAFC";

const services = [
  {
    icon: Laptop2,
    title: "Endpoint Management",
    desc: "We secure and patch every device—laptops, desktops, and mobiles—ensuring your workforce stays productive and protected, wherever they work.",
    features: ["Patch Management", "Remote Monitoring", "Asset Tracking"],
  },
  {
    icon: Headphones,
    title: "Help Desk Support",
    desc: "No more waiting on hold. Our service desk provides rapid, human-centric support to resolve technical issues before they impact business.",
    features: ["24/7 Availability", "<15min Response", "Tier 1-3 Support"],
  },
  {
    icon: Server,
    title: "Server & Network",
    desc: "We keep the lights on. Continuous monitoring of your critical infrastructure ensures 99.99% uptime and peak performance.",
    features: ["Network Health", "Backup Verification", "Performance Tuning"],
  },
];

export default function ManagedItServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "The Control Center" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Background Pulse Effect */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl -z-10 animate-pulse-slow" />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-center">
            <FadeUp>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-8 bg-green-50 border border-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-xs font-bold uppercase tracking-widest text-green-700">
                  Systems Operational
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                Focus on Your Business. <br />
                <span className="text-blue-600">We'll Handle the Tech.</span>
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
                Stop fighting fires. Start preventing them. We provide
                enterprise-grade Managed IT Services that keep your
                infrastructure silent, secure, and scalable.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="text-white px-8 py-6 rounded-full font-bold text-sm shadow-lg hover:-translate-y-1 transition-all border-0"
                  style={{ backgroundColor: BRAND_COLOR }}
                >
                  Get a Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-200 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-full font-bold text-sm"
                >
                  See Service Plans
                </Button>
              </div>
            </FadeUp>

            {/* Floating Status Cards Visual */}
            <FadeUp>
              <div className="mt-16 flex justify-center gap-4 opacity-80 overflow-hidden">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="bg-white border border-slate-100 shadow-xl rounded-xl p-4 flex items-center gap-3 w-64"
                >
                  <div className="p-2 bg-green-100 rounded-lg text-green-600">
                    <Activity className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Network Status
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      99.99% Uptime
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="hidden md:flex bg-white border border-slate-100 shadow-xl rounded-xl p-4 items-center gap-3 w-64"
                >
                  <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Security Threats
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      0 Detected
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="hidden lg:flex bg-white border border-slate-100 shadow-xl rounded-xl p-4 items-center gap-3 w-64"
                >
                  <div className="p-2 bg-purple-100 rounded-lg text-purple-600">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-slate-400 font-bold uppercase">
                      Avg Response
                    </p>
                    <p className="text-sm font-bold text-slate-800">
                      12 Minutes
                    </p>
                  </div>
                </motion.div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* SERVICES TRIAD - Minimalist Cards */}
        <section className="py-24" style={{ backgroundColor: BG_COLOR }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-slate-900 mb-4">
                  Core Capabilities
                </h2>
                <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full" />
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 text-blue-600">
                        <Icon className="w-7 h-7" />
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
                            className="flex items-center gap-2 text-sm text-slate-500"
                          >
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
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

        {/* COMPARISON SECTION - "Proactive vs Reactive" */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                    The Klaudey Difference
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-6">
                    Stop waiting for things to break.
                  </h2>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Traditional IT support is reactive—you call when you have a
                    problem. We take a proactive approach, identifying and
                    fixing issues before they disrupt your day.
                  </p>
                  <div className="flex gap-4">
                    <div className="flex-1 p-6 bg-red-50 rounded-xl border border-red-100 opacity-60 grayscale hover:grayscale-0 transition-all">
                      <div className="flex items-center gap-2 mb-2 text-red-700 font-bold">
                        <XCircle className="w-5 h-5" /> Break/Fix Model
                      </div>
                      <p className="text-xs text-red-600/80">
                        Unpredictable costs. Downtime. Frustration.
                      </p>
                    </div>
                    <div className="flex-1 p-6 bg-green-50 rounded-xl border border-green-100 shadow-md transform scale-105">
                      <div className="flex items-center gap-2 mb-2 text-green-700 font-bold">
                        <CheckCircle2 className="w-5 h-5" /> Managed Model
                      </div>
                      <p className="text-xs text-green-600/80">
                        Fixed monthly fee. 99% Uptime. Peace of mind.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="relative bg-slate-900 text-white rounded-2xl p-8 shadow-2xl">
                  <div className="absolute top-0 right-0 p-6 opacity-20">
                    <MonitorCheck className="w-32 h-32" />
                  </div>
                  <h3 className="text-2xl font-bold mb-6 relative z-10">
                    Live Dashboard
                  </h3>

                  <div className="space-y-4 relative z-10">
                    {[
                      {
                        label: "Server Load",
                        val: "32%",
                        status: "Optimal",
                        color: "bg-green-500",
                      },
                      {
                        label: "Network Latency",
                        val: "12ms",
                        status: "Excellent",
                        color: "bg-green-500",
                      },
                      {
                        label: "Updates Pending",
                        val: "0",
                        status: "Up to Date",
                        color: "bg-blue-500",
                      },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-slate-800 p-4 rounded-lg flex items-center justify-between border border-slate-700"
                      >
                        <span className="text-slate-400 text-sm">
                          {stat.label}
                        </span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono font-bold">
                            {stat.val}
                          </span>
                          <span
                            className={`w-2 h-2 rounded-full ${stat.color} shadow-[0_0_10px_currentColor]`}
                          />
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-6 border-t border-slate-700">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-bold">
                        JD
                      </div>
                      <div>
                        <p className="text-sm font-bold">John Doe</p>
                        <p className="text-xs text-slate-400">
                          Dedicated Account Manager
                        </p>
                      </div>
                      <Button
                        size="sm"
                        variant="secondary"
                        className="ml-auto text-xs"
                      >
                        Contact
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-blue-600 text-white text-center">
          <div className="container mx-auto px-6">
            <FadeUp>
              <div className="max-w-2xl mx-auto">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
                <h2 className="text-3xl font-bold mb-6">
                  Switch to Better IT Today
                </h2>
                <p className="text-blue-100 text-lg mb-8">
                  Experience the difference of having a dedicated IT department
                  for a fraction of the cost.
                </p>
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-6 rounded-full font-bold text-base shadow-xl border-0"
                >
                  Schedule Discovery Call
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
