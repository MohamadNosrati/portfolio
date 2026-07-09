"use client";

import clsx from "clsx";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaEye } from "react-icons/fa";
import { FaPhone, FaUserTie } from "react-icons/fa6";
import { IoIosEyeOff } from "react-icons/io";
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
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 90, damping: 16 },
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
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -6, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
      className="flex flex-col h-full bg-card border border-border/60 rounded-2xl overflow-hidden shadow-sm justify-between transition-all duration-300 hover:border-primary/30"
    >
      {/* Upper Content Box */}
      <div className="p-6 flex flex-col gap-4 flex-grow">
        {/* Company Header Row */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 relative rounded-full border border-border overflow-hidden bg-background flex-shrink-0 p-0.5">
            {companyLogo ? (
              <Image
                fill
                src={companyLogo}
                alt={companyName}
                className="w-full h-full object-cover rounded-full"
              />
            ) : null}
          </div>
          <div className="flex flex-col min-w-0">
            <h3 className="text-lg font-bold text-foreground truncate leading-snug">
              {role}
            </h3>
            <span className="text-sm font-medium text-primary tracking-wide">
              {companyName}
            </span>
          </div>
        </div>

        {/* Date Duration Range Badge */}
        <div className="flex gap-3">
          <div className="badge badge-ghost text-xs font-semibold px-2.5 py-2">
            {startDate} — {endDate}
          </div>
          <div className="badge badge-secondary text-xs font-semibold px-2.5 py-2">
            {type}
          </div>
        </div>
        {/* Brief Job Description */}
        <p className="text-sm text-muted-foreground leading-relaxed font-normal mt-1">
          {description}
        </p>

        {/* Skills Tag Area using DaisyUI Badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-3">
          {projects?.map((project) => (
            <Fragment key={project?.label}>
              {project?.disable ? (
                <div
                  className={clsx(
                    "badge text-xs font-semibold px-2.5 py-2 cursor-not-allowed badge-ghost",
                  )}
                >
                  <span>{project.label}</span>
                  <span>{<FaEye />}</span>
                </div>
              ) : (
                <Link
                  target="_blank"
                  key={project?.label}
                  href={project?.href || ""}
                  className={clsx(
                    "badge badge-soft  text-xs font-semibold px-2.5 py-2",
                    project?.disable
                      ? "cursor-not-allowed badge-ghost"
                      : "cursor-pointer badge-primary",
                  )}
                >
                  <span>{project.label}</span>
                  <span>{<FaEye />}</span>
                </Link>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* Footer Layer: Dedicated Reference Box */}
      <div className="bg-muted/40 border-t border-border/50 p-4 mt-auto">
        <div className="flex items-center gap-2 mb-2 text-muted-foreground">
          <FaUserTie className="size-3.5 text-primary/70" />
          <span className="text-xs font-bold uppercase tracking-wider">
            Manager Reference
          </span>
        </div>

        <div className="flex flex-col gap-1 bg-background/50 border border-border/40 rounded-xl p-3">
          <div className="flex justify-between items-baseline">
            <span className="text-sm font-bold text-foreground">
              {reference.name}
            </span>
            <span className="text-xs text-muted-foreground font-medium">
              {reference.position}
            </span>
          </div>

          <a
            href={`tel:${reference.phone.replace(/\s+/g, "")}`}
            className="flex items-center gap-1.5 text-xs font-semibold text-primary hover:underline w-fit mt-1 group/phone"
          >
            <FaPhone className="size-2.5 transition-transform group-hover/phone:animate-pulse" />
            {reference.phone}
          </a>
        </div>
      </div>
    </motion.div>
  );
}
