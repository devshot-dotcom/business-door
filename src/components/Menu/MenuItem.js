import React from "react";
import iconValid from "../../assets/valid.svg";
import iconInvalid from "../../assets/invalid-lightTheme.svg";

function MenuItem(props) {
  return (
    <li className={`MenuItem ${props.isValid && "isValid"}`} tabIndex="0">
      <img
        src={props.isValid ? iconValid : iconInvalid}
        alt={props.isValid ? "Valid" : "Invalid"}
        className="MenuIcon"
      />
      <p className="MenuLabel">{props.label}</p>
    </li>
  );
}

export default MenuItem;
