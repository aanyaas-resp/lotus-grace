import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  eyebrow: string;
  headline: string;
  accent?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({
  eyebrow,
  headline,
  accent,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className
      )}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-secondary">
        {eyebrow}
      </span>
      <h2 className="font-[family-name:var(--font-heading)] text-[2.1rem] leading-[0.96] text-primary sm:text-[2.6rem] lg:text-[3rem]">
        {headline}
        {accent ? <span className="block italic text-secondary">{accent}</span> : null}
      </h2>
    </div>
  );
}
