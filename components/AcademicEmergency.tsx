"use client";

import { motion } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const stats = [
  {
    label: "COLLEGE SYNC STATUS",
    value: "DEAD",
    color: "text-red-300",
  },
  {
    label: "STUDENT PANIC LEVEL",
    value: "MAXIMUM",
    color: "text-yellow-300",
  },
  {
    label: "TOPPER ACTIVITY",
    value: "DETECTED",
    color: "text-emerald-300",
  },
  {
    label: "CAFFEINE LEVEL",
    value: "CRITICAL",
    color: "text-pink-300",
  },
];

export default function AcademicEmergency() {
  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black px-6 py-24 text-emerald-300`}
    >
      {/* background grid */}
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

      {/* alert glow */}
      <motion.div
        animate={{
          opacity: [0.03, 0.09, 0.03],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.2,
        }}
        className="absolute inset-0 bg-red-500"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.p
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-red-300 text-xs uppercase tracking-[0.6em] mb-6"
          >
            ⚠ EMERGENCY DEPLOYMENT CONSOLE ⚠
          </motion.p>

          <h2 className="text-4xl md:text-7xl tracking-[0.18em] text-red-200">
            WHERE CAN THIS ACTUALLY BE USED?
          </h2>
        </motion.div>

        {/* alert banner */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          className="border border-red-500/30 bg-red-950/20 p-8 text-center mb-14"
        >
          <motion.p
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{
              repeat: Infinity,
              duration: 0.8,
            }}
            className="text-red-300 uppercase tracking-[0.5em] text-sm"
          >
            ACADEMIC EMERGENCY DETECTED
          </motion.p>

          <p className="mt-6 text-2xl md:text-5xl text-red-100 tracking-[0.12em] leading-relaxed">
            QUIZ / MAJOR / MINOR IN &lt; 24 HOURS
          </p>
        </motion.div>

        {/* main console */}
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* dashboard */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="border border-emerald-500/20 bg-black/80 p-8"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-emerald-500 mb-8">
              disaster response dashboard
            </p>

            <div className="space-y-5">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className="flex justify-between border-b border-emerald-500/10 pb-4"
                >
                  <span className="text-sm tracking-[0.15em] text-emerald-400">
                    {stat.label}
                  </span>

                  <span className={`text-sm tracking-[0.15em] ${stat.color}`}>
                    {stat.value}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* fake progress */}
            <div className="mt-10">
              <p className="text-xs uppercase tracking-[0.35em] text-yellow-300 mb-4">
                LAST MINUTE PDF DEMAND
              </p>

              <div className="h-4 border border-yellow-500/20 bg-black">
                <motion.div
                  animate={{
                    width: ["40%", "95%", "70%", "100%"],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 3,
                  }}
                  className="h-full bg-yellow-400"
                />
              </div>
            </div>
          </motion.div>

          {/* exact answer */}
          <motion.div
            initial={{ opacity: 0, x: 40, rotate: -2 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true }}
            className="bg-yellow-100 text-black p-10 shadow-2xl relative"
            style={{ fontFamily: "cursive" }}
          >
            <div className="absolute -top-4 left-10 h-8 w-24 rotate-6 bg-yellow-300/70" />

            <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-8 font-mono">
              intercepted student response
            </p>

            <p className="text-2xl md:text-4xl leading-relaxed">
              it can be used a day before quiz major or minor kyuki tab college sync nahi chalra hota h
            </p>

            <div className="mt-10 border-t border-black/20 pt-6">
              <p className="text-lg italic">
                translation: everyone suddenly remembers academics exist 😭
              </p>
            </div>
          </motion.div>
        </div>

        {/* chaos footer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 border border-emerald-500/20 bg-black/70 p-6 text-center"
        >
          <motion.p
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              repeat: Infinity,
              duration: 1,
            }}
            className="text-emerald-300 uppercase tracking-[0.4em]"
          >
            EMERGENCY SOLUTION: DISTRIBUTED CONTENT RESCUE NETWORK
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}