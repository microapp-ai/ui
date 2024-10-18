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
      <div className="flex flex-col gap-1">
        {label && <label className="text-sm font-medium text-foreground">{label}</label>}
        {description && !error && <p className="text-sm text-muted-foreground">{description}</p>}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
            variant === "default" && "bg-background border border-input", // Add border in default variant
            variant === "filled" && "bg-muted text-foreground border-0 focus:border-1", // Add bg in filled variant, no border
            error && "border-destructive focus-visible:ring-destructive",
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
