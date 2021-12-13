import React, { useState } from "react";
import Switch from "./Switch";

function ThemeSwitcher() {
  const [checked, setChecked] = useState(
    localStorage.getItem("doorTheme") === "dark"
  );

  const handleChange = (checked) => {
    setChecked(checked);

    // In case of dark theme.
    if (checked) {
      localStorage.setItem("doorTheme", "dark");
      document.body.setAttribute("data-theme", "dark");
      return;
    }

    // Otherwise.
    localStorage.setItem("doorTheme", "light");
    document.body.removeAttribute("data-theme");
  };

  return (
    <Switch
      label="Dark Mode"
      checked={checked}
      onChange={(checked) => handleChange(checked)}
    />
  );
}

export default ThemeSwitcher;
