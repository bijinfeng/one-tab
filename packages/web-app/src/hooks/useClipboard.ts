import { useCallback, useState } from "react";

export const useClipboard = () => {
  const [isCopied, setIsCopied] = useState(false);

  const copyToClipboard = useCallback((text: string) => {
    if (navigator.clipboard) {
      try {
        return navigator.clipboard.writeText(text).then(() => {
          setIsCopied(true);
          setTimeout(() => setIsCopied(false), 2000); // 2秒后重置复制状态
        });
      } catch {
        console.error("Failed to copy text to clipboard");
      }
    } else {
      console.error("Clipboard API is not available");
    }
  }, []);

  return { isCopied, copyToClipboard };
};
