import { Cloud, ArrowRightLeft, TrendingUp, Settings } from "lucide-react";
import {
  FadeUp,
  StaggerContainer,
  StaggerItem,
} from "@/components/animations/MotionWrappers";
import { SpotlightCard } from "@/components/ui/SpotlightCard";

const services = [
  {
    icon: Cloud,
    title: "Azure Hosting",
    description:
      "Dive into the world of cloud to grow your business with Azure hosting services offered by Klaudey.",
  },
  {
    icon: ArrowRightLeft,
    title: "Azure Migration",
    description:
      "Migrate your servers, applications, databases, and more with ease in the Azure environment.",
  },
  {
    icon: TrendingUp,
    title: "Azure Optimization",
    description:
      "Maximize the value of your Azure investment. We fine-tune your cloud infrastructure for peak performance.",
  },
  {
    icon: Settings,
    title: "Azure Managed Services",
    description:
      "Let Klaudey manage your Azure ecosystem, ensuring 24/7 monitoring and proactive support.",
  },
];

export default function AzureServices() {
  return (
    <section
      id="azure"
      className="py-24 bg-gradient-to-r from-primary/10 via-background to-accent/10"
    >
      <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Modernize with <span className="text-primary">Azure</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              End-to-end Azure solutions to empower your IT landscape, enabling
              smarter operations and seamless digital transformation.
            </p>
          </div>
        </FadeUp>

        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <StaggerItem key={index} className="h-full">
                <SpotlightCard className="p-8 h-full bg-card hover:shadow-2xl transition-shadow duration-500">
                  <div className="mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-foreground">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-base">
                    {service.description}
                  </p>
                </SpotlightCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
