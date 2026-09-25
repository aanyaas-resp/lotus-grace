import Link from "next/link";
import Reveal from "@/components/ui/Reveal";
import { testimonials } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section id="reviews" className="bg-surface-container">
      <div className="mx-auto flex max-w-7xl flex-col gap-space-lg px-margin py-space-xl sm:px-margin-tablet lg:px-margin-desktop">
        <div className="flex flex-col gap-space-sm md:flex-row md:items-end md:justify-between">
          <Reveal>
            <div>
              <span className="mb-space-xs flex items-center gap-space-xs text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
                <span className="h-px w-8 bg-secondary" /> {testimonials.eyebrow}
              </span>
              <h2 className="font-headline-lg text-headline-lg text-primary">{testimonials.headline}</h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="inline-flex items-center gap-space-xs rounded-full bg-surface px-space-md py-space-xs shadow-sm">
              <span className="text-secondary">★★★★★</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.12em] text-primary">{testimonials.rating} / 5.0 · {testimonials.reviewCount}</span>
            </div>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-space-md md:grid-cols-3">
          {testimonials.reviews.map((review, index) => (
            <Reveal key={review.name} delay={index * 0.08}>
              <article className="flex h-full flex-col justify-between rounded-xl bg-gradient-to-br from-surface via-surface-container-low to-surface-container p-space-lg shadow-sm">
                <div>
                  <div className="mb-space-xs text-secondary" aria-label="5 star review">★★★★★</div>
                  <p className="mb-space-sm font-headline-sm italic leading-relaxed text-primary">&quot;{review.quote}&quot;</p>
                  <p className="text-sm leading-relaxed text-on-surface-variant">{review.body}</p>
                </div>
                <div className="mt-space-md bg-surface-container-low p-space-xs">
                  <span className="block text-xs font-bold text-primary">{review.name}</span>
                  <span className="text-xs text-on-surface-variant">{review.context}</span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Link
          href={brandReviewsUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="mx-auto border-b border-secondary pb-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary transition-colors hover:text-secondary"
        >
          {testimonials.linkLabel} ↗
        </Link>
      </div>
    </section>
  );
}

function brandReviewsUrl() {
  return "https://www.google.com/maps/search/?api=1&query=Hotel+Lotus+Grace+Sahibabad+Ghaziabad";
}
