"use client";

import { motion, Variants } from "framer-motion";
import { FaUser } from "react-icons/fa";
import AboutItem from "./AboutItem";

export default function About() {
  // Stagger wrapper variant
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12 },
    },
  };

  // Text container variant
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const infoItems = [
    { label: "Name", value: "Mohamad Nosrati" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Experience", value: "4+ Years" },
    { label: "Location", value: "Tehran, Iran" }, // Swap out with your actual data
  ];

  return (
    <section id="about" className="py-8 container mx-auto max-sm:px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="bg-card border border-border/40 container mx-auto flex gap-10 lg:gap-16 max-lg:flex-col rounded-2xl p-6 md:p-10 shadow-sm"
      >
        {/* Left Side: Bio text */}
        <motion.div variants={textVariants} className="flex-1">
          <div className="flex gap-3 items-center">
            <div className="p-2 bg-primary/10 rounded-lg text-primary">
              <FaUser className="size-5" />
            </div>
            <div className="flex flex-col">
              <h2 className="text-foreground font-extrabold text-xl tracking-wide uppercase">
                About Me
              </h2>
              <div className="h-0.5 bg-primary w-8 mt-1 rounded-full" />
            </div>
          </div>

          <div className="mt-6">
            <p className="text-muted-foreground leading-relaxed text-base md:text-lg font-normal">
              Front-End Developer with 4+ years of experience in React and
              Next.js, building scalable, high-performance web applications.
              Strong in modern frontend architecture, SSR, SSG, state
              management, responsive design, and real-time applications. Eager
              to grow in React Native mobile development and experienced in
              backend development with Node.js, Express, and MongoDB.
            </p>
          </div>
        </motion.div>

        {/* Right Side: Grid Information Items */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 self-center w-full">
          {infoItems.map((item, index) => (
            <AboutItem key={index} label={item.label} value={item.value} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
