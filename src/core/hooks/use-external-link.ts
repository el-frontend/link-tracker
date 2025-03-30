import { useCallback } from "react";

/**
 * Custom hook for handling external links that open in a new tab by default
 * @returns A function to handle external link clicks
 */
export const useExternalLink = () => {
  /**
   * Opens an external URL in a new tab
   * @param url - The URL to open
   * @param options - Optional settings
   */
  const openExternalLink = useCallback(
    (
      url: string,
      options: {
        newTab?: boolean; // Whether to open in new tab
        noReferrer?: boolean; // Whether to use noreferrer
        trackingId?: string; // Optional tracking ID for analytics
      } = {}
    ) => {
      const { newTab = true, noReferrer = true, trackingId } = options;

      // Optional tracking logic can be added here
      if (trackingId) {
        // Example: log link click to analytics
        console.log(`Link clicked: ${url}, tracking ID: ${trackingId}`);
      }

      // Open the URL in a new tab or the same tab based on options
      if (newTab) {
        window.open(
          url,
          "_blank",
          noReferrer ? "noopener noreferrer" : "noopener"
        );
      } else {
        window.location.href = url;
      }
    },
    []
  );

  return openExternalLink;
};
