import React from "react";
import "./Flexbox.scss";

/** Configurable flexbox container.
 * Provide direction [`row`, `column`],
 * JustifyContent,
 * & AlignItems.
 */
function Flexbox({
  children,
  style,
  className,
  direction,
  justify,
  align,
  gap,
}) {
  return (
    <div
      style={style}
      className={`flexbox-${direction || "row"} 
      justify-${justify || "start"} 
      align-${align || "start"}
      gap-${gap || "default"}
      ${className}`}
    >
      {children}
    </div>
  );
}

export { Flexbox };
