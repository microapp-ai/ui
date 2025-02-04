import * as React from "react";
import { cn } from "@/utils";

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  description?: string;
  error?: string;
  width?: string;
  variant?: "default" | "filled"; // Added variant prop
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, label, description, error, variant = "default",width, ...props }, ref) => {
    return (
      <div className={cn("flex flex-col gap-0",className)} style={{width}}>
        <style>{`
          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
            height: 8px;
          }

          ::-webkit-scrollbar-track {
            background: transparent; /* Background of the scrollbar track */
            margin: 18px;
          }

          ::-webkit-scrollbar-thumb {
            background-color: #888; /* Color of the scrollbar handle */
            border-radius: 10px;
            border: 3px solid transparent; /* Padding around the handle */
            background-clip: padding-box;
          }

          ::-webkit-scrollbar-thumb:hover {
            background-color: #555; /* Darker color when hovered */
          }
        `}</style>
        {label && <label className={cn(`text-md  font-bold text-foreground`,!description && 'mb-3')}>{label}</label>}
        {description  && <p className={`text-sm text-muted-foreground mt-[4px] mb-[12px]`}>{description}</p>}
        <textarea
          className={cn(
            "flex min-h-[80px] w-full rounded-md px-3 py-2 text-sm  text-foreground  text-md placeholder:text-muted-foreground placeholder:text-lg focus-visible:outline-none focus-visible:border-2 focus-visible:border-foreground-actionable disabled:cursor-not-allowed disabled:bg-surface-muted",
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
