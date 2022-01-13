import * as React from "react";
import "./Flexbox.scss";

interface FlexboxProps extends React.ComponentPropsWithoutRef<"div"> {
  inline?: boolean;
  direction?: "row" | "column";
  justify?: "center" | "space-between" | "start" | "end";
  align?: "center" | "space-between" | "start" | "end" | "stretch";
  gap?:
    | "none"
    | "smallest"
    | "smaller"
    | "default"
    | "medium"
    | "larger"
    | "largest";
}

/** Configurable flexbox container.
 * Provide direction [`row`, `column`],
 * JustifyContent,
 * & AlignItems.
 */
const Flexbox: React.FC<FlexboxProps> = ({
  inline = false,
  direction = "row",
  justify = "center",
  align = "center",
  gap = "default",
  children,
  className = "",
  ...rest
}) => {
  return (
    <div
      className={`flexbox-${direction} 
      flexbox-${inline ? "inline" : "block"}
      justify-${justify} 
      align-${align}
      gap-${gap}
      ${className}`}
      {...rest}
    >
      {children}
    </div>
  );
};

export { Flexbox };
