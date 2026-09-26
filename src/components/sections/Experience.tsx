import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Experience() {
  return (
    <section id="experience" className="border-t border-primary/5 bg-surface">
      <div className="mx-auto max-w-6xl px-6 py-24 sm:px-10 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={experience.eyebrow}
            headline={experience.headline}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-center text-base leading-relaxed text-on-surface-variant">
            {experience.intro}
          </p>
        </Reveal>

        {/* Checkerboard bento — diagonal pairs share a color, so the two dark
            cards read as a deliberate pattern rather than a random pick */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-2">
          {experience.cards.map((card, i) => {
            const dark = i === 1 || i === 2;
            return (
              <Reveal
                key={card.title}
                direction={i % 2 === 0 ? "left" : "right"}
                delay={i * 0.08}
              >
                <Card card={card} dark={dark} index={i} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type CardData = (typeof experience.cards)[number];

function Card({ card, dark, index }: { card: CardData; dark: boolean; index: number }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col gap-6 overflow-hidden rounded-[1.75rem] p-8 md:p-10",
        dark
          ? "bg-primary text-surface shadow-[0_24px_48px_-20px_rgba(21,34,24,0.55)]"
          : "border border-outline-variant/50 bg-surface-container-low text-primary shadow-[0_16px_36px_-24px_rgba(21,34,24,0.18)]"
      )}
    >
      {/* Faint oversized numeral, tucked into the corner — quiet texture, not a card-kit icon badge */}
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-2 -top-6 font-[family-name:var(--font-heading)] text-[7rem] leading-none",
          dark ? "text-surface/[0.06]" : "text-primary/[0.05]"
        )}
      >
        {String(index + 1).padStart(2, "0")}
      </span>

      <div className="relative flex flex-col gap-3">
        <span
          className={cn(
            "text-xs tracking-[0.15em]",
            dark ? "text-secondary-fixed" : "text-secondary"
          )}
        >
          {card.chapter}
        </span>
        <h3 className="font-headline-md text-headline-md leading-tight">{card.title}</h3>
      </div>

      <p
        className={cn(
          "relative max-w-md text-body-md leading-relaxed",
          dark ? "text-surface/80" : "text-on-surface-variant"
        )}
      >
        {card.description}
      </p>

      {card.stats && (
        <div
          className={cn(
            "relative mt-auto flex flex-wrap gap-x-8 gap-y-4 border-t pt-5",
            dark ? "border-surface/15" : "border-outline-variant/60"
          )}
        >
          {card.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-[family-name:var(--font-heading)] text-xl">{s.value}</span>
              <span
                className={cn(
                  "text-[11px] tracking-[0.08em]",
                  dark ? "text-surface/60" : "text-on-surface-variant"
                )}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {card.list && (
        <ul
          className={cn(
            "relative mt-auto flex flex-col gap-3 border-t pt-5",
            dark ? "border-surface/15" : "border-outline-variant/60"
          )}
        >
          {card.list.map((item) => (
            <li key={item} className="flex items-baseline gap-3 text-sm leading-relaxed">
              <span
                className={cn(
                  "h-px w-4 shrink-0 translate-y-[-3px]",
                  dark ? "bg-secondary-fixed" : "bg-secondary"
                )}
              />
              <span className={dark ? "text-surface/85" : "text-on-surface-variant"}>{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}