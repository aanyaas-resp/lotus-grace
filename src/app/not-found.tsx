import Link from "next/link";
import { Compass } from "lucide-react";
import Button from "@/components/ui/Button";
import { brand } from "@/data/siteContent";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[80svh] items-center justify-center overflow-hidden bg-gradient-to-br from-surface via-surface-container-low to-surface-container px-6 py-24">
      <div className="relative flex max-w-lg flex-col items-center gap-6 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Compass className="h-6 w-6" strokeWidth={1.75} />
        </span>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-medium uppercase tracking-[0.25em] text-secondary">
            Error 404
          </span>
          <h1 className="font-headline-lg text-headline-lg leading-tight text-primary">
            This page has wandered off the property
          </h1>
          <p className="text-base leading-relaxed text-primary/70">
            The page you&apos;re looking for isn&apos;t here — it may have moved, or the link may be
            out of date. Let&apos;s get you back to {brand.name}.
          </p>
        </div>

        <div className="mt-2 flex flex-col gap-3 sm:flex-row">
          <Button href="/" variant="primary" showArrow={false}>
            Back to Home
          </Button>
          <Button href="/#contact"  showArrow={false}>
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}