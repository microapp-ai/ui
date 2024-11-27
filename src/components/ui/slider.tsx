import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";
import { cn } from "@/utils";

interface Mark {
  value: number;
  label: string;
}

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  width?: string | number;
  label?: string;
  description?: string;
  marks?: Mark[];
  showValue?: boolean;
  disabled?: boolean;
}

const Slider = React.forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  SliderProps
>(({ className, width, label, description, marks = [], showValue, disabled, ...props }, ref) => {
  // State to hold the current slider value
  const [sliderValue, setSliderValue] = React.useState<number[]>(props.defaultValue ?? [0]);
  const [isActive, setIsActive] = React.useState(false); // State to track if thumb is clicked
  const [isDragging, setIsDragging] = React.useState(false); // State to track if thumb is being dragged

  const handleValueChange = (value: number[]) => {
    setSliderValue(value);
    if (props.onValueChange) props.onValueChange(value);
  };

  // Start drag
  const handlePointerDown = () => {
    setIsActive(true);
    setIsDragging(true);
  };

  // End drag
  const handlePointerUp = () => {
    setIsActive(false);
    setIsDragging(false);
  };

  const handleClickOnTrack = () => {
    // Briefly activate the thumb color on clicking the track
    setIsActive(true);
    setTimeout(() => {
      setIsActive(false);
    }, 150); // Change color for 150ms on click
  };

  return (
    <div style={{ width }} className={cn("flex flex-col gap-0", className)}>
      {label && (
        <label className="text-md font-bold text-foreground my-0 py-0">
          {label} {showValue && <span className="font-medium">: {sliderValue[0]}</span>}
        </label>
      )}
      {description && (
        <p className="text-sm text-muted-foreground mt-[4px] mb-[12px] py-0">
          {description}
        </p>
      )}

      <div className="relative w-full">
        <SliderPrimitive.Root
          ref={ref}
          className="relative flex w-full touch-none select-none items-center"
          value={sliderValue}
          onValueChange={handleValueChange}
          onPointerDown={(e) => {
            handleClickOnTrack();
            handlePointerDown();
          }} // Handle pointer down on track
          onPointerUp={handlePointerUp}
          onPointerMove={() => {
            if (isDragging) setIsActive(true);
          }} // Keep color change during dragging
          {...props}
          disabled={disabled}
        >
          <SliderPrimitive.Track
            className="relative h-[8px] w-full rounded-full bg-surface-actionableSecondary"
            onClick={handleClickOnTrack} // Handle click on track to change color
          >
            <SliderPrimitive.Range
              className={cn("absolute h-full bg-primary rounded-lg", disabled && "!bg-foreground-muted")}
            />
            {marks.length > 0 && (
              <div className="absolute inset-0 flex justify-between pointer-events-none mx-2 my-[1px]">
                {marks.map((mark) => {
                  const position = ((mark.value - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100;

                  return (
                    <div
                      key={mark.value}
                      className="absolute"
                      style={{
                        left: `${position}%`,
                        transform: "translateX(-50%)",
                      }}
                    >
                      <div className={cn("h-[6px] w-[6px] rounded-full bg-foreground-muted", disabled && "!bg-foreground-subtle")} />
                    </div>
                  );
                })}
              </div>
            )}
          </SliderPrimitive.Track>
          <SliderPrimitive.Thumb
            className={cn(
              "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
              isActive || isDragging ? "bg-surface-backgroundAccent" : "bg-background",
              disabled && "!border-foreground-muted"
            )}
          />
        </SliderPrimitive.Root>

        {marks.length > 0 && (
          <div className="relative w-full mt-3 flex justify-between pointer-events-none">
            {marks.map((mark) => {
              const position = ((mark.value - (props.min ?? 0)) / ((props.max ?? 100) - (props.min ?? 0))) * 100;

              return (
                <div
                  key={mark.value}
                  className="absolute text-xs text-muted-foreground"
                  style={{
                    left: `${position}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  {mark.label}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
});

Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
