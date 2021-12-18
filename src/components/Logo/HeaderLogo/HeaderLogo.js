import React, { useContext } from "react";
import { ThemeContext } from "../../../config/config";
import "./HeaderLogo.scss";
import lightLogo from "../../../assets/brand-plain-lightTheme.svg";
import darkLogo from "../../../assets/brand-plain-darkTheme.svg";

function HeaderLogo() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="container">
      <img
        src={theme === "light" ? lightLogo : darkLogo}
        alt="Business Door Logo"
        className="logo"
      />
    </div>
  );
}

export { HeaderLogo };
