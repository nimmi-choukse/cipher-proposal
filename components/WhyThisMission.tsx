"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import { useState } from "react";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const chunks = [
  {
    type: "terminal",
    text: "firstly it dont include normal tech stacks which i am already learning from other sources so by the mean time i will learn more new things",
  },
  {
    type: "terminal",
    text: "and also as mentioned in the doc for having fun while implementing it i personally like to do what makes me happy",
  },
  {
    type: "confession",
    text: "aaj bhi mene socha tha dsa kar lungi par ye website banane me zada mazza ara tha",
  },
  {
    type: "transparency",
    text: "although bhot ai use kiya par still but its like i am happy at the end result",
  },
  {
    type: "radar",
    text: "also i am very curious about networking which makes this proj a very good fit",
  },
  {
    type: "mentor",
    text: "and ofc for the mentors inter iit gold and now SOB i will not learn tech and that experince from somewhere else rather than here",
  },
];

function DramaticChunk({
  type,
  text,
}: {
  type: string;
  text: string;
}) {
  if (type === "confession") {
    return (
      <motion.div
        initial={{ scale: 0.6, rotate: -8, opacity: 0 }}
        animate={{ scale: 1, rotate: 0, opacity: 1 }}
        className="bg-yellow-100 text-black p-8 shadow-2xl max-w-2xl mx-auto"
        style={{ fontFamily: "cursive" }}
      >
        <p className="text-xs uppercase mb-4 tracking-[0.3em] text-gray-600">
          CONFESSION DETECTED 😭
        </p>
        <p className="text-xl leading-relaxed">{text}</p>
      </motion.div>
    );
  }

  if (type === "transparency") {
    return (
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        className="border border-cyan-500/30 bg-cyan-950/10 p-8 max-w-3xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.4em] text-cyan-300 mb-4">
          TRANSPARENCY REPORT
        </p>
        <p className="text-lg text-cyan-100 leading-relaxed">{text}</p>
      </motion.div>
    );
  }

  if (type === "radar") {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid md:grid-cols-2 gap-10 items-center max-w-5xl mx-auto"
      >
        <div className="relative flex justify-center">
          <div className="h-56 w-56 rounded-full border border-purple-400/30 flex items-center justify-center">
            <div className="absolute h-40 w-40 rounded-full border border-purple-400/20 animate-ping" />
            <div className="absolute h-24 w-24 rounded-full border border-purple-400/20 animate-ping" />
            <div className="h-4 w-4 rounded-full bg-purple-300 shadow-[0_0_20px_rgba(192,132,252,1)]" />
          </div>
        </div>

        <div className="border border-purple-500/30 bg-purple-950/10 p-8">
          <p className="text-xs uppercase tracking-[0.4em] text-purple-300 mb-4">
            CURIOSITY SIGNAL DETECTED
          </p>
          <p className="text-lg text-purple-100 leading-relaxed">{text}</p>
        </div>
      </motion.div>
    );
  }

  if (type === "mentor") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        className="border border-pink-500/30 bg-pink-950/10 p-10 max-w-4xl mx-auto"
      >
        <p className="text-xs uppercase tracking-[0.45em] text-pink-300 mb-5">
          FINAL MOTIVE
        </p>
        <p className="text-xl md:text-2xl text-pink-100 leading-relaxed">
          {text}
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="border border-emerald-500/20 bg-black/70 p-8 max-w-4xl mx-auto"
    >
      <p className="text-xs uppercase tracking-[0.4em] text-emerald-400 mb-4">
        TERMINAL EXTRACTION
      </p>
      <p className="text-lg text-emerald-100 leading-relaxed">{text}</p>
    </motion.div>
  );
}

export default function WhyThisMission() {
  const [started, setStarted] = useState(false);
  const [step, setStep] = useState(0);
  const [verified, setVerified] = useState(false);

  const nextStep = () => {
    if (step < chunks.length - 1) {
      setStep(step + 1);
    } else {
      setVerified(true);
    }
  };

  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black px-6 py-24 text-emerald-300`}
    >
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

      <AnimatePresence>
        {verified && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 z-[9999] bg-emerald-950/95 flex items-center justify-center"
          >
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="text-center px-6"
            >
              <p className="text-xs uppercase tracking-[0.6em] text-emerald-400 mb-6">
                VERDICT
              </p>

              <h1 className="text-4xl md:text-8xl text-emerald-100 tracking-[0.2em]">
                MOTIVE VERIFIED
              </h1>

              <p className="mt-8 text-lg md:text-2xl text-emerald-300">
                SUBJECT IS GENUINELY INTERESTED
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 mx-auto max-w-7xl">
        {!started ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-32"
          >
            <p className="text-red-400 uppercase tracking-[0.5em] mb-8">
              PSYCHOLOGICAL INTERROGATION CHAMBER
            </p>

            <motion.h2
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="text-4xl md:text-7xl tracking-[0.2em] mb-12"
            >
              WHY THIS MISSION
            </motion.h2>

            <p className="text-emerald-400 text-sm uppercase tracking-[0.35em] mb-16">
              INITIATING SUBJECT INTERROGATION...
            </p>

            <button
              onClick={() => setStarted(true)}
              className="border border-emerald-500/30 px-8 py-4 uppercase tracking-[0.3em] hover:bg-emerald-950/20 transition"
            >
              BEGIN EXTRACTION
            </button>
          </motion.div>
        ) : (
          <div className="space-y-12">
            <div className="text-center">
              <p className="text-red-300 uppercase tracking-[0.4em] mb-4">
                EXTRACTION IN PROGRESS
              </p>

              <h2 className="text-3xl md:text-5xl tracking-[0.15em]">
                WHY THIS MISSION?
              </h2>
            </div>

            <DramaticChunk
              type={chunks[step].type}
              text={chunks[step].text}
            />

            <div className="text-center">
              <button
                onClick={nextStep}
                className="border border-emerald-500/30 px-8 py-4 uppercase tracking-[0.3em] hover:bg-emerald-950/20 transition"
              >
                {step === chunks.length - 1
                  ? "FINAL VERDICT"
                  : "EXTRACT NEXT TRUTH"}
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}