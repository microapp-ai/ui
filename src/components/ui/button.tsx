import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:bg-surface-muted disabled:!text-foreground-muted disabled:!cursor-not-allowed",
  {
    variants: {
      variant: {
        default: "bg-surface-actionablePrimary text-foreground-onActionablePrimary hover:bg-surface-hoverActionablePrimary active:bg-surface-activeActionablePrimary",
        outline:
          "border border-foreground-border !bg-transparent hover:bg-surface-hoverActionableSecondary hover:text-foreground-onActionableSecondary active:bg-surface-activeActionableSecondary disabled:text-foreground-muted",
        subtle:
          "bg-surface-actionableSecondary text-foreground-onActionableSecondary hover:bg-surface-hoverActionableSecondary active:bg-surface-activeActionableSecondary",
        destructive:
          "bg-surface-actionableDestructive text-foreground-onActionableDestructive hover:bg-surface-hoverActionableDestructive active:bg-surface-activeActionableDestructive",
        ghost: 
          "bg-transparent text-foreground-onActionableSecondary hover:!bg-surface-hoverActionableSecondary active:!bg-surface-activeActionableSecondary",
        "ghost-destructive": 
          "bg-transparent text-foreground-onActionableSecondary hover:text-foreground-destructive active:text-foreground-destructive active:!bg-surface-activeActionableSecondary",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-[14px] py-[7px]",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  icon?: React.ReactNode;
  variant?: 'default' | 'outline' | 'subtle' | 'destructive' | 'ghost' | 'ghost-destructive' | 'secondary';
  size?: 'default' | 'sm' | 'lg' | 'icon';
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, icon, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <div className={cn(className,"font-extrabold")}>
        <Comp
          className={cn(buttonVariants({ variant, size, className }))}
          ref={ref}
          {...props}
        >
          {icon && <span className="mr-2">{icon}</span>}
          <div className={cn("font-[600]",
            
          )}>{children}</div>
        </Comp>
      </div>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
