import { Button } from "@/components/ui/button";
import {
  Lightbulb,
  Target,
  Users,
  TrendingUp,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Lightbulb,
    title: "In-depth AI Analysis",
    description:
      "Get a comprehensive evaluation of your current systems to identify high-impact AI opportunities.",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-500",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
  },
  {
    icon: Target,
    title: "Customized Strategy",
    description:
      "Receive a personalized, step-by-step roadmap to integrate AI into your specific business workflows.",
    color: "violet",
    gradient: "from-violet-500 to-purple-500",
    bg: "bg-violet-50",
    text: "text-violet-600",
  },
  {
    icon: Users,
    title: "Hands-on Experience",
    description:
      "Participate in interactive sessions with AI experts to demystify tools and technologies.",
    color: "amber",
    gradient: "from-amber-500 to-orange-500",
    bg: "bg-amber-50",
    text: "text-amber-600",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description:
      "Leave with practical, ready-to-implement steps that drive immediate efficiency and growth.",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-500",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
  },
];

const features = [
  "Led by Industry AI Veterans",
  "Tailored to Your Data & Needs",
  "Proven Framework for ROI",
  "Post-Workshop Roadmap",
];

interface AIWorkshopProps {
  onBookClick: () => void;
}

export default function AIWorkshop({ onBookClick }: AIWorkshopProps) {
  return (
    <section id="ai" className="relative py-24 overflow-hidden bg-slate-50/80">
      {/* --- Decorative Background Elements --- */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-cyan-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-violet-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        {/* Header Section */}
        <FadeUp>
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-violet-100 text-violet-700 font-semibold tracking-wide text-xs uppercase mb-4 border border-violet-200">
              Workshop
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Unlock the Power of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-600">
                AI Innovation
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 mb-2 font-medium">
              Confused by the noise?
            </p>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
              Our tailored AI assessment workshop helps you cut through the
              hype, identify real use cases, and automate for sustainable
              growth.
            </p>
          </div>
        </FadeUp>

        {/* Benefits Grid */}
        <div className="mb-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={index} className="h-full">
                  <motion.div
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    className="group relative h-full bg-white/70 backdrop-blur-xl rounded-3xl p-8 border border-white/50 shadow-sm hover:shadow-2xl transition-all duration-300"
                  >
                    <div
                      className={`absolute bottom-0 left-0 w-full h-1.5 bg-gradient-to-r ${item.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-3xl`}
                    />
                    <div
                      className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-inset ring-black/5`}
                    >
                      <Icon className={`w-7 h-7 ${item.text}`} />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-800">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </motion.div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* --- COMPACT CTA BLOCK --- */}
        <FadeUp delay={0.2}>
          <div className="max-w-6xl mx-auto bg-white rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/5 border border-slate-100">
            <div className="grid grid-cols-1 md:grid-cols-2 h-auto md:h-[380px]">
              {/* Left: Image Side - New Image (Modern Strategic Workshop) */}
              <div className="relative h-[250px] md:h-full group overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/7793174/pexels-photo-7793174.jpeg"
                  alt="Modern AI Strategy Workshop"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent" />
              </div>

              {/* Right: Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center bg-white">
                <h3 className="text-2xl font-bold mb-5 text-slate-900">
                  Why book this workshop?
                </h3>

                <div className="space-y-3 mb-8">
                  {features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ x: 5 }}
                      className="flex items-center gap-3"
                    >
                      <div className="w-6 h-6 rounded-full bg-violet-50 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4 text-violet-600" />
                      </div>
                      <span className="text-slate-700 font-medium text-base">
                        {feature}
                      </span>
                    </motion.div>
                  ))}
                </div>

                <div>
                  <Button
                    onClick={onBookClick}
                    className="group text-base font-semibold px-6 py-4 rounded-full bg-slate-900 text-white hover:bg-violet-600 hover:scale-105 transition-all shadow-lg"
                  >
                    Book Your Spot
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
