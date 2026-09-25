"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type Direction = "up" | "left" | "right";

type RevealProps = {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: Direction;
  distance?: number;
};

export default function Reveal({
  children,
  delay = 0,
  className,
  direction = "up",
  distance = 28,
}: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  const offset = shouldReduceMotion
    ? { x: 0, y: 0 }
    : direction === "left"
      ? { x: -distance, y: 0 }
      : direction === "right"
        ? { x: distance, y: 0 }
        : { x: 0, y: distance };

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
