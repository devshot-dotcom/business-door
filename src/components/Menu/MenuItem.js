import React from "react";
import iconValid from "../../assets/valid.svg";
import iconInvalid from "../../assets/invalid-lightTheme.svg";

function MenuItem({ style, className, focusable, isValid, label }) {
  const classes = ["menu-item", isValid && "valid", className ?? ""];

  return (
    <li className={classes.join(" ")} tabIndex={focusable && "0"} style={style}>
      <img
        src={isValid ? iconValid : iconInvalid}
        alt={isValid ? "Valid" : "Invalid"}
        className="menu-icon"
      />
      <p className="menu-label paragraph">{label}</p>
    </li>
  );
}

export { MenuItem };
