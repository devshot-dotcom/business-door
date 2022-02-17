import { ComponentPropsWithoutRef } from "react";
import { breakpoints } from "../../config/breakpoints";
import { themeColors } from "../../config/theme";
import "./Vector.scss";

interface Props extends ComponentPropsWithoutRef<"div"> {
  /** The source of the vector's SVG file. */
  src: string;

  /** The color of the vector, see `vars.scss` for color names. */
  color?: themeColors;

  /** The alt attribute of the image containing the vector. */
  alt?: string;

  /** Responsive vector source. Will be shown on
   * the written screen size and greater. */
  srcForMobile?: string;

  /** Responsive vector source. Will be shown on
   * the written screen size and greater. */
  srcForTablet?: string;

  /** Responsive vector source. Will be shown on
   * the written screen size and greater. */
  srcForLaptop?: string;

  /** Responsive vector source. Will be shown on
   * the written screen size and greater. */
  srcForDesktop?: string;
}

/**
 * A vector image that uses CSS filter to color a black SVG
 * as one of the theme colors. Use an appropriate `color`
 * property and size the component yourself using the
 * embedded coffee-vector class.
 */
const Vector = (props: Props) => {
  const {
    src,
    color = "brand",
    alt = "A Vector.",
    className = "",
    srcForMobile,
    srcForTablet,
    srcForLaptop,
    srcForDesktop,
    ...rest
  } = props;

  const classNames = `${className} coffee-vector color-${color}`;

  return (
    <picture className={classNames} {...rest}>
      {srcForMobile && (
        <source
          media={`(min-width: ${breakpoints.mobile.px})`}
          srcSet={srcForMobile}
        />
      )}
      {srcForTablet && (
        <source
          media={`(min-width: ${breakpoints.tablet.px})`}
          srcSet={srcForTablet}
        />
      )}
      {srcForLaptop && (
        <source
          media={`(min-width: ${breakpoints.laptop.px})`}
          srcSet={srcForLaptop}
        />
      )}
      {srcForDesktop && (
        <source
          media={`(min-width: ${breakpoints.desktop.px})`}
          srcSet={srcForDesktop}
        />
      )}
      <img src={src} alt={alt} />
    </picture>
  );
};

export { Vector };
