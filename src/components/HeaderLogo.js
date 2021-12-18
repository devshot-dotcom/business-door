import React, { useContext } from "react";
import { ThemeContext } from "../config/Context";
const lightLogo = React.lazy(() =>
  import("../assets/brand-plain-lightTheme.svg")
);
const darkLogo = React.lazy(() =>
  import("../assets/brand-plain-darkTheme.svg")
);

function HeaderLogo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="textAlignCenter">
      <img
        src={theme === "light" ? lightLogo : darkLogo}
        alt="Business Door"
        className="brand header"
      />
    </div>
  );
}

export default HeaderLogo;
