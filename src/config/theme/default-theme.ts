import { ThemeNames } from "./theme-types";

/** Set a theme based on the device preferences */
function getDEFAULT_THEME(): ThemeNames {
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
export const DEFAULT_THEME: ThemeNames =
  (localStorage.getItem("doorTheme") as ThemeNames) || getDEFAULT_THEME();
