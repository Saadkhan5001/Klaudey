import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "AI Smart Revolution",
    subtitle: "Revolutionize with Artificial Intelligence Smart Success",
    description:
      "Harness the power of AI to transform your business and drive efficiency.",
    cta: "Learn More",
    image: "/assets/generated_images/AI_Smart_Revolution_hero_3cfca4cb.png",
  },
  {
    id: 2,
    title: "Cloud Power Unleashed",
    subtitle: "High-Performance Powered by Microsoft Azure",
    description:
      "Deliver secure, scalable, and resilient infrastructure with Microsoft Azure.",
    cta: "Learn More",
    image: "/assets/generated_images/Cloud_Power_hero_background_815fb510.png",
  },
  {
    id: 3,
    title: "Microsoft Business Suite",
    subtitle: "Supercharge Your Business with Microsoft",
    description:
      "Unlock unparalleled productivity and innovation with our Microsoft expertise.",
    cta: "Learn More",
    image:
      "/assets/generated_images/Microsoft_Business_Suite_hero_dd6a5232.png",
  },
  {
    id: 4,
    title: "NetSuite Operational Excellence",
    subtitle: "Elevate Your Operations with NetSuite Excellence",
    description:
      "Streamline processes and boost performance with our NetSuite solutions.",
    cta: "Learn More",
    image:
      "/assets/generated_images/NetSuite_Excellence_hero_background_03481618.png",
  },
  {
    id: 5,
    title: "App Modernization Mastery",
    subtitle: "Future-Proof Your Business with Modernized Applications",
    description:
      "Transform legacy systems into cutting-edge solutions for sustained growth.",
    cta: "Learn More",
    image:
      "/assets/generated_images/App_Modernization_hero_background_2e58049b.png",
  },
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const paginate = (newDirection: number) => {
    setDirection(newDirection);
    setCurrentSlide((prev) => {
      const next = prev + newDirection;
      if (next < 0) return slides.length - 1;
      if (next >= slides.length) return 0;
      return next;
    });
  };

  const goToSlide = (index: number) => {
    if (index === currentSlide) return;
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: { zIndex: 1, x: 0, opacity: 1 },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-background group">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0"
        >
          {/* Background Image */}
          <div className="absolute inset-0">
            <motion.img
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 6, ease: "linear" }}
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Light gradient overlay for readability */}
          <div
            className="absolute inset-0 z-10 pointer-events-none backdrop-blur-[1px]"
            style={{
              background: `linear-gradient(to right, 
                rgba(240, 244, 255, 0.85) 0%, 
                rgba(240, 244, 255, 0.4) 40%, 
                transparent 70%)`,
            }}
          />

          {/* Content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              {/* ✅ ALIGNED: Added pl-0 md:pl-8 to match card content position */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                className="max-w-2xl pl-0 md:pl-8"
              >
                {/* ✅ SOLID DARK BLUE TEXT - NO GRADIENT */}
                <motion.h1
                  className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 tracking-tight text-textPrimary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {current.title}
                </motion.h1>

                <motion.p
                  className="text-xl md:text-2xl font-semibold mb-4 text-textPrimary"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {current.subtitle}
                </motion.p>

                <motion.p
                  className="text-lg mb-8 text-textSecondary leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                >
                  {current.description}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-primary to-accent text-primary-foreground hover:shadow-xl transition-all duration-300 rounded-full px-10 py-6 text-lg font-medium hover:scale-105"
                  >
                    {current.cta}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 md:left-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/70 hover:bg-background border border-border shadow-lg backdrop-blur-md transition-all hover:scale-110 text-foreground"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-6 md:right-8 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-background/70 hover:bg-background border border-border shadow-lg backdrop-blur-md transition-all hover:scale-110 text-foreground"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Pagination Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-8"
                : "bg-foreground/30 w-3 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
