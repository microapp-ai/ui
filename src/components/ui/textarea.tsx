import * as React from "react";
import { cn } from "@/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  variant?: "default" | "filled"; // Added variant prop
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, variant = "default", ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-1",className)}>
        {label && <label className={`text-md  font-bold text-foreground mb-[${description ? '4px' : '12px'}]`}>{label}</label>}
        {description  && <p className={`text-sm text-muted-foreground mb-[12px]`}>{description}</p>}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm  text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-foreground-actionable disabled:cursor-not-allowed disabled:bg-surface-muted",
            variant === "default" && "bg-background border border-foreground-border", // Add border in default variant
            variant === "filled" && "bg-surface-backgroundSecondary text-foreground border-0 focus:border-1", // Add bg in filled variant, no border
            error && "border-destructive focus-visible:ring-foreground-statusErrorSecondary placeholder:text-foreground-statusErrorSecondary",
            props.disabled && "bg-muted text-muted-foreground",
            className
          )}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-destructive">{error}</p>}
      </div>
    );
  }
);
Textarea.displayName = "Textarea";

export { Textarea };
