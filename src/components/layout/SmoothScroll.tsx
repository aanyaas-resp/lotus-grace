"use client";

import { animate } from "framer-motion";
import { useEffect } from "react";

const HEADER_OFFSET = 112;

export default function SmoothScroll() {
  useEffect(() => {
    let stopAnimation: (() => void) | undefined;

    function handleClick(event: MouseEvent) {
      if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
        return;
      }

      const target = event.target as HTMLElement;
      const link = target.closest<HTMLAnchorElement>("a[href^='#']");
      if (!link) return;

      const hash = link.getAttribute("href");
      if (!hash || hash === "#") return;

      const element = document.querySelector(hash);
      if (!element) return;

      event.preventDefault();
      stopAnimation?.();

      const targetTop = Math.max(
        0,
        window.scrollY + element.getBoundingClientRect().top - HEADER_OFFSET
      );
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      if (prefersReducedMotion) {
        window.scrollTo(0, targetTop);
      } else {
        stopAnimation = animate(window.scrollY, targetTop, {
          duration: 0.85,
          ease: [0.22, 1, 0.36, 1],
          onUpdate: (value) => window.scrollTo(0, value),
        }).stop;
      }

      window.history.pushState(null, "", hash);
    }

    document.addEventListener("click", handleClick);
    return () => {
      stopAnimation?.();
      document.removeEventListener("click", handleClick);
    };
  }, []);

  return null;
}
