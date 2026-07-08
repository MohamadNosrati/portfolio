"use client";

import { motion, Variants } from "framer-motion";
import { FaUser } from "react-icons/fa6";

const itemVariants: Variants = {
  hidden: { y: 24, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 16,
    },
  },
};

export default function SkillItem() {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-20px" }}
      whileHover={{
        y: -6,
        scale: 1.02,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
      }}
      // Swiper uses standard transitions; adding custom layout durations here prevents animation fighting
      className="group relative bg-gradient-to-b from-background/40 to-card border border-border/60 p-6 rounded-2xl flex flex-col items-center gap-4 transition-[border-color,background-color] duration-300 hover:border-primary/40 shadow-sm select-none"
    >
      {/* Icon Wrapper - Animated Background Glow on Hover */}
      <div className="relative p-4 bg-background rounded-xl border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 group-hover:bg-primary/5 transition-all duration-300 shadow-sm">
        <FaUser className="size-8" />
      </div>

      {/* Title */}
      <h3 className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
        Database
      </h3>

      {/* Tags/Skills Container - Enhanced UI Padding/Design */}
      <div className="flex flex-wrap gap-1.5 justify-center w-full mt-2">
        {[1, 2, 3, 4]?.map((tagIndex) => (
          <span
            key={tagIndex}
            className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-primary/10 text-primary border border-primary/10 hover:bg-primary hover:text-primary-foreground transition-all duration-200 cursor-default"
          >
            Zustand
          </span>
        ))}
      </div>
    </motion.div>
  );
}
