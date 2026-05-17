"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";
import { useEffect, useState } from "react";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

type ScenarioStep = 0 | 1 | 2 | 3;

function BreachOverlay({ show }: { show: boolean }) {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 0.85, 0.65, 0.85, 0],
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.5 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-red-950/90 backdrop-blur-sm pointer-events-none"
        >
          {/* Flash layers */}
          <motion.div
            animate={{
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.35,
            }}
            className="absolute inset-0 bg-red-500/20"
          />

          {/* Screen shake container */}
          <motion.div
            animate={{
              x: [0, -5, 5, -3, 3, 0],
              y: [0, 2, -2, 1, -1, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 0.22,
            }}
            className="text-center px-6"
          >
            <p className="mb-6 text-xs md:text-sm uppercase tracking-[0.7em] text-red-200">
              SECURITY ALERT
            </p>

            <h1 className="text-4xl md:text-8xl font-bold tracking-[0.25em] text-red-100 drop-shadow-[0_0_25px_rgba(255,0,0,0.9)]">
              SECURITY BREACH
            </h1>

            <h2 className="mt-6 text-lg md:text-3xl tracking-[0.2em] text-red-200">
              TRUST FAILURE DETECTED
            </h2>

            <p className="mt-8 text-xs md:text-sm uppercase tracking-[0.45em] text-red-300/80">
              FAIR EXCHANGE GUARANTEE FAILED
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ScenarioCard({
  title,
  subtitle,
  steps,
  failureMessage,
  warningLabel,
  triggerBreach,
}: {
  title: string;
  subtitle: string;
  steps: string[];
  failureMessage: string;
  warningLabel: string;
  triggerBreach: () => void;
}) {
  const [currentStep, setCurrentStep] = useState<ScenarioStep>(0);

  const advanceStep = () => {
    if (currentStep < 3) {
      const nextStep = (currentStep + 1) as ScenarioStep;
      setCurrentStep(nextStep);

      if (nextStep === 3) {
        triggerBreach();
      }
    }
  };

  const reset = () => {
    setCurrentStep(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="border border-emerald-500/20 bg-black/70 backdrop-blur-sm shadow-[0_0_40px_rgba(34,197,94,0.08)]"
    >
      <div className="border-b border-emerald-500/20 px-6 py-4 flex justify-between items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-red-400/60">
            FAILURE SIMULATION
          </p>
          <h3 className="mt-2 text-xl md:text-2xl tracking-[0.15em] text-emerald-300">
            {title}
          </h3>
        </div>

        <div className="text-xs uppercase tracking-[0.3em] text-emerald-500/60">
          CLASSIFIED
        </div>
      </div>

      <div className="p-6 space-y-6">
        <p className="text-sm md:text-base leading-relaxed text-emerald-300/85 tracking-[0.05em]">
          {subtitle}
        </p>

        <div className="space-y-4">
          {steps.map((step, index) => {
            const active = currentStep >= index + 1;

            return (
              <motion.div
                key={step}
                animate={{
                  opacity: active ? 1 : 0.3,
                  scale: active ? 1.02 : 1,
                }}
                className={`border px-4 py-4 transition-all duration-300 ${
                  active
                    ? "border-emerald-400 bg-emerald-950/20"
                    : "border-emerald-500/15 bg-black/30"
                }`}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`h-4 w-4 rounded-full ${
                      active ? "bg-emerald-400" : "bg-emerald-900"
                    }`}
                  />
                  <span className="tracking-[0.08em]">{step}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="flex gap-4">
          {currentStep < 3 ? (
            <button
              onClick={advanceStep}
              className="flex-1 border border-emerald-400/40 bg-emerald-950/30 px-4 py-3 text-xs md:text-sm uppercase tracking-[0.25em] text-emerald-300 transition hover:bg-emerald-900/40 hover:border-emerald-300"
            >
              NEXT STEP
            </button>
          ) : (
            <button
              onClick={reset}
              className="flex-1 border border-yellow-400/40 bg-yellow-950/20 px-4 py-3 text-xs md:text-sm uppercase tracking-[0.25em] text-yellow-300 transition hover:bg-yellow-900/30"
            >
              RESET SIMULATION
            </button>
          )}
        </div>

        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            className="border border-red-500/30 bg-red-950/15 p-6"
          >
            <p className="text-xs uppercase tracking-[0.45em] text-red-400 mb-3">
              {warningLabel}
            </p>

            <h4 className="text-lg md:text-2xl text-red-300 tracking-[0.15em]">
              FAILURE DETECTED
            </h4>

            <p className="mt-4 text-sm md:text-base leading-relaxed text-red-200/85 tracking-[0.05em]">
              {failureMessage}
            </p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}

export default function ExchangeSimulator() {
  const [showBreach, setShowBreach] = useState(false);

  const triggerBreach = () => {
    setShowBreach(true);
  };

  useEffect(() => {
    if (!showBreach) return;

    const timer = setTimeout(() => {
      setShowBreach(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, [showBreach]);

  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black text-emerald-300 px-6 py-24`}
    >
      <BreachOverlay show={showBreach} />

      <div className="absolute inset-0 opacity-[0.05]">
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

      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(34,197,94,0.08) 2px, rgba(34,197,94,0.08) 4px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.55em] text-red-400/70">
            CORE PROBLEM ANALYSIS
          </p>

          <h2 className="text-4xl md:text-7xl tracking-[0.18em] text-emerald-300">
            FAIR EXCHANGE
          </h2>

          <p className="mt-8 mx-auto max-w-3xl text-sm md:text-lg leading-relaxed text-emerald-300/75 tracking-[0.08em]">
            A decentralized content network must solve one critical issue:
            neither side should be able to cheat during exchange.
          </p>
        </motion.div>

        <div className="grid gap-10 lg:grid-cols-2">
          <ScenarioCard
            title="SCENARIO A"
            subtitle="Provider sends content first. What stops the client from receiving the file and refusing payment?"
            steps={[
              "Provider sends content",
              "Client receives content",
              "Client refuses payment",
            ]}
            warningLabel="CLIENT EXPLOIT"
            failureMessage="The provider loses the asset while the client gets the benefit without compensating the network participant."
            triggerBreach={triggerBreach}
          />

          <ScenarioCard
            title="SCENARIO B"
            subtitle="Client pays first. What stops the provider from taking payment and never delivering the promised content?"
            steps={[
              "Client sends payment",
              "Provider receives payment",
              "Provider withholds content",
            ]}
            warningLabel="PROVIDER EXPLOIT"
            failureMessage="The client loses funds without receiving the requested content, breaking trust in the decentralized protocol."
            triggerBreach={triggerBreach}
          />
        </div>
      </div>
    </section>
  );
}