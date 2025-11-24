export const fonts = {
  /**
   * Default sans-serif stack for body copy.
   */
  sans:
    '"Inter", "SF Pro Text", "Segoe UI", system-ui, -apple-system, sans-serif',
  /**
   * Heading/brand stack to pair with the sans text.
   */
  heading:
    '"Poppins", "Inter", "Segoe UI", system-ui, -apple-system, sans-serif',
  mono: '"Menlo", monospace',
};

export type FontToken = keyof typeof fonts;
