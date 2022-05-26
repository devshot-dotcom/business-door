import { useState, useContext, ComponentPropsWithoutRef } from "react";
import { ThemeContext } from "../config/context";
import { Switch } from "../components";

function ThemeSwitcher({ ...attrs }: ComponentPropsWithoutRef<"span">) {
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
      {...attrs}
      checked={isDarkMode}
      onChange={(isDarkMode) => handleChange(isDarkMode)}
    />
  );
}

export default ThemeSwitcher;
