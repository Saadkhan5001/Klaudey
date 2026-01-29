import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  GitBranch,
  Box,
  Settings,
  Rocket,
  Repeat,
  Terminal,
  Infinity,
  Zap,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Code2,
  Server,
  Layers,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - "Velocity Blue" & "Engineering Slate"
const BRAND_COLOR = "#0078D4";
const ACCENT_COLOR = "#38BDF8"; // Electric Sky Blue
const BG_COLOR = "#F8FAFC";

const services = [
  {
    icon: GitBranch,
    title: "CI/CD Pipelines",
    desc: "Automate your release lifecycle. We build robust pipelines (Jenkins, GitHub Actions, Azure DevOps) that move code from commit to production in minutes, not days.",
    features: [
      "Automated Testing",
      "Blue/Green Deployment",
      "Rollback Recovery",
    ],
  },
  {
    icon: Box,
    title: "Container Services",
    desc: "Orchestrate scale. We manage your Kubernetes (AKS/EKS) environments, ensuring your microservices are portable, scalable, and self-healing.",
    features: ["Docker/Kubernetes", "Cluster Management", "Service Mesh"],
  },
  {
    icon: Settings,
    title: "Infra Automation",
    desc: "Infrastructure as Code (IaC). We treat your servers like software, using Terraform and Ansible to provision, configure, and manage environments instantly.",
    features: ["Terraform / Ansible", "Configuration Mgmt", "Drift Detection"],
  },
];

const doraMetrics = [
  {
    label: "Deployment Freq",
    value: "On-Demand",
    desc: "Multiple times per day",
    color: "text-green-500",
  },
  {
    label: "Lead Time",
    value: "< 1 Hour",
    desc: "From commit to deploy",
    color: "text-blue-500",
  },
  {
    label: "Change Failure",
    value: "< 1%",
    desc: "Production stability",
    color: "text-purple-500",
  },
  {
    label: "Recovery Time",
    value: "< 10 Mins",
    desc: "Mean time to restore",
    color: "text-orange-500",
  },
];

export default function ManagedDevOpsPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "The Velocity Engine" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Kinetic Background Lines */}
          <div className="absolute inset-0 opacity-[0.03]">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute h-px bg-blue-600 w-full"
                style={{
                  top: `${i * 5}%`,
                  left: `${i % 2 === 0 ? "-10%" : "10%"}`,
                  transform: `rotate(${i % 2 === 0 ? "1deg" : "-1deg"})`,
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 bg-blue-50 border border-blue-100">
                  <Infinity className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-700">
                    Continuous Everything
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight mb-6">
                  Ship Software <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-cyan-500">
                    At The Speed of Business
                  </span>
                </h1>

                <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-lg">
                  Bridge the gap between Development and Operations. We automate
                  the friction out of your delivery pipeline so you can focus on
                  innovation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-sm shadow-lg hover:shadow-blue-500/20 hover:-translate-y-1 transition-all border-0"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Accelerate Delivery
                  </Button>
                  <Button
                    variant="outline"
                    className="border-slate-200 text-slate-700 hover:bg-blue-50 hover:border-blue-200 px-8 py-6 rounded-full font-bold text-sm"
                  >
                    View Toolchain
                  </Button>
                </div>
              </FadeUp>

              <FadeUp>
                {/* Hero Visual: "The Infinite Loop" */}
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-100/50 rounded-full blur-3xl opacity-50" />
                  <div className="relative bg-white border border-slate-100 rounded-2xl shadow-2xl p-6 min-h-[300px] flex flex-col justify-center overflow-hidden">
                    {/* Animated Code Flow */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-shimmer" />

                    <div className="grid grid-cols-2 gap-4 relative z-10">
                      {/* Dev Side */}
                      <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <div className="flex items-center gap-2 mb-2">
                          <Code2 className="w-4 h-4 text-blue-600" />
                          <span className="font-bold text-sm text-slate-700">
                            Development
                          </span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-3/4 bg-blue-100 rounded-full" />
                          <div className="h-2 w-1/2 bg-blue-100 rounded-full" />
                          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                            <CheckCircle2 className="w-3 h-3 text-green-500" />{" "}
                            Commit Verified
                          </div>
                        </div>
                      </div>

                      {/* Ops Side */}
                      <div className="bg-slate-900 p-4 rounded-xl border border-slate-800 text-white">
                        <div className="flex items-center gap-2 mb-2">
                          <Server className="w-4 h-4 text-cyan-400" />
                          <span className="font-bold text-sm">Production</span>
                        </div>
                        <div className="space-y-2">
                          <div className="h-2 w-3/4 bg-slate-700 rounded-full" />
                          <div className="h-2 w-1/2 bg-slate-700 rounded-full" />
                          <div className="flex items-center gap-2 mt-2 text-xs text-slate-400">
                            <Zap className="w-3 h-3 text-yellow-400" />{" "}
                            Auto-Scaled
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Central Connection */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg border border-blue-100">
                      <Repeat className="w-6 h-6 text-blue-600 animate-spin-slow" />
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
                  The DevOps Toolchain
                </h2>
                <p className="text-slate-600 max-w-2xl mx-auto">
                  We manage the entire stack. From the moment code is written to
                  the moment it reaches your users, we ensure the path is
                  automated and secure.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-slate-200 hover:border-blue-400 transition-all duration-300 hover:shadow-xl relative overflow-hidden h-full">
                      <div className="absolute top-0 left-0 w-1 h-full bg-blue-500 transform scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300" />

                      <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                        <Icon className="w-7 h-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                      </div>

                      <h3 className="text-xl font-bold text-slate-900 mb-3">
                        {service.title}
                      </h3>

                      <p className="text-slate-600 text-sm leading-relaxed mb-6">
                        {service.desc}
                      </p>

                      <div className="space-y-2 pt-4 border-t border-slate-50">
                        {service.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-2 text-xs font-semibold text-slate-500 group-hover:text-blue-600 transition-colors"
                          >
                            <Rocket className="w-3 h-3" />
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

        {/* VISUAL FEATURE: THE PIPELINE */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
                <div>
                  <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">
                    The Workflow
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">
                    From Commit to Cloud
                  </h2>
                </div>
                <p className="text-slate-500 max-w-md text-sm text-right md:text-left">
                  Visualizing the automated journey of your application code.
                </p>
              </div>
            </FadeUp>

            {/* Pipeline Diagram */}
            <FadeUp>
              <div className="relative bg-slate-900 rounded-2xl p-8 md:p-12 overflow-x-auto">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-700 -translate-y-1/2 hidden md:block" />

                <div className="flex flex-col md:flex-row justify-between items-center gap-8 relative z-10 min-w-[600px]">
                  {[
                    { title: "Code", icon: Code2, sub: "Git Push" },
                    {
                      title: "Build",
                      icon: Layers,
                      sub: "Compile & Dockerize",
                    },
                    {
                      title: "Test",
                      icon: CheckCircle2,
                      sub: "Unit & Integration",
                    },
                    {
                      title: "Deploy",
                      icon: Rocket,
                      sub: "Production Release",
                    },
                  ].map((step, i) => (
                    <div
                      key={i}
                      className="flex flex-col items-center text-center group"
                    >
                      <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-blue-500 flex items-center justify-center mb-4 shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-transform group-hover:scale-110">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <h4 className="text-white font-bold text-lg">
                        {step.title}
                      </h4>
                      <p className="text-slate-400 text-xs">{step.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </FadeUp>
          </div>
        </section>

        {/* DORA METRICS SECTION */}
        <section className="py-20 bg-slate-50 border-t border-slate-200">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold text-slate-900">
                  Engineered for DORA Metrics
                </h2>
                <p className="text-slate-500 text-sm mt-2">
                  We optimize for the elite performance standards defined by
                  Google's DevOps Research and Assessment.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {doraMetrics.map((metric, i) => (
                <StaggerItem key={i}>
                  <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm text-center">
                    <p className={`text-3xl font-black mb-2 ${metric.color}`}>
                      {metric.value}
                    </p>
                    <p className="font-bold text-slate-700 text-sm mb-1">
                      {metric.label}
                    </p>
                    <p className="text-xs text-slate-400">{metric.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-blue-600 relative overflow-hidden text-center text-white">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />

          <div className="container mx-auto px-6 relative z-10">
            <FadeUp>
              <div className="max-w-3xl mx-auto">
                <Cpu className="w-16 h-16 mx-auto mb-6 text-cyan-300 opacity-80" />
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Stop Manually Deploying.
                </h2>
                <p className="text-blue-100 text-lg mb-10 leading-relaxed">
                  Your engineers should be coding, not fixing broken builds. Let
                  us build the automation engine that powers your business.
                </p>
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-white text-blue-600 hover:bg-cyan-50 px-10 py-7 rounded-full font-bold text-lg shadow-2xl transition-transform hover:scale-105 border-0"
                >
                  Build My Pipeline
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
