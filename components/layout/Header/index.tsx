"use client";

import { AnimatePresence, motion, Variants } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  FaBriefcase,
  FaLayerGroup,
  FaPaperPlane,
  FaUser,
  FaXmark,
} from "react-icons/fa6";
import ThemeToggle from "./ToggleTheme";

const navLinks = [
  {
    title: "About",
    href: "#about",
    icon: FaUser,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: FaLayerGroup,
  },
  {
    title: "Experience",
    href: "#experiences",
    icon: FaBriefcase,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: FaPaperPlane,
  },
];

const menuVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { x: 24, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 22 },
  },
};

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-background text-foreground relative z-50">
      <div className="mx-auto container 2xs:px-4 px-2 sm:px-6 md:px-8 lg:px-10lg:px-8 flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xl font-bold text-foreground"
        >
          <span className="text-primary">&lt;/&gt;</span>

          <span>Mohamad Nosrati</span>
        </Link>

        <nav className="hidden items-center gap-12 lg:flex">
          {navLinks.map((item) => (
            <motion.a
              key={item.href}
              href={item.href}
              whileHover={{ y: -2 }}
              className="group relative text-sm font-medium text-muted transition-colors hover:text-foreground"
            >
              {item.title}

              <span className="bg-primary absolute -bottom-2 left-0 h-[2px] w-0 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <ThemeToggle />

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white"
          >
            {"Let's Connect"}
          </motion.a>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />

          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="flex h-11 w-11 items-center justify-center"
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
                className="absolute left-0 h-[2px] w-full rounded-full bg-foreground"
              />

              <motion.span
                animate={{
                  opacity: mobileMenuOpen ? 0 : 1,
                }}
                className="absolute left-0 top-[9px] h-[2px] w-full rounded-full bg-foreground"
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
                className="absolute left-0 h-[2px] w-full rounded-full bg-foreground"
              />
            </div>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 280, damping: 30 }}
              className="fixed right-0 top-0 z-[100] flex h-screen w-80 flex-col overflow-hidden border-l border-border bg-card lg:hidden"
            >
              <div className="pointer-events-none absolute -right-20 -top-20 size-56 rounded-full bg-primary/10 blur-3xl" />

              <div className="relative flex items-center justify-between px-6 pt-8">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-2 font-mono text-lg font-bold text-foreground"
                >
                  <span className="text-primary">&lt;/&gt;</span>
                  <span>Mohamad Nosrati</span>
                </Link>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex size-9 items-center justify-center rounded-lg border border-border bg-background text-muted transition-colors hover:text-foreground"
                  aria-label="Close menu"
                >
                  <FaXmark className="size-4" />
                </button>
              </div>

              <motion.nav
                variants={menuVariants}
                initial="hidden"
                animate="visible"
                className="relative mt-10 flex flex-col gap-3 px-6"
              >
                {navLinks.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <motion.div key={item.href} variants={itemVariants}>
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="group flex items-center gap-4 rounded-2xl border border-border/60 bg-background/40 px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-primary/5"
                      >
                        <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white">
                          <Icon className="size-4" />
                        </span>

                        <span className="flex-1 text-base font-semibold text-foreground transition-colors duration-300 group-hover:text-primary">
                          {item.title}
                        </span>

                        <span className="font-mono text-xs text-muted">
                          0{index + 1}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
              </motion.nav>

              <motion.a
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: 0.4 }}
                whileTap={{ scale: 0.97 }}
                whileHover={{ scale: 1.02 }}
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="relative mx-6 mt-auto mb-10 flex h-14 items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-primary to-secondary text-sm font-semibold text-white shadow-lg shadow-primary/20"
              >
                <FaPaperPlane className="size-3.5" />
                {"Let's Connect"}
              </motion.a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
