import * as React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 rounded-DEFAULT px-space-lg py-space-sm text-sm tracking-wide transition-all duration-300",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-surface shadow-[0_8px_30px_-10px_rgba(21,34,24,0.5)] hover:bg-secondary hover:-translate-y-0.5",
        secondary:
          "border border-primary/25 text-primary hover:border-secondary hover:text-secondary hover:-translate-y-0.5",
        outlined:
          "border border-secondary-fixed/50 bg-transparent text-secondary-fixed backdrop-blur-sm hover:border-secondary-container hover:text-secondary-container",
        whatsapp:
          "bg-[#25D366] text-white shadow-[0_8px_30px_-10px_rgba(37,211,102,0.6)] hover:brightness-105 hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

type ButtonProps = VariantProps<typeof buttonVariants> & {
  children: React.ReactNode;
  className?: string;
  href?: string;
  showArrow?: boolean;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  href,
  children,
  variant,
  className,
  showArrow = true,
  ...props
}: ButtonProps) {
  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <span
          aria-hidden
          className="transition-transform duration-300 group-hover:translate-x-1"
        >
          <ArrowUpRight className="h-4 w-4" />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn(buttonVariants({ variant }), className)}>
        {content}
      </Link>
    );
  }

  return (
    <button className={cn(buttonVariants({ variant }), className)} {...props}>
      {content}
    </button>
  );
}
