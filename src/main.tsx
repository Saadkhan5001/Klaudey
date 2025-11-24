import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { fonts } from "./theme/typography";
import { colors } from "./theme/colors";

const hexToHslString = (hex: string) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h = 0;
  let s = 0;
  const l = (max + min) / 2;

  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      default:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(
    l * 100
  )}%`;
};

const applyThemeColors = () => {
  const root = document.documentElement;
  const set = (name: string, value: string) => {
    root.style.setProperty(name, value);
  };

  set("--background", hexToHslString(colors.background));
  set("--foreground", hexToHslString(colors.textPrimary));
  set("--border", hexToHslString(colors.border));
  set("--card", hexToHslString(colors.surface));
  set("--card-foreground", hexToHslString(colors.textPrimary));
  set("--card-border", hexToHslString(colors.border));
  set("--sidebar", hexToHslString(colors.surface));
  set("--sidebar-foreground", hexToHslString(colors.textPrimary));
  set("--sidebar-border", hexToHslString(colors.border));
  set("--sidebar-primary", hexToHslString(colors.primary));
  set("--sidebar-primary-foreground", "0 0% 100%");
  set("--sidebar-accent", hexToHslString(colors.muted));
  set("--sidebar-accent-foreground", hexToHslString(colors.textSecondary));
  set("--sidebar-ring", hexToHslString(colors.primary));
  set("--popover", hexToHslString(colors.background));
  set("--popover-foreground", hexToHslString(colors.textPrimary));
  set("--popover-border", hexToHslString(colors.border));
  set("--primary", hexToHslString(colors.primary));
  set("--primary-foreground", "0 0% 100%");
  set("--secondary", hexToHslString(colors.muted));
  set("--secondary-foreground", hexToHslString(colors.textSecondary));
  set("--muted", hexToHslString(colors.muted));
  set("--muted-foreground", hexToHslString(colors.textSecondary));
  set("--accent", hexToHslString(colors.accent));
  set("--accent-foreground", "0 0% 100%");
  set("--destructive", "0 84% 48%");
  set("--destructive-foreground", "0 0% 100%");
  set("--input", hexToHslString(colors.border));
  set("--ring", hexToHslString(colors.primary));
  set("--chart-1", hexToHslString(colors.primary));
  set("--chart-2", hexToHslString(colors.accent));
  set("--chart-3", hexToHslString(colors.primaryHover));
  set("--chart-4", hexToHslString(colors.muted));
  set("--chart-5", hexToHslString(colors.textSecondary));
  set("--gradient-primary-start", hexToHslString(colors.primary));
  set("--gradient-primary-end", hexToHslString(colors.accent));
  set("--gradient-accent-start", hexToHslString(colors.primary));
  set("--gradient-accent-end", hexToHslString(colors.accent));
};

const rootElement = document.documentElement;
applyThemeColors();
rootElement.style.setProperty("--font-sans", fonts.sans);
rootElement.style.setProperty("--font-serif", fonts.heading);
rootElement.style.setProperty("--font-mono", fonts.mono);

createRoot(document.getElementById("root")!).render(<App />);
