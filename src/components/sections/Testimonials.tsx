"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { testimonials, brand } from "@/data/siteContent";

const AUTOPLAY_MS = 6000;

export default function Testimonials() {
  const reviews = testimonials.reviews;
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [progressKey, setProgressKey] = useState(0); // remounts the progress bar to restart its animation
  const touchStartX = useRef<number | null>(null);

  const goTo = useCallback((index: number) => {
    const next = ((index % reviews.length) + reviews.length) % reviews.length;
    setActive(next);
    setProgressKey((k) => k + 1);
  }, [reviews.length]);

  const next = useCallback(() => goTo(active + 1), [active, goTo]);
  const prev = useCallback(() => goTo(active - 1), [active, goTo]);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const id = setTimeout(() => goTo(active + 1), AUTOPLAY_MS);
    return () => clearTimeout(id);
  }, [active, paused, goTo]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") next();
    if (e.key === "ArrowLeft") prev();
  };

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(delta) > 40) {
      delta > 0 ? prev() : next();
    }
    touchStartX.current = null;
  };

  const current = reviews[active];

  return (
    <section id="reviews" className="relative bg-surface-container">
      {/* Zigzag top edge */}
      <div className="absolute inset-x-0 top-0 -translate-y-[1px] overflow-hidden leading-none">
        <svg viewBox="0 0 1440 60" className="h-10 w-full sm:h-14 lg:h-16" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,60 L0,30 L60,0 L120,30 L180,0 L240,30 L300,0 L360,30 L420,0 L480,30 L540,0 L600,30 L660,0 L720,30 L780,0 L840,30 L900,0 L960,30 L1020,0 L1080,30 L1140,0 L1200,30 L1260,0 L1320,30 L1380,0 L1440,30 L1440,60 Z"
            fill="var(--color-surface-container)"
          />
        </svg>
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col gap-space-lg px-margin pb-space-xl pt-space-xl sm:px-margin-tablet lg:px-margin-desktop">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[minmax(0,320px)_1fr] lg:items-start">
          {/* Left: sticky intro + rating + reviewer picker */}
          <Reveal>
            <div className="flex flex-col gap-space-sm lg:sticky lg:top-24">
              <div>
                <span className="mb-space-xs flex items-center gap-space-xs text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                  <span className="h-px w-8 bg-secondary" /> {testimonials.eyebrow}
                </span>
                <h2 className="font-headline-lg text-headline-lg text-primary">{testimonials.headline}</h2>
              </div>

              <div className="inline-flex w-fit items-center gap-2.5 rounded-full border border-outline-variant/60 bg-surface px-4 py-2 shadow-sm">
                <GoogleLogo className="h-4 w-4 shrink-0" />
                <span className="h-3.5 w-px bg-outline-variant" />
                <span className="text-secondary">★★★★★</span>
                <span className="text-sm font-semibold text-primary">{testimonials.rating}</span>
                <span className="text-sm text-on-surface-variant">({testimonials.reviewCount})</span>
              </div>

              {/* Reviewer picker */}
              <div className="-mx-1 mt-2 flex gap-2 overflow-x-auto px-1 pb-1 sm:flex-wrap sm:overflow-visible sm:pb-0">
                {reviews.map((review, index) => {
                  const isActive = index === active;
                  return (
                    <button
                      key={review.name}
                      onClick={() => goTo(index)}
                      aria-pressed={isActive}
                      aria-label={`Show review from ${review.name}`}
                      className={[
                        "group relative flex shrink-0 items-center gap-2 overflow-hidden whitespace-nowrap rounded-full border px-3 py-2 text-sm font-medium transition-colors",
                        isActive
                          ? "border-primary bg-primary text-on-primary"
                          : "border-outline-variant/60 bg-surface text-on-surface-variant hover:border-primary/40 hover:text-primary",
                      ].join(" ")}
                    >
                      <span
                        className={[
                          "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold",
                          isActive ? "bg-on-primary/20 text-on-primary" : "bg-primary/10 text-primary",
                        ].join(" ")}
                        aria-hidden="true"
                      >
                        {review.name.charAt(0)}
                      </span>
                      {review.name.split(" ")[0]}
                      {isActive && !paused && (
                        <span
                          key={progressKey}
                          className="absolute inset-x-0 bottom-0 h-0.5 origin-left bg-on-primary/60"
                          style={{ animation: `testimonial-progress ${AUTOPLAY_MS}ms linear forwards` }}
                          aria-hidden="true"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              <Link
                href={brand.reviewsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group mt-2 inline-flex w-fit items-center gap-2.5 rounded-full border border-primary/15 bg-surface px-5 py-3 text-sm font-medium text-primary shadow-sm transition-all hover:border-primary/30 hover:shadow-md"
              >
                <GoogleLogo className="h-5 w-5 shrink-0" />
                {testimonials.linkLabel}
              </Link>
            </div>
          </Reveal>

          {/* Right: spotlight card */}
          <Reveal delay={0.1}>
            <div
              role="group"
              aria-roledescription="carousel"
              aria-label="Customer reviews"
              tabIndex={0}
              onKeyDown={onKeyDown}
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
              onFocus={() => setPaused(true)}
              onBlur={() => setPaused(false)}
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              className="relative flex min-h-[320px] flex-col justify-between gap-8 overflow-hidden rounded-[1.75rem] border border-outline-variant/50 bg-surface p-8 shadow-[0_16px_36px_-26px_rgba(21,34,24,0.2)] sm:p-10"
            >
              <span
                className="pointer-events-none absolute -right-2 -top-4 select-none font-headline-lg text-[4.5rem] leading-none text-primary/[0.06] sm:-right-4 sm:-top-6 sm:text-[8rem]"
                aria-hidden="true"
              >
                &rdquo;
              </span>

              <div key={active} className="flex flex-col gap-4 animate-testimonial-in">
                <div className="flex items-center justify-between">
                  <span className="text-secondary" aria-label="5 star review">★★★★★</span>
                  <GoogleLogo className="h-4 w-4 shrink-0 opacity-70" />
                </div>
                <p className="font-headline-sm text-headline-sm italic leading-relaxed text-primary">
                  &quot;{current.quote}&quot;
                </p>
                <p className="text-sm leading-relaxed text-on-surface-variant">{current.body}</p>
              </div>

              <div className="flex flex-wrap items-end justify-between gap-4 border-t border-outline-variant/50 pt-4">
                <div className="flex flex-col gap-0.5">
                  <span className="text-sm font-semibold text-primary">{current.name}</span>
                  <span className="text-xs text-on-surface-variant">{current.context}</span>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <button
                    onClick={prev}
                    aria-label="Previous review"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/60 text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 sm:h-9 sm:w-9"
                  >
                    <ArrowIcon className="h-4 w-4 rotate-180" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next review"
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-outline-variant/60 text-primary transition-colors hover:border-primary/40 hover:bg-primary/5 sm:h-9 sm:w-9"
                  >
                    <ArrowIcon className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      <style jsx global>{`
        @keyframes testimonial-progress {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }
        @keyframes testimonial-in {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-testimonial-in {
          animation: testimonial-in 0.35s ease-out;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-testimonial-in { animation: none; }
        }
      `}</style>
    </section>
  );
}

function GoogleLogo({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 48 48" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path
        fill="#FFC107"
        d="M43.6 20.5H42V20H24v8h11.3c-1.6 4.6-6 8-11.3 8-6.6 0-12-5.4-12-12s5.4-12 12-12c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.7-.4-3.5z"
      />
      <path
        fill="#FF3D00"
        d="M6.3 14.7l6.6 4.8C14.6 15.9 18.9 13 24 13c3.1 0 5.8 1.1 8 3l5.7-5.7C34.6 6 29.6 4 24 4 16.3 4 9.7 8.3 6.3 14.7z"
      />
      <path
        fill="#4CAF50"
        d="M24 44c5.5 0 10.4-1.9 14.2-5.1l-6.6-5.4c-2 1.5-4.6 2.5-7.6 2.5-5.3 0-9.8-3.4-11.3-8.1l-6.6 5.1C9.6 39.7 16.2 44 24 44z"
      />
      <path
        fill="#1976D2"
        d="M43.6 20.5H42V20H24v8h11.3c-.8 2.3-2.2 4.2-4 5.6h0l6.6 5.4C37.4 40.5 44 36 44 24c0-1.3-.1-2.7-.4-3.5z"
      />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}