export type ThemeNames = "light" | "dark";

export type ThemeColors =
  | "brand"
  | "secondary"
  | "tertiary"
  | "link"
  | "valid"
  | "invalid";

export type ThemeSizes =
  | "smallest"
  | "smaller"
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "largest";

export type ThemeSizesCompact = "small" | "medium";

export type ThemeSpeeds =
  | "slowest"
  | "slower"
  | "slow"
  | "medium"
  | "fast"
  | "faster"
  | "fastest";

export type ThemeBackground = `bg-${ThemeColors}`;
