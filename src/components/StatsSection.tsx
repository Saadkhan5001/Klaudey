import { Users, Award, Building2, Globe } from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { CountUp } from "@/components/ui/CountUp";
import { motion } from "framer-motion";

const stats = [
  { icon: Award, value: 20, suffix: "+", label: "Years of Experience" },
  { icon: Users, value: 300, suffix: "+", label: "Clients Served" },
  {
    icon: Building2,
    value: 200,
    suffix: "+",
    label: "Engineers Under One Roof",
  },
  { icon: Globe, value: 4, suffix: "+", label: "Global Delivery Locations" },
];

export default function StatsSection() {
  return (
    <section id="about" className="py-24 bg-muted/30 relative overflow-hidden">
      {/* Decorative blurred circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              AptaCloud is a Dallas-based firm specializing in modern cloud
              systems and AI integration. We help businesses streamline
              operations and scale effectively.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <StaggerItem key={index} className="h-full">
                <motion.div
                  whileHover={{ y: -10 }}
                  className="p-8 text-center bg-background rounded-2xl border shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col items-center justify-center group"
                >
                  <div className="mb-6 p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" />
                  </div>

                  <div className="text-5xl font-bold mb-3 text-primary tracking-tight">
                    <CountUp value={stat.value} suffix={stat.suffix} />
                  </div>

                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                    {stat.label}
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
