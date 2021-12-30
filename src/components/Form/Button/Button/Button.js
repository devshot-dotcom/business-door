import React from "react";
import "./Button.scss";

/**
 * @param variant The thematic variant of the button. Provide one of [`primary`, `secondary`, `tertiary`]
 */
function Button({ children, style, className, type, variant, disabled }) {
  return (
    <button
      type={type || "button"}
      style={style}
      className={`buttonText button-${variant || "primary"} ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export { Button };
