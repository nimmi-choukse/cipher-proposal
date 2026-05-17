"use client";

import { motion, useInView } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import { useEffect, useMemo, useRef, useState } from "react";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const EXACT_TEXT =
  "my understanding of the project starts with the original idea like whenever we stream a video or download a file the data comes from CDN something like i opened a video on youtube in indore (where i am currently now) so the video not necessarily coming from youtube's main office in america instead from some nearby server in india that is CDN ( many servers placed in many cities/countries that store copies of data) and here comes the problem with it now because only few companies dominate this CDN market it makes it centralized (no real freedom they can block a website entirely small regions may be ignored) AND CIPHER SOLVES THIS BY removing centralized companies and creating a network where ordinary machines can serve content but again there are two main prob our proj needs to deal with";

function useTypewriter(text: string, speed = 18, start = true) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (!start) return;

    let index = 0;

    const interval = setInterval(() => {
      if (index <= text.length) {
        setDisplayed(text.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed, start]);

  return displayed;
}

export default function MissionBriefing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const displayedText = useTypewriter(EXACT_TEXT, 14, inView);

  const showThreats = displayedText.includes(
    "only few companies dominate this CDN market"
  );

  const showSolution = displayedText.includes("AND CIPHER SOLVES THIS BY");

  const progress = useMemo(() => {
    return displayedText.length / EXACT_TEXT.length;
  }, [displayedText]);

  return (
    <section
      ref={ref}
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black text-emerald-300`}
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.05]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(34,197,94,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34,197,94,0.12) 1px, transparent 1px)
            `,
            backgroundSize: "42px 42px",
          }}
        />
      </div>

      {/* Scanlines */}
      <div
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.08) 2px, rgba(34,197,94,0.08) 4px)",
        }}
      />

      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.08)_0%,transparent_50%,black_100%)]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.5em] text-red-400/70">
            CLASSIFIED DOSSIER
          </p>

          <h1 className="text-4xl md:text-7xl tracking-[0.2em] text-emerald-300">
            MISSION BRIEFING
          </h1>

          <div className="mt-4 h-[2px] w-40 bg-emerald-500/50" />
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left dossier */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="border border-emerald-500/20 bg-black/70 backdrop-blur-sm shadow-[0_0_40px_rgba(34,197,94,0.08)]"
          >
            <div className="border-b border-emerald-500/20 px-6 py-4 flex justify-between">
              <span className="text-xs uppercase tracking-[0.4em] text-emerald-500">
                RECOVERED ANALYST NOTE
              </span>
              <span className="text-xs uppercase tracking-[0.3em] text-red-400/60">
                LEVEL 5
              </span>
            </div>

            <div className="p-6 md:p-8">
              <p
                className="leading-loose text-sm md:text-base tracking-[0.08em]"
                style={{
                  textShadow: "0 0 8px rgba(34,197,94,0.2)",
                }}
              >
                {displayedText}
                <span className="ml-2 inline-block h-5 w-2 animate-pulse bg-emerald-400" />
              </p>
            </div>
          </motion.div>

          {/* Right visual */}
          <div className="space-y-8">
            {/* CDN Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1 }}
              className="border border-emerald-500/20 bg-black/60 p-8"
            >
              <p className="mb-8 text-xs uppercase tracking-[0.4em] text-emerald-500">
                NETWORK TRACE
              </p>

              <div className="flex flex-col items-center gap-6">
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="border border-red-500/40 px-6 py-4 text-center"
                >
                  YOUTUBE HQ (USA)
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-12 w-[2px] bg-emerald-500"
                />

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="border border-emerald-500/40 px-6 py-4 text-center"
                >
                  CDN INDIA NODE
                </motion.div>

                <motion.div
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                  className="h-12 w-[2px] bg-emerald-500"
                />

                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                  className="border border-cyan-500/40 px-6 py-4 text-center"
                >
                  USER (INDORE)
                </motion.div>
              </div>
            </motion.div>

            {/* Threat cards */}
            {showThreats && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid gap-4 md:grid-cols-3"
              >
                {[
                  "CENSORSHIP RISK",
                  "REGIONAL EXCLUSION",
                  "INFRASTRUCTURE DEPENDENCY",
                ].map((item) => (
                  <motion.div
                    key={item}
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    className="border border-red-500/30 bg-red-950/10 p-4 text-center text-xs tracking-[0.25em] text-red-300"
                  >
                    {item}
                  </motion.div>
                ))}
              </motion.div>
            )}

            {/* Network transformation */}
            {showSolution && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border border-emerald-500/20 bg-black/60 p-8"
              >
                <p className="mb-6 text-xs uppercase tracking-[0.4em] text-emerald-500">
                  PROTOCOL TRANSFORMATION
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex flex-col items-center gap-2">
                    <div className="h-16 w-16 rounded-full border border-red-400 animate-pulse" />
                    <p className="text-xs tracking-[0.2em]">CENTRALIZED</p>
                  </div>

                  <motion.div
                    animate={{ x: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 1.2 }}
                    className="text-3xl"
                  >
                    →
                  </motion.div>

                  <div className="grid grid-cols-3 gap-3">
                    {[...Array(9)].map((_, i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{
                          repeat: Infinity,
                          duration: 1.5,
                          delay: i * 0.1,
                        }}
                        className="h-5 w-5 rounded-full bg-emerald-400"
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>

        {/* Final warning */}
        {progress > 0.95 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="mt-24 text-center"
          >
            <p className="text-red-400 text-sm uppercase tracking-[0.6em] mb-4">
              CRITICAL ALERT
            </p>

            <h2 className="text-4xl md:text-7xl tracking-[0.25em] text-red-300">
              BUT TWO CORE
              <br />
              PROBLEMS REMAIN
            </h2>
          </motion.div>
        )}
      </div>
    </section>
  );
}