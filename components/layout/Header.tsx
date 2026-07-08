"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

const navLinks = [
  {
    title: "About",
    href: "#about",
  },
  {
    title: "Skills",
    href: "#skills",
  },
  {
    title: "Experience",
    href: "#experience",
  },
  {
    title: "Contact",
    href: "#contact",
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header>
      <div className="mx-auto container max-sm:px-4 flex h-20 items-center justify-between">
        {/* Logo */}

        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xl font-bold"
        >
          <span className="text-primary">&lt;/&gt;</span>

          <span>Mohamad Nosrati</span>
        </Link>

        {/* Desktop Menu */}

        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className="group relative text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {item.title}

              <span className="bg-primary absolute -bottom-2 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        {/* Desktop Button */}

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="hidden rounded-lg bg-primary px-5 py-3 text-sm font-semibold lg:block"
        >
          Let's Connect
        </motion.a>

        {/* Mobile Button */}

        <button
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          className="flex h-11 w-11 items-center justify-center lg:hidden"
        >
          <div className="relative h-5 w-6">
            <motion.span
              animate={
                mobileMenuOpen
                  ? {
                      rotate: 45,
                      top: 10,
                    }
                  : {
                      rotate: 0,
                      top: 0,
                    }
              }
              className="absolute left-0 h-[2px] w-full rounded-full bg-white"
            />

            <motion.span
              animate={{
                opacity: mobileMenuOpen ? 0 : 1,
              }}
              className="absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-white"
            />

            <motion.span
              animate={
                mobileMenuOpen
                  ? {
                      rotate: -45,
                      top: 10,
                    }
                  : {
                      rotate: 0,
                      top: 18,
                    }
              }
              className="absolute left-0 h-[2px] w-full rounded-full bg-white"
            />
          </div>
        </button>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.35,
              }}
              className="fixed right-0 pt-8 top-0 flex h-screen w-80 flex-col border-l border-white/10 bg-[#0B1120] px-8 lg:hidden"
            >
              <Link
                href="/"
                className="flex items-center gap-2 font-mono text-xl font-bold"
              >
                <span className="text-primary">&lt;/&gt;</span>

                <span>Mohamad Nosrati</span>
              </Link>
              <nav className="flex flex-col gap-8 mt-12">
                {navLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-2xl font-medium text-white"
                  >
                    {item.title}
                  </Link>
                ))}
              </nav>
              <motion.a
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.03 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="from-primary to-secondary mt-12 flex h-14 items-center justify-center rounded-lg bg-linear-to-r font-semibold"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
