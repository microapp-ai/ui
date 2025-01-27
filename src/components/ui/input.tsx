// input.tsx
import * as React from "react";
import { cn } from "@/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string; // Label for the input
  description?: string; // Description text below the input
  leftIcon?: React.ReactNode; // Icon on the left
  rightIcon?: React.ReactNode; // Icon on the right
  error?: boolean; // Error state
  errorMessage?: string; // Error message
  width?: string | number; // Custom width for the input
  value?: string; // Value of the input
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // OnChange event handler
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, label, description, leftIcon, rightIcon, error, errorMessage, width, ...props }, ref) => {
    return (
      <div className={cn("relative flex flex-col w-full",className)} style={{ width }}>
        {label && (
          <label className={cn(`text-md font-bold text-foreground mb-[${description ? '4px' : '12px'}]`,
            "text-foreground"
          )}>
            {label}
          </label>
        )}
        {description &&  (
          <span className={cn("text-sm text-muted-foreground mb-[12px]",
            "text-muted-foreground"
          )}>{description}</span> // Show description if no error
        )}
        <div className="relative flex items-center w-full">
          {leftIcon && (
            <span className="absolute left-3 flex items-center">
              {leftIcon}
            </span>
          )}
          <input
            type={type}
            className={cn(
              `flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm text-foreground file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground`,
              `focus-visible:!outline-none focus-visible:border-2 focus-visible:border-ring`,
              `disabled:cursor-not-allowed disabled:bg-muted`,
              leftIcon && "pl-10", // Add padding if left icon is present
              rightIcon && "pr-10", // Add padding if right icon is present
              error ? "border-destructive focus-visible:!outline-none placeholder:text-foreground-statusErrorSecondary" : "border-input", // Apply error border if error is true
              className
            )}
            ref={ref}
            {...props}
          />
          {rightIcon && (
            <span className="absolute right-3 flex items-center">
              {rightIcon}
            </span>
          )}
        </div>
        {error && errorMessage && (
          <span className="text-sm text-destructive mt-1">{errorMessage}</span> // Show error message if error is true
        )}
        
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
