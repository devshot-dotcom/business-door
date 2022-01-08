import { ComponentPropsWithoutRef } from "react";
import "./Absolute.scss";

interface AbsoluteProps extends ComponentPropsWithoutRef<"div"> {
  placement?:
    | "top-left"
    | "top-right"
    | "bottom-right"
    | "bottom-left"
    | "center"
    | "center-top"
    | "center-right"
    | "center-bottom"
    | "center-left";
}

/** Absolutely positions anything inside.
 * Configurable, provide a placement:
 * [`top-left`, `top-right`, `bottom-right`, `bottom-left`, `center`, `center-top`, `center-right`, `center-bottom`, `center-left`]
 * Using React.FC to as it comes bundled with the `children` prop.
 */
const Absolute: React.FC<AbsoluteProps> = ({
  children,
  className,
  placement = "top-left",
}) => {
  return <div className={`absolute ${placement} ${className}`}>{children}</div>;
};

export { Absolute };
