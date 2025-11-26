import {
  SharepointLogoIcon,
  OfficeLogoIcon,
  PowerAppsLogoIcon,
} from "@fluentui/react-icons-mdl2-branded";

import { SparkleFilled } from "@fluentui/react-icons"; // Copilot alternative

import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";

import { motion } from "framer-motion";
import type { ComponentType, HTMLAttributes } from "react";
import type { IIconProps } from "@fluentui/react";

// ---------- TYPES ----------
type Service = {
  Icon: ComponentType<any>;
  title: string;
  description: string;
  gradient: string;
  iconColor: string;
  glow: string;
};

// ---------- DATA ----------
const services: Service[] = [
  {
    Icon: SharepointLogoIcon,
    title: "SharePoint",
    description:
      "Enable intelligent content management and seamless team collaboration with modern intranets and document management.",
    gradient: "from-blue-500/20 to-blue-600/30",
    iconColor: "text-blue-600",
    glow: "shadow-blue-500/20",
  },
  {
    Icon: OfficeLogoIcon,
    title: "Microsoft 365",
    description:
      "Empower your workforce with the complete suite of productivity tools, email, and cloud storage in one intelligent platform.",
    gradient: "from-purple-500/20 to-purple-600/30",
    iconColor: "text-purple-600",
    glow: "shadow-purple-500/20",
  },
  {
    Icon: SparkleFilled, // AI/Copilot replacement icon
    title: "Microsoft Copilot",
    description:
      "Transform productivity with AI that works alongside you, automating tasks and generating insights from your data.",
    gradient: "from-emerald-500/20 to-emerald-600/30",
    iconColor: "text-emerald-600",
    glow: "shadow-emerald-500/20",
  },
  {
    Icon: PowerAppsLogoIcon,
    title: "Power Platform",
    description:
      "Build sophisticated low-code applications and automate complex workflows with enterprise-grade governance.",
    gradient: "from-orange-500/20 to-orange-600/30",
    iconColor: "text-orange-600",
    glow: "shadow-orange-500/20",
  },
];

// ---------- COMPONENT ----------
export default function MicrosoftServices() {
  return (
    <section
      id="microsoft"
      className="relative py-32 bg-gradient-to-br from-background via-primary/5 to-accent/5 overflow-hidden"
    >
      {/* Background decorative bubbles */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20 relative z-10">
        <FadeUp>
          <div className="text-center mb-20">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary mb-4">
              Microsoft Ecosystem
            </p>
            <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
              Power Your Business
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Achieve unparalleled efficiency, collaboration, and security with
              our expertly tailored Microsoft solutions.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const { Icon } = service;

            return (
              <StaggerItem key={index} className="h-full">
                <motion.div
                  className="group relative h-full p-8 bg-card/50 backdrop-blur-sm rounded-2xl border border-card-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl overflow-hidden"
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  {/* Hover gradient overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />

                  {/* Icon */}
                  <motion.div
                    className="mb-8 flex justify-center relative z-10"
                    whileHover={{ scale: 1.05, rotate: 2 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div
                      className={`p-5 rounded-3xl bg-background/80 backdrop-blur-sm border border-border shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105 ${service.glow}`}
                    >
                      <Icon
                        className={`w-12 h-12 ${service.iconColor}`}
                        style={{ fontSize: "48px" }}
                        // className={`w-12 h-12 ${service.iconColor} transition-colors duration-300`}
                      />
                    </div>
                  </motion.div>

                  {/* Title & description */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-base leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {service.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <motion.div
                    className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-600 to-emerald-500"
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    style={{ originX: 0 }}
                  />
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
