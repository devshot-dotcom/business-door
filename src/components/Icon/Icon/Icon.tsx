import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ComponentPropsWithoutRef } from "react";
import { themeColors, themeSizes } from "../../../config/theme";
import { isString } from "../../../helpers/functions";
import "./Icon.scss";

interface Props extends ComponentPropsWithoutRef<"div"> {
  size?: themeSizes;
  color?: themeColors;

  /** Can be an emoji,
   * the source to an image,
   * an SVG, or a fontawesome icon. */
  src: string | IconProp;
  alt?: string;
}

const Icon = (props: Props) => {
  const { size = "medium", color, src, alt = "", ...rest } = props;
  const classes = ["coffee-icon", `icon-${size}`, color ? `icon-${color}` : ""];

  // If the provided icon is an element.
  if (!isString(src))
    return (
      <FontAwesomeIcon icon={src as IconProp} className={classes.join(" ")} />
    );

  // Otherwise, it must be an emoji.
  if ((src as string).length <= 3)
    return (
      <span className={classes.join(" ")} {...rest}>
        {src}
      </span>
    );

  // Otherwise, it must be the source of an image.
  return (
    <img
      src={src as string}
      alt={alt}
      className={classes.join(" ")}
      {...rest}
    />
  );
};

export { Icon };
