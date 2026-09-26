"use client";

import { useEffect, useState, type MouseEvent as ReactMouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { nav, brand } from "@/data/siteContent";
import { cn } from "@/lib/utils";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Pointer-tracked glossy highlight for the liquid-glass background
  const [sheen, setSheen] = useState({ x: 50, y: 0, active: false });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  function handlePointerMove(e: ReactMouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    setSheen({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
      active: true,
    });
  }

  return (
    <header
      onMouseMove={handlePointerMove}
      onMouseLeave={() => setSheen((s) => ({ ...s, active: false }))}
      className={cn(
        "fixed left-1/2 top-2.5 z-50 w-[calc(100vw-2.5rem)] -translate-x-1/2 overflow-hidden rounded-xl",
        "bg-gradient-to-b from-primary/55 via-primary/65 to-primary/75 backdrop-blur-2xl backdrop-saturate-150",
        "border border-surface/15 transition-shadow duration-500 lg:w-fit lg:max-w-[calc(100vw-2.5rem)]",
        scrolled
          ? "shadow-[inset_0_1px_0_rgba(255,255,255,0.35),inset_0_-1px_0_rgba(0,0,0,0.18),0_18px_44px_-18px_rgba(21,34,24,0.6)]"
          : "shadow-[inset_0_1px_0_rgba(255,255,255,0.3),inset_0_-1px_0_rgba(0,0,0,0.12),0_10px_30px_-16px_rgba(21,34,24,0.4)]"
      )}
    >
      {/* Specular rim light along the top edge */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-surface/80 to-transparent"
      />

      {/* Pointer-tracked glossy highlight — desktop only */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden transition-opacity duration-300 lg:block"
        style={{
          opacity: sheen.active ? 1 : 0,
          backgroundImage: `radial-gradient(180px circle at ${sheen.x}% ${sheen.y}%, rgba(255,255,255,0.28), transparent 70%)`,
          mixBlendMode: "overlay",
        }}
      />

      {/* Main bar — logo, links, CTA. No promo strip, no border lines anywhere. */}
      <div className="relative mx-auto flex h-14 w-full items-center justify-between gap-gutter px-2 sm:h-16 lg:w-max lg:max-w-full">
        {/* Logo + links, grouped as one left-side cluster so the gap after the logo stays fixed
            instead of justify-between stretching it to fill the row. */}
        <div className="flex min-w-0 items-center gap-8">
          <Link
            href="#home"
            onClick={() => setMenuOpen(false)}
            className="group flex shrink-0 items-center gap-space-sm text-surface"
          >
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-container-low p-1 shadow-sm transition-transform duration-300 group-hover:scale-105 sm:h-9 sm:w-9">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                width={52}
                height={42}
                className="h-6 w-auto object-contain sm:h-7"
              />
            </span>
          </Link>

          {/* Links — plain, no wrapping box/border, just an underline on hover */}
          <nav className="hidden items-center gap-6 lg:flex">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative inline-flex items-center gap-1.5 px-0.5 py-2 text-xs font-semibold uppercase tracking-[0.1em] text-surface/85 transition-colors after:absolute after:inset-x-0 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-secondary-container after:transition-transform hover:text-surface hover:after:scale-x-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* CTA + mobile toggle */}
        <div className="flex items-center gap-2">
          <Link
            href="#contact"
            className="hidden items-center gap-1.5 rounded-[12px] bg-surface px-space-md py-2.5 text-sm font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5 hover:bg-secondary-container sm:inline-flex"
          >
            Enquire Now
            <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>

          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-surface transition-colors duration-300 hover:bg-surface/10 lg:hidden"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile / tablet nav panel */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            id="mobile-nav"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease }}
            className="relative overflow-hidden lg:hidden"
          >
            <div className="flex flex-col gap-1 px-2 pb-space-md">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center gap-2 py-3 text-sm font-semibold uppercase tracking-[0.1em] text-surface/85 transition-colors hover:text-surface"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-[12px] bg-surface px-space-md py-3 text-sm font-semibold uppercase tracking-[0.1em] text-primary shadow-[0_8px_20px_-10px_rgba(0,0,0,0.35)] transition-all hover:-translate-y-0.5"
              >
                Enquire Now
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}