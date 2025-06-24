"use client";
import { AnimatePresence, motion } from "motion/react";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 10, opacity: 0, scale: 0 }}
        transition={{ ease: "easeInOut", duration: 0.76 }}
        className="h-screen "
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
