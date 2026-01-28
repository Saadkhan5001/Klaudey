import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  BrainCircuit,
  Bot,
  Sparkles,
  LineChart,
  ArrowRight,
  Cpu,
  Workflow,
  Lightbulb,
  Code2,
  Database,
  Network,
  CheckCircle2,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

// BRAND COLORS - Updated to Pure Blue/Cyan Theme
const BRAND_COLOR = "#0078D4"; // Deep Azure Blue
const AI_ACCENT = "#43BAF4"; // Lighter Cyan Accent
const BG_COLOR = "#F8F9FA";

const services = [
  {
    icon: Lightbulb,
    title: "AI Consulting & Strategy",
    desc: "We help you navigate the AI landscape. From feasibility assessments to ethical AI frameworks, we build a roadmap that aligns with your business goals.",
    tags: ["Readiness Assessment", "ROI Analysis", "Ethical AI"],
  },
  {
    icon: Sparkles,
    title: "Generative AI Solutions",
    desc: "Unlock creativity and efficiency with Large Language Models (LLMs). We build RAG pipelines, custom copilots, and content generation engines.",
    tags: ["Custom LLMs", "RAG Systems", "Semantic Search"],
  },
  {
    icon: Bot,
    title: "Autonomous AI Agents",
    desc: "Move beyond chatbots. We deploy intelligent agents capable of planning, reasoning, and executing complex workflows autonomously.",
    tags: ["LangChain", "AutoGPT", "Multi-Agent Systems"],
  },
  {
    icon: LineChart,
    title: "Machine Learning (ML)",
    desc: "Turn data into foresight. Our predictive models optimize supply chains, detect fraud, and personalize customer experiences in real-time.",
    tags: ["Predictive Analytics", "Computer Vision", "NLP"],
  },
];

export default function ArtificialIntelligencePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - "Cognitive Future" */}
        <section className="relative pt-24 pb-20 overflow-hidden bg-white">
          {/* Neural Background - Updated to Blue Gradient */}
          <div className="absolute inset-0 opacity-[0.05]">
            <svg
              className="h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <path
                d="M0 100 C 20 0 50 0 100 100"
                stroke="url(#grad1)"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d="M0 100 C 50 0 80 0 100 100"
                stroke="url(#grad1)"
                strokeWidth="0.5"
                fill="none"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop
                    offset="0%"
                    style={{ stopColor: BRAND_COLOR, stopOpacity: 1 }}
                  />
                  <stop
                    offset="100%"
                    style={{ stopColor: AI_ACCENT, stopOpacity: 1 }}
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
              <FadeUp>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 bg-blue-50 border border-blue-100 shadow-sm">
                  <Sparkles className="w-4 h-4 text-blue-500" />
                  <span className="text-xs font-bold uppercase tracking-widest text-blue-600">
                    Next-Gen Intelligence
                  </span>
                </div>

                <h1 className="text-5xl md:text-7xl font-bold text-gray-900 leading-tight mb-8 tracking-tight">
                  From Automation to <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-cyan-500 to-blue-400">
                    Cognitive Autonomy
                  </span>
                </h1>

                <p className="text-xl text-gray-600 leading-relaxed mb-10 max-w-2xl">
                  We engineer enterprise-grade AI systems. Leverage Generative
                  AI, machine learning, and autonomous agents to solve problems
                  you thought were impossible.
                </p>

                <div className="flex justify-center">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-bold text-base shadow-lg hover:shadow-blue-500/20 transition-all border-0"
                    style={{
                      background: `linear-gradient(135deg, ${BRAND_COLOR} 0%, ${AI_ACCENT} 100%)`,
                    }}
                  >
                    Start AI Innovation
                  </Button>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SERVICES GRID - "The Intelligence Matrix" */}
        <section className="py-24 bg-slate-50 relative">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="mb-16 max-w-2xl">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Capabilities that drive <br />
                  <span className="text-blue-600">Business Impact</span>
                </h2>
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
              </div>
            </FadeUp>

            <StaggerContainer className="grid md:grid-cols-2 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <StaggerItem key={index}>
                    <div className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-200 transition-all duration-300 h-full relative overflow-hidden">
                      {/* Hover Watermark */}
                      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                        <Icon className="w-32 h-32 text-blue-600" />
                      </div>

                      <div className="relative z-10">
                        <div className="w-12 h-12 rounded-xl bg-blue-50 group-hover:bg-cyan-50 flex items-center justify-center mb-6 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-blue-600 group-hover:text-cyan-600 transition-colors" />
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                          {service.title}
                        </h3>

                        <p className="text-gray-600 leading-relaxed mb-6">
                          {service.desc}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {service.tags.map((tag, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full text-xs font-medium bg-gray-50 text-gray-600 border border-gray-100 group-hover:border-blue-100 group-hover:text-blue-600 transition-colors"
                            >
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

        {/* FEATURE: "THE AGENTIC LOOP" (Explaining AI Agents) */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <div className="flex items-center gap-2 mb-4 text-blue-600">
                    <Workflow className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">
                      Beyond Chatbots
                    </span>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    Autonomous <span className="text-blue-600">AI Agents</span>
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Traditional AI waits for input. <strong>AI Agents</strong>{" "}
                    take initiative. They perceive their environment, reason
                    through complex tasks, and execute actions across your
                    software ecosystem to achieve goals without constant human
                    oversight.
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Perception",
                        desc: "Agent reads emails, databases, and logs in real-time.",
                      },
                      {
                        title: "Reasoning",
                        desc: "LLMs plan a multi-step strategy to solve the user request.",
                      },
                      {
                        title: "Action",
                        desc: "Agent uses APIs to update CRMs, send reports, or book meetings.",
                      },
                    ].map((step, i) => (
                      <div key={i} className="flex gap-4">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center font-bold text-sm border border-blue-100">
                            {i + 1}
                          </div>
                          {i !== 2 && (
                            <div className="w-px h-full bg-blue-50 my-2" />
                          )}
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900">
                            {step.title}
                          </h4>
                          <p className="text-sm text-gray-500">{step.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>

              <FadeUp>
                <div className="relative">
                  {/* Abstract UI representation of an Agent Thinking */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-cyan-100 to-blue-200 rounded-3xl blur-2xl opacity-40" />
                  <div className="bg-white border border-gray-100 rounded-3xl p-8 shadow-xl relative">
                    <div className="flex items-center justify-between mb-8 border-b border-gray-100 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                          <Bot className="w-6 h-6 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-bold text-gray-900">
                            Sales_Agent_01
                          </p>
                          <p className="text-xs text-green-500 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />{" "}
                            Active
                          </p>
                        </div>
                      </div>
                      <span className="text-xs font-mono text-gray-400">
                        ID: 8x92_A
                      </span>
                    </div>

                    <div className="space-y-4 font-mono text-sm">
                      <div className="p-3 bg-gray-50 rounded-lg border border-gray-100">
                        <p className="text-gray-500 text-xs mb-1">INPUT</p>
                        <p className="text-gray-800">
                          "Analyze last month's churn and email me a summary."
                        </p>
                      </div>

                      <div className="flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                      </div>

                      <div className="p-3 bg-cyan-50 rounded-lg border border-cyan-100">
                        <p className="text-cyan-600 text-xs mb-1">
                          THOUGHT PROCESS
                        </p>
                        <div className="space-y-1 text-cyan-900">
                          <p className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> Querying
                            Database...
                          </p>
                          <p className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> Calculating
                            Churn Rate...
                          </p>
                          <p className="flex items-center gap-2">
                            <CheckCircle2 className="w-3 h-3" /> Drafting
                            Executive Summary...
                          </p>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <ArrowRight className="w-4 h-4 text-gray-300 rotate-90" />
                      </div>

                      <div className="p-3 bg-blue-50 rounded-lg border border-blue-100">
                        <p className="text-blue-600 text-xs mb-1">ACTION</p>
                        <p className="text-blue-900">
                          Email sent to{" "}
                          <span className="underline">admin@company.com</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* TECH STACK - "The Innovation Lab" */}
        <section className="py-20 bg-[#0B1120] text-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 text-center">
            <FadeUp>
              <h2 className="text-3xl font-bold mb-12">
                Powered by Best-in-Class Technology
              </h2>
              <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-80">
                {[
                  { icon: Cpu, name: "OpenAI" },
                  { icon: Database, name: "Pinecone" },
                  { icon: Network, name: "LangChain" },
                  { icon: Code2, name: "Python" },
                  { icon: CloudCog, name: "Azure AI" },
                  { icon: BrainCircuit, name: "TensorFlow" },
                ].map((tech, i) => (
                  <div
                    key={i}
                    className="flex flex-col items-center gap-3 group cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-slate-800/50 flex items-center justify-center group-hover:bg-blue-600/20 group-hover:border-blue-500/50 border border-transparent transition-all group-hover:scale-110">
                      <tech.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <span className="text-sm font-medium tracking-wide text-slate-300 group-hover:text-white transition-colors">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </FadeUp>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-700 to-cyan-600 text-white">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=2565&auto=format&fit=crop')] opacity-10 bg-cover bg-center mix-blend-overlay"></div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeUp>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Ready to Deploy the Future?
              </h2>
              <p className="text-blue-50 text-lg max-w-2xl mx-auto mb-10">
                Whether you need a strategic AI roadmap or a custom Generative
                AI pilot, our engineers are ready to bring your vision to life.
              </p>
              <Button
                onClick={() => setContactModalOpen(true)}
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-7 rounded-full font-bold text-lg shadow-2xl transition-transform hover:scale-105 border-0"
              >
                Book a Consultation
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

// Helper component for tech stack icon
function CloudCog({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 16.2A4.5 4.5 0 0 0 17.5 8h-1.8A7 7 0 1 0 4 14.9" />
      <circle cx="12" cy="13" r="3" />
    </svg>
  );
}
