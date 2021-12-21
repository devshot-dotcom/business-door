import React from "react";
import "./Gradient.scss";

/** Customizable background gradient.
 * Provide a type [`linear`, `radial`].
 * Provide an orientation and variant [`primary`, `secondary`, `tertiary`].
 */
function Gradient({ children, type, orientation, variant }) {
  return (
    <div
      className={`gradient-${type || "linear"} gradient-${
        variant || "primary"
      } gradient-${orientation || "vertical"}`}
    >
      {children}
    </div>
  );
}

export { Gradient };
