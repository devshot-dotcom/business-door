import { useState, useContext } from "react";
import { ThemeContext } from "../config/context/context";
import { Switch } from "../components/components";

function ThemeSwitcher() {
  // import the Theme Context.
  const { theme, setTheme } = useContext(ThemeContext);

  // State for the Switch.
  const [isDarkMode, setIsDarkMode] = useState(theme === "dark");

  /** Handle the change in switch state. */
  const handleChange = (isDarkMode: boolean) => {
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
      checkHandler={(isDarkMode) => handleChange(isDarkMode)}
      className="paddingMedium"
    />
  );
}

export { ThemeSwitcher };