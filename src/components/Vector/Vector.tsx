import { ComponentPropsWithoutRef } from "react";
import { colorName } from "../../helpers/types";
import "./Vector.scss";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /** The source of the vector's SVG file. */
  src: string;

  /** The color of the vector, see `vars.scss` for color names. */
  color?: colorName;

  /** The alt attribute of the image containing the vector. */
  alt?: string;
}

/**
 * A vector image that uses CSS filter to color a black SVG
 * as one of the theme colors. Use an appropriate `color`
 * property and size the component yourself using the
 * embedded coffee-vector class.
 */
const Vector = ({
  src,
  color = "brand",
  alt = "A Vector.",
  className = "",
  ...rest
}: Props) => {
  return (
    <div className={`coffee-vector color-${color} ${className}`} {...rest}>
      <img src={src} alt={alt} />
    </div>
  );
};

export { Vector };
