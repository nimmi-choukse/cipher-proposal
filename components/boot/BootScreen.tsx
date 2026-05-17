"use client";

import { motion } from "framer-motion";
import { useCallback } from "react";
import { Share_Tech_Mono } from "next/font/google";

import { useSequentialTypewriter } from "@/lib/hooks/useSequentialTypewriter";
import { MOTION_DURATION, MOTION_EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const BOOT_LINES = [
  "INITIALIZING...",
  "CONNECTING TO ARCHIVE NODE...",
  "DECRYPTING DOSSIER...",
] as const;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: MOTION_DURATION.slow,
      ease: MOTION_EASE,
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const panelVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: MOTION_DURATION.base,
      ease: MOTION_EASE,
    },
  },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: MOTION_DURATION.base,
      ease: MOTION_EASE,
    },
  },
};

export type BootScreenProps = {
  className?: string;
  onAccessDossier?: () => void;
};

export function BootScreen({
  className,
  onAccessDossier,
}: BootScreenProps) {
  const {
    activeLineIndex,
    displayedLines,
    hasStarted,
    isComplete,
    isTyping,
  } = useSequentialTypewriter(BOOT_LINES);

  const handleAccess = useCallback(() => {
    onAccessDossier?.();
  }, [onAccessDossier]);

  return (
    <motion.section
      aria-label="System boot sequence"
      className={cn(
        terminalFont.className,
        "relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-black px-6",
        className
      )}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px),
            linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.08) 2px, rgba(34,197,94,0.08) 4px)",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_55%,black_100%)]" />

      {/* Main terminal panel */}
      <motion.div
        variants={panelVariants}
        className="relative z-10 w-full max-w-4xl overflow-hidden border border-emerald-500/25 bg-black/80 shadow-[0_0_60px_rgba(34,197,94,0.12)] backdrop-blur-sm"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-emerald-500/20 px-6 py-4">
          <div className="text-xs uppercase tracking-[0.4em] text-emerald-400/70">
            CIPHER // SECURE TERMINAL
          </div>
          <div className="text-xs uppercase tracking-[0.3em] text-red-400/60">
            CLASSIFIED // LEVEL 5
          </div>
        </div>

        {/* Terminal content */}
        <div
          className="space-y-6 px-8 py-10 text-lg md:text-2xl"
          role="log"
          aria-live="polite"
          aria-busy={isTyping}
        >
          {BOOT_LINES.map((line, index) => {
            const text = hasStarted ? displayedLines[index] : "";
            const isActive = activeLineIndex === index;
            const isDone =
              hasStarted && (isComplete || index < activeLineIndex);

            return (
              <motion.div
                key={line}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: hasStarted ? 1 : 0,
                  x: hasStarted ? 0 : -20,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.1,
                }}
                className="flex items-center"
              >
                <span className="mr-4 text-emerald-500">{">"}</span>

                <span
                  className={cn(
                    "tracking-[0.18em]",
                    isDone
                      ? "text-emerald-300"
                      : "text-emerald-400"
                  )}
                  style={{
                    textShadow:
                      "0 0 8px rgba(34,197,94,0.45), 0 0 20px rgba(34,197,94,0.15)",
                  }}
                >
                  {text}
                </span>

                {isActive && (
                  <span className="ml-2 inline-block h-7 w-3 animate-pulse bg-emerald-400 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={false}
          animate={isComplete ? "visible" : "hidden"}
          variants={buttonVariants}
          className="border-t border-emerald-500/20 px-8 py-6"
        >
          <motion.button
            type="button"
            onClick={handleAccess}
            disabled={!isComplete}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full border border-emerald-400/50 bg-emerald-950/40 px-6 py-4 text-sm uppercase tracking-[0.35em] text-emerald-300 transition-all duration-300 hover:border-emerald-300 hover:bg-emerald-900/50 hover:shadow-[0_0_20px_rgba(34,197,94,0.2)]"
          >
            ACCESS DOSSIER
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Bottom warning */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="relative z-10 mt-8 text-xs uppercase tracking-[0.5em] text-emerald-700/70"
      >
        Unauthorized access is monitored
      </motion.div>
    </motion.section>
  );
}