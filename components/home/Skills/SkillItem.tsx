"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import type { SkillCategory } from ".";
import { SkillLevel } from ".";

const itemVariants: Variants = {
  hidden: {
    y: 24,
    opacity: 0,
  },

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

interface IProps {
  item: SkillCategory;
}

const levelConfig = {
  expert: {
    label: "Advanced",
    description: "Strong professional experience",
    color: "emerald",
    badge:
      "border-emerald-500/20 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    dot: "bg-emerald-500",
    bar: "bg-emerald-500",
    border: "hover:border-emerald-500/40",
    glow: "bg-emerald-500/10",
    progress: "w-full",
  },

  intermediate: {
    label: "Intermediate",
    description: "Comfortable working with it",
    color: "blue",
    badge: "border-blue-500/20 bg-blue-500/10 text-blue-600 dark:text-blue-400",
    dot: "bg-blue-500",
    bar: "bg-blue-500",
    border: "hover:border-blue-500/40",
    glow: "bg-blue-500/10",
    progress: "w-2/3",
  },

  familiar: {
    label: "Familiar",
    description: "Basic practical experience",
    color: "amber",
    badge:
      "border-amber-500/20 bg-amber-500/10 text-amber-600 dark:text-amber-400",
    dot: "bg-amber-500",
    bar: "bg-amber-500",
    border: "hover:border-amber-500/40",
    glow: "bg-amber-500/10",
    progress: "w-1/3",
  },
};

export default function SkillItem({ item }: IProps) {
  const level = levelConfig[item.level];

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        margin: "-20px",
      }}
      whileHover={{
        y: -6,
        scale: 1.015,
        boxShadow: "0 20px 35px -10px rgb(0 0 0 / 0.12)",
      }}
      className={clsx(
        "group relative flex w-full flex-1 select-none flex-col overflow-hidden rounded-2xl border bg-gradient-to-b from-background/50 to-card p-6 shadow-sm transition-all duration-300",
        "border-border/60",
        level.border,
      )}
    >
      {/* ====================================================== */}
      {/* Background Glow */}
      {/* ====================================================== */}

      <div
        className={clsx(
          "pointer-events-none absolute -right-16 -top-16 size-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100",
          level.glow,
        )}
      />

      {/* ====================================================== */}
      {/* Top Row */}
      {/* ====================================================== */}

      <div className="relative flex w-full items-start justify-between gap-4">
        {/* Icon */}
        <div
          className={clsx(
            "relative flex size-16 shrink-0 items-center justify-center rounded-2xl border bg-background shadow-sm transition-all duration-300",
            "border-border/50",
            "group-hover:scale-105",
            "group-hover:border-primary/30",
          )}
        >
          <div className="text-muted-foreground transition-colors duration-300 group-hover:text-primary">
            <Icon iconString={item.icon} />
          </div>

          {/* Small accent */}
          <span
            className={clsx(
              "absolute -right-1 -top-1 size-2.5 rounded-full ring-4 ring-card",
              level.dot,
            )}
          />
        </div>

        {/* Skill Level Badge */}
        <div
          className={clsx(
            "flex items-center gap-1.5 rounded-full border px-2.5 py-1.5 text-[10px] font-bold uppercase tracking-wider",
            level.badge,
          )}
        >
          <span className={clsx("size-1.5 rounded-full", level.dot)} />

          {level.label}
        </div>
      </div>

      {/* ====================================================== */}
      {/* Title */}
      {/* ====================================================== */}

      <div className="relative mt-5 w-full">
        <h3 className="text-lg font-bold tracking-tight text-foreground transition-colors duration-300 group-hover:text-primary">
          {item.title}
        </h3>

        {/* Description */}
        {item.description && (
          <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
            {item.description}
          </p>
        )}
      </div>

      {/* ====================================================== */}
      {/* Skill Level Indicator */}
      {/* ====================================================== */}

      <div className="relative mt-4 w-full">
        <div className="mb-1.5 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
            Proficiency
          </span>

          <span
            className={clsx(
              "text-[10px] font-bold",
              level.badge.replace("border-", "").replace("bg-", ""),
            )}
          >
            {level.label}
          </span>
        </div>

        <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{
              width:
                item.level === SkillLevel.EXPERT
                  ? "100%"
                  : item.level === SkillLevel.INTERMEDIATE
                    ? "66%"
                    : "33%",
            }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.15,
              ease: "easeOut",
            }}
            className={clsx("h-full rounded-full", level.bar)}
          />
        </div>
      </div>

      {/* ====================================================== */}
      {/* Skills */}
      {/* ====================================================== */}

      <div className="relative mt-5 flex w-full flex-wrap gap-1.5">
        {item.branches?.map((branch) => (
          <span
            key={branch}
            className={clsx(
              "rounded-lg border px-2.5 py-1.5 text-[11px] font-semibold transition-all duration-200",
              "border-border/60 bg-background/60 text-muted-foreground",
              "hover:border-primary/30 hover:bg-primary/5 hover:text-primary",
            )}
          >
            {branch}
          </span>
        ))}
      </div>

      {/* ====================================================== */}
      {/* Bottom Status */}
      {/* ====================================================== */}

      <div className="relative mt-5 grow flex items-end justify-between border-t border-border/40 pt-4">
        <span className="text-[10px] font-medium text-muted-foreground">
          {item.branches?.length || 0} skills
        </span>
        <div className="flex items-center gap-1.5">
          <span className={clsx("size-1.5 rounded-full", level.dot)} />

          <span className="text-[10px] font-medium text-muted-foreground">
            {level.description}
          </span>
        </div>
      </div>
    </motion.div>
  );
}

const Icon = ({ iconString }: { iconString: string }) => (
  <div dangerouslySetInnerHTML={{ __html: iconString }} />
);
