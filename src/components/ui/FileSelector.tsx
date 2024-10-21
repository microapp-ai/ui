import * as React from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { IconX } from "@tabler/icons-react";

interface FileSelectorProps {
  label: string;
  description?: string;
  clearable?: boolean; // Clear button
  radius?: "sm" | "md" | "lg" | number | null;
  error?: string; // Error message string
  disabled?: boolean; // Disabled state
  placeholder?: string; // Custom placeholder
  formats?: string[]; // Accepted file formats (e.g., ["image/png", "image/jpeg"])
  variant?: "default" | "filled"; // Variant for input style
  width?: string; // Custom width (e.g., "300px", "100%")
}

export const FileSelector: React.FC<FileSelectorProps> = ({
  label,
  description,
  clearable = false, // Default false, no clear button by default
  radius = "md",
  error = "",
  disabled = false,
  placeholder = "No file selected",
  formats,
  variant = "default", // Default to 'default' variant
  width = "280px", // Default width
}) => {
  const [fileName, setFileName] = React.useState(placeholder);
  const fileInputRef = React.useRef<HTMLInputElement | null>(null);
  const inputRef = React.useRef<HTMLInputElement | null>(null); // Reference to the text input
  const [isFocused, setIsFocused] = React.useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(placeholder);
    }
  };

  const triggerFileInput = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Manually trigger the file input click
    }
  };

  const clearFileInput = () => {
    setFileName(placeholder);
    if (fileInputRef.current) {
      fileInputRef.current.value = ""; // Clear the actual file input
    }
    if (inputRef.current) {
      inputRef.current.focus(); // Keep the input focused after clearing
    }
  };

  const roundedClass =
    radius === "sm"
      ? "rounded-sm"
      : radius === "md"
        ? "rounded-md"
        : radius === "lg"
          ? "rounded-lg"
          : radius && typeof radius === "number"
            ? `rounded-[${radius}px]`
            : "";

  return (
    <div className="flex flex-col gap-0" style={{ width }}>
      {/* Label */}
      <Label className="text-md font-bold text-foreground mb-[4px]">{label}</Label>

      {/* Description */}
      {description && <p className="text-sm text-foreground-muted mb-[12px]">{description}</p>}

      {/* File Input Container */}
      <div
        className={cn(
          "flex items-center justify-start mt-[12px] p-[2px] hover:bg-muted",
          variant === "filled"
            ? "bg-muted border-none"
            : cn(
              "border-2", // Base border class
              error ? "border-destructive text-destructive" : "border-foreground-border", // Apply error border if present
              isFocused && !error ? "border-ring" : "", // Blue border on focus if no error
              disabled ? "bg-muted cursor-not-allowed" : "bg-background"
            ),
          roundedClass
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <Button
          onClick={triggerFileInput}
          disabled={disabled}
          className={cn(
            "rounded-full h-fit py-[7px] px-[14px] mr-[10px] font-bold text-md bg-actionable-secondary text-foreground-onActionableSecondary",
            variant === "filled" && "bg-muted",
            "hover:bg-actionable-secondary-hover",
          )}
        >
          Browse
        </Button>

        <Input
          type="text"
          readOnly
          value={fileName}
          onClick={triggerFileInput}
          disabled={disabled}
          className={cn(
            "bg-transparent border-0 text-foreground-muted pl-[16px] py-[8.5px]",
            variant === "filled" && "bg-muted", // Make input background match in 'filled' variant,
            "focus-visible:!outline-none",
            error && "text-destructive"
          )}
          ref={inputRef}
        />

        <input
          id="file-upload"
          type="file"
          accept={formats?.join(",")} // Restrict file formats based on accepted formats
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          disabled={disabled}
        />
        {clearable && fileName !== placeholder && (
          <Button
            onClick={clearFileInput}
            className="text-actionable-secondary p-2 hover:bg-transparent hover:text-actionable-secondary"
            variant="ghost"
            disabled={disabled}
          >
            <IconX size={18} />
          </Button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-destructive mt-1">{error}</p>}
    </div>
  );
};
