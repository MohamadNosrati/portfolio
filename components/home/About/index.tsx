"use client";

import { motion, Variants } from "framer-motion";
import { FaUser } from "react-icons/fa";
import AboutItem from "./AboutItem";

export default function About() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const textVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -20,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const infoItems = [
    { label: "Name", value: "Mohamad Nosrati" },
    { label: "Role", value: "Front-End Developer" },
    { label: "Experience", value: "4+ Years" },
    { label: "Location", value: "Tehran, Iran" },
  ];

  return (
    <section id="about" className="container mx-auto py-10 max-sm:px-4">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{
          once: true,
          margin: "-100px",
        }}
        className="
          group relative
          container mx-auto
          overflow-hidden
          rounded-3xl
          border border-border/50
          bg-gradient-to-br
          from-card
          via-card
          to-primary/[0.035]
          p-6
          shadow-sm
          transition-all duration-500
          hover:border-primary/20
          hover:shadow-xl hover:shadow-primary/5
          md:p-10
          lg:p-12
        "
      >
        {/* Background decoration */}
        <div
          className="
            pointer-events-none absolute
            -right-24 -top-24
            size-64
            rounded-full
            bg-primary/[0.06]
            blur-3xl
          "
        />

        <div
          className="
            pointer-events-none absolute
            -bottom-32 -left-24
            size-72
            rounded-full
            bg-primary/[0.035]
            blur-3xl
          "
        />

        {/* Top accent line */}
        <div
          className="
            absolute left-0 right-0 top-0
            h-px
            bg-gradient-to-r
            from-transparent
            via-primary/40
            to-transparent
          "
        />

        <div
          className="
            relative
            flex gap-10
            lg:gap-16
            max-lg:flex-col
          "
        >
          {/* Left Side: Bio */}
          <motion.div variants={textVariants} className="flex-1 lg:pr-4">
            {/* Keep this title + icon unchanged */}
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-2 text-primary">
                <FaUser className="size-5" />
              </div>

              <div className="flex flex-col">
                <h2 className="text-xl font-extrabold uppercase tracking-wide text-foreground">
                  About Me
                </h2>

                <div className="mt-1 h-0.5 w-8 rounded-full bg-primary" />
              </div>
            </div>

            {/* Bio */}
            <div className="mt-7">
              <p
                className="
                  max-w-2xl
                  text-base
                  font-normal
                  leading-8
                  text-muted-foreground
                  md:text-lg
                "
              >
                Front-End Developer with 4+ years of experience in React and
                Next.js, building scalable, high-performance web applications.
                Strong in modern frontend architecture, SSR, SSG, state
                management, responsive design, and real-time applications. Eager
                to grow in React Native mobile development and experienced in
                backend development with Node.js, Express, and MongoDB.
              </p>
            </div>

            {/* Small decorative separator */}
            <div className="mt-8 flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-primary" />
              <div className="h-px w-16 bg-border" />
              <div className="h-px w-6 bg-primary/30" />
            </div>
          </motion.div>

          {/* Vertical divider */}
          <div
            className="
              hidden
              lg:block
              w-px
              self-stretch
              bg-gradient-to-b
              from-transparent
              via-border
              to-transparent
            "
          />

          {/* Right Side: Information */}
          <div
            className="
              grid w-full flex-1
              grid-cols-1 gap-4
              sm:grid-cols-2
              lg:gap-5
            "
          >
            {infoItems.map((item, index) => (
              <AboutItem key={index} label={item.label} value={item.value} />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
