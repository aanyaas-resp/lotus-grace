import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Media from "@/components/ui/Media";
import Icon from "@/components/ui/Icon";
import { about } from "@/data/siteContent";
import type { IconName } from "@/components/ui/Icon";

export default function About() {
  return (
    <section id="about" className="relative border-t border-primary/5 bg-gradient-to-br from-surface via-surface-container-low to-surface">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 py-24 sm:px-10 md:grid-cols-2 md:gap-14 md:py-32">
        <Reveal direction="left" className="flex flex-col gap-8">
          <SectionHeading
            eyebrow={about.eyebrow}
            headline={about.headline}
            accent={about.headlineAccent}
          />

          <div className="flex flex-col gap-5">
            {about.paragraphs.map((p) => (
              <p key={p} className="max-w-lg text-base leading-relaxed text-primary/80">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-2 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {about.features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-2 border-t border-primary/10 pt-4">
                <Icon name={feature.icon as IconName} className="h-5 w-5 text-secondary" strokeWidth={1.5} />
                <h3 className="font-[family-name:var(--font-heading)] text-lg text-primary">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-primary/75">{feature.description}</p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1} className="relative md:pt-4">
          <div className="relative mx-auto max-w-sm md:max-w-none">
            <Media
              label="A couple sharing a quiet moment beneath the venue's carved archways"
              tone="blush"
              src="/images/gallery/galary8.png"
              className="aspect-[4/5] rounded-2xl shadow-[0_30px_60px_-25px_rgba(21,34,24,0.4)]"
            />
            <div className="absolute inset-x-6 bottom-6 rounded-xl bg-primary/80 px-5 py-4 text-sm italic text-neutral backdrop-blur-sm">
              &ldquo;{about.quoteImageCaption}&rdquo;
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}