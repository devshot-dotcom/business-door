import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { ComponentPropsWithoutRef } from "react";
import { ThemeColors, ThemeSizes } from "../../config/theme";

export type IconSource = string | IconProp;

export interface IconProps extends ComponentPropsWithoutRef<"div"> {
  size?: ThemeSizes;
  color?: ThemeColors;

  /** Can be an emoji,
   * the source to an image,
   * an SVG, or a fontawesome icon. */
  src: IconSource;
  alt?: string;
}
