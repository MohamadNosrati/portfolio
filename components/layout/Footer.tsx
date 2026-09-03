"use client";

import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="border-border border-t mt-8">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="flex container 2xs:px-4 px-2 sm:px-6 md:px-8 lg:px-10lg:px-8 py-4 items-center mx-auto justify-between max-sm:flex-col gap-6 text-sm"
      >
        <div className="">
          <p className="text-muted ">
            © {new Date().getFullYear()} Mohamad Nosrati. All rights reserved.
          </p>
        </div>
        <div className="text-muted flex items-center gap-2">
          <span>Designed & Developed with</span>

          <motion.span
            animate={{
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="text-red-500"
          >
            ❤
          </motion.span>

          <span>using Next.js</span>
        </div>
      </motion.div>
    </footer>
  );
}
