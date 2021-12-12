import React, { useState } from "react";
import Switch from "./Switch";

function ThemeSwitcher() {
  const [checked, setChecked] = useState(false);

  return (
    <Switch
      label="Dark Mode"
      checked={checked}
      onChange={(checked) => setChecked(checked)}
    />
  );
}

export default ThemeSwitcher;
