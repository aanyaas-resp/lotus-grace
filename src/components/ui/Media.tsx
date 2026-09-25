"use client";

import { useState } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

type MediaTone = "ink" | "gold" | "blush" | "ivory";

type MediaProps = {
  label: string;
  tone?: MediaTone;
  className?: string;
  src?: string;
  lightbox?: boolean;
  showLabel?: boolean;
};

const toneMap: Record<MediaTone, { src: string }> = {
  ink: {
    src: "/images/herobg.png",
  },
  gold: {
    src: "/images/gallery/galary1.png",
  },
  blush: {
    src: "/images/gallery/galary5.png",
  },
  ivory: {
    src: "/images/gallery/galary6.png",
  },
};

export default function Media({
  label,
  tone = "gold",
  className,
  src,
  lightbox = true,
  showLabel = true,
}: MediaProps) {
  const [isOpen, setIsOpen] = useState(false);
  const selected = toneMap[tone];
  const imageSrc = src ?? selected.src;

  return (
    <>
      <div
        className={cn(
          "relative isolate overflow-hidden rounded-2xl bg-surface-container-high",
          lightbox && "cursor-zoom-in",
          className
        )}
        role={lightbox ? "button" : undefined}
        tabIndex={lightbox ? 0 : undefined}
        onClick={() => lightbox && setIsOpen(true)}
        onKeyDown={(event) => {
          if (lightbox && (event.key === "Enter" || event.key === " ")) {
            event.preventDefault();
            setIsOpen(true);
          }
        }}
        aria-label={lightbox ? `Open larger view: ${label}` : undefined}
      >
      <Image
        src={imageSrc}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />

      {showLabel ? (
        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 bg-primary/75 p-4 text-[0.65rem] uppercase tracking-[0.18em] text-secondary-fixed">
          <span>{label}</span>
          <span className="inline-flex h-2 w-2 rounded-full bg-secondary-container" />
        </div>
      ) : null}
      </div>

      {lightbox && isOpen ? (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 sm:p-8"
          role="dialog"
          aria-modal="true"
          aria-label={label}
          onClick={() => setIsOpen(false)}
        >
          <button
            type="button"
            aria-label="Close image viewer"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-secondary-fixed/50 bg-primary text-secondary-fixed transition-colors hover:bg-secondary sm:right-8 sm:top-8"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="relative h-[75vh] w-full max-w-6xl" onClick={(event) => event.stopPropagation()}>
            <Image src={imageSrc} alt={label} fill sizes="100vw" className="object-contain" />
          </div>
        </div>
      ) : null}
    </>
  );
}
