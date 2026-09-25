import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function Experience() {
  const [majestic, flavours, hospitality, comfort] = experience.cards;

  return (
    <section id="experience" className="border-t border-primary/5 bg-gradient-to-b from-surface via-surface-container-low to-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
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

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-3">
            <Card card={majestic} />
          </Reveal>
          <Reveal direction="right" delay={0.1} className="lg:col-span-2">
            <Card card={flavours} />
          </Reveal>
          <Reveal direction="left" delay={0.1} className="lg:col-span-2">
            <Card card={hospitality} />
          </Reveal>
          <Reveal direction="right" delay={0.15} className="lg:col-span-3">
            <Card card={comfort} />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

type CardData = (typeof experience.cards)[number];

function Card({ card }: { card: CardData }) {
  return (
    <div
      className={cn(
        "flex h-full flex-col gap-5 rounded-xl p-space-lg shadow-sm",
        card.dark
          ? "bg-gradient-to-br from-primary via-primary-container to-tertiary-container text-surface-container"
          : "bg-gradient-to-br from-surface-container-low via-surface to-surface-container text-primary"
      )}
    >
      <span
        className={cn(
          "text-xs tracking-[0.2em] uppercase",
          card.dark ? "text-secondary-container" : "text-secondary"
        )}
      >
        {card.chapter}
      </span>

      <h3 className="font-headline-md text-headline-md">
        {card.title}
      </h3>

      <p className={cn("text-body-md leading-relaxed", card.dark ? "text-surface-container/80" : "text-on-surface-variant")}>
        {card.description}
      </p>

      {card.stats && (
        <div className="grid grid-cols-3 gap-3 border-t border-current/10 pt-4">
          {card.stats.map((s) => (
            <div key={s.label} className="flex flex-col gap-0.5">
              <span className="font-[family-name:var(--font-heading)] text-lg">{s.value}</span>
              <span
                className={cn(
                  "text-[10px] uppercase tracking-[0.12em]",
                  card.dark ? "text-surface-container/60" : "text-on-surface-variant"
                )}
              >
                {s.label}
              </span>
            </div>
          ))}
        </div>
      )}

      {card.list && (
        <ul className="flex flex-col gap-2 border-t border-current/10 pt-4">
          {card.list.map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-surface-container/80">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary-container" />
              {item}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}
