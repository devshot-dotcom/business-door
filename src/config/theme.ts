// Types.
export type themeNames = "light" | "dark";

export type themeColors =
  | "brand"
  | "secondary"
  | "tertiary"
  | "link"
  | "valid"
  | "invalid";

export type themeSizes =
  | "smallest"
  | "smaller"
  | "small"
  | "medium"
  | "large"
  | "larger"
  | "largest";

export type themeSpeeds =
  | "slowest"
  | "slower"
  | "slow"
  | "medium"
  | "fast"
  | "faster"
  | "fastest";

/** Set a theme based on the device preferences */
function getDefaultTheme(): themeNames {
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
export const defaultTheme: themeNames =
  (localStorage.getItem("doorTheme") as themeNames) || getDefaultTheme();
