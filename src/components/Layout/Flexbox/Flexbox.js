import React from "react";
import "./Flexbox.scss";

/** Configurable flexbox container.
 * Provide direction [`row`, `column`],
 * JustifyContent,
 * & AlignItems.
 */
function Flexbox({ children, styles, direction, justify, align }) {
  return (
    <div
      style={styles}
      className={`flexbox-${direction || "row"} 
      justify-${justify || "start"} 
      align-${align || "start"}`}
    >
      {children}
    </div>
  );
}

export { Flexbox };
