import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Server,
  Shield,
  Cpu,
  ArrowRight,
  Database,
  Layers,
  Box,
  MonitorCheck,
  Zap,
  Lock,
  Network,
  HardDrive,
  CloudCog,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - Consistent Blue/White Theme
const BRAND_COLOR = "#0F172A"; // Dark Slate (representing hardware)
const ACCENT_COLOR = "#43BAF4"; // Cyan/Blue
const BG_COLOR = "#F8F9FA";

export default function PrivateCloudOnPremPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "The Sovereign Core" */}
        <section className="relative pt-24 pb-24 overflow-hidden bg-white">
          {/* Abstract Server Rack Background */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="h-full w-full"
              style={{
                backgroundImage:
                  "linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)",
                backgroundSize: "40px 120px", // Rectangular "Rack unit" shape
              }}
            />
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="max-w-4xl">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md mb-6 bg-slate-100 border border-slate-200">
                  <Server className="w-4 h-4 text-slate-700" />
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-600">
                    Infrastructure Solutions
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Ultimate Control. <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                    Maximum Performance.
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-2xl">
                  Build a future-proof Private Cloud with our end-to-end data
                  center solutions. From physical racks to Software-Defined Data
                  Centers (SDDC), we bring the agility of the cloud behind your
                  firewall.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-lg font-semibold text-sm shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all"
                    style={{ backgroundColor: "#0F172A" }} // Slate 900
                  >
                    Design Your Data Center
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-lg font-semibold text-sm"
                    onClick={() => {
                      const element = document.getElementById("solutions");
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    Explore Solutions
                  </Button>
                </div>
              </FadeUp>
            </div>
          </div>

          {/* Decorative graphic: The "Stack" */}
          <div className="hidden lg:block absolute top-0 right-0 h-full w-1/3 bg-slate-50 border-l border-slate-200">
            <div className="h-full w-full flex flex-col justify-center gap-2 p-8 opacity-50">
              {[1, 2, 3, 4, 5].map((i) => (
                <motion.div
                  key={i}
                  initial={{ width: "80%", opacity: 0 }}
                  animate={{ width: "100%", opacity: 1 }}
                  transition={{ delay: i * 0.1, duration: 0.8 }}
                  className="h-24 rounded-lg border border-slate-300 bg-white relative overflow-hidden"
                >
                  <div className="absolute top-3 left-3 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-slate-200" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 1: HYBRID & CLOUD EXTENSIONS (AWS/Azure/VMware) */}
        <section id="solutions" className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  The Hybrid Edge
                </h2>
                <p className="text-slate-600 max-w-2xl">
                  Bring the capabilities of public cloud providers directly to
                  your on-premise environment for low-latency and data
                  sovereignty requirements.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {/* Azure Stack */}
              <StaggerItem>
                <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors shadow-sm h-full group">
                  <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CloudCog className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    Azure On-Prem
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    Azure Stack HCI & Arc
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Run Azure virtual machines on-premises with hyperconverged
                    infrastructure. Manage your entire estate through the Azure
                    Portal with Azure Arc.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Hybrid Cloud Operations",
                      "Azure Kubernetes Service (AKS)",
                      "Disaster Recovery",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-500 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              {/* AWS Outposts */}
              <StaggerItem>
                <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-orange-400 transition-colors shadow-sm h-full group">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Box className="w-6 h-6 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    AWS On-Prem
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">
                    AWS Outposts & EKS Anywhere
                  </p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    Extend AWS infrastructure, services, APIs, and tools to
                    virtually any datacenter or co-location space for a
                    consistent hybrid experience.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Local Data Processing",
                      "Low Latency Applications",
                      "Consistent API Model",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-500 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-orange-400 rounded-full" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>

              {/* VMware */}
              <StaggerItem>
                <div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-green-400 transition-colors shadow-sm h-full group">
                  <div className="w-12 h-12 bg-green-50 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <Layers className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    VMware Cloud
                  </h3>
                  <p className="text-slate-500 text-sm mb-4">vSphere & VCF</p>
                  <p className="text-slate-600 text-sm leading-relaxed mb-6">
                    The industry standard for virtualization. Deploy a complete
                    Cloud Foundation (VCF) to manage compute, storage, and
                    networking as a single platform.
                  </p>
                  <ul className="space-y-2">
                    {[
                      "Software Defined Data Center",
                      "vSAN Storage",
                      "NSX Networking",
                    ].map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs text-slate-500 font-medium"
                      >
                        <div className="w-1.5 h-1.5 bg-green-400 rounded-full" />{" "}
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* SECTION 2: AI INFRASTRUCTURE (Dark Mode) */}
        <section className="py-24 bg-[#0B1120] text-white relative overflow-hidden">
          {/* Tech Grid Lines */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(67, 186, 244, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(67, 186, 244, 0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <Zap className="w-5 h-5 text-cyan-400" />
                    <span className="text-cyan-400 font-mono text-sm uppercase tracking-widest">
                      High Performance Compute
                    </span>
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">
                    Infrastructure for <br />
                    On-Prem <span className="text-cyan-400">AI Solutions</span>
                  </h2>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    Train and infer your models securely behind your firewall.
                    We deploy high-density GPU clusters and specialized storage
                    for AI workloads that demand low latency and strict data
                    privacy.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 border border-slate-700 bg-slate-800/50 rounded-lg">
                      <Cpu className="w-6 h-6 text-white mb-2" />
                      <h4 className="font-bold">GPU Clusters</h4>
                      <p className="text-xs text-slate-400">
                        NVIDIA Certified Systems
                      </p>
                    </div>
                    <div className="p-4 border border-slate-700 bg-slate-800/50 rounded-lg">
                      <HardDrive className="w-6 h-6 text-white mb-2" />
                      <h4 className="font-bold">AI Storage</h4>
                      <p className="text-xs text-slate-400">
                        High IOPS All-Flash NVMe
                      </p>
                    </div>
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Visual Abstract: The "Brain" in the Server */}
                <div className="relative">
                  <div className="absolute -inset-2 bg-cyan-500/20 blur-xl rounded-full" />
                  <div className="bg-slate-900 border border-slate-700 p-8 rounded-2xl relative">
                    <div className="flex justify-between items-center mb-6 border-b border-slate-700 pb-4">
                      <span className="font-mono text-xs text-cyan-500">
                        SYSTEM_READY
                      </span>
                      <div className="flex gap-1">
                        <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-ping" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      {[1, 2, 3].map((i) => (
                        <div key={i} className="flex items-center gap-4">
                          <div className="w-12 h-1 bg-slate-700 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: "0%" }}
                              whileInView={{ width: "100%" }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                repeatDelay: 1,
                                delay: i * 0.2,
                              }}
                              className="h-full bg-cyan-500"
                            />
                          </div>
                          <div className="flex-1 font-mono text-xs text-slate-400">
                            Tensor_Core_Processing_Unit_0{i}
                          </div>
                          <div className="text-xs text-white font-bold">
                            98%
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-8 pt-6 border-t border-slate-700 flex justify-between items-end">
                      <div>
                        <p className="text-xs text-slate-500 mb-1">
                          Data Sovereignty
                        </p>
                        <p className="text-white font-bold flex items-center gap-2">
                          <Lock className="w-3 h-3 text-green-500" /> Protected
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-cyan-600 hover:bg-cyan-500 text-white border-0"
                      >
                        View Specs
                      </Button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SECTION 3: CORE INFRASTRUCTURE (Bento Grid) */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-slate-100 text-slate-600 border border-slate-200">
                  Core Foundations
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900">
                  Building the Modern Data Center
                </h2>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
              {/* Large Block - HCI */}
              <StaggerItem className="md:col-span-2 md:row-span-2">
                <div className="h-full bg-slate-50 rounded-2xl p-8 border border-slate-200 flex flex-col justify-between group hover:border-blue-300 transition-colors">
                  <div>
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                      <Database className="w-6 h-6 text-slate-700" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">
                      HCI Solutions
                    </h3>
                    <p className="text-slate-600 leading-relaxed mb-6">
                      Simplify your stack with Hyper-Converged Infrastructure.
                      We partner with Nutanix and Dell VxRail to combine
                      compute, storage, and networking into a single,
                      software-defined system that scales linearly.
                    </p>
                    <ul className="grid grid-cols-2 gap-2 text-sm text-slate-500">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />{" "}
                        1-Click Upgrades
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />{" "}
                        Self-Healing
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-blue-500" />{" "}
                        Linear Scale
                      </li>
                    </ul>
                  </div>
                  <img
                    src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2600&auto=format&fit=crop"
                    className="w-full h-48 object-cover rounded-xl mt-6 grayscale group-hover:grayscale-0 transition-all opacity-80"
                    alt="Server Racks"
                  />
                </div>
              </StaggerItem>

              {/* SDDC Block */}
              <StaggerItem className="md:col-span-2">
                <div className="h-full bg-white rounded-2xl p-8 border border-slate-200 flex flex-col justify-center hover:shadow-lg transition-all">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 mb-2">
                        SDDC
                      </h3>
                      <p className="text-slate-500 text-sm">
                        Software-Defined Data Center
                      </p>
                    </div>
                    <Network className="w-8 h-8 text-blue-500" />
                  </div>
                  <p className="text-slate-600 mt-4 text-sm">
                    Virtualize every layer. Achieve zero-touch provisioning and
                    automated policy management across your entire
                    infrastructure.
                  </p>
                </div>
              </StaggerItem>

              {/* Physical DC Block */}
              <StaggerItem className="md:col-span-2">
                <div className="h-full bg-slate-900 text-white rounded-2xl p-8 border border-slate-800 flex flex-col justify-center relative overflow-hidden group">
                  <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black/50 to-transparent pointer-events-none" />
                  <div className="flex items-center gap-3 mb-4">
                    <Server className="w-6 h-6 text-slate-300" />
                    <h3 className="text-xl font-bold">Physical Data Centre</h3>
                  </div>
                  <p className="text-slate-400 text-sm mb-4 max-w-sm">
                    The backbone of IT. We design ruggedized physical
                    infrastructure including racks, smart PDUs, precision
                    cooling, and structured cabling.
                  </p>
                  <div className="flex gap-3 text-xs font-mono text-slate-500">
                    <span>RACKS</span>
                    <span>•</span>
                    <span>POWER</span>
                    <span>•</span>
                    <span>COOLING</span>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 border-t border-slate-100 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
            <FadeUp>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Ready to Secure Your Infrastructure?
              </h2>
              <p className="text-slate-600 max-w-2xl mx-auto mb-8">
                Whether you need a full data center build-out or a single rack
                of HCI, our architects are ready to design your solution.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-slate-900 text-white px-10 py-6 rounded-full font-bold text-base hover:bg-slate-800 transition-all shadow-lg"
              >
                Schedule Site Survey <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
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
