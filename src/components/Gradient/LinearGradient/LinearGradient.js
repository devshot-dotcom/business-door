import React from "react";
import "./LinearGradient.scss";

/** Customizable background gradient (linear).
 * Provide an orientation and variant [`primary`, `secondary`, `tertiary`].
 */
function LinearGradient({ children, orientation, variant }) {
  return (
    <div className={`gradient-${variant} gradient-${orientation}`}>
      {children}
    </div>
  );
}

export { LinearGradient };
