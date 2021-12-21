import React, { useState, useContext } from "react";
import { ThemeContext } from "../config/context";
import { Switch } from "../components/components";

function ThemeSwitcher() {
  // import the Theme Context.
  const { theme, setTheme } = useContext(ThemeContext);

  // State for the Switch.
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  /** Handle the change in switch state. */
  const handleChange = (isDarkMode) => {
    setIsDarkMode(isDarkMode);

    // In case of dark theme.
    if (isDarkMode) {
      setTheme("dark");
      localStorage.setItem("doorTheme", "dark");
      document.body.setAttribute("data-theme", "dark");
      return;
    }

    // Otherwise.
    setTheme("light");
    localStorage.setItem("doorTheme", "light");
    document.body.removeAttribute("data-theme");
  };

  return (
    <Switch
      label="Dark Mode"
      checked={isDarkMode}
      onChange={(isDarkMode) => handleChange(isDarkMode)}
      className="paddingMedium"
    />
  );
}

export { ThemeSwitcher };