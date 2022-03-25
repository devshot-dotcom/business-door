import { BREAKPOINTS } from "../../../config";
import { RwdImageProps } from "./rwd-image-types";
import styles from "./rwd-image.module.scss";

/**
 * An image that uses CSS filter to color a black SVG
 * as one of the theme colors. Use an appropriate `filter`
 * property and size the component yourself using the
 * embedded coffee-vector class.
 */
export const ResponsiveImage = (props: RwdImageProps) => {
  const {
    src,
    filter,
    alt,
    className = "",
    srcForMobile,
    srcForTablet,
    srcForLaptop,
    srcForDesktop,
    ...rest
  } = props;

  const classes = [className, styles.image, styles[`filter-${filter}`]];

  return (
    <picture {...rest} className={classes.join(" ")}>
      {srcForMobile && (
        <source
          media={`(min-width: ${BREAKPOINTS.MOBILE.px})`}
          srcSet={srcForMobile}
        />
      )}
      {srcForTablet && (
        <source
          media={`(min-width: ${BREAKPOINTS.TABLET.px})`}
          srcSet={srcForTablet}
        />
      )}
      {srcForLaptop && (
        <source
          media={`(min-width: ${BREAKPOINTS.LAPTOP.px})`}
          srcSet={srcForLaptop}
        />
      )}
      {srcForDesktop && (
        <source
          media={`(min-width: ${BREAKPOINTS.DESKTOP.px})`}
          srcSet={srcForDesktop}
        />
      )}
      <img src={src} alt={alt} />
    </picture>
  );
};
