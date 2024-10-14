import * as React from "react";
import { cn } from "@/utils";

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  leftIcon?: React.ReactNode; // Icon on the left
  rightIcon?: React.ReactNode; // Icon on the right
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, leftIcon, rightIcon, ...props }, ref) => {
    return (
      <div className="relative flex items-center w-full">
        {leftIcon && (
          <span className="absolute left-3 flex items-center">
            {leftIcon}
          </span>
        )}
        <input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-2 focus-visible:border-ring disabled:cursor-not-allowed disabled:opacity-50",
            leftIcon && "pl-10", // Add padding if left icon is present
            rightIcon && "pr-10", // Add padding if right icon is present
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
    );
  }
);
Input.displayName = "Input";

export { Input };
