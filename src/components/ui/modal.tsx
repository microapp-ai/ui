import * as React from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { X } from "lucide-react";
import { cn } from "@/utils";

interface ModalProps {
  opened: boolean;
  onClose: () => void;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  withCloseButton?: boolean;
}

const Modal: React.FC<ModalProps> = ({ opened, onClose, title, children, className, withCloseButton = true }) => {
  return (
    <DialogPrimitive.Root open={opened} onOpenChange={onClose}

    >
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={cn(
            "fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0"
          )}
        />
        <DialogPrimitive.Content
          className={cn(
            "fixed left-1/2 top-1/2 z-50 w-full max-w-lg -translate-x-1/2 -translate-y-1/2 p-6 bg-background rounded-lg shadow-lg",
            "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95",
            className
          )}
        >
          <div className="flex justify-between items-center mb-4">
            <DialogPrimitive.Title className="text-lg font-semibold">
              {title}
            </DialogPrimitive.Title>
            {withCloseButton && (<DialogPrimitive.Close
              className="rounded-full p-1 text-muted-foreground transition-opacity hover:opacity-70 focus:outline-none"
              aria-label="Close"
            >
              <X className="h-5 w-5" />
            </DialogPrimitive.Close>)}
          </div>
          <div>{children}</div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export { Modal };
