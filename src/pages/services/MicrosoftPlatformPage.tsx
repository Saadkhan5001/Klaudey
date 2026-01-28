import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { Button } from "@/components/ui/button";
import {
  Cloud,
  Database,
  Shield,
  Briefcase,
  Cpu,
  Share2,
  Users,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Building2,
  Lock,
  BarChart3,
  ArrowUpRight,
  Zap,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

const BRAND_COLOR = "#43BAF4";
const BRAND_HOVER = "#2AA8E0";
const BG_COLOR = "#F8F9FA"; // Light gray background

const services = [
  {
    icon: Zap,
    title: "Consulting & Assessment",
    subtitle: "Cloud Readiness Evaluation",
    description:
      "Evaluate readiness for Microsoft Cloud and AI adoption with expert guidance.",
    features: ["Readiness Assessment", "Strategy Planning", "Roadmap Design"],
  },
  {
    icon: Cloud,
    title: "Cloud Storage",
    subtitle: "Azure Blob & File Storage",
    description:
      "Scalable, secure object storage for unstructured data with tiered storage and global CDN.",
    features: ["Data Lake", "Archive Tiers", "Global Replication"],
  },
  {
    icon: Database,
    title: "Databases",
    subtitle: "SQL & NoSQL Solutions",
    description:
      "Fully managed Azure SQL, Cosmos DB, and PostgreSQL with high availability.",
    features: ["Cosmos DB", "Azure SQL", "PostgreSQL"],
  },
  {
    icon: Shield,
    title: "Identity & Security",
    subtitle: "Azure AD & Sentinel",
    description:
      "Enterprise identity management, conditional access, and threat detection.",
    features: ["Single Sign-On", "Zero Trust", "Sentinel"],
  },
  {
    icon: Briefcase,
    title: "Microsoft 365",
    subtitle: "Productivity Suite",
    description:
      "Complete cloud productivity with Teams, Exchange, Office and Copilot.",
    features: ["Teams Voice", "Exchange", "Copilot"],
  },
  {
    icon: BarChart3,
    title: "Dynamics 365",
    subtitle: "CRM & ERP",
    description:
      "Unified business apps connecting sales, service, finance with AI insights.",
    features: ["Sales Hub", "Customer Service", "Finance"],
  },
  {
    icon: Share2,
    title: "SharePoint",
    subtitle: "Content Collaboration",
    description:
      "Intelligent content management and intranets with Power Platform.",
    features: ["Intranet", "Document Mgmt", "Workflows"],
  },
  {
    icon: Users,
    title: "Microsoft Teams",
    subtitle: "Unified Communication",
    description: "Enterprise hub with voice, video, chat and app integrations.",
    features: ["Teams Phone", "Webinars", "Apps"],
  },
];

const advantages = [
  {
    icon: Building2,
    title: "Gold Partnership",
    description: "Microsoft Gold Partner with certified architects",
  },
  {
    icon: Lock,
    title: "Security First",
    description: "ISO 27001 certified enterprise protocols",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Copilot and Azure AI across all services",
  },
  {
    icon: CheckCircle2,
    title: "24/7 Support",
    description: "Round-the-clock managed services",
  },
];

export default function MicrosoftPlatformPage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: BG_COLOR }}
    >
      <Header onContactClick={() => setContactModalOpen(true)} />

      <main className="flex-1">
        {/* HERO SECTION - Fixed spacing */}
        <section
          className="relative pt-16 pb-12 lg:pt-20 lg:pb-16 overflow-hidden"
          style={{ backgroundColor: BG_COLOR }}
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 1px 1px, #43BAF4 1px, transparent 0)",
              backgroundSize: "48px 48px",
            }}
          />
          <div
            className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full blur-[100px] opacity-20 pointer-events-none"
            style={{
              background:
                "radial-gradient(circle, #43BAF4 0%, transparent 70%)",
              transform: "translate(30%, -40%)",
            }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <FadeUp>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-5 border bg-white/60 backdrop-blur-sm"
                  style={{ borderColor: "#BFEBFC" }}
                >
                  <Sparkles
                    className="w-3.5 h-3.5"
                    style={{ color: BRAND_COLOR }}
                  />
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-cyan-600">
                    Microsoft Solutions Partner
                  </span>
                </motion.div>

                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 tracking-tight">
                  Accelerate with{" "}
                  <span style={{ color: BRAND_COLOR }}>Microsoft</span>
                  <br />
                  Cloud & AI
                </h1>

                <p className="text-base text-gray-600 leading-relaxed mb-6 max-w-xl mx-auto">
                  Unlock enterprise agility with Azure, Microsoft 365, and
                  Dynamics. We architect secure, scalable solutions that drive
                  business outcomes.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-6 py-4 rounded-full font-semibold text-sm hover:scale-105 transition-all"
                    style={{ backgroundColor: BRAND_COLOR }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = BRAND_HOVER)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = BRAND_COLOR)
                    }
                  >
                    Start Your Journey <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-white px-6 py-4 rounded-full font-semibold text-sm bg-white/50"
                    onClick={() =>
                      document
                        .getElementById("services")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    Explore Services
                  </Button>
                </div>

                <div className="mt-10 flex flex-wrap items-center justify-center gap-6 text-gray-500">
                  {["Gold Partner", "ISO 27001", "Copilot Ready"].map(
                    (badge, i) => (
                      <div key={i} className="flex items-center gap-1.5">
                        <CheckCircle2
                          className="w-4 h-4"
                          style={{ color: BRAND_COLOR }}
                        />
                        <span className="text-xs font-medium">{badge}</span>
                      </div>
                    ),
                  )}
                </div>
              </FadeUp>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <FadeUp>
              <div className="text-center mb-16">
                <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-cyan-50 text-cyan-600">
                  Our Expertise
                </span>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                  Enterprise Microsoft Solutions
                </h2>
                <p className="text-gray-600 text-base max-w-lg mx-auto">
                  End-to-end Microsoft services tailored to your business needs
                </p>
              </div>
            </FadeUp>

            <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                const isHovered = hoveredCard === index;
                return (
                  <StaggerItem key={index}>
                    <motion.div
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                      whileHover={{ y: -3 }}
                      className="group h-full bg-white rounded-xl p-6 border border-gray-100 hover:border-blue-200 transition-all duration-300 cursor-pointer relative"
                      style={{
                        boxShadow: isHovered
                          ? "0 12px 24px -8px rgba(67, 186, 244, 0.12)"
                          : "0 1px 3px rgba(0,0,0,0.05)",
                      }}
                    >
                      <div
                        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl transition-transform duration-300 origin-left"
                        style={{
                          backgroundColor: BRAND_COLOR,
                          transform: isHovered ? "scaleX(1)" : "scaleX(0)",
                        }}
                      />
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 transition-all duration-300"
                        style={{
                          backgroundColor: isHovered ? BRAND_COLOR : "#E6F7FE",
                        }}
                      >
                        <Icon
                          className="w-5 h-5 transition-colors duration-300"
                          style={{
                            color: isHovered ? "white" : BRAND_COLOR,
                            width: "1.25rem",
                            height: "1.25rem",
                          }}
                        />
                      </div>
                      <h3 className="text-base font-bold text-gray-900 mb-1">
                        {service.title}
                      </h3>
                      <p className="text-xs font-medium text-gray-400 mb-2">
                        {service.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">
                        {service.description}
                      </p>
                      <div className="space-y-1">
                        {service.features.slice(0, 2).map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-1.5 text-xs text-gray-500"
                          >
                            <div
                              className="w-1 h-1 rounded-full"
                              style={{ backgroundColor: BRAND_COLOR }}
                            />
                            {feature}
                          </div>
                        ))}
                      </div>
                      <ArrowUpRight
                        className="absolute top-3 right-3 w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-1 group-hover:translate-x-0"
                        style={{ color: BRAND_COLOR }}
                      />
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>
          </div>
        </section>

        {/* BUSINESS IMPACT SECTION (Microsoft-style list layout) */}
        <section className="py-20" style={{ backgroundColor: BG_COLOR }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-12 gap-12 items-start">
              {/* Left header block - FIXED: col-span moved outside FadeUp */}
              <div className="lg:col-span-4">
                <FadeUp>
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-white text-cyan-600 border border-gray-100">
                      Business Impact
                    </span>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                      How <span style={{ color: BRAND_COLOR }}>Klaudey</span>{" "}
                      creates measurable impact
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                      Outcome-first engagements that improve productivity,
                      resilience, and speed—powered by Microsoft Cloud and AI.
                    </p>

                    <div className="mt-6">
                      <Button
                        variant="outline"
                        className="rounded-full bg-white/60 hover:bg-white border-gray-200"
                        onClick={() => setContactModalOpen(true)}
                      >
                        Talk to an expert{" "}
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </FadeUp>
              </div>

              {/* Right stacked list - FIXED: col-span moved outside FadeUp */}
              <div className="lg:col-span-8">
                <FadeUp>
                  <div className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">
                    <div className="relative">
                      {/* subtle left accent line */}
                      <div
                        className="absolute left-5 top-3 bottom-3 w-[2px] rounded-full hidden sm:block"
                        style={{ backgroundColor: "rgba(67,186,244,0.18)" }}
                      />

                      <StaggerContainer className="space-y-6">
                        {[
                          {
                            icon: Sparkles,
                            title: "GenAI enablement",
                            desc: "Transform operations with AI that boosts productivity, automates complex workflows, and improves customer experiences using Azure OpenAI + Copilot.",
                          },
                          {
                            icon: Cpu,
                            title: "Agentic AI systems",
                            desc: "Deploy enterprise-grade agents that coordinate tasks across Microsoft ecosystems—reducing cycle time and improving decision velocity.",
                          },
                          {
                            icon: Cloud,
                            title: "Cloud modernization & engineering",
                            desc: "Migrate and modernize to Azure for scalability, resilience, and performance—built with best-practice architecture and cost controls.",
                          },
                          {
                            icon: Shield,
                            title: "Security & governance",
                            desc: "Implement Zero-Trust security to protect identities, secure data, and maintain compliance across every workload and environment.",
                          },
                          {
                            icon: Lock,
                            title: "Endpoint management",
                            desc: "Simplify device management with Intune + Defender—automating provisioning, enforcing policies, and maintaining compliance at scale.",
                          },
                        ].map((item, i) => {
                          const Icon = item.icon;
                          return (
                            <StaggerItem key={i}>
                              <motion.div
                                whileHover={{ x: 4 }}
                                className="flex gap-4 sm:gap-5 items-start"
                              >
                                {/* Icon circle */}
                                <div className="shrink-0 pt-1">
                                  <div
                                    className="w-11 h-11 rounded-full flex items-center justify-center border"
                                    style={{
                                      backgroundColor: "#E6F7FE",
                                      borderColor: "rgba(67,186,244,0.25)",
                                    }}
                                  >
                                    <Icon
                                      className="w-5 h-5"
                                      style={{ color: BRAND_COLOR }}
                                    />
                                  </div>
                                </div>

                                {/* Text */}
                                <div className="flex-1">
                                  <h3 className="text-lg font-bold text-gray-900">
                                    {item.title}
                                  </h3>
                                  <p className="text-gray-600 leading-relaxed mt-1">
                                    {item.desc}
                                  </p>

                                  {/* divider */}
                                  {i !== 4 && (
                                    <div className="mt-6 h-px bg-gray-100" />
                                  )}
                                </div>
                              </motion.div>
                            </StaggerItem>
                          );
                        })}
                      </StaggerContainer>
                    </div>
                  </div>
                </FadeUp>
              </div>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-20" style={{ backgroundColor: BG_COLOR }}>
          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <FadeUp>
                <div>
                  <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-white text-cyan-600">
                    Why Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Why Partner With{" "}
                    <span style={{ color: BRAND_COLOR }}>Us?</span>
                  </h2>
                  <p className="text-gray-600 text-base leading-relaxed mb-6">
                    As a Microsoft Gold Partner, we bring deep expertise and
                    proven methodologies to every engagement. Our certified
                    architects ensure your cloud journey is smooth and secure.
                  </p>
                  <Button
                    onClick={() => setContactModalOpen(true)}
                    className="text-white px-6 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
                    style={{ backgroundColor: BRAND_COLOR }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = BRAND_HOVER)
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = BRAND_COLOR)
                    }
                  >
                    Schedule Consultation{" "}
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </FadeUp>

              <StaggerContainer className="grid grid-cols-2 gap-5">
                {advantages.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <StaggerItem key={index}>
                      <motion.div
                        whileHover={{ y: -2 }}
                        className="bg-white rounded-lg p-6 border border-gray-100 hover:border-blue-100 transition-all duration-300"
                      >
                        <div
                          className="w-10 h-10 rounded-lg flex items-center justify-center mb-3"
                          style={{ backgroundColor: "#E6F7FE" }}
                        >
                          <Icon
                            className="w-5 h-5"
                            style={{
                              color: BRAND_COLOR,
                              width: "1.25rem",
                              height: "1.25rem",
                            }}
                          />
                        </div>
                        <h3 className="text-sm font-bold text-gray-900 mb-2">
                          {item.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </motion.div>
                    </StaggerItem>
                  );
                })}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA – Full Width Background */}
        <section className="relative py-24 overflow-hidden">
          {/* Full-width background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(67,186,244,0.08) 0%, rgba(67,186,244,0.16) 50%, rgba(67,186,244,0.08) 100%)",
            }}
          />

          {/* Decorative glows */}
          <div
            className="absolute -top-20 -left-20 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: BRAND_COLOR }}
          />
          <div
            className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full blur-3xl opacity-30"
            style={{ backgroundColor: BRAND_COLOR }}
          />

          <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
            <FadeUp>
              <div className="max-w-3xl mx-auto text-center bg-white/80 backdrop-blur-md rounded-2xl p-12 border border-white/60 shadow-lg">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Ready to Transform{" "}
                  <span style={{ color: BRAND_COLOR }}>Your Business?</span>
                </h2>

                <p className="text-gray-600 text-base mb-6 max-w-lg mx-auto">
                  Partner with Klaudey to modernize your cloud, secure your
                  enterprise, and unlock AI-powered growth with Microsoft
                  technologies.
                </p>

                <Button
                  onClick={() => setContactModalOpen(true)}
                  className="text-white px-7 py-3 rounded-full font-semibold text-sm hover:scale-105 transition-all"
                  style={{
                    backgroundColor: BRAND_COLOR,
                    boxShadow: "0 10px 30px -8px rgba(67, 186, 244, 0.45)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = BRAND_HOVER)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = BRAND_COLOR)
                  }
                >
                  Get Free Assessment <ArrowRight className="ml-2 w-4 h-4" />
                </Button>

                <p className="mt-4 text-gray-400 text-xs">
                  Complimentary consultation with Microsoft Certified Architects
                </p>
              </div>
            </FadeUp>
          </div>
        </section>
      </main>

      {/* CASE STUDY */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <FadeUp>
            <div className="text-center mb-14">
              <span className="inline-block px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider mb-3 bg-cyan-50 text-cyan-600">
                Case Study
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Transforming Enterprise Operations with Klaudey
              </h2>
            </div>
          </FadeUp>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-1">
              <FadeUp>
                <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
                  <span className="text-xs font-semibold uppercase text-gray-400">
                    Enterprise Services
                  </span>

                  <h3 className="text-2xl font-bold text-gray-900 mt-2 mb-4">
                    Securing & Modernizing a Global Enterprise Platform
                  </h3>

                  <p className="text-gray-600 mb-4">
                    The client faced operational risk due to fragmented identity
                    systems, on-prem infrastructure, and limited scalability.
                  </p>

                  <p className="text-gray-600 mb-6">
                    Klaudey migrated core systems to Microsoft Azure,
                    implemented Zero-Trust identity with Azure AD, and automated
                    operations using Power Platform and AI-driven monitoring.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="border rounded-lg p-4 text-center">
                      <p
                        className="text-2xl font-bold"
                        style={{ color: BRAND_COLOR }}
                      >
                        0%
                      </p>
                      <p className="text-xs text-gray-500">Downtime</p>
                    </div>
                    <div className="border rounded-lg p-4 text-center">
                      <p
                        className="text-2xl font-bold"
                        style={{ color: BRAND_COLOR }}
                      >
                        40+
                      </p>
                      <p className="text-xs text-gray-500">Systems Migrated</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Right Image - FIXED: Added valid URL and aspect ratio */}
            <div className="lg:col-span-1">
              <FadeUp>
                <div className="relative rounded-xl overflow-hidden shadow-lg h-full min-h-[300px] lg:min-h-[400px]">
                  <img
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2670&auto=format&fit=crop"
                    alt="Klaudey Case Study"
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />

                  {/* Optional Overlay for better text contrast if needed later */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />
    </div>
  );
}
