"use client";

import { motion, Variants } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";

interface AboutItemProps {
  label: string;
  value: string;
}

const itemVariants: Variants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 100, damping: 14 },
  },
};

export default function AboutItem({ label, value }: AboutItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ x: 4 }}
      className="flex flex-col gap-1.5 h-fit p-4 bg-background/40 border border-border/50 rounded-xl hover:border-primary/30 transition-colors duration-300 group"
    >
      {/* Label Row */}
      <div className="flex gap-2 items-center text-muted-foreground/80 group-hover:text-primary transition-colors duration-300">
        <FaChevronRight className="size-3 text-primary/70 transition-transform duration-300 group-hover:translate-x-0.5" />
        <span className="text-xs font-semibold uppercase tracking-wider">
          {label}
        </span>
      </div>

      {/* Value Row */}
      <div className="flex items-center gap-3">
        <div className="w-1.5 h-6 bg-primary/20 rounded-full group-hover:bg-primary transition-colors duration-300" />
        <span className="font-bold text-base md:text-lg text-foreground tracking-tight">
          {value}
        </span>
      </div>
    </motion.div>
  );
}
