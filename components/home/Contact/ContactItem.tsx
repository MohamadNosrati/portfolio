"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

interface ContactItemProps {
  label: string;
  value: string;
  href: string;
  image: string;
}

const cardVariants: Variants = {
  hidden: { y: 25, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 110, damping: 15 },
  },
};

export default function ContactItem({
  label,
  value,
  href,
  image,
}: ContactItemProps) {
  return (
    <motion.a
      href={href}
      target="_blank" // Opens up social channels in a new tab
      rel="noopener noreferrer"
      variants={cardVariants}
      whileHover={{
        y: -8,
        scale: 1.03,
        boxShadow:
          "0 20px 25px -5px rgb(0 0 0 / 0.15), 0 8px 10px -6px rgb(0 0 0 / 0.15)",
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative bg-gradient-to-b from-card to-card/90 border border-border/60 p-5 rounded-2xl flex flex-col items-center text-center gap-3 transition-colors duration-300 hover:border-primary/40 shadow-sm cursor-pointer w-full pt-8"
    >
      {/* Top Center Circle Image Avatar */}
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 p-1 bg-transparent rounded-full group-hover:border-primary/30 transition-colors duration-300 shadow-md">
        <div className="w-12 h-12 rounded-full overflow-hidden bg-transparent flex items-center justify-center">
          <Image className="rounded-full" src={image} alt={label} fill />
        </div>
      </div>

      {/* Label (Platform/Method name) */}
      <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary transition-colors duration-300 mt-2">
        {label}
      </span>

      {/* Value (Username / ID / Handle) */}
      <span className="text-sm font-semibold text-foreground tracking-tight max-w-full truncate px-1">
        {value}
      </span>
    </motion.a>
  );
}
