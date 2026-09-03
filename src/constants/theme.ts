export const THEME = {
  colors: {
    primary: "#5B5AF7",
    primaryHover: "#4847E5",
    secondary: "#8B7FFF",
    secondaryHover: "#7769FA",

    textPrimary: "#0F172A",
    textSecondary: "#64748B",

    background: "#FAFBFF",
    sectionBg: "#F5F7FF",
    cardBg: "#FFFFFF",

    success: "#22C55E",
    warning: "#F59E0B",
    error: "#EF4444",

    border: "#E2E8F0",
  },
} as const;

export type ThemeColors = typeof THEME.colors;
