import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isString } from "../../helpers/functions";
import { IconProps } from "./icon-types";
import styles from "./icon.module.scss";

const Icon = (props: IconProps) => {
  const { size = "medium", color, src, alt, className, title, ...rest } = props;
  const classes = [
    styles.icon,
    styles[`icon-${size}`],
    styles[`icon-${color}`],
    className,
  ];

  // If the provided icon is an element.
  if (!isString(src))
    return (
      <FontAwesomeIcon
        icon={src as IconProp}
        className={classes.join(" ")}
        title={title}
      />
    );

  // In case of an emoji, ofc anything else
  // would be greater than 3 characters.
  if ((src as string).length <= 3)
    return (
      <span className={classes.join(" ")} title={title} {...rest}>
        {src}
      </span>
    );

  // Is a string that's greater than
  // 3 characters, can be anything,
  // but let's think of it as an image source.
  return (
    <img
      src={src as string}
      alt={alt}
      className={classes.join(" ")}
      title={title}
      {...rest}
    />
  );
};

export { Icon };
