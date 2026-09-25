"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Media from "@/components/ui/Media";
import { gallery, brand } from "@/data/siteContent";

export default function Gallery() {
  const [active, setActive] = useState("All");
  const filtered = gallery.images.filter((img) => active === "All" || img.tab === active);

  return (
    <section id="gallery" className="bg-neutral">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <Reveal>
            <SectionHeading eyebrow={gallery.eyebrow} headline={gallery.headline} className="max-w-lg" />
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-wrap gap-2">
              {gallery.tabs.map((t) => (
                <button
                  key={t}
                  type="button"
                  aria-pressed={active === t}
                  onClick={() => setActive(t)}
                  className={
                    active === t
                      ? "rounded-DEFAULT bg-primary px-space-md py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-secondary-fixed"
                      : "rounded-DEFAULT bg-surface px-space-md py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-on-surface-variant shadow-sm transition-colors hover:text-primary"
                  }
                >
                  {t}
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <motion.div layout className="mt-12 grid auto-rows-[10rem] grid-cols-2 gap-3 sm:gap-4 md:grid-cols-4">
          {filtered.map((img) => (
            <motion.div
              layout
              key={img.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className={
                img.size === "wide"
                  ? "col-span-2 row-span-2"
                  : "col-span-1 row-span-3 md:row-span-2"
              }
            >
              <Media
                label={`${img.tab} moment at Hotel Lotus Grace`}
                tone={img.size === "wide" ? "gold" : "blush"}
                src={`/images/gallery/galary${img.id.replace("gallery-", "")}.png`}
                className="h-full rounded-lg"
              />
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2}>
          <div className="mt-14 flex justify-center">
            <Link
              href={brand.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 border-b border-secondary pb-1 text-sm tracking-wide text-primary transition-colors hover:text-secondary"
            >
              {gallery.linkLabel}
              <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}