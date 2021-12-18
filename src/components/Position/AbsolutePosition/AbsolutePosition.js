import React from "react";
import "./AbsolutePosition.scss";

/** Absolutely positions anything inside.
 * Configurable, provide a placement:
 * [`top-left`, `top-right`, `bottom-right`, `bottom-left`, `center`, `center-top`, `center-right`, `center-bottom`, `center-left`]
 */
function AbsolutePosition({ children, className, placement }) {
  return (
    <div className={`absolute ${placement} ${className || ""}`}>{children}</div>
  );
}

export { AbsolutePosition };
