"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import { hero } from "@/data/siteContent";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative -mt-20 flex min-h-[100svh] flex-col overflow-hidden bg-primary px-0 pb-8 pt-32 sm:pt-36"
    >
      <div className="absolute inset-0 z-0">
        <Media label="Grand chandeliered banquet hall at Hotel Lotus Grace" tone="ink" lightbox={false} showLabel={false} className="h-full" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/85 via-primary/45 to-primary/10" />
      </div>

      <div aria-hidden className="pointer-events-none absolute inset-4 z-10 border border-secondary-fixed/20 sm:inset-6" />
      <div aria-hidden className="pointer-events-none absolute bottom-28 left-6 top-1/2 hidden w-px bg-secondary-container/60 lg:left-12 lg:block" />

      {/* Concierge badge */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="absolute right-8 top-1/2 z-20 hidden -translate-y-1/2 items-center gap-2 border border-secondary-container/45 bg-primary/45 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-sm md:flex lg:right-14"
      >
        <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
        {hero.conciergeBadge}
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center gap-7 px-margin py-12 sm:gap-8 sm:px-margin-tablet sm:py-16 lg:px-margin-desktop">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex w-fit items-center gap-space-xs border-b border-secondary-container/70 pb-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
          {hero.badge}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-5xl font-display-xl font-normal text-[clamp(3.2rem,7.5vw,6.5rem)] leading-[0.98] tracking-normal text-surface"
        >
          {hero.headline}
          <br />
          <span className="italic text-secondary-container">{hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-xl text-base font-light leading-[1.75] text-surface-container sm:text-lg"
        >
          {hero.body}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease }}
          className="mt-3 flex flex-wrap items-center gap-4"
        >
          <Button href={hero.ctaPrimary.href} variant="primary" className="!bg-surface !text-primary hover:!bg-secondary-container">
            {hero.ctaPrimary.label}
          </Button>
          <Button href={hero.ctaSecondary.href} variant="outlined" showArrow={false}>
            {hero.ctaSecondary.label}
          </Button>
        </motion.div>
      </div>

      {/* Stat bar */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 mx-auto w-full max-w-7xl px-margin sm:px-margin-tablet lg:px-margin-desktop"
      >
        <div className="grid w-full grid-cols-2 items-center gap-x-4 gap-y-4 border border-surface/15 bg-primary/55 p-space-sm text-center backdrop-blur-xl sm:flex sm:justify-between sm:p-space-md sm:text-left">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 sm:items-start sm:text-left">
              <span className="font-[family-name:var(--font-heading)] text-xl text-secondary-container">
                {stat.value}
              </span>
              <span className="text-[0.65rem] tracking-[0.1em] uppercase text-surface-container/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Divider mark */}
      <div
        aria-hidden
        className="absolute -bottom-3 left-1/2 z-20 flex h-6 w-6 -translate-x-1/2 rotate-45 items-center justify-center border border-secondary-container/70 bg-primary"
      >
        <span className="h-1.5 w-1.5 -rotate-45 rounded-full bg-secondary" />
      </div>
    </section>
  );
}