import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Database,
  ShieldCheck,
  Cpu,
  CheckCircle2,
  Sparkles,
  Terminal,
  Layers,
  Globe,
  Zap,
  Box,
  Code2,
  AlertCircle,
  ArrowDown,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// SHARED BRAND COLORS (Matching your Microsoft Pages)
const BRAND_COLOR = "#43BAF4"; // Cyan/Blue
const BG_COLOR = "#F8F9FA";

export default function AmazonWebServicesPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - Technical & Clean */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Subtle Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "linear-gradient(#43BAF4 1px, transparent 1px), linear-gradient(90deg, #43BAF4 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Text */}
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md mb-6 bg-blue-50 border border-blue-100">
                  <Terminal className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-mono font-medium text-blue-700">
                    AWS Advanced Partners
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Engineering the <br />
                  <span className="relative inline-block">
                    <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                      Cloud-Native Future
                    </span>
                    <div className="absolute bottom-2 left-0 w-full h-3 bg-blue-100/50 -z-10 -rotate-1" />
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
                  We architect high-performance AWS environments using
                  Infrastructure as Code, Serverless patterns, and Container
                  orchestration.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-lg font-semibold text-sm shadow-lg hover:translate-y-[-2px] transition-all"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Start Migration
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-200 hover:bg-gray-50 px-8 py-6 rounded-lg font-semibold text-sm"
                  >
                    View Architecture
                  </Button>
                </div>
              </FadeUp>

              {/* Right Visual - "Code" Card */}
              <FadeUp>
                <div className="relative">
                  <div className="absolute -inset-1 rounded-xl bg-gradient-to-r from-blue-400 to-cyan-300 opacity-20 blur-lg" />
                  <div className="relative bg-[#1e293b] rounded-xl shadow-2xl overflow-hidden border border-slate-700">
                    {/* Window Controls */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#0f172a] border-b border-slate-700">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                      <div className="ml-auto text-[10px] text-slate-400 font-mono">
                        aws-config.tf
                      </div>
                    </div>
                    {/* Fake Code */}
                    <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                      <p>
                        <span className="text-purple-400">module</span>{" "}
                        <span className="text-blue-400">"vpc"</span> {"{"}
                      </p>
                      <p className="pl-4">
                        source ={" "}
                        <span className="text-green-400">
                          "terraform-aws-modules/vpc/aws"
                        </span>
                      </p>
                      <p className="pl-4">
                        cidr ={" "}
                        <span className="text-green-400">"10.0.0.0/16"</span>
                      </p>
                      <p className="pl-4 text-slate-500">
                        # High Availability Zones
                      </p>
                      <p className="pl-4">
                        azs = [
                        <span className="text-green-400">"us-east-1a"</span>,{" "}
                        <span className="text-green-400">"us-east-1b"</span>]
                      </p>
                      <p className="pl-4">
                        enable_nat_gateway ={" "}
                        <span className="text-orange-400">true</span>
                      </p>
                      <p>{"}"}</p>
                      <br />
                      <p>
                        <span className="text-purple-400">resource</span>{" "}
                        <span className="text-blue-400">"aws_eks_cluster"</span>{" "}
                        <span className="text-yellow-400">"main"</span> {"{"}
                      </p>
                      <p className="pl-4">
                        name ={" "}
                        <span className="text-green-400">
                          "prod-cluster-v2"
                        </span>
                      </p>
                      <p className="pl-4">
                        version = <span className="text-green-400">"1.27"</span>
                      </p>
                      <p>{"}"}</p>

                      {/* Floating Success Badge */}
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                        className="absolute bottom-6 right-6 bg-green-500/10 border border-green-500/20 text-green-400 px-3 py-1.5 rounded text-xs flex items-center gap-2 backdrop-blur-md"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Build Succeeded</span>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SERVICES - UNIQUE BENTO GRID LAYOUT */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  The AWS Portfolio
                </h2>
                <div
                  className="h-1 w-20 rounded-full"
                  style={{ backgroundColor: BRAND_COLOR }}
                />
              </div>
            </FadeUp>

            {/* Bento Grid */}
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1: Large (Span 2) - Modernization */}
              <StaggerItem className="md:col-span-2">
                <div className="group h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-500">
                      <Cloud className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Migration & Modernization
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Accelerate your move to the cloud with the Migration
                      Acceleration Program (MAP). We handle everything from
                      "Lift & Shift" to full cloud-native refactoring.
                    </p>
                  </div>
                  <Cloud className="absolute -bottom-6 -right-6 w-48 h-48 text-gray-50 opacity-50 group-hover:text-blue-50 transition-colors" />
                </div>
              </StaggerItem>

              {/* Card 2: Normal - Serverless */}
              <StaggerItem>
                <div className="group h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-500">
                    <Zap className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Serverless
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Build event-driven apps with Lambda & Fargate that scale to
                    zero when not in use.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 3: Normal - Data */}
              <StaggerItem>
                <div className="group h-full bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-6 text-blue-500">
                    <Database className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Data Lakes
                  </h3>
                  <p className="text-gray-600 text-sm">
                    Unified analytics on S3, Redshift, and Glue for real-time
                    business intelligence.
                  </p>
                </div>
              </StaggerItem>

              {/* Card 4: Large (Span 2) - AI/GenAI */}
              <StaggerItem className="md:col-span-2">
                <div className="group h-full bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-blue-200 transition-all hover:shadow-md relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-6 text-blue-500 shadow-sm">
                      <Sparkles className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Generative AI on Bedrock
                    </h3>
                    <p className="text-gray-600 max-w-md">
                      Deploy secure, private LLMs using Amazon Bedrock. We build
                      agentic AI systems that integrate with your enterprise
                      data while maintaining strict governance.
                    </p>
                  </div>
                  <Sparkles className="absolute top-1/2 right-10 w-32 h-32 text-blue-100/50 group-hover:scale-110 transition-transform" />
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </section>

        {/* METHODOLOGY - HORIZONTAL STEPS */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                  From Concept to Cloud
                </h2>
              </div>
            </FadeUp>

            <div className="relative">
              <div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10" />

              <StaggerContainer className="grid md:grid-cols-4 gap-8">
                {[
                  {
                    icon: Box,
                    step: "01",
                    title: "Discovery",
                    desc: "Well-Architected Review & ROI analysis.",
                  },
                  {
                    icon: Layers,
                    step: "02",
                    title: "Design",
                    desc: "Multi-account Landing Zone strategy.",
                  },
                  {
                    icon: Code2,
                    step: "03",
                    title: "Build",
                    desc: "Infrastructure as Code (Terraform).",
                  },
                  {
                    icon: ShieldCheck,
                    step: "04",
                    title: "Manage",
                    desc: "24/7 Monitoring & optimization.",
                  },
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={i}>
                      <div className="bg-white text-center group">
                        <div className="relative inline-block mb-4">
                          <div className="w-16 h-16 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:border-blue-200 transition-all">
                            <Icon className="w-7 h-7 text-gray-400 group-hover:text-blue-500 transition-colors" />
                          </div>
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-[10px] font-bold flex items-center justify-center">
                            {item.step}
                          </div>
                        </div>
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-500 text-sm leading-relaxed px-2">
                          {item.desc}
                        </p>
                      </div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* INLINE CASE STUDY - Problem/Solution Format */}
        <section className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-slate-900" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2600&auto=format&fit=crop')] opacity-10 bg-cover bg-center" />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10 text-white">
            <div className="grid lg:grid-cols-12 gap-16 items-center">
              {/* Left Side: Success Headlines */}
              <div className="lg:col-span-5">
                <FadeUp>
                  <div className="flex items-center gap-2 mb-4 text-blue-400">
                    <Globe className="w-5 h-5" />
                    <span className="font-mono text-sm uppercase tracking-wider">
                      Success Story
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                    Transforming Healthcare Data at Scale
                  </h2>
                  <p className="text-slate-300 text-lg mb-10 leading-relaxed">
                    How we helped a leading provider handle 10TB+ of daily
                    patient data with zero downtime.
                  </p>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
                    <div>
                      <p className="text-4xl font-bold text-blue-400">99.9%</p>
                      <p className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
                        Uptime Achieved
                      </p>
                    </div>
                    <div>
                      <p className="text-4xl font-bold text-blue-400">50%</p>
                      <p className="text-sm text-slate-400 mt-1 uppercase tracking-wider font-medium">
                        Cost Reduction
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Side: Inline Problem/Solution Card */}
              <div className="lg:col-span-7">
                <FadeUp>
                  <div className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 relative overflow-hidden">
                    {/* Background Glow */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -z-10" />

                    <div className="space-y-8">
                      {/* The Problem */}
                      <div className="flex gap-5">
                        <div className="shrink-0">
                          <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center border border-red-500/30">
                            <AlertCircle className="w-5 h-5 text-red-400" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            The Challenge
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            Legacy on-premise servers were crashing during peak
                            hours. The client faced{" "}
                            <span className="text-white font-semibold">
                              30% latency
                            </span>{" "}
                            in data processing and spiraling maintenance costs
                            for idle hardware.
                          </p>
                        </div>
                      </div>

                      {/* Visual Connector */}
                      <div className="pl-5 -my-2">
                        <ArrowDown className="w-5 h-5 text-slate-600" />
                      </div>

                      {/* The Solution */}
                      <div className="flex gap-5">
                        <div className="shrink-0">
                          <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center border border-blue-500/30">
                            <Cpu className="w-5 h-5 text-blue-400" />
                          </div>
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-white mb-2">
                            The AWS Solution
                          </h4>
                          <p className="text-slate-300 text-sm leading-relaxed mb-4">
                            We re-architected the system using a{" "}
                            <span className="text-white font-semibold">
                              Serverless Event-Driven pattern
                            </span>
                            .
                          </p>

                          {/* Technical Tags */}
                          <div className="flex flex-wrap gap-2">
                            <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-blue-300 font-mono">
                              AWS Lambda
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-blue-300 font-mono">
                              Amazon Kinesis
                            </span>
                            <span className="px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-xs text-blue-300 font-mono">
                              DynamoDB
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
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
