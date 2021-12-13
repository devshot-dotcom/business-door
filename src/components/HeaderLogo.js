import React from "react";
import lightLogo from "../assets/brand-plain-lightTheme.svg";
import darkLogo from "../assets/brand-plain-darkTheme.svg";

function HeaderLogo() {
  return (
    <img
      src={localStorage.getItem("doorTheme") === "light" ? lightLogo : darkLogo}
      alt="Business Door"
      className="brand header"
    />
  );
}

export default HeaderLogo;
