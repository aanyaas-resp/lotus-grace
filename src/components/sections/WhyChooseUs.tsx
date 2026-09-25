import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Icon from "@/components/ui/Icon";
import type { IconName } from "@/components/ui/Icon";
import { whyChooseUs } from "@/data/siteContent";

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-t border-primary/5 bg-gradient-to-br from-surface via-surface-container-low to-secondary-fixed/10">
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
          <p className="mx-auto mt-6 max-w-lg text-center text-base leading-relaxed text-primary/80">
            {whyChooseUs.intro}
          </p>
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.features.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 0.06} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="flex h-full flex-col gap-4 rounded-xl bg-gradient-to-br from-surface-container-low via-surface to-secondary-fixed/20 p-space-md shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-lg">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary-fixed text-on-secondary-fixed">
                  <Icon name={feature.icon as IconName} className="h-5 w-5" strokeWidth={1.5} />
                </span>
                <h3 className="font-[family-name:var(--font-heading)] text-xl text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary/75">{feature.description}</p>
                <span className="mt-auto pt-2 text-xs tracking-[0.2em] uppercase text-secondary/70">
                  {feature.linkLabel}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}