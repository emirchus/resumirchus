import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

interface AiButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isGenerating: boolean;
}

export const AiButton = ({
  className,
  isGenerating,
  ...props
}: AiButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "group relative w-full inline-flex h-12 overflow-hidden rounded p-[1px] focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
        className
      )}
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className="transition-all duration-300 inline-flex h-full w-full cursor-pointer items-center justify-center rounded bg-accent px-3 py-1 text-sm text-accent-foreground backdrop-blur-3xl group-[disabled]:opacity-50 font-black">
        <AnimatePresence mode="wait" initial={false}>
          {isGenerating ? (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                duration: 0.76,
              }}
            >
              Enhancing summary...
            </motion.p>
          ) : (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{
                type: "spring",
                stiffness: 20,
                damping: 15,
                mass: 2,
                duration: 0.76,
              }}
            >
              Enhance with AI
            </motion.p>
          )}
        </AnimatePresence>
      </span>
    </button>
  );
};
