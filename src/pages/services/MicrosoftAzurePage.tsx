import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Database,
  ShieldCheck,
  Server,
  Globe,
  Zap,
  Code2,
  Cpu,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ArrowUpRight,
  BarChart,
  LayoutGrid,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

const BRAND_COLOR = "#0078D4"; // Azure Blue
const BRAND_HOVER = "#0062B0";
const ACCENT_COLOR = "#43BAF4"; // Lighter Cyan for gradients
const BG_COLOR = "#F8F9FA";

const azureServices = [
  {
    icon: Server,
    title: "Infrastructure & Migration",
    subtitle: "Lift, Shift & Modernize",
    description:
      "Seamlessly migrate on-premise workloads to Azure VMs and VDI with minimal downtime and optimized cost structures.",
    features: ["Datacenter Migration", "Azure Virtual Desktop", "Hybrid Cloud"],
  },
  {
    icon: Code2,
    title: "App Modernization",
    subtitle: "Cloud-Native Development",
    description:
      "Re-architect legacy applications using Microservices, Kubernetes (AKS), and Serverless functions for unlimited scale.",
    features: ["Azure Kubernetes", "App Service", "Serverless Functions"],
  },
  {
    icon: Database,
    title: "Data & Analytics",
    subtitle: "Intelligent Insights",
    description:
      "Unify your data estate with Azure Synapse and Fabric to unlock real-time analytics and BI capabilities.",
    features: ["Azure SQL", "Synapse Analytics", "Power BI Embedded"],
  },
  {
    icon: Cpu,
    title: "AI & Machine Learning",
    subtitle: "OpenAI & Cognitive Services",
    description:
      "Infuse apps with vision, speech, and language capabilities using Azure OpenAI Service and custom ML models.",
    features: ["Generative AI", "Cognitive Services", "ML Ops"],
  },
];

const migrationSteps = [
  {
    icon: LayoutGrid,
    title: "Assessment & Strategy",
    desc: "We analyze your current digital estate using Azure Migrate to identify dependencies, cost benefits, and readiness scores.",
  },
  {
    icon: Cloud,
    title: "Migration & Landing Zone",
    desc: "Deploying a secure, compliant Azure Landing Zone (ALZ) and executing the migration using proven 'Rehost' or 'Refactor' methodologies.",
  },
  {
    icon: Lock,
    title: "Security & Governance",
    desc: "Implementing Azure Policy, Defender for Cloud, and Sentinel to ensure your cloud environment is secure by design.",
  },
  {
    icon: BarChart,
    title: "Optimization & Management",
    desc: "Continuous monitoring with Azure Monitor to rightsizing resources, reducing waste, and maximizing performance.",
  },
];

export default function MicrosoftAzurePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION */}
        <section
          className="relative pt-20 pb-16 lg:pt-24 lg:pb-20 overflow-hidden"
          style={{ backgroundColor: BG_COLOR }}
        >
          {/* Abstract Grid Background */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(#0078D4 1px, transparent 1px), linear-gradient(90deg, #0078D4 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
          {/* Glow Effect */}
          <div
            className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full blur-[120px] opacity-20 pointer-events-none"
            style={{
              background: `radial-gradient(circle, ${BRAND_COLOR} 0%, transparent 70%)`,
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <FadeUp>
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 border bg-white/70 backdrop-blur-md shadow-sm"
                  style={{ borderColor: "#BFDBFE" }}
                >
                  <Globe className="w-4 h-4" style={{ color: BRAND_COLOR }} />
                  <span
                    className="text-[11px] font-bold uppercase tracking-wider"
                    style={{ color: BRAND_COLOR }}
                  >
                    Global Cloud Infrastructure
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 leading-[1.1] mb-6 tracking-tight">
                  Innovate at Scale with <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
                    Microsoft Azure
                  </span>
                </h1>

                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
                  Modernize your infrastructure, build intelligent cloud-native
                  apps, and secure your digital assets with the world's most
                  trusted cloud platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-8 py-6 rounded-full font-semibold text-base shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                    style={{ backgroundColor: BRAND_COLOR }}
                  >
                    Start Cloud Journey <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:bg-white hover:border-blue-300 px-8 py-6 rounded-full font-semibold text-base bg-white/60"
                  >
                    View Solutions
                  </Button>
                </div>

                {/* Tech Stack Pills */}
                <div className="mt-12 pt-8 border-t border-gray-200/60 flex flex-wrap justify-center gap-x-8 gap-y-4">
                  {[
                    "Kubernetes",
                    "Synapse",
                    "Azure AI",
                    "Cosmos DB",
                    "Arc",
                  ].map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm font-medium text-gray-400 flex items-center gap-2"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                      {tech}
                    </span>
                  ))}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* CLOUD SERVICES GRID */}
        <section id="azure-services" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                <div className="max-w-2xl">
                  <span className="text-blue-600 font-semibold tracking-wider uppercase text-xs mb-2 block">
                    Cloud Capabilities
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                    Comprehensive Azure Solutions
                  </h2>
                </div>
                <p className="text-gray-500 max-w-md text-sm leading-relaxed pb-1">
                  From lifting and shifting legacy workloads to building
                  futuristic AI applications, we cover the entire cloud
                  spectrum.
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {azureServices.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === index;
                return (
                  <StaggerItem key={index}>
                    <motion.div
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ y: -5 }}
                      className="group bg-white rounded-2xl p-8 border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer h-full relative overflow-hidden"
                      style={{
                        boxShadow: isHovered
                          ? "0 20px 40px -12px rgba(0, 120, 212, 0.15)"
                          : "0 2px 10px rgba(0,0,0,0.03)",
                      }}
                    >
                      {/* Decorative Background Blob */}
                      <div
                        className="absolute -right-10 -top-10 w-32 h-32 rounded-full blur-3xl transition-opacity duration-500"
                        style={{
                          backgroundColor: `${BRAND_COLOR}15`, // 15 = low opacity hex
                          opacity: isHovered ? 1 : 0,
                        }}
                      />

                      <div className="flex items-start justify-between mb-6">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center transition-colors duration-300"
                          style={{
                            backgroundColor: isHovered
                              ? BRAND_COLOR
                              : "#F0F9FF",
                          }}
                        >
                          <Icon
                            className="w-6 h-6 transition-colors duration-300"
                            style={{
                              color: isHovered ? "white" : BRAND_COLOR,
                            }}
                          />
                        </div>
                        <ArrowUpRight className="w-5 h-5 text-gray-300 group-hover:text-blue-500 transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-500 mb-3">
                        {service.subtitle}
                      </p>

                      <p className="text-gray-600 text-sm leading-relaxed mb-6">
                        {service.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-medium bg-gray-50 text-gray-600 border border-gray-100"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* THE AZURE JOURNEY (Split Layout) */}
        <section className="py-24" style={{ backgroundColor: "#F0F4F8" }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-12 gap-16 items-start">
              {/* Left Static Content */}
              <div className="lg:col-span-5 sticky top-24">
                <FadeUp>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-4 bg-white text-blue-600 border border-blue-100">
                    The Methodology
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                    Your Path to the <br />
                    <span style={{ color: BRAND_COLOR }}>
                      Intelligent Cloud
                    </span>
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed mb-8">
                    Cloud adoption isn't just about moving data—it's about
                    transforming how you operate. We follow the Microsoft Cloud
                    Adoption Framework (CAF) to ensure predictable results.
                  </p>

                  <div className="bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-2 bg-green-100 rounded-full">
                        <ShieldCheck className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          100% Compliant
                        </h4>
                        <p className="text-xs text-gray-500">
                          GDPR, ISO, HIPAA Ready
                        </p>
                      </div>
                    </div>
                    <div className="h-px bg-gray-100 mb-4" />
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-blue-100 rounded-full">
                        <Zap className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900">
                          Zero Business Disruption
                        </h4>
                        <p className="text-xs text-gray-500">
                          Live migration capabilities
                        </p>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right Steps List */}
              <div className="lg:col-span-7">
                <StaggerContainer className="space-y-6">
                  {migrationSteps.map((step, i) => {
                    const Icon = step.icon;
                    return (
                      <StaggerItem key={i}>
                        <motion.div
                          whileHover={{ x: 6 }}
                          className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 flex gap-6 items-start"
                        >
                          <div className="shrink-0">
                            <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center border border-blue-100">
                              <Icon className="w-5 h-5 text-blue-600" />
                            </div>
                            {i !== migrationSteps.length - 1 && (
                              <div className="w-px h-full bg-blue-100 mx-auto mt-4 hidden sm:block" />
                            )}
                          </div>

                          <div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">
                              {step.title}
                            </h3>
                            <p className="text-gray-600 leading-relaxed text-sm">
                              {step.desc}
                            </p>
                          </div>
                        </motion.div>
                      </StaggerItem>
                    );
                  })}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDY SECTION */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900">
                  Built on Azure
                </h2>
              </div>
            </FadeUp>

            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Image Side */}
              <div className="order-2 lg:order-1 h-full">
                <FadeUp>
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[400px]">
                    <img
                      src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
                      alt="Azure Data Center abstract"
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-1000"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/60 to-transparent mix-blend-multiply" />

                    {/* Floating Badge */}
                    <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg max-w-[200px]">
                      <p className="text-xs text-gray-500 uppercase font-semibold mb-1">
                        Results
                      </p>
                      <p className="text-2xl font-bold text-blue-600">45%</p>
                      <p className="text-xs text-gray-700">
                        Reduction in TCO (Total Cost of Ownership)
                      </p>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Text Side */}
              <div className="order-1 lg:order-2">
                <FadeUp>
                  <div className="pl-0 lg:pl-6">
                    <div className="flex items-center gap-2 mb-4">
                      <Sparkles className="w-4 h-4 text-blue-500" />
                      <span className="text-xs font-bold uppercase tracking-widest text-gray-400">
                        Success Story
                      </span>
                    </div>

                    <h3 className="text-3xl font-bold text-gray-900 mb-6">
                      Scaling a Fintech Giant with Azure Kubernetes
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      A leading financial services provider needed to process
                      millions of transactions with sub-millisecond latency.
                      Their on-premise infrastructure was hitting a ceiling.
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <strong className="text-gray-900 block">
                            Modernization
                          </strong>
                          Re-platformed monolithic apps to microservices on AKS
                          (Azure Kubernetes Service).
                        </p>
                      </div>
                      <div className="flex gap-4">
                        <CheckCircle2 className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-gray-700">
                          <strong className="text-gray-900 block">
                            Data Resiliency
                          </strong>
                          Implemented Cosmos DB for 99.999% global availability
                          and instant scaling.
                        </p>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      className="rounded-full px-6 border-blue-200 text-blue-700 hover:bg-blue-50"
                    >
                      Read Case Study
                    </Button>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="relative py-24 overflow-hidden bg-gray-900 text-white">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-10 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 to-slate-900/90"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10 text-center">
            <FadeUp>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Ready to Migrate?
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto mb-10 text-lg">
                Get a comprehensive cloud assessment today. We'll identify
                cost-saving opportunities and map out your modernization
                strategy.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-6 rounded-full font-bold text-base border-0"
                >
                  Book Assessment
                </Button>
                <Button
                  variant="outline"
                  className="border-white/20 text-white hover:bg-white/10 px-8 py-6 rounded-full font-bold text-base bg-transparent"
                  onClick={() => setContactModalOpen(true)}
                >
                  Contact Architects
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
