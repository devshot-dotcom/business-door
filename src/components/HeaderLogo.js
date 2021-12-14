import React, { useContext } from "react";
import { ThemeContext } from "../index";
import lightLogo from "../assets/brand-plain-lightTheme.svg";
import darkLogo from "../assets/brand-plain-darkTheme.svg";

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
