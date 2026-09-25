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
        "fixed inset-x-0 top-0 z-50 bg-surface/95 shadow-[0_1px_8px_rgba(0,0,0,0.04)] backdrop-blur-xl transition-colors duration-500",
        scrolled
          ? "border-b border-primary/10"
          : "border-b border-transparent"
      )}
    >
      <div className="bg-primary px-margin py-space-xs text-center text-[10px] font-semibold uppercase tracking-[0.18em] text-secondary-fixed">
        {"✦ Now Welcoming Auspicious 2026–2027 Wedding & Gala Bookings · Sahibabad Site Tours Available ✦"}
      </div>
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-gutter px-margin sm:px-margin-tablet lg:px-margin-desktop">
        <Link
          href="#home"
          className="flex items-center gap-space-sm text-primary"
        >
          <Image src={brand.logo} alt={`${brand.name} logo`} width={42} height={32} className="h-8 w-auto object-contain" />
          <span className="flex min-w-0 flex-col">
            <span className="whitespace-nowrap font-headline-sm text-headline-sm text-[15px] uppercase tracking-wide">{brand.name}</span>
            <span className="hidden text-[10px] uppercase tracking-[0.18em] text-secondary sm:block">{brand.tagline} · {brand.location}</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-gutter xl:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold uppercase tracking-[0.14em] text-on-surface-variant transition-colors hover:text-secondary"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link
          href="#contact"
          className="hidden items-center gap-1.5 rounded-DEFAULT bg-primary px-space-md py-space-xs text-xs font-semibold uppercase tracking-[0.12em] text-secondary-fixed shadow-[0_4px_16px_rgba(21,34,24,0.15)] transition-colors hover:bg-secondary md:inline-flex"
        >
          Enquire Now
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>

        <Link
          href="#contact"
          className="inline-flex items-center gap-1.5 rounded-DEFAULT bg-primary px-space-sm py-space-xs text-[10px] font-semibold uppercase tracking-[0.12em] text-secondary-fixed shadow-[0_4px_16px_rgba(21,34,24,0.15)] transition-colors hover:bg-secondary sm:px-space-md md:hidden"
        >
          Enquire Now
          <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </header>
  );
}
