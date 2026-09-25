"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { nav, brand } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 overflow-hidden backdrop-blur-xl transition-all duration-500 ease-out",
        scrolled
          ? "inset-x-5 top-5 rounded-2xl bg-surface/95 shadow-[0_18px_40px_-18px_rgba(21,34,24,0.55)]"
          : "inset-x-0 top-0 rounded-none bg-transparent shadow-none"
      )}
    >
      <div className={cn(
        "border-b px-margin py-space-xs text-center text-[11px] font-semibold uppercase tracking-[0.14em] transition-colors duration-500 sm:text-xs",
        scrolled
          ? "border-secondary-container/20 bg-primary text-secondary-fixed"
          : "border-secondary-fixed/20 bg-primary/35 text-secondary-fixed"
      )}>
        {"✦ 2026–27 Wedding & Gala Bookings Open · Sahibabad ✦"}
      </div>
      <div className={cn(
        "mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-gutter border-b px-margin transition-all duration-500 sm:px-margin-tablet lg:px-margin-desktop",
        scrolled ? "border-primary/10" : "border-surface/20"
      )}>
        <Link
          href="#home"
          className={cn("group flex items-center gap-space-sm transition-colors duration-500", scrolled ? "text-primary" : "text-surface")}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-secondary/30 bg-surface-container-low p-1 shadow-sm transition-transform duration-300 group-hover:scale-105">
            <Image src={brand.logo} alt={`${brand.name} logo`} width={42} height={32} className="h-8 w-auto object-contain" />
          </span>
          <span className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap font-headline-sm text-headline-sm text-base uppercase tracking-wide">{brand.name}</span>
            <span className={cn("hidden text-[11px] uppercase tracking-[0.14em] sm:block", scrolled ? "text-secondary" : "text-secondary-fixed")}>{brand.tagline} · {brand.location}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 rounded-DEFAULT border border-primary/10 bg-surface-container-low/55 p-1 xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-3 py-2 text-xs font-semibold uppercase tracking-[0.1em] transition-colors after:absolute after:inset-x-3 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-secondary after:transition-transform hover:after:scale-x-100",
                scrolled ? "text-on-surface-variant hover:text-primary" : "text-surface/90 hover:text-surface"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-1.5 rounded-DEFAULT border border-secondary-container/45 bg-gradient-to-br from-primary via-primary-container to-tertiary-container px-space-md py-space-xs text-sm font-semibold uppercase tracking-[0.1em] text-secondary-fixed shadow-[0_8px_20px_-10px_rgba(21,34,24,0.7)] transition-all hover:-translate-y-0.5 hover:border-secondary-container hover:from-secondary hover:to-primary hover:shadow-[0_12px_24px_-10px_rgba(127,86,14,0.55)] md:inline-flex"
        >
          Enquire Now
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-DEFAULT border border-secondary-container/45 bg-gradient-to-br from-primary via-primary-container to-tertiary-container px-space-sm py-space-xs text-xs font-semibold uppercase tracking-[0.1em] text-secondary-fixed shadow-[0_8px_20px_-10px_rgba(21,34,24,0.7)] transition-all hover:-translate-y-0.5 hover:border-secondary-container hover:from-secondary hover:to-primary hover:shadow-[0_12px_24px_-10px_rgba(127,86,14,0.55)] sm:px-space-md md:hidden"
        >
          Enquire Now
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
