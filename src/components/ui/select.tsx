import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/utils";

const Select = SelectPrimitive.Root;

interface SelectProps {
  label: React.ReactNode;
  options: { value: string; label: string }[];
  disabled?: boolean;
  width?: string; // Width prop
  item_indicator_icon?: React.ReactNode;
  className?: string;
  size?: 'lg' | 'md' | 'sm'; // New size prop
}

const sizeStyles = {
  lg: "h-12 text-base py-3 px-4",
  md: "h-10 text-sm py-2 px-3",
  sm: "h-8 text-xs py-1 px-2",
};

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger> & { size: 'lg' | 'md' | 'sm' }
>(({ className, children, disabled, size = 'md', ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      `flex w-full items-center justify-between rounded-md border border-foreground-border bg-background placeholder:text-muted-foreground focus:outline-none focus:bg-surface-activeActionableSecondary disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-surface-muted`,
      sizeStyles[size],
      { "hover:bg-surface-hoverActionableSecondary": !disabled },
      className
    )}
    {...props}
  >
    {children}
    <SelectPrimitive.Icon asChild>
      <ChevronDown className="h-4 w-4 opacity-50 text-muted-foreground" />
    </SelectPrimitive.Icon>
  </SelectPrimitive.Trigger>
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;

const SelectContent = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content> & { width?: string }
>(({ className, children, width, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 overflow-hidden bg-popover rounded-sm text-popover-foreground shadow-md",
        className
      )}
      style={{ width }}
      position="popper"
      sideOffset={4}
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));
SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item> & { item_indicator_icon?: React.ReactNode }
>(({ className, children, item_indicator_icon, ...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-surface-hoverActionableSecondary focus:text-accent-foreground",
      className
    )}
    {...props}
  >
    <span className="absolute left-2 flex h-4 w-4 items-center justify-center">
      <SelectPrimitive.ItemIndicator>
        {item_indicator_icon}
      </SelectPrimitive.ItemIndicator>
    </span>
    <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
  </SelectPrimitive.Item>
));
SelectItem.displayName = SelectPrimitive.Item.displayName;

const CustomSelect: React.FC<SelectProps> = ({
  className,
  label,
  options,
  disabled,
  width = '100%',
  item_indicator_icon = <Check className="h-4 w-4" />,
  size = 'md'
}) => {
  return (
    <div className={`select-container ${className}`} style={{ width }}>
      <label className="block text-md text-foreground font-bold mb-2">{label}</label>
      <Select onOpenChange={(open) => { }} disabled={disabled}>
        <SelectTrigger className="w-full" disabled={disabled} size={size}>
          <SelectPrimitive.Value placeholder="Select an option" />
        </SelectTrigger>
        <SelectContent width={width} className={`w-full ${className}`}> {/* Pass the width */}
          {options.map((option) => (
            <SelectItem key={option.value} value={option.value} item_indicator_icon={item_indicator_icon}>
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

export { CustomSelect as Select, SelectTrigger, SelectContent, SelectItem };
