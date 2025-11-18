import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type WrapperProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
};

// 1. Fade Up (Standard Entry)
export const FadeUp = ({ children, className, delay = 0 }: WrapperProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.7, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    className={className}
  >
    {children}
  </motion.div>
);

// 2. Stagger Container (For Grids/Lists)
export const StaggerContainer = ({ children, className }: WrapperProps) => (
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: "-100px" }}
    variants={{
      hidden: {},
      show: {
        transition: { staggerChildren: 0.15 },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

// 3. Stagger Item (Child of Container)
export const StaggerItem = ({ children, className }: WrapperProps) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 30 },
      show: {
        opacity: 1,
        y: 0,
        transition: { type: "spring", stiffness: 50, damping: 20 },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
