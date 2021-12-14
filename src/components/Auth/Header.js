import React from "react";
import HeaderLogo from "../HeaderLogo";

function Header(props) {
  return (
    <header
      className={`flex column gapMedium ${props.className}`}
      styles={props.styles}
    >
      <HeaderLogo />
      <div aria-label="Title">
        <h3>{props.title}</h3>
        <div className="smallTextSubtle marginTopSmaller ">
          {props.subtitle}
        </div>
      </div>
    </header>
  );
}

export default Header;
