import { useCallback, useEffect, useState } from "react";

interface UseClipboardOptions {
  timeout?: number;
}

/**
 * Custom hook for copying text to clipboard
 * @param options - Configuration options
 * @returns Object with value, onCopy function, hasCopied state, and reset function
 */
export function useClipboard(options: UseClipboardOptions = {}) {
  const [hasCopied, setHasCopied] = useState(false);
  const [value, setValue] = useState<string>("");
  const { timeout = 2000 } = options;

  const onCopy = useCallback((text: string): Promise<string> => {
    return navigator.clipboard
      .writeText(text)
      .then(() => {
        setValue(text);
        setHasCopied(true);
        return Promise.resolve(text);
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
        return Promise.reject("");
      });
  }, []);

  const reset = useCallback(() => {
    setHasCopied(false);
    setValue("");
  }, []);

  useEffect(() => {
    if (hasCopied) {
      const timeoutId = setTimeout(() => {
        setHasCopied(false);
      }, timeout);

      return () => clearTimeout(timeoutId);
    }
  }, [hasCopied, timeout]);

  return { value, onCopy, hasCopied, reset };
}
