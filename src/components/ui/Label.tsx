import * as React from "react";
import { cn } from "@/lib/utils";

const Label = React.forwardRef<
  HTMLLabelElement,
  React.ComponentProps<"label">
>(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn(
        "text-xs tracking-[0.2em] uppercase text-primary/60",
        className
      )}
      {...props}
    />
  );
});
Label.displayName = "Label";

export { Label };
