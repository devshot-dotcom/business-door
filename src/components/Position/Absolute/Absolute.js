import React from "react";
import "./Absolute.scss";

/** Absolutely positions anything inside.
 * Configurable, provide a placement:
 * [`top-left`, `top-right`, `bottom-right`, `bottom-left`, `center`, `center-top`, `center-right`, `center-bottom`, `center-left`]
 */
function Absolute({ children, className, placement }) {
  return (
    <div className={`absolute ${placement} ${className || ""}`}>{children}</div>
  );
}

export { Absolute };
