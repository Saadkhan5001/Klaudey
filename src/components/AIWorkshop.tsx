import { Button } from "@/components/ui/button";
import { Lightbulb, Target, Users, TrendingUp } from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { motion } from "framer-motion";

const benefits = [
  {
    icon: Lightbulb,
    title: "In-depth AI Analysis",
    description:
      "Get a comprehensive evaluation of your current systems and processes.",
  },
  {
    icon: Target,
    title: "Customized AI Strategy",
    description:
      "Receive a personalized roadmap to integrate AI into your business.",
  },
  {
    icon: Users,
    title: "Hands-on Experience",
    description: "Participate in interactive sessions with our AI experts.",
  },
  {
    icon: TrendingUp,
    title: "Actionable Insights",
    description: "Learn practical steps to implement AI solutions effectively.",
  },
];

const features = [
  {
    title: "Expert Guidance",
    description: "Led by industry-leading AI professionals.",
  },
  {
    title: "Tailored Solutions",
    description: "Focused on your unique business needs.",
  },
  {
    title: "Proven Results",
    description: "Empower your business with cutting-edge AI strategies.",
  },
];

interface AIWorkshopProps {
  onBookClick: () => void;
}

export default function AIWorkshop({ onBookClick }: AIWorkshopProps) {
  return (
    <section
      id="ai"
      className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 via-accent/10 to-background text-foreground"
    >
      {/* Animated Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-accent/25 rounded-full blur-[140px] -z-10" />

      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-primary/80">
              Unlock the Power of AI
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-2">
              Confused by the noise?
            </p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our tailored AI assessment workshop helps you cut through the hype
              and automate for growth.
            </p>
          </div>
        </FadeUp>

        {/* Benefits Grid - Staggered Entrance */}
        <div className="mb-20">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <StaggerItem key={index} className="h-full">
                  <SpotlightCard className="p-8 h-full bg-white/70 border border-border backdrop-blur-md hover:bg-white shadow-lg transition-shadow">
                    <div className="mb-6 p-3 bg-accent/20 w-fit rounded-xl">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h4 className="text-xl font-bold mb-3 text-foreground">
                      {benefit.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {benefit.description}
                    </p>
                  </SpotlightCard>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>

        {/* Features Section - Different Layout */}
        <FadeUp delay={0.2}>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-10">
              Why Choose Us?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="p-6 rounded-2xl border border-border bg-white/80 backdrop-blur text-center shadow-sm hover:shadow-md"
                >
                  <h4 className="text-lg font-semibold mb-2 text-primary">
                    {feature.title}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="text-center relative z-10">
            <Button
              size="lg"
              onClick={onBookClick}
              className="text-lg px-10 py-8 rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-xl transition-all border border-border/60 backdrop-blur"
            >
              Book Your Workshop
            </Button>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
