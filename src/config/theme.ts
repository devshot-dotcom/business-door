// Types.
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

/** Set a theme based on the device preferences */
function getDefaultTheme(): ThemeNames {
  // If system preference is dark theme.
  if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
    localStorage.setItem("doorTheme", "dark");
    return "dark";
  }

  // Otherwise.
  localStorage.setItem("doorTheme", "light");
  return "light";
}

// Set default theme if not already set.
export const defaultTheme: ThemeNames =
  (localStorage.getItem("doorTheme") as ThemeNames) || getDefaultTheme();
