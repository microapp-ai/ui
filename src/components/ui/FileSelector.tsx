import * as React from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/utils";
import { IconX } from "@tabler/icons-react";

interface FileSelectorProps {
  label: string;
  description?: string;
  clearable?: boolean; // Clear button
  error?: string; // Error message string
  disabled?: boolean; // Disabled state
  placeholder?: string; // Custom placeholder
  formats?: string[]; // Accepted file formats (e.g., ["image/png", "image/jpeg"])
  variant?: "default" | "filled"; // Variant for input style
  width?: string; // Custom width (e.g., "300px", "100%")
  className?: string;
}

export const FileSelector: React.FC<FileSelectorProps> = ({
  label,
  description,
  clearable = false, // Default false, no clear button by default
  error = "",
  disabled = false,
  placeholder = "No file selected",
  formats,
  variant = "default", // Default to 'default' variant
  width = "280px", // Default width
  className
}) => {
  const [fileName, setFileName] = React.useState("");
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


  return (
    <div className={cn("flex flex-col gap-0", className)} style={{ width }}>
      {/* Label */}
      <Label className={`text-md font-bold text-foreground ${description!=='' ? 'mb-1' : 'mb-3'}`}>{label}</Label>

      {/* Description */}
      {description && <p className="text-sm text-foreground-muted mb-[12px]">{description}</p>}

      {/* File Input Container */}
      <div
        className={cn(
          "flex items-center rounded-lg justify-start p-[3px]", 
          disabled && "cursor-not-allowed",
          variant === "filled"
            ? cn(
              (error
                ? "bg-surface-backgroundSecondary border-[1px] border-foreground-statusErrorSecondary"
                : "bg-surface-backgroundSecondary border-none"
              ),
              disabled && variant === 'filled' && "!bg-surface-muted"
            )
            : cn(
              "border-[1px]", // Base border class
              error ? "border-foreground-statusErrorSecondary text-foreground-statusErrorSecondary" : "border-foreground-border", // Apply error border if present
              isFocused && !error ? "border-ring" : "", // Blue border on focus if no error
              disabled ? "bg-surface-muted cursor-not-allowed" : "bg-background"
            ),
        )}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      >
        <button
          onClick={triggerFileInput}
          disabled={disabled}
          className={cn(
            "rounded-full h-fit py-[7px] px-[18px] mr-[10px] font-[600] text-md  bg-surface-actionableSecondary text-foreground-onActionableSecondary",
            variant === "filled" && "bg-surface-backgroundSecondary", "disabled:!bg-surface-actionableSecondary disabled:!opacity-100",
            !disabled && "hover:!bg-surface-hoverActionableSecondary",
          )}
        >
          Browse
        </button>

        <Input
          type="text"
          readOnly
          value={fileName}
          onClick={triggerFileInput}
          disabled={disabled}
          className={cn(
            "!bg-transparent !border-0 text-foreground pl-[16px]",
            "placeholder:text-foreground-muted",
            "focus-visible:!outline-none",
            error && "text-foreground-statusErrorSecondary"
          )}
          placeholder={placeholder}
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
          <button
            onClick={clearFileInput}
            className="text-actionable-secondary p-2 hover:bg-transparent hover:text-actionable-secondary"
            disabled={disabled}
          >
            <IconX size={18} />
          </button>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-sm text-foreground-statusErrorSecondary mt-1">{error}</p>}
    </div>
  );
};
