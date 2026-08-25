"use client";

import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  if (!mounted) {
    return <div className="h-10 w-10" />;
  }

  const isDark = theme === "dark";

  return (
    <motion.button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      whileTap={{ scale: 0.9 }}
      className="relative flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-card text-foreground transition-colors hover:bg-card-hover"
      aria-label="Toggle theme"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, opacity: 0 }}
        animate={{ rotate: 0, opacity: 1 }}
        transition={{ duration: 0.25 }}
      >
        {isDark ? <Sun size={18} /> : <Moon size={18} />}
      </motion.div>
    </motion.button>
  );
}
