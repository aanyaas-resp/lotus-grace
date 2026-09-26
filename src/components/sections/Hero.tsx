"use client";

import { motion, type Variants, useReducedMotion } from "framer-motion";
import { Crown, ArrowUpRight, MessageCircle, ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Media from "@/components/ui/Media";
import { hero } from "@/data/siteContent";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.85, ease } },
};

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();
  const motionInitial = prefersReducedMotion ? "show" : "hidden";

  return (
    <section
      id="home"
      className="relative -mt-20 flex min-h-[100svh] flex-col items-center overflow-hidden bg-primary px-0 pb-9 pt-28 sm:pt-32 lg:pt-36"
    >
      {/* Background image, full bleed behind the whole hero */}
      <div className="absolute inset-0 z-0">
        <Media
          label="Grand chandeliered banquet hall at Hotel Lotus Grace"
          tone="ink"
          lightbox={false}
          showLabel={false}
          className="h-full rounded-none"
        />
        {/*
          Bottom-to-top scrim: solid at the floor so the CTAs/stats always sit on
          legible ground, fading up so the room itself breathes near the top of frame
          where there's only the small badge.
        */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary from-15% via-primary/75 via-55% to-primary/10" />
      </div>

      {/* Concierge badge — small centered pill up top, same on every breakpoint */}
      {/* <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease }}
        className="relative z-20 mt-2 inline-flex items-center gap-2 border border-secondary-container/45 bg-primary/45 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-fixed backdrop-blur-sm sm:px-5 sm:py-2.5"
      >
        <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
        {hero.conciergeBadge}
      </motion.div> */}

      <motion.div
        variants={container}
        initial={motionInitial}
        animate="show"
        className="relative z-10 mx-auto flex w-full max-w-none flex-1 flex-col items-center justify-center gap-6 px-margin py-10 text-center sm:gap-7 sm:px-margin-tablet sm:py-14 lg:gap-8 lg:py-16"
      >
        <motion.div
          variants={item}
          className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-secondary-fixed sm:text-xs"
        >
          <Crown className="h-3.5 w-3.5 shrink-0 text-secondary" strokeWidth={1.75} aria-hidden="true" />
          {hero.badge}
        </motion.div>

        <motion.span
          variants={item}
          aria-hidden
          className="h-px w-16 bg-gradient-to-r from-transparent via-secondary-container/70 to-transparent"
        />

        <motion.h1
          variants={item}
          className="w-full text-balance font-display-xl text-display-lg text-surface lg:text-display-xl"
        >
          {hero.headline}
          <br />
          <span className="italic text-secondary-container">{hero.headlineAccent}</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="max-w-xl font-light text-body-sm text-surface-container sm:text-body-md lg:text-body-lg"
        >
          {hero.body}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-1 flex w-full flex-col items-center gap-3 sm:mt-3 sm:w-auto sm:flex-row sm:justify-center sm:gap-4"
        >
          <Button
            href={hero.ctaPrimary.href}
            variant="primary"
            showArrow={false}
            className="!w-full justify-center !bg-surface !text-primary hover:!bg-secondary-container sm:!w-auto"
          >
            <span className="inline-flex items-center gap-1.5">
              {hero.ctaPrimary.label}
              <ArrowUpRight
                className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                strokeWidth={1.75}
              />
            </span>
          </Button>

          <Button
            href={hero.ctaSecondary.href}
            variant="whatsapp"
            showArrow={false}
            className="!w-full justify-center sm:!w-auto"
          >
            <span className="inline-flex items-center gap-2">
              <MessageCircle className="h-4 w-4 shrink-0" strokeWidth={1.75} />
              {hero.ctaSecondary.label}
            </span>
          </Button>
        </motion.div>
      </motion.div>

      {/* Stat row — centered under the fold. Grid on phones, single divided row from sm up. */}
      <motion.div
        variants={item}
        initial={motionInitial}
        animate="show"
        className="relative z-10 mx-auto w-full max-w-3xl px-margin pb-1 sm:px-margin-tablet"
      >
        <div className="grid grid-cols-2 gap-x-3 gap-y-5 border-t border-surface/15 pt-6 sm:hidden">
          {hero.stats.map((stat) => (
            <div key={stat.label} className="flex flex-col items-center gap-1 text-center">
              <span className="font-[family-name:var(--font-heading)] text-lg text-secondary-container">
                {stat.value}
              </span>
              <span className="text-[0.62rem] leading-tight tracking-[0.1em] uppercase text-surface-container/80">
                {stat.label}
              </span>
            </div>
          ))}
        </div>

        <div className="hidden items-center justify-center gap-x-10 border-t border-surface/15 pt-7 sm:flex">
          {hero.stats.map((stat, i) => (
            <div key={stat.label} className="flex items-center gap-x-10">
              {i !== 0 && <span aria-hidden className="h-8 w-px bg-surface/15" />}
              <div className="flex flex-col items-center gap-1 text-center">
                <span className="font-[family-name:var(--font-heading)] text-xl text-secondary-container">
                  {stat.value}
                </span>
                <span className="text-[0.65rem] leading-tight tracking-[0.1em] uppercase text-surface-container/80">
                  {stat.label}
                </span>
              </div>
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