import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Monitor,
  Router,
  Server,
  HardDrive,
  Cpu,
  ShieldCheck,
  Truck,
  Wifi,
  Settings,
  ArrowRight,
  CheckCircle2,
  Box,
  Globe,
  Headphones,
  Keyboard,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - Industrial/Tech Theme
const BRAND_COLOR = "#2563EB"; // Royal Blue (Trust/Corporate)
const METAL_GRADIENT = "linear-gradient(135deg, #F8FAFC 0%, #E2E8F0 100%)"; // Metallic Silver
const BG_COLOR = "#F8FAFC"; // Very light slate

const hardwareCategories = [
  {
    icon: Monitor,
    title: "Computer & Accessories",
    subtitle: "End-User Computing",
    desc: "Enterprise-grade workstations, laptops, and peripherals designed for productivity and longevity.",
    specs: [
      "High-Performance Workstations",
      "Ultralight Laptops",
      "Ergonomic Peripherals",
      "4K Monitors",
    ],
  },
  {
    icon: Router,
    title: "Networking Devices",
    subtitle: "Connectivity Core",
    desc: "Robust switches, routers, and firewalls to ensure high-speed, secure, and uninterrupted data flow.",
    specs: [
      "Core & Edge Switches",
      "Next-Gen Firewalls",
      "Wireless Access Points",
      "SD-WAN Gateways",
    ],
  },
  {
    icon: Server,
    title: "Physical Servers",
    subtitle: "Compute Power",
    desc: "Rack, tower, and blade servers optimized for virtualization, database management, and high-performance computing.",
    specs: [
      "Rackmount Servers",
      "Blade Enclosures",
      "GPU Accelerated Nodes",
      "High-Availability Clusters",
    ],
  },
  {
    icon: HardDrive,
    title: "Physical Storage",
    subtitle: "Data Retention",
    desc: "Scalable storage solutions (SAN, NAS, DAS) ensuring your data is accessible, backed up, and secure.",
    specs: [
      "All-Flash Arrays",
      "Hybrid Storage",
      "Tape Backup Systems",
      "Object Storage",
    ],
  },
];

export default function ItInfrastructurePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "Technical Blueprint" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white border-b border-slate-200">
          {/* Blueprint Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                "linear-gradient(#2563EB 1px, transparent 1px), linear-gradient(90deg, #2563EB 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm mb-6 bg-slate-100 border border-slate-300">
                  <Box className="w-4 h-4 text-slate-600" />
                  <span className="text-xs font-mono font-bold uppercase tracking-widest text-slate-700">
                    Global Hardware Procurement
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  The Foundation of <br />
                  <span className="relative inline-block text-blue-600">
                    Modern Enterprise
                    {/* Underline decoration */}
                    <svg
                      className="absolute w-full h-3 -bottom-1 left-0 text-blue-200 -z-10"
                      viewBox="0 0 100 10"
                      preserveAspectRatio="none"
                    >
                      <path
                        d="M0 5 Q 50 10 100 5"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="none"
                      />
                    </svg>
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  We supply, deploy, and maintain the critical physical
                  infrastructure that powers your business. From data center
                  racks to the laptop on your desk.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-md font-semibold text-sm shadow-lg hover:translate-y-[-2px] transition-all"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Request Hardware Quote
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-md font-semibold text-sm"
                  >
                    View Catalog
                  </Button>
                </div>

                {/* Trust Badges */}
                <div className="mt-10 flex items-center gap-6 text-slate-400 grayscale opacity-80">
                  {/* Placeholder logos - replace with real partner logos if available */}
                  <div className="flex items-center gap-2">
                    <Globe className="w-4 h-4" /> Global Sourcing
                  </div>
                  <div className="w-px h-4 bg-slate-300" />
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> OEM Warranty
                  </div>
                  <div className="w-px h-4 bg-slate-300" />
                  <div className="flex items-center gap-2">
                    <Truck className="w-4 h-4" /> Fast Logistics
                  </div>
                </div>
              </FadeUp>

              {/* Right Hero Visual - "Hardware Stack" */}
              <FadeUp>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-600/5 rounded-3xl transform rotate-3 scale-95" />
                  <div className="relative bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden p-2">
                    <img
                      src="https://images.unsplash.com/photo-1591405351990-4726e331f141?q=80&w=2670&auto=format&fit=crop"
                      alt="Enterprise Server Rack"
                      className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                    />

                    {/* Floating Spec Card */}
                    <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-slate-200 max-w-xs">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[10px] font-bold uppercase text-slate-400">
                          Inventory Status
                        </span>
                        <span className="text-[10px] font-bold uppercase text-green-600 bg-green-50 px-2 py-0.5 rounded-full border border-green-100">
                          Ready to Ship
                        </span>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <Server className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-slate-700">
                            Blade Servers (x64)
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Router className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-slate-700">
                            Enterprise Switches
                          </span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Monitor className="w-4 h-4 text-blue-600" />
                          <span className="text-xs font-bold text-slate-700">
                            Workstation Setup
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

        {/* SERVICES SECTION - "Product Spec Sheets" */}
        <section className="py-24 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                  Hardware Categories
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  We partner with top-tier OEMs to deliver reliable,
                  high-performance hardware tailored to your specific
                  infrastructure needs.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-2 gap-6">
              {hardwareCategories.map((item, index) => {
                const Icon = item.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white rounded-xl border border-slate-200 hover:border-blue-400 transition-all duration-300 shadow-sm hover:shadow-md overflow-hidden flex flex-col h-full">
                      {/* Card Header with Metallic Gradient */}
                      <div
                        className="p-6 border-b border-slate-100"
                        style={{ background: METAL_GRADIENT }}
                      >
                        <div className="flex justify-between items-start">
                          <div className="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center shadow-sm text-blue-600 mb-4">
                            <Icon className="w-6 h-6" />
                          </div>
                          <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-blue-500 transition-colors transform group-hover:translate-x-1" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-800">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono text-slate-500 uppercase tracking-wider mt-1">
                          {item.subtitle}
                        </p>
                      </div>

                      {/* Card Body */}
                      <div className="p-6 flex-1 flex flex-col justify-between bg-white">
                        <p className="text-slate-600 text-sm leading-relaxed mb-6">
                          {item.desc}
                        </p>

                        <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                          <span className="text-[10px] font-bold text-slate-400 uppercase mb-2 block">
                            Key Specifications
                          </span>
                          <div className="grid grid-cols-2 gap-y-2 gap-x-4">
                            {item.specs.map((spec, i) => (
                              <div
                                key={i}
                                className="flex items-center gap-1.5"
                              >
                                <div className="w-1 h-1 bg-blue-500 rounded-full" />
                                <span className="text-xs font-medium text-slate-700">
                                  {spec}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* LOGISTICS / PROCESS SECTION */}
        <section className="py-20 bg-white border-t border-slate-200">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <div className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 bg-blue-50 text-blue-700">
                    End-to-End Service
                  </div>
                  <h2 className="text-3xl font-bold text-slate-900 mb-6">
                    Streamlined Procurement <br /> & Deployment
                  </h2>
                  <p className="text-slate-600 leading-relaxed mb-8">
                    We don't just ship boxes. We handle the entire lifecycle of
                    your IT assets, from strategic sourcing and volume licensing
                    to on-site installation and configuration.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Strategic Sourcing",
                        desc: "Leveraging global partnerships to get the best pricing.",
                        icon: Globe,
                      },
                      {
                        title: "Secure Logistics",
                        desc: "Tracked shipping and secure chain of custody.",
                        icon: Truck,
                      },
                      {
                        title: "Configuration Services",
                        desc: "Pre-imaging and BIOS configuration before delivery.",
                        icon: Settings,
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center text-blue-600">
                          <step.icon className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-slate-900 text-sm">
                            {step.title}
                          </h4>
                          <p className="text-xs text-slate-500">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Abstract "Supply Chain" Visual */}
                <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/20 rounded-full blur-[80px]" />

                  <div className="relative z-10 grid grid-cols-2 gap-4">
                    <div className="col-span-2 bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Box className="w-8 h-8 text-blue-400" />
                        <div>
                          <p className="font-bold text-sm">Order #8921-X</p>
                          <p className="text-xs text-slate-400">
                            20x Enterprise Workstations
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded">
                        Dispatched
                      </span>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-400 uppercase mb-2">
                        Lead Time
                      </p>
                      <p className="text-2xl font-bold text-white">
                        48
                        <span className="text-sm font-normal text-slate-400">
                          hrs
                        </span>
                      </p>
                    </div>

                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700">
                      <p className="text-xs text-slate-400 uppercase mb-2">
                        Warranty
                      </p>
                      <p className="text-2xl font-bold text-white">
                        3
                        <span className="text-sm font-normal text-slate-400">
                          yrs
                        </span>
                      </p>
                    </div>

                    <div className="col-span-2 mt-4 pt-4 border-t border-slate-700">
                      <div className="flex items-center justify-between text-xs text-slate-400">
                        <span>Warehouse A</span>
                        <div className="flex-1 border-t border-dashed border-slate-600 mx-4 relative">
                          <Truck className="absolute -top-2.5 left-1/2 -ml-2 w-5 h-5 text-blue-400" />
                        </div>
                        <span>Client Site</span>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-20 bg-slate-100 text-center relative overflow-hidden">
          {/* Background Decoration */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                "linear-gradient(rgba(37, 99, 235, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.5) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <FadeUp>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Equip Your Workforce Today
              </h2>
              <p className="text-slate-600 max-w-xl mx-auto mb-8">
                Get a customized quote for bulk hardware orders or
                infrastructure upgrades. Our team is ready to assist with sizing
                and compatibility checks.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-6 rounded-md font-bold text-base shadow-lg"
                >
                  Request Quote
                </Button>
                <Button
                  variant="outline"
                  className="border-slate-300 bg-white text-slate-700 hover:bg-slate-50 px-8 py-6 rounded-md font-bold text-base"
                >
                  Contact Sales
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
