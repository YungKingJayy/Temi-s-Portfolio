// components/ui/Modal.tsx
import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <Dialog.Root open={isOpen} onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[999] data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut" />
        <Dialog.Content className="fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] max-w-3xl translate-x-[-50%] translate-y-[-50%] rounded-xl bg-[#171717] border border-[var(--primary)]/10 p-6 shadow-xl focus:outline-none data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut">
          <Dialog.Close asChild>
            <button
              className="absolute top-4 right-4 inline-flex h-8 w-8 items-center justify-center rounded-full text-white hover:text-[var(--secondary)] hover:bg-white/80 focus:outline-none transition-colors cursor-pointer bg-[#171717]/10"
              aria-label="Close"
            >
              <svg
                width="15"
                height="15"
                viewBox="0 0 15 15"
                fill="white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                  fillRule="evenodd"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </Dialog.Close>
          <div className="text-[var(--foreground)]">{children}</div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
