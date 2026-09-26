"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Media from "@/components/ui/Media";
import { gallery, brand } from "@/data/siteContent";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = gallery.images.filter((img) => active === "All" || img.tab === active);

  return (
    <section
      id="gallery"
      className="border-t border-primary/5 bg-gradient-to-b from-surface-container-low via-surface to-surface-container-low"
    >
      <div className="mx-auto max-w-7xl px-6 py-20 sm:px-10 sm:py-24 md:py-32">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading eyebrow={gallery.eyebrow} headline={gallery.headline} className="max-w-lg" />
          </Reveal>

          {/* Filters — segmented control with a sliding indicator, sentence case */}
          <Reveal delay={0.1} className="w-full md:w-auto">
            <div className="scrollbar-none -mx-1 flex gap-1 overflow-x-auto px-1 md:flex-wrap">
              {gallery.tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active === t}
                  onClick={() => setActive(t)}
                  className="relative shrink-0 rounded-full px-4 py-2 text-sm font-medium transition-colors"
                >
                  {active === t && (
                    <motion.span
                      layoutId="gallery-tab-bg"
                      className="absolute inset-0 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    className={
                      active === t
                        ? "relative text-secondary-fixed"
                        : "relative text-on-surface-variant hover:text-primary"
                    }
                  >
                    {t}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Square + rectangle tiles only — no vertical pillar shapes.
            "wide" images span 2 columns as a landscape rectangle;
            everything else sits as an even square. */}
        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-2.5 sm:mt-12 sm:gap-3 md:grid-cols-4 md:gap-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((img) => (
              <motion.div
                layout
                key={img.id}
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.35 }}
                className={img.size === "wide" ? "col-span-2 aspect-[16/10]" : "col-span-1 aspect-square"}
              >
                <Media
                  label={`${img.tab} moment at Hotel Lotus Grace`}
                  tone={img.size === "wide" ? "gold" : "blush"}
                  src={`/images/gallery/galary${img.id.replace("gallery-", "")}.png`}
                  className="h-full w-full rounded-xl object-cover sm:rounded-2xl"
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA — inline SVG icon, proper button treatment */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center sm:mt-16">
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 rounded-full border border-primary/15 bg-surface px-5 py-3 text-sm font-medium text-primary shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
            >
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7 shrink-0 transition-transform group-hover:scale-105"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <radialGradient id="instagram-gradient-gallery" cx="30%" cy="107%" r="150%">
                    <stop offset="0%" stopColor="#fdf497" />
                    <stop offset="5%" stopColor="#fdf497" />
                    <stop offset="45%" stopColor="#fd5949" />
                    <stop offset="60%" stopColor="#d6249f" />
                    <stop offset="90%" stopColor="#285AEB" />
                  </radialGradient>
                </defs>
                <rect x="2" y="2" width="20" height="20" rx="6" fill="url(#instagram-gradient-gallery)" />
                <rect
                  x="6.2"
                  y="6.2"
                  width="11.6"
                  height="11.6"
                  rx="3.6"
                  stroke="white"
                  strokeWidth="1.6"
                  fill="none"
                />
                <circle cx="12" cy="12" r="3.1" stroke="white" strokeWidth="1.6" fill="none" />
                <circle cx="16.1" cy="7.9" r="0.9" fill="white" />
              </svg>
              {gallery.linkLabel}
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}