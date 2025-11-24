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
  const [direction, setDirection] = useState(0); // -1 = left, 1 = right

  // Auto-advance timer with direction
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
    const newDirection = index > currentSlide ? 1 : -1;
    setDirection(newDirection);
    setCurrentSlide(index);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 0.3, duration: 0.5 },
    },
  };

  const current = slides[currentSlide];

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden bg-gradient-to-b from-background via-muted/60 to-background text-foreground">
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
            opacity: { duration: 0.5 },
          }}
          className="absolute inset-0"
        >
          {/* Background image with subtle zoom */}
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 6 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-muted/80 to-transparent backdrop-blur-md z-10" />
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Foreground content */}
          <div className="absolute inset-0 z-20 flex items-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
              <motion.div
                className="max-w-2xl ml-4 md:ml-8 lg:ml-12"
                initial="hidden"
                animate="visible"
                variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
              >
                <motion.h1
                  variants={contentVariants}
                  className="text-4xl md:text-6xl font-bold mb-4 text-foreground"
                >
                  {current.title}
                </motion.h1>
                <motion.p
                  variants={contentVariants}
                  className="text-xl md:text-2xl font-semibold mb-4 text-foreground"
                >
                  {current.subtitle}
                </motion.p>
                <motion.p
                  variants={contentVariants}
                  className="text-lg mb-8 text-foreground/90"
                >
                  {current.description}
                </motion.p>
                <motion.div variants={contentVariants}>
                  <Button
                    size="lg"
                    className="hover:scale-105 transition-transform"
                    data-testid={`button-cta-${currentSlide}`}
                  >
                    {current.cta}
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Prev / Next controls */}
      <button
        onClick={() => paginate(-1)}
        className="absolute left-6 md:left-8 lg:left-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/70 backdrop-blur border border-border hover:bg-white shadow-lg transition-all hover:scale-110 opacity-80 hover:opacity-100"
        data-testid="button-prev-slide"
      >
        <ChevronLeft className="w-6 h-6 text-foreground transition-colors" />
      </button>

      <button
        onClick={() => paginate(1)}
        className="absolute right-6 md:right-8 lg:right-12 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-white/70 backdrop-blur border border-border hover:bg-white shadow-lg transition-all hover:scale-110 opacity-80 hover:opacity-100"
        data-testid="button-next-slide"
      >
        <ChevronRight className="w-6 h-6 text-foreground transition-colors" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? "bg-primary w-8 shadow-sm"
                : "bg-foreground/20"
            }`}
            data-testid={`button-dot-${index}`}
          />
        ))}
      </div>
    </div>
  );
}
