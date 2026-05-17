"use client";

import { motion } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const skills = [
  { name: "HTML", level: 82, status: "stable" },
  { name: "CSS", level: 78, status: "stable" },
  { name: "C", level: 74, status: "stable" },
  { name: "C++", level: 42, status: "in training" },
  { name: "PYTHON", level: 38, status: "archived memory" },
];

const EXACT_NOTE =
  "the real answer to why me is this itself it is what i can bring creativity passion and willingness to learn and contribute i may not know that much tech stacks but i can learn and thats what i really want to do";

function SkillBar({
  name,
  level,
  status,
  delay,
}: {
  name: string;
  level: number;
  status: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <span className="text-sm tracking-[0.2em] text-emerald-200">
          {name}
        </span>
        <span className="text-[10px] uppercase tracking-[0.2em] text-emerald-400/60">
          {status}
        </span>
      </div>

      <div className="h-3 border border-emerald-500/20 bg-black">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay }}
          className="h-full bg-emerald-400 shadow-[0_0_15px_rgba(34,197,94,0.5)]"
        />
      </div>
    </motion.div>
  );
}

export default function WhyThisUser() {
  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black px-6 py-24 text-emerald-300`}
    >
      {/* Background */}
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

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.06) 2px, rgba(34,197,94,0.06) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.55em] text-red-400/70">
            CANDIDATE ANALYSIS
          </p>

          <h2 className="text-4xl md:text-6xl tracking-[0.18em]">
            WHY THIS USER
          </h2>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-3">
          {/* Hacker Identity Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden border border-emerald-500/20 bg-black/80 p-8 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
          >
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <div className="text-[10px] leading-none text-emerald-400 break-all p-2">
                010101001101010010101001010101001010100101010100101010101001010101001010101001010101010101001101010010101001010101001010100101010100101010101001010101001010101001010101
              </div>
            </div>

            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-red-400/70 relative z-10">
              classified identity scan
            </p>

            <div className="relative z-10 flex justify-center mb-8">
              <div className="relative h-40 w-40 rounded-full border border-emerald-500/20 bg-emerald-950/10 flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.2)]">
                <div className="text-7xl">🕶️</div>
                <div className="absolute inset-0 rounded-full border border-emerald-400/20 animate-ping" />
              </div>
            </div>

            <div className="relative z-10 space-y-5 text-sm">
              <div>
                <p className="text-emerald-500 text-xs uppercase tracking-[0.3em]">
                  SUBJECT
                </p>
                <p className="mt-2 text-lg tracking-[0.1em] text-emerald-200">
                  NIMMI CHOUKSE
                </p>
              </div>

              <div>
                <p className="text-emerald-500 text-xs uppercase tracking-[0.3em]">
                  ROLL ID
                </p>
                <p className="mt-2 text-emerald-300">B25PH1010</p>
              </div>

              <div>
                <p className="text-emerald-500 text-xs uppercase tracking-[0.3em]">
                  STATUS
                </p>
                <p className="mt-2 text-yellow-300">DANGEROUSLY CURIOUS</p>
              </div>

              <div>
                <p className="text-emerald-500 text-xs uppercase tracking-[0.3em]">
                  SPECIALIZATION
                </p>
                <p className="mt-2 text-emerald-300">
                  CREATIVE PROBLEM SOLVING
                </p>
              </div>
            </div>

            <a
              href="https://github.com/nimmi-choukse"
              target="_blank"
              rel="noopener noreferrer"
              className="relative z-10 mt-8 block border border-emerald-500/30 px-5 py-4 text-center text-xs uppercase tracking-[0.3em] text-emerald-300 hover:bg-emerald-950/20 transition"
            >
              ACCESS CODE ARCHIVE
            </a>
          </motion.div>

          {/* Skills */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="border border-emerald-500/20 bg-black/75 p-8 shadow-[0_0_30px_rgba(34,197,94,0.08)]"
          >
            <p className="mb-8 text-xs uppercase tracking-[0.4em] text-red-400/70">
              capability scan
            </p>

            <div className="space-y-6">
              {skills.map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  status={skill.status}
                  delay={i * 0.15}
                />
              ))}
            </div>

            <div className="mt-10 border border-emerald-500/15 bg-emerald-950/10 p-4">
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-400">
                threat level
              </p>
              <p className="mt-3 text-yellow-200">dangerously curious</p>
            </div>
          </motion.div>

          {/* Sticky Note */}
          <motion.div
            initial={{ opacity: 0, rotate: -3, x: 40 }}
            whileInView={{ opacity: 1, rotate: 0, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative bg-yellow-100 text-black p-8 shadow-2xl min-h-[500px]"
            style={{
              fontFamily: "cursive",
            }}
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-28 rotate-2 bg-yellow-300/70" />

            <p className="mb-8 text-xs uppercase tracking-[0.3em] text-gray-700 font-mono">
              personal note
            </p>

            <p className="text-lg md:text-xl leading-relaxed">{EXACT_NOTE}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}