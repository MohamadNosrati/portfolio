"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import profileImage from "@/public/images/profile.jpg";
import { FaArrowRight } from "react-icons/fa";
import { FaCloudDownloadAlt } from "react-icons/fa";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-10">
      {/* Background Blur */}

      <div className="bg-primary/20 absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full blur-[140px]" />

      <div className="relative container max-sm:px-4  mx-auto">
        <div className="grid items-center lg:gap-20 lg:grid-cols-[1fr_360px]">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="text-primary border-primary/20 bg-primary/10 inline-flex rounded-full border px-5 py -2text-sm font-medium"
            >
              👋 Full Stack JavaScript Developer
            </motion.span>

            <h1 className="mt-8 text-5xl font-black leading-tight md:text-7xl">
              Crafting
              <br />
              <span className="text-primary">Modern Web</span>
              <br />
              Experiences
            </h1>

            <p className="text-muted mt-8 max-w-xl text-lg leading-8">
              I build scalable, high-performance web applications using React,
              Next.js, Node.js and modern technologies with a strong focus on
              user experience, clean architecture and beautiful interfaces.
            </p>

            <div className="mt-12 flex gap-5">
              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  href="#contact"
                  className="from-primary to-secondary inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-linear-to-r px-8 font-semibold text-white shadow-lg shadow-indigo-500/30"
                >
                  Let's Connect
                  <FaArrowRight className="size-5" />
                </Link>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Link
                  download={true}
                  href="/files/mohamad-nst-resume.pdf"
                  className="border-border hover:border-primary inline-flex h-14 items-center justify-center gap-3 rounded-xl border bg-white/5 px-8 font-semibold transition-colors"
                >
                  Resume
                  <FaCloudDownloadAlt className="size-5" />
                </Link>
              </motion.div>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative mx-auto"
          >
            {/* Glow */}

            <div className="bg-primary/30 absolute inset-0 rounded-[40px] blur-3xl" />

            {/* Card */}

            <div className="border-border bg-card relative overflow-hidden rounded-[40px] border p-5">
              <div className="relative aspect-square overflow-hidden rounded-[28px]">
                <Image
                  src={profileImage}
                  alt="Mohamad Nosrati"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <div className="mt-8">
                <h3 className="text-2xl font-bold">Mohamad Nosrati</h3>

                <p className="text-muted mt-3 leading-7">
                  Passionate about building elegant digital products with modern
                  JavaScript technologies and creating experiences that users
                  love.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm">
                  React
                </span>

                <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm">
                  Next.js
                </span>

                <span className="bg-primary/10 text-primary rounded-full px-4 py-2 text-sm">
                  Node.js
                </span>
              </div>
            </div>

            {/* Floating Cards */}

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="border-border bg-card absolute -left-8 top-12 rounded-xl border px-5 py-4 shadow-xl"
            >
              <p className="text-primary text-3xl font-bold">4+</p>
              <p className="text-muted mt-1 text-sm">Years Experience</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
