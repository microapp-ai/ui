import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/utils";

const Select = SelectPrimitive.Root;

interface SelectProps {
  label: React.ReactNode;
  options: { value: string; label: string }[];
  disabled?: boolean;
  width?: string; // New width prop
  item_indicator_icon?: React.ReactNode;
  className?:string
}

const SelectTrigger = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Trigger>
>(({ className, children, disabled, ...props }, ref) => (
  <SelectPrimitive.Trigger
    ref={ref}
    className={cn(
      "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-2 focus:border-ring  disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted",
      {
        "hover:bg-border": !disabled, // Apply hover style only if not disabled
      },
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
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Content>
>(({ className, children, width, ...props }, ref) => (
  <SelectPrimitive.Portal>
    <SelectPrimitive.Content
      ref={ref}
      className={cn(
        "relative z-50 overflow-hidden bg-popover rounded-sm text-popover-foreground shadow-md",
        className
      )}
      style={{ width }} // Set width from props
      position="popper"
      sideOffset={4} // Control vertical spacing
      {...props}
    >
      <SelectPrimitive.Viewport className="p-1">{children}</SelectPrimitive.Viewport>
    </SelectPrimitive.Content>
  </SelectPrimitive.Portal>
));

SelectContent.displayName = SelectPrimitive.Content.displayName;

const SelectItem = React.forwardRef<
  React.ElementRef<typeof SelectPrimitive.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitive.Item>
>(({ className, children, item_indicator_icon,...props }, ref) => (
  <SelectPrimitive.Item
    ref={ref}
    className={cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-actionable-secondary focus:text-accent-foreground",
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

const CustomSelect: React.FC<SelectProps> = ({ className,label, options, disabled, width = '100%',item_indicator_icon=<Check className="h-4 w-4"/> }) => {
  return (
    <div className={`select-container ${className}`} style={{ width }}>
      <label className="block text-sm text-foreground font-medium mb-2">{label}</label>
      <Select onOpenChange={(open) => { }} disabled={disabled}>
        <SelectTrigger className="w-full" disabled={disabled}>
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
