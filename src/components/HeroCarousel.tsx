import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  Brain,
  Code,
  LineChart,
  Layers,
  ShieldCheck,
  Server, // Added for IT Infra
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";

const slides = [
  {
    id: 1,
    title: "AI Smart Revolution",
    subtitle: "Revolutionize with Artificial Intelligence Smart Success",
    description:
      "Harness the power of AI to transform your business and drive efficiency.",
    cta: "Learn More",
    image: "/assets/generated_images/AI_Smart_Revolution_hero_3cfca4cb.png",
    link: "/services/artificial-intelligence",
  },
  {
    id: 2,
    title: "Cloud Power Unleashed",
    subtitle: "High-Performance Powered by Microsoft Azure",
    description:
      "Deliver secure, scalable, and resilient infrastructure with Microsoft Azure.",
    cta: "Learn More",
    image: "/assets/generated_images/Cloud_Power_hero_background_815fb510.png",
    link: "/services/microsoft-azure",
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
    link: "/services/microsoft-services",
  },
  {
    id: 4,
    title: "VMware Hybrid Cloud",
    subtitle: "Modernize, secure, and optimize your VMware estates",
    description:
      "Design resilient SDDC foundations and integrate hybrid cloud operations.",
    cta: "Explore VMware",
    image:
      "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'><defs><linearGradient id='g1' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%23dff0ff'/><stop offset='50%' stop-color='%23b7ddff'/><stop offset='100%' stop-color='%2390c8ff'/></linearGradient></defs><rect width='1920' height='1080' fill='url(%23g1)'/></svg>",
    link: "/services/private-cloud-on-prem",
  },
  {
    id: 5,
    title: "App Modernization",
    subtitle: "Future-Proof Your Business with Modernized Applications",
    description:
      "Transform legacy systems into cutting-edge solutions for sustained growth.",
    cta: "Learn More",
    image:
      "/assets/generated_images/App_Modernization_hero_background_2e58049b.png",
    link: "/services/application-modernization",
  },
];

// Updated Order and Items
const expertiseData = [
  { icon: Brain, label: "AI & Data" }, // 1st
  { icon: ShieldCheck, label: "Cloud & Security" }, // 2nd
  { icon: Code, label: "Software Dev & QA" }, // 3rd
  { icon: Layers, label: "Platforms" }, // 4th
  { icon: Server, label: "IT Infrastructure" }, // 5th (New)
  { icon: LineChart, label: "Strategy & Innovation" }, // 6th
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [, setLocation] = useLocation();

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
    <div className="relative w-full h-[665px] flex flex-col bg-background group">
      {/* --- CAROUSEL SLIDER AREA --- */}
      <div className="relative flex-grow w-full overflow-hidden">
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

            {/* Gradient Overlay */}
            <div
              className="absolute inset-0 z-10 pointer-events-none"
              style={{
                background: `linear-gradient(to right, 
                  rgba(240, 244, 255, 0.95) 0%, 
                  rgba(240, 244, 255, 0.7) 45%, 
                  transparent 100%)`,
              }}
            />

            {/* Content Text Area */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center pb-12">
              <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                  className="max-w-xl ml-4 md:ml-12 lg:ml-24"
                >
                  <motion.h1
                    className="text-4xl md:text-5xl font-bold mb-3 tracking-tight text-textPrimary"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {current.title}
                  </motion.h1>

                  <motion.p
                    className="text-lg md:text-xl font-medium mb-4 text-textPrimary/80"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {current.subtitle}
                  </motion.p>

                  <motion.p
                    className="text-base mb-6 text-textSecondary leading-relaxed"
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
                      onClick={() => setLocation(current.link)}
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-8 h-12 text-base font-semibold shadow-md hover:shadow-lg transition-all"
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
          className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-sm transition-all text-gray-800 shadow-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => paginate(1)}
          className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 z-30 p-2 rounded-full bg-white/40 hover:bg-white/70 backdrop-blur-sm transition-all text-gray-800 shadow-sm"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Pagination Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-1.5 rounded-full transition-all duration-300 shadow-sm ${
                index === currentSlide
                  ? "bg-blue-600 w-6"
                  : "bg-gray-400/50 w-1.5 hover:bg-gray-600"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* --- EXPERTISE FOOTER SECTION --- */}
      <div className="relative z-40 bg-white/95 backdrop-blur-xl border-t border-blue-100/50 shadow-[0_-5px_25px_rgba(0,0,0,0.03)]">
        <div className="container mx-auto px-6 py-10">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Header Section */}
            <div className="flex items-center gap-8 shrink-0">
              <h3 className="text-xl font-bold text-gray-900 tracking-tight whitespace-nowrap">
                Our expertise.
              </h3>
              {/* Vertical Divider */}
              <div className="hidden md:block w-px h-10 bg-gray-300"></div>
            </div>

            {/* Icons Row */}
            <div className="flex flex-wrap justify-center gap-x-16 gap-y-8">
              {expertiseData.map((item, index) => (
                <div
                  key={index}
                  className="group flex flex-col items-center cursor-pointer min-w-[80px] transition-all duration-300 hover:-translate-y-2"
                  onClick={() => setLocation("/services")}
                >
                  {/* Icon Circle */}
                  <div className="p-3 rounded-full mb-3 transition-all duration-300 group-hover:bg-blue-50 group-hover:shadow-md">
                    <item.icon className="w-8 h-8 text-blue-700 transition-colors duration-300 transform group-hover:scale-110 group-hover:text-blue-900" />
                  </div>

                  {/* Label */}
                  <span className="text-sm font-semibold text-gray-600 group-hover:text-blue-900 transition-colors duration-300 text-center leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
