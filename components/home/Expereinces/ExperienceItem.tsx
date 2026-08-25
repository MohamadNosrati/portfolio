"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEye, FaPhone, FaUserTie } from "react-icons/fa";
import { Fragment } from "react/jsx-runtime";

interface ReferenceInfo {
  name: string;
  position: string;
  phone: string;
}

interface ExperienceCardProps {
  companyLogo: string;
  companyName: string;
  role: string;
  startDate: string;
  endDate: string;
  description: string;
  isFreelance: boolean;
  projects: {
    label: string;
    disable: boolean;
    href?: string;
  }[];
  reference: ReferenceInfo;
  type: string;
}

const cardVariants: Variants = {
  hidden: {
    y: 30,
    opacity: 0,
  },

  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 16,
    },
  },
};

export default function ExperienceItem({
  companyLogo,
  companyName,
  role,
  startDate,
  endDate,
  description,
  projects,
  reference,
  type,
}: ExperienceCardProps) {
  const isCurrent = !endDate?.trim();

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{
        y: -6,
        boxShadow: isCurrent
          ? "0 24px 45px -15px rgb(16 185 129 / 0.22)"
          : "0 20px 25px -5px rgb(0 0 0 / 0.1)",
      }}
      className={clsx(
        "group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border shadow-sm transition-all duration-300",
        isCurrent
          ? [
              "border-emerald-500/30",
              "bg-gradient-to-br from-emerald-500/[0.06] via-card to-card",
              "hover:border-emerald-500/50",
            ]
          : ["border-border/60", "bg-card", "hover:border-primary/30"],
      )}
    >
      {isCurrent && (
        <>
          <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-emerald-400 via-emerald-500 to-emerald-400" />

          <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-emerald-500/10 blur-3xl transition-opacity duration-500 group-hover:bg-emerald-500/15" />
        </>
      )}

      <div
        className={clsx(
          "relative flex flex-grow flex-col gap-4 p-6",
          isCurrent && "pt-7",
        )}
      >
        <div className="flex items-center gap-4">
          <div
            className={clsx(
              "relative h-12 w-12 flex-shrink-0 overflow-hidden rounded-full border bg-background p-0.5",
              isCurrent
                ? "border-emerald-500/30 shadow-[0_0_0_4px_rgb(16_185_129_/_0.06)]"
                : "border-border",
            )}
          >
            {companyLogo ? (
              <Image
                fill
                src={companyLogo}
                alt={companyName}
                className="h-full w-full rounded-full object-cover"
              />
            ) : null}
          </div>

          <div className="flex min-w-0 flex-col">
            <h3 className="truncate text-lg font-bold leading-snug text-foreground">
              {role}
            </h3>

            <span
              className={clsx(
                "text-sm font-medium tracking-wide",
                isCurrent
                  ? "text-emerald-600 dark:text-emerald-400"
                  : "text-primary",
              )}
            >
              {companyName}
            </span>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2">
          <div
            className={clsx(
              "badge px-2.5 py-2 text-xs font-semibold",
              isCurrent
                ? "border border-emerald-500/15 bg-emerald-500/5 text-emerald-700 dark:text-emerald-400"
                : "badge-ghost",
            )}
          >
            {startDate} — {isCurrent ? "Present" : endDate}
          </div>

          <div
            className={clsx(
              "badge px-2.5 py-2 text-xs font-semibold border border-pink-500/15 bg-pink-500/5 text-pink-700 dark:text-pink-400",
            )}
          >
            {type}
          </div>
        </div>

        <p className="mt-1 text-sm font-normal text-justify leading-relaxed text-muted">
          {description}
        </p>

        <div className="mt-auto flex flex-wrap gap-1.5 pt-3">
          {projects?.map((project) => (
            <Fragment key={project.label}>
              {project.disable ? (
                <div className="badge badge-ghost cursor-not-allowed gap-1.5 px-2.5 py-2 text-xs font-semibold">
                  <span>{project.label}</span>

                  <FaEye className="size-3" />
                </div>
              ) : (
                <Link
                  target="_blank"
                  href={project.href || ""}
                  className={clsx(
                    "badge gap-1.5 px-2.5 py-2 text-xs font-semibold transition-all",
                    isCurrent
                      ? "border border-emerald-500/20 bg-emerald-500/10 text-emerald-700 hover:bg-emerald-500/15 dark:text-emerald-400"
                      : "badge-primary badge-soft",
                  )}
                >
                  <span>{project.label}</span>

                  <FaEye className="size-3" />
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      <div
        className={clsx(
          "relative mt-auto border-t p-4",
          isCurrent
            ? "border-emerald-500/10 bg-emerald-500/[0.025]"
            : "border-border/50 bg-muted/10",
        )}
      >
        <div className="mb-2 flex items-center gap-2 text-muted">
          <FaUserTie
            className={clsx(
              "size-3.5",
              isCurrent ? "text-emerald-500/80" : "text-primary/70",
            )}
          />

          <span className="text-xs font-bold uppercase tracking-wider">
            Manager Reference
          </span>
        </div>

        <div className="flex flex-col gap-1 rounded-xl border border-border/40 bg-background/50 p-3">
          <div className="flex items-baseline justify-between gap-3">
            <span className="truncate text-sm font-bold text-foreground">
              {reference.name}
            </span>

            <span className="text-right text-xs font-medium text-muted">
              {reference.position}
            </span>
          </div>

          <a
            href={`tel:${reference.phone.replace(/\s+/g, "")}`}
            className="group/phone mt-1 flex w-fit items-center gap-1.5 text-xs font-semibold text-primary hover:underline"
          >
            <FaPhone className="size-2.5 transition-transform group-hover/phone:animate-pulse" />

            {reference.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
