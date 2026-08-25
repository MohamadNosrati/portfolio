"use client";

import { motion, Variants } from "framer-motion";
import { FaChevronRight } from "react-icons/fa6";

interface AboutItemProps {
  label: string;
  value: string;
}

const itemVariants: Variants = {
  hidden: {
    y: 20,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 14,
    },
  },
};

export default function AboutItem({ label, value }: AboutItemProps) {
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -4, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="group relative overflow-hidden rounded-2xl border border-border/60 bg-gradient-to-br from-background/80 via-background/50 to-primary/[0.04] p-5 shadow-sm transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
    >
      <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="absolute left-0 top-0 h-0.5 w-0 bg-gradient-to-r from-primary to-primary/20 transition-all duration-500 group-hover:w-full" />

      <div className="relative flex items-center gap-2.5">
        <div className="flex size-7 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
          <FaChevronRight className="size-2.5 transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>

        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-muted transition-colors duration-300 group-hover:text-primary">
          {label}
        </span>
      </div>

      <div className="relative mt-4 flex items-center gap-3">
        <div className="h-8 w-1 rounded-full bg-primary/20 transition-all duration-300 group-hover:h-10 group-hover:bg-primary" />

        <span className="text-base font-bold tracking-tight text-foreground md:text-lg">
          {value}
        </span>
      </div>

      <div className="absolute bottom-0 right-0 h-px w-20 bg-gradient-to-l from-primary/20 to-transparent opacity-50 transition-all duration-300 group-hover:w-32 group-hover:opacity-100" />
    </motion.div>
  );
}
