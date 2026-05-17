"use client";

import { motion } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

export default function MemeAppendix() {
  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black px-6 py-24 text-emerald-300`}
    >
      {/* background */}
      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* scanlines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.06) 2px, rgba(34,197,94,0.06) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-red-400 uppercase tracking-[0.6em] text-xs mb-8"
        >
          FINAL APPENDIX
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-7xl tracking-[0.18em] mb-16"
        >
          CLASSIFIED MEME EVIDENCE
        </motion.h2>

        {/* meme frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -1 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          className="border border-emerald-500/20 bg-black/80 p-6 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
        >
          <video
            src="/meme.mp4"
            controls
            autoPlay
            loop
            muted
            className="w-full rounded-lg border border-emerald-500/10"
          />
        </motion.div>

        {/* exact text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1.5,
            }}
            className="text-yellow-300 text-2xl md:text-5xl tracking-[0.12em]"
          >
            epsiten and trump it is
          </motion.p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-10 text-emerald-400/60 uppercase tracking-[0.35em] text-xs"
        >
          dossier terminated successfully
        </motion.p>
      </div>
    </section>
  );
}