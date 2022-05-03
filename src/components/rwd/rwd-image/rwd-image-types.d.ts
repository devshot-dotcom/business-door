import { ComponentPropsWithoutRef } from "react";
import { ThemeColors } from "../../../config";

export interface RwdImageProps extends ComponentPropsWithoutRef<"picture"> {
  /** The source of the image file. */
  src: string;

  /** The filter to be applied on the vector, see `vars.scss` for color-filter names. Provide nothing to bypass filter */
  filter?: ThemeColors;

  /** The alt attribute of the image. */
  alt?: string;

  /** Responsive image source. Will be shown on
   * the written screen size and greater. */
  srcForMobile?: string;

  /** Responsive image source. Will be shown on
   * the written screen size and greater. */
  srcForTablet?: string;

  /** Responsive image source. Will be shown on
   * the written screen size and greater. */
  srcForLaptop?: string;

  /** Responsive image source. Will be shown on
   * the written screen size and greater. */
  srcForDesktop?: string;
}
