"use client";

import { motion } from "framer-motion";
import { Share_Tech_Mono } from "next/font/google";

const terminalFont = Share_Tech_Mono({
  subsets: ["latin"],
  weight: "400",
});

const conceptCards = [
  {
    title: "WHAT ARE WE BUILDING?",
    content: "A decentralized CDN.",
  },
  {
    title: "THE WEIRD PART",
    content: "Strangers exchanging data + money without trusting each other.",
  },
  {
    title: "NON-NEGOTIABLE",
    content: "It still has to feel fast enough that normal humans will actually use it.",
  },
];

const modules = [
  {
    title: "NETWORKING",
    subtitle: "move data fast",
  },
  {
    title: "CRYPTOGRAPHY",
    subtitle: "prove nobody cheated",
  },
  {
    title: "DISTRIBUTED SYSTEMS",
    subtitle: "many machines working together",
  },
  {
    title: "SMART INCENTIVES",
    subtitle: "make bad behavior expensive",
  },
];

export default function ProjectDecoded() {
  return (
    <section
      className={`${terminalFont.className} relative min-h-screen overflow-hidden bg-black px-6 py-24 text-emerald-300`}
    >
      {/* Background grid */}
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center"
        >
          <p className="mb-4 text-xs uppercase tracking-[0.6em] text-red-400/70">
            SYSTEM RECONSTRUCTION
          </p>

          <h2 className="text-4xl md:text-6xl tracking-[0.16em]">
            PROJECT DECODED
          </h2>

          <p className="mt-6 text-sm text-emerald-300/60 tracking-[0.15em] uppercase">
            okay so what are we actually making?
          </p>
        </motion.div>

        {/* Concept cards */}
        <div className="grid gap-8 md:grid-cols-3 mb-24">
          {conceptCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, rotate: -3, y: 30 }}
              whileInView={{ opacity: 1, rotate: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.2,
                duration: 0.7,
              }}
              whileHover={{
                scale: 1.03,
                rotate: 1,
              }}
              className="border border-emerald-500/20 bg-black/80 p-8 shadow-[0_0_30px_rgba(34,197,94,0.08)]"
            >
              <p className="mb-4 text-xs uppercase tracking-[0.35em] text-red-400/70">
                analyst note
              </p>

              <h3 className="text-lg tracking-[0.12em] leading-relaxed mb-6">
                {card.title}
              </h3>

              <p className="text-sm md:text-base leading-relaxed text-emerald-300/80">
                {card.content}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Modules */}
        <div className="mb-24">
          <p className="mb-10 text-center text-xs uppercase tracking-[0.55em] text-emerald-500">
            REQUIRED INGREDIENTS
          </p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {modules.map((module, index) => (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                }}
                whileHover={{
                  scale: 1.04,
                  borderColor: "rgba(34,197,94,0.45)",
                }}
                className="border border-emerald-500/20 bg-black/75 p-6"
              >
                <p className="mb-3 text-xs uppercase tracking-[0.3em] text-red-400/70">
                  module loaded
                </p>

                <h3 className="text-lg tracking-[0.14em]">{module.title}</h3>

                <p className="mt-4 text-sm text-emerald-300/70">
                  {module.subtitle}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Funny warning */}
        <motion.div
          initial={{ opacity: 0, rotate: -1, y: 40 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 relative border border-yellow-500/30 bg-yellow-950/10 p-8 md:p-10 shadow-[0_0_40px_rgba(234,179,8,0.08)]"
        >
          <div className="absolute -top-3 right-10 h-8 w-24 rotate-6 bg-yellow-400/20 backdrop-blur-sm" />

          <p className="mb-6 text-xs uppercase tracking-[0.5em] text-yellow-300">
            ⚠ performance warning.exe
          </p>

          <div className="grid md:grid-cols-[1fr_220px] gap-8 items-center">
            <div>
              <p className="text-lg md:text-2xl leading-relaxed text-yellow-200">
                If our “secure revolutionary network” takes longer to load than
                college WiFi during majors or minors 💀
              </p>

              <p className="mt-6 text-base md:text-lg text-yellow-300/80 italic">
                nobody’s using it. end of discussion.
              </p>
            </div>

            <div className="border border-red-500/30 bg-red-950/10 p-6 text-center">
              <p className="text-xs uppercase tracking-[0.3em] text-red-300">
                college wifi
              </p>

              <div className="mt-5 flex justify-center gap-2">
                <div className="h-4 w-2 bg-red-500" />
                <div className="h-7 w-2 bg-red-500" />
                <div className="h-10 w-2 bg-red-500" />
                <div className="h-14 w-2 bg-red-500" />
              </div>

              <p className="mt-4 text-xs text-red-300/80">
                level: pain
              </p>
            </div>
          </div>
        </motion.div>

        {/* Final summary */}
        <motion.div
          initial={{ opacity: 0, rotate: 1, y: 40 }}
          whileInView={{ opacity: 1, rotate: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl border border-emerald-500/20 bg-black/75 p-10 md:p-12 shadow-[0_0_40px_rgba(34,197,94,0.08)]"
        >
          <div className="absolute -top-3 left-8 h-8 w-24 -rotate-6 bg-emerald-400/15" />

          <p className="mb-6 text-xs uppercase tracking-[0.55em] text-emerald-400">
            project summary.txt
          </p>

          <div className="space-y-4">
            <p className="text-base md:text-xl text-emerald-200">
              its like solving the digital version of  <span className="text-yellow-300">“trust me bro”</span>
            </p>

            <p className="text-base md:text-xl text-emerald-200"><span className="text-yellow-300">or "Aja bhai tere ghar k niche hi khada hu"</span>
              
            </p>

           
          </div>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <div className="border border-emerald-500/30 px-5 py-3 text-xs uppercase tracking-[0.35em] text-emerald-400">
              VERIFIED CONCEPT ✓
            </div>

            <p className="text-sm text-emerald-300/60 italic">
              sounds dumb. works smart.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}