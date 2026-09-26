import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Media from "@/components/ui/Media";
import Icon from "@/components/ui/Icon";
import { about } from "@/data/siteContent";
import type { IconName } from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="relative bg-surface">
      <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] lg:grid-cols-[1fr_0.85fr]">
        {/* Text column */}
        <Reveal
          direction="left"
          className="relative flex flex-col justify-center gap-10 px-6 py-16 sm:px-10 sm:py-20 lg:pl-16 lg:pr-12 lg:py-24 xl:pl-24"
        >
          {/* Faint arch line — the one decorative flourish, tied to the venue's own archways */}
          <svg
            aria-hidden
            viewBox="0 0 200 200"
            className="pointer-events-none absolute -left-6 -top-10 h-48 w-48 text-secondary/25 sm:h-56 sm:w-56 lg:-left-4 lg:-top-6"
            fill="none"
          >
            <path
              d="M20 190 V90 C20 40 60 10 100 10 C140 10 180 40 180 90 V190"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M45 190 V95 C45 60 70 35 100 35 C130 35 155 60 155 95 V190"
              stroke="currentColor"
              strokeWidth="1"
            />
          </svg>

          <div className="relative flex flex-col gap-6">
            <SectionHeading
              eyebrow={about.eyebrow}
              headline={about.headline}
              accent={about.headlineAccent}
            />

            <div className="flex max-w-md flex-col gap-4">
              {about.paragraphs.map((p) => (
                <p key={p} className="text-[0.975rem] leading-[1.75] text-on-surface-variant">
                  {p}
                </p>
              ))}
            </div>
          </div>

          {/* Features — hairline-divided row, echoes the Hero stat row rather than a card grid */}
          <div className="flex flex-col gap-6 border-t border-outline-variant/70 pt-8 sm:flex-row sm:gap-0 sm:divide-x sm:divide-outline-variant/70">
            {about.features.map((feature) => (
              <div
                key={feature.title}
                className="flex flex-col gap-2 sm:px-6 sm:first:pl-0 sm:last:pr-0"
              >
                <Icon
                  name={feature.icon as IconName}
                  className="h-5 w-5 text-secondary"
                  strokeWidth={1.5}
                />
                <h3 className="font-[family-name:var(--font-heading)] text-base text-on-surface">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Image column — full bleed, no card, no shadow */}
        <Reveal direction="right" delay={0.1} className="relative min-h-[22rem] md:min-h-full">
          <Media
            label="Hotel Lotus Grace venue exterior and grounds"
            tone="blush"
            src="/images/herobg.png"
            showLabel={false}
            className="absolute inset-0 h-full w-full rounded-none object-cover"
          />

          {/* Vertical spine caption — museum wall-label treatment, desktop only */}
          <div className="absolute inset-y-0 right-0 z-10 hidden w-14 items-center justify-center bg-primary/90 backdrop-blur-[2px] md:flex">
            <span
              className="whitespace-nowrap text-xs italic tracking-wide text-surface"
              style={{ writingMode: "vertical-rl" }}
            >
              {about.quoteImageCaption}
            </span>
          </div>

          {/* Same caption, horizontal, mobile only */}
          <div className="absolute inset-x-0 bottom-0 z-10 flex items-center justify-center bg-primary/90 px-6 py-3 md:hidden">
            <span className="text-center text-xs italic leading-snug text-surface">
              {about.quoteImageCaption}
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}