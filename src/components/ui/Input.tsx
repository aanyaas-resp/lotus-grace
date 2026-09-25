import * as React from "react";
import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        ref={ref}
        className={cn(
          "w-full border-0 border-b border-primary/20 bg-transparent px-0 py-3 text-primary placeholder:text-primary/40 outline-none transition-colors focus:border-secondary",
          className
        )}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
