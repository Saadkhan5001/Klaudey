import { Cloud } from "lucide-react";
import { motion } from "framer-motion";

// Infinite loop variants
const marqueeVariants = {
  animate: {
    x: [0, -1035], // Adjust based on total width of items
    transition: {
      x: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 20,
        ease: "linear",
      },
    },
  },
};

export default function Partners() {
  return (
    <section className="py-20 bg-gradient-to-r from-background via-primary/8 to-accent/10 border-t border-b overflow-hidden">
      <div className="container mx-auto px-6 mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-muted-foreground/80">
          Trusted by Industry Leaders
        </h2>
      </div>

      <div className="relative w-full max-w-[100vw] overflow-hidden group">
        {/* Gradient masks to fade edges */}
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-background/90 via-primary/10 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-background/90 via-accent/15 to-transparent z-10" />

        {/* The Scrolling Container - Duplicated for seamless loop */}
        <div className="flex w-max">
          <motion.div
            variants={marqueeVariants}
            animate="animate"
            className="flex gap-16 md:gap-24 items-center px-12"
          >
            {/* Set 1 */}
            <PartnerLogos />
            {/* Set 2 (Duplicate) */}
            <PartnerLogos />
            {/* Set 3 (Duplicate for safety on large screens) */}
            <PartnerLogos />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

const PartnerLogos = () => (
  <>
    <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
      <div className="text-4xl font-bold text-[#00A4EF]">Microsoft</div>
    </div>
    <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
      <div className="text-4xl font-bold text-[#E95420]">NetSuite</div>
    </div>
    <div className="flex items-center gap-3 opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer">
      <Cloud className="w-12 h-12 text-[#FF9900]" />
      <div className="text-4xl font-bold text-[#FF9900]">AWS</div>
    </div>
  </>
);
