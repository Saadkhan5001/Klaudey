import { FileText, Users, Bot, Zap } from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { motion } from "framer-motion";

const services = [
  {
    icon: FileText,
    title: "SharePoint",
    description: "Enable better content management and collaboration.",
  },
  {
    icon: Users,
    title: "Microsoft 365",
    description:
      "Empower your workforce with a complete suite of productivity tools.",
  },
  {
    icon: Bot,
    title: "Copilot AI",
    description: "Unlock the potential of AI to automate repetitive tasks.",
  },
  {
    icon: Zap,
    title: "Power Platform",
    description:
      "Build low-code applications and automate workflows seamlessly.",
  },
];

export default function MicrosoftServices() {
  return (
    <section id="microsoft" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              The Microsoft Suite
            </h2>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
              Achieve greater efficiency, collaboration, and security with our
              tailored Microsoft solutions.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index} className="h-full">
                <div className="group relative h-full p-6 bg-background rounded-2xl border hover:border-primary/50 transition-all duration-300 hover:shadow-xl">
                  {/* Icon with Animation */}
                  <motion.div
                    className="mb-6 flex justify-center"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 group-hover:from-blue-500/20 group-hover:to-purple-500/20 transition-colors">
                      <Icon className="w-10 h-10 text-primary" />
                    </div>
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 text-center">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Bottom Active Line */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left rounded-b-2xl" />
                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
