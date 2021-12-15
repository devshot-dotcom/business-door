function setDefaultTheme() {
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
const defaultTheme = localStorage.getItem("doorTheme") || setDefaultTheme();

// Apply the set theme.
defaultTheme === "dark" && document.body.setAttribute("data-theme", "dark");

export { defaultTheme };
