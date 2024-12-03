import React, { useCallback, useState } from "react";
import { Accept, useDropzone } from "react-dropzone";
import { cn } from "@/utils"; // Updated to use cn
import { Button } from "./button";

export interface FileUploadProps {
  label: string;
  description?: string;
  error?: string;
  disabled?: boolean;
  formats?: string[];
  value?: File[]; // Files managed from outside
  onFileDrop?: (files: File[]) => void; // Handler for when files are dropped
  renderDropzoneContent?: (isDragActive: boolean,disabled?:boolean) => React.ReactNode; // Function to render custom dropzone content
  width?: string; // New width prop
  className?: string;
}

export const FileUpload: React.FC<FileUploadProps> = ({
  label,
  description,
  error,
  disabled = false,
  formats = [],
  value, // Passed files
  onFileDrop, // Handler for external control
  renderDropzoneContent, // Custom render function for dropzone content
  width = "100%", // Default width,
  className,
}) => {
  // Internal state to manage files if not controlled externally
  const [internalFiles, setInternalFiles] = useState<File[]>([]);

  // Use value if provided, otherwise fallback to internal state
  const files = value || internalFiles;

  const onDrop = useCallback((acceptedFiles: File[]) => {
    // console.log('Files dropped:', acceptedFiles);
    if (onFileDrop) {
      // If onFileDrop prop is provided, use it to handle files
      onFileDrop(acceptedFiles);
    } else {
      // Otherwise, manage the files internally
      setInternalFiles((prevFiles) => [...prevFiles, ...acceptedFiles]);
    }
  }, [onFileDrop]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop, // Handles both file acceptance and state updates
    accept: formats.length > 0
      ? Object.fromEntries(formats.map(format => [format, []]))
      : (undefined as unknown as Accept),
    disabled: disabled,
    multiple: true,
    onDragOver: (event) => {
      event.preventDefault(); // Prevent default behavior during drag over
    },
    onDropRejected: (fileRejections) => {
      // Handle file rejection if necessary
      console.log("File(s) rejected:", fileRejections);
    },
  });


  const clearFile = (fileName: string) => {
    const updatedFiles = files.filter((file) => file.name !== fileName);
    if (onFileDrop) {
      onFileDrop(updatedFiles);
    } else {
      setInternalFiles(updatedFiles);
    }
  };

  const clearAllFiles = () => {
    if (onFileDrop) {
      onFileDrop([]);
    } else {
      setInternalFiles([]);
    }
  };

  return (
    <div className={cn("flex flex-col", className)} style={{ width }}>
      {/* Label */}
      <label className={`text-lg font-bold text-foreground mb-[${description ? '4px' : '12px'}]`}>{label}</label>
      {description &&
        <p className="text-sm text-muted-foreground mb-[12px]">{description}</p>
      }

      <div
        {...getRootProps()}
        className={cn(
          "p-[16px] rounded-lg transition-colors duration-300 flex flex-col items-center justify-center gap-4 relative",
          !disabled && "hover:border-ring hover:bg-muted",
          {
            "border-actionable-secondary-hover": !isDragActive && !error,
            "border-ring border-solid": isDragActive && !disabled,
            "border-foreground-statusErrorSecondary hover:border-foreground-statusErrorSecondary": error,
            "bg-background border-[2px] border-dashed": !disabled,
            "!bg-muted cursor-not-allowed": disabled,
          }
        )}
      >
        <input {...getInputProps()} disabled={disabled} />

        {/* Custom dropzone content or default content */}
        {renderDropzoneContent ? (
          renderDropzoneContent(isDragActive,disabled)
        ) : (<><div className="text-center w-full">
          <div className="flex flex-col items-center mb-[12px]">
            <svg
              width="32"
              height="33"
              viewBox="0 0 32 33"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33313 20.3657C4.34252 19.3536 3.59523 18.1293 3.14785 16.7856C2.70047 15.4419 2.56474 14.014 2.75095 12.6101C2.93715 11.2062 3.44041 9.86302 4.22259 8.6824C5.00478 7.50178 6.04538 6.51464 7.26558 5.79575C8.48578 5.07687 9.85357 4.64509 11.2654 4.53312C12.6771 4.42116 14.0959 4.63194 15.4142 5.1495C16.7324 5.66706 17.9156 6.47783 18.8741 7.5204C19.8326 8.56297 20.5413 9.81 20.9465 11.167H23.3331C24.6205 11.1669 25.8737 11.5808 26.9078 12.3476C27.9418 13.1144 28.7018 14.1935 29.0755 15.4254C29.4492 16.6574 29.4167 17.9768 28.9829 19.1889C28.5491 20.4009 27.737 21.4413 26.6665 22.1564M15.9998 16.5004V28.5004M15.9998 16.5004L21.3331 21.8337M15.9998 16.5004L10.6665 21.8337"
                stroke="#76767F"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <p className={cn("text-lg text-foreground",error && "text-foreground-statusErrorSecondary")}>
            {isDragActive
              ? "Drop the files here..."
              : "Drag and drop image files here"}
          </p>
          <p className="text-xs text-gray-400 mt-1">
            Only {formats.join(", ")} files are supported
          </p>
          <div className="border-[1px] border-actionable-secondary-hover my-[24px] w-full" />
        </div>
          <Button
            variant={'outline'}
            children={'Browse'}
            disabled={disabled}
            className={cn("!bg-transparent text-foreground-accent",{
              "border-foreground-subtle": disabled,
            })}
          />
        </>

        )}
      </div>
      {/* Error message */}
      {error && <p className="text-foreground-statusErrorSecondary text-sm mt-2">{error}</p>}
    </div>
  );
};
