"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Media from "@/components/ui/Media";
import { milestones } from "@/data/siteContent";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Celebrations() {
  const [active, setActive] = useState(0);
  const tab = milestones.tabs[active];

  return (
    <section id="celebrations" className="border-t border-primary/5 bg-gradient-to-b from-surface-container-low via-surface to-surface-container">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading eyebrow={milestones.eyebrow} headline={milestones.headline} className="max-w-xl" />
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-primary/75">{milestones.intro}</p>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="mt-10 grid grid-cols-2 border-b border-primary/15 sm:flex sm:flex-wrap sm:gap-6">
            {milestones.tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative min-h-12 border-b-2 border-transparent px-1 text-left text-[10px] font-semibold uppercase tracking-[0.12em] transition-colors sm:min-h-14 sm:text-xs"
              >
                {active === i && (
                  <motion.span
                    layoutId="celebration-tab-bg"
                    className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-secondary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span className={active === i ? "relative text-primary" : "relative text-on-surface-variant hover:text-primary"}>
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <div className="relative mt-8 overflow-hidden rounded-xl bg-gradient-to-br from-surface via-surface-container-low to-surface-container shadow-lg">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="grid grid-cols-1 gap-10 p-8 md:grid-cols-2 md:gap-14 md:p-12"
            >
              <div className="flex flex-col justify-center gap-5">
                <span className="text-xs tracking-[0.25em] uppercase text-secondary">
                  {tab.kicker}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-primary sm:text-4xl">
                  {tab.title} <span className="italic text-secondary">{tab.titleAccent}</span>
                </h3>
                <p className="max-w-md text-base leading-relaxed text-primary/80">
                  {tab.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {tab.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-tertiary/40 px-4 py-1.5 text-xs text-primary/70"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group mt-2 inline-flex w-fit items-center gap-2 border-b border-secondary pb-1 text-sm tracking-wide text-primary transition-colors hover:text-secondary"
                >
                  {tab.linkLabel}
                  <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </a>
              </div>

              <Media
                label={`${tab.label} at Hotel Lotus Grace`}
                tone="gold"
                src="/images/gallery/galary9.png"
                className="aspect-[4/3] rounded-2xl md:aspect-auto"
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}