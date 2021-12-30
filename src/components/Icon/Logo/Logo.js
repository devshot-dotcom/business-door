import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../config/context";
import "./Logo.scss";
import lightLogo from "../../../assets/brand-plain-lightTheme.svg";
import darkLogo from "../../../assets/brand-plain-darkTheme.svg";

/* Configurable logo. Provide a size [`small`, `default`, `large`] */
function Logo({ className, style, size }) {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`logo-container ${className}`} style={style}>
      <Link to="/">
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Business Door Logo"
          className={`logo-${size || "default"}`}
        />
      </Link>
    </div>
  );
}

export { Logo };
