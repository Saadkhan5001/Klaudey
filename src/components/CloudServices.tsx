import {
  Cloud,
  ArrowRightLeft,
  TrendingUp,
  Settings,
  Workflow,
  ShieldCheck,
} from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { motion } from "framer-motion";

const BG_OPACITY = "opacity-[0.08]";
const BG_HOVER_OPACITY = "group-hover:opacity-[0.4]";

const services = [
  {
    icon: Cloud,
    title: "Multi-Cloud Architecture",
    description:
      "Agnostic hosting solutions across AWS, Azure, and GCP, architected for resilience.",
    color: "blue",
    gradient: "from-blue-500 to-cyan-400",
    bg: "bg-blue-50",
    text: "text-blue-600",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Workflow,
    title: "CloudOps & Automation",
    description:
      "Automate infrastructure with CI/CD pipelines, IaC, and self-healing systems.",
    color: "violet",
    gradient: "from-violet-500 to-purple-400",
    bg: "bg-violet-50",
    text: "text-violet-600",
    image:
      "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: ArrowRightLeft,
    title: "Seamless Migration",
    description:
      "Risk-free transition strategies to move legacy workloads with zero disruption.",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-400",
    bg: "bg-emerald-50",
    text: "text-emerald-600",
    image: "https://i.ibb.co/r2wQ961y/cloud-migration.png",
  },
  {
    icon: TrendingUp,
    title: "FinOps & Optimization",
    description:
      "Stop overpaying. We analyze usage patterns to cut waste and maximize ROI.",
    color: "amber",
    gradient: "from-amber-500 to-orange-400",
    bg: "bg-amber-50",
    text: "text-amber-600",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: ShieldCheck,
    title: "Security & Compliance",
    description:
      "Enterprise-grade governance, identity management, and compliance frameworks.",
    color: "rose",
    gradient: "from-rose-500 to-red-400",
    bg: "bg-rose-50",
    text: "text-rose-600",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop",
  },
  {
    icon: Settings,
    title: "24/7 Managed Services",
    description:
      "Sleep soundly while we monitor uptime, patch vulnerabilities, and manage incidents.",
    color: "cyan",
    gradient: "from-cyan-500 to-blue-400",
    bg: "bg-cyan-50",
    text: "text-cyan-600",
    image:
      "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=800&auto=format&fit=crop",
  },
];

export default function CloudServices() {
  return (
    <section
      id="cloud-services"
      className="relative py-24 overflow-hidden bg-slate-50/80"
    >
      {/* Decorative Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-100/40 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeUp>
          <div className="text-center mb-20">
            <span className="inline-block py-1 px-3 rounded-full bg-blue-100 text-blue-700 font-semibold tracking-wide text-xs uppercase mb-4 border border-blue-200">
              Limitless Scale
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-slate-900">
              Future-Proof with{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                Enterprise Cloud
              </span>
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
              We don't just host; we evolve your business. Unlock the true
              potential of the cloud with our architecture, automation, and
              security services.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index} className="h-full">
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  className="group relative h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-300 border border-slate-100 overflow-hidden"
                >
                  {/* --- Background Image Layer (Using Global Opacity Constants) --- */}
                  <div className="absolute inset-0 z-0">
                    <img
                      src={service.image}
                      alt=""
                      className={`w-full h-full object-cover ${BG_OPACITY} ${BG_HOVER_OPACITY} transition-all duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0`}
                    />
                  </div>

                  {/* Colorful Hover Gradient Overlay (Subtle wash) */}
                  <div
                    className={`absolute inset-0 z-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${service.gradient}`}
                  />

                  {/* Bottom Colored Border Line */}
                  <div
                    className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 z-20`}
                  />

                  {/* --- Content Layer --- */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-4 mb-6">
                      {/* Icon Container */}
                      <div
                        className={`w-14 h-14 rounded-2xl ${service.bg} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ring-1 ring-inset ring-black/5 shadow-sm`}
                      >
                        <Icon className={`w-7 h-7 ${service.text}`} />
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-slate-800">
                      {service.title}
                    </h3>

                    <p className="text-slate-500 leading-relaxed text-sm md:text-base mb-6 font-medium">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
