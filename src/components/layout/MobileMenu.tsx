"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import { nav } from "@/data/siteContent";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

export default function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[60] flex flex-col bg-surface/98 text-primary backdrop-blur-xl md:hidden"
        >
          <div className="flex items-center justify-between border-b border-primary/10 px-6 py-5">
            <div className="flex flex-col">
              <span className="font-headline-sm uppercase tracking-wide text-primary">
                Lotus Grace
              </span>
              <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-secondary">
                Luxury Banquets &amp; Events
              </span>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-primary/15 bg-surface-container-low text-primary transition-colors hover:bg-primary hover:text-secondary-fixed"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <nav className="mx-auto flex w-full max-w-md flex-1 flex-col justify-center px-6">
            {nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.08 * i }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                    className="flex min-h-16 items-center justify-between border-b border-primary/10 font-display-lg text-3xl text-primary transition-colors hover:text-secondary"
                >
                    <span>{item.label}</span>
                    <ArrowUpRight className="h-5 w-5 text-secondary" />
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="px-6 pb-8 text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-on-surface-variant">
              Private tours available daily · Sahibabad Site 4
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
