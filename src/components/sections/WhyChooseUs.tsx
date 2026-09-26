import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { whyChooseUs } from "@/data/siteContent";
import { cn } from "@/lib/utils";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-primary/5 bg-surface">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:px-10 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow={whyChooseUs.eyebrow}
            headline={whyChooseUs.headline}
            align="center"
            className="mx-auto max-w-2xl"
          />
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-lg text-center text-base leading-relaxed text-on-surface-variant">
            {whyChooseUs.intro}
          </p>
        </Reveal>

        {/* Checkerboard: dark / light alternate strictly, so it reads across
            both the 2-col mobile grid and the 4-col desktop row */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {whyChooseUs.features.map((feature, i) => {
            const dark = i % 2 === 0;
            return (
              <Reveal key={feature.title} delay={i * 0.06}>
                <Card feature={feature} dark={dark} />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

type Feature = (typeof whyChooseUs.features)[number];

function Card({ feature, dark }: { feature: Feature; dark: boolean }) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col gap-4 overflow-hidden rounded-[1.5rem] p-5 sm:p-7",
        dark
          ? "bg-primary text-surface shadow-[0_20px_44px_-22px_rgba(21,34,24,0.55)]"
          : "border border-outline-variant/50 bg-surface-container-low text-primary shadow-[0_14px_32px_-22px_rgba(21,34,24,0.16)]"
      )}
    >
      {/* Oversized faint version of the feature's own icon, tucked in the corner */}
      <Icon
        name={feature.icon as IconName}
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-4 -top-4 h-24 w-24 sm:h-28 sm:w-28",
          dark ? "text-surface/[0.08]" : "text-primary/[0.06]"
        )}
        strokeWidth={1}
      />

      <span
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full",
          dark ? "bg-surface/10" : "bg-secondary-container/40"
        )}
      >
        <Icon
          name={feature.icon as IconName}
          className={cn("h-5 w-5", dark ? "text-secondary-fixed" : "text-secondary")}
          strokeWidth={1.5}
        />
      </span>

      <h3 className="relative font-[family-name:var(--font-heading)] text-lg leading-snug sm:text-xl">
        {feature.title}
      </h3>

      <p
        className={cn(
          "relative text-sm leading-relaxed",
          dark ? "text-surface/75" : "text-on-surface-variant"
        )}
      >
        {feature.description}
      </p>
    </div>
  );
}