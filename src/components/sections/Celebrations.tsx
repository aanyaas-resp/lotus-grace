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
    <section
      id="celebrations"
      className="border-t border-primary/5 bg-gradient-to-b from-surface-container-low via-surface to-surface-container"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <SectionHeading
              eyebrow={milestones.eyebrow}
              headline={milestones.headline}
              className="max-w-xl"
            />
          </Reveal>
          {/* <Reveal delay={0.1}>
            <p className="max-w-sm text-base leading-relaxed text-on-surface-variant">
              {milestones.intro}
            </p>
          </Reveal> */}
        </div>

        {/* Tabs — horizontal scroll on mobile instead of an awkward 2-col grid */}
        <Reveal delay={0.15}>
          <div className="mt-10 flex gap-6 overflow-x-auto border-b border-primary/15 sm:flex-wrap">
            {milestones.tabs.map((t, i) => (
              <button
                key={t.id}
                onClick={() => setActive(i)}
                className="relative min-h-12 shrink-0 border-b-2 border-transparent px-1 text-left text-[11px] font-semibold tracking-[0.08em] transition-colors sm:min-h-14 sm:text-xs"
              >
                {active === i && (
                  <motion.span
                    layoutId="celebration-tab-bg"
                    className="absolute inset-x-0 bottom-[-1px] h-0.5 bg-secondary"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                  />
                )}
                <span
                  className={
                    active === i
                      ? "relative text-primary"
                      : "relative text-on-surface-variant hover:text-primary"
                  }
                >
                  {t.label}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        {/* Content — no boxed card. Sits directly on the section, watermark gives it presence */}
        <div className="relative mt-4 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab.id}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.45, ease }}
              className="relative grid grid-cols-1 gap-10 border-t border-outline-variant/60 py-10 md:grid-cols-2 md:gap-16 md:py-14"
            >
              {/* Watermark of the active tab's own label — the one bold move, and it's content-specific */}
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 left-0 select-none whitespace-nowrap font-[family-name:var(--font-heading)] text-[4.5rem] italic leading-none text-primary/[0.04] sm:text-[7rem] md:text-[8.5rem]"
              >
                {tab.label}
              </span>

              <div className="relative flex flex-col justify-center gap-5">
                <span className="text-xs tracking-[0.2em] text-secondary">
                  {tab.kicker}
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-3xl leading-tight text-primary sm:text-4xl">
                  {tab.title} <span className="italic text-secondary">{tab.titleAccent}</span>
                </h3>
                <p className="max-w-md text-base leading-relaxed text-on-surface-variant">
                  {tab.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                  {tab.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded border border-outline-variant px-3 py-1 text-xs text-on-surface-variant"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="group mt-3 inline-flex w-fit items-center border-b border-secondary/50 pb-1 text-sm tracking-wide text-primary transition-colors hover:border-secondary hover:text-secondary"
                >
                  {tab.linkLabel}
                </a>
              </div>

              {/* Image with an offset outline frame instead of a drop shadow */}
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -bottom-3 -right-3 h-full w-full border border-secondary/50 sm:-bottom-4 sm:-right-4"
                />
                <Media
                  label={`${tab.label} at Hotel Lotus Grace`}
                  tone="gold"
                  src="/images/gallery/galary9.png"
                  className="relative aspect-[4/3] rounded-none md:aspect-auto md:h-full"
                />
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}