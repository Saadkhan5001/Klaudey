import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Bot,
  Eye,
  MessageSquareText,
  Database,
  BarChart3,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { FadeUp } from "@/components/animations/MotionWrappers";
import { motion, AnimatePresence } from "framer-motion";

const aiServices = [
  {
    id: "gen-ai",
    icon: Sparkles,
    title: "Generative AI & LLMs",
    subtitle: "Custom GPTs & RAG Pipelines",
    description:
      "Build intelligent agents that understand context, generate content, and automate complex cognitive workflows for your business.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "vision",
    icon: Eye,
    title: "Computer Vision",
    subtitle: "Automated Visual Inspection",
    description:
      "Deploy models that 'see' the world. From facial recognition to quality control on manufacturing lines.",
    image:
      "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "predictive",
    icon: BarChart3,
    title: "Predictive Analytics",
    subtitle: "Future-Proof Decision Making",
    description:
      "Turn raw data into foresight. Forecast market trends, supply chain risks, and customer behavior with precision.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "nlp",
    icon: MessageSquareText,
    title: "NLP & Sentiment",
    subtitle: "Language Understanding",
    description:
      "Extract meaning from unstructured text. Understand customer sentiment and automate support with smart chatbots.",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop",
  },
];

interface AIWorkshopProps {
  onBookClick: () => void;
}

export default function AIWorkshop({ onBookClick }: AIWorkshopProps) {
  const [activeService, setActiveService] = useState(aiServices[0].id);

  return (
    <section
      id="ai-services"
      className="relative py-24 bg-slate-50 overflow-hidden"
    >
      {/* --- Ambient Background Glows (Subtle Light Version) --- */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[0%] w-[800px] h-[800px] bg-violet-100/60 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[0%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        {/* --- Header (Centralized) --- */}
        <FadeUp>
          <div className="text-center mb-16 md:mb-20 max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-violet-100 border border-violet-200">
              <Sparkles className="w-4 h-4 text-violet-600" />
              <span className="text-violet-700 font-semibold uppercase tracking-wider text-xs">
                Our Capabilities
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
              Beyond Intelligence. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-600">
                Pure Innovation.
              </span>
            </h2>

            <p className="text-slate-500 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
              Explore our suite of cognitive technologies designed to
              autonomously drive your business forward.
            </p>
          </div>
        </FadeUp>

        {/* --- INTERACTIVE ACCORDION LAYOUT --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-24">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-3">
            {aiServices.map((service) => (
              <div
                key={service.id}
                onMouseEnter={() => setActiveService(service.id)}
                className={`group cursor-pointer p-5 rounded-2xl transition-all duration-300 border ${
                  activeService === service.id
                    ? "bg-white border-violet-100 shadow-xl shadow-violet-900/5 scale-105"
                    : "bg-transparent border-transparent hover:bg-white/50"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl transition-colors ${
                      activeService === service.id
                        ? "bg-violet-600 text-white shadow-md"
                        : "bg-slate-100 text-slate-500 group-hover:bg-white group-hover:text-violet-600"
                    }`}
                  >
                    <service.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3
                      className={`text-lg font-bold transition-colors ${
                        activeService === service.id
                          ? "text-slate-900"
                          : "text-slate-500 group-hover:text-slate-800"
                      }`}
                    >
                      {service.title}
                    </h3>
                    <p
                      className={`text-sm mt-0.5 transition-colors ${
                        activeService === service.id
                          ? "text-violet-600 font-medium"
                          : "text-slate-400"
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                </div>

                {/* Mobile-only description expansion */}
                <div
                  className={`lg:hidden overflow-hidden transition-all duration-300 ${
                    activeService === service.id
                      ? "max-h-40 mt-3 opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="text-slate-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Dynamic Visual Preview */}
          <div className="lg:col-span-7 relative h-[400px] lg:h-[480px] hidden lg:block rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-2xl shadow-slate-200/50 bg-white">
            <AnimatePresence mode="wait">
              {aiServices.map((service) =>
                service.id === activeService ? (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 w-full h-full"
                  >
                    {/* Background Image */}
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />

                    {/* Overlay Gradient (Light to Dark for readability) */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/40 to-transparent" />

                    {/* Content */}
                    <div className="absolute bottom-0 left-0 p-10 w-full">
                      <motion.div
                        initial={{ y: 15, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.1 }}
                      >
                        <h3 className="text-3xl font-bold text-white mb-3">
                          {service.title}
                        </h3>
                        <p className="text-slate-200 text-lg leading-relaxed max-w-lg">
                          {service.description}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                ) : null
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* --- CUSTOM CTA BANNER (Compact & Centralized) --- */}
        <FadeUp delay={0.2}>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-violet-900 to-indigo-900 text-center py-10 px-6 md:px-12 max-w-5xl mx-auto shadow-2xl shadow-violet-900/20">
            {/* Background Texture */}
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-violet-500 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
            </div>

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                <div className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-semibold text-violet-200 mb-3 border border-white/10">
                  Launch with ease
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 tracking-tight">
                  Let’s Build Smarter, Together
                </h3>
                <p className="text-slate-300 text-base leading-relaxed max-w-xl">
                  AI should work for you. Let’s craft a custom strategy that
                  helps your business thrive.
                </p>
              </div>

              <div className="shrink-0">
                <Button
                  size="lg"
                  onClick={onBookClick}
                  className="bg-white text-violet-900 hover:bg-violet-50 font-bold px-8 py-6 rounded-xl shadow-lg hover:scale-105 transition-all"
                >
                  Get Your AI Strategy
                </Button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
