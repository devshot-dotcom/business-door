import { FC } from "react";
import { BadgeProps } from "./badge-types";
import styles from "./badge.module.scss";

export const Badge: FC<BadgeProps> = ({
  backgroundColor = "link",
  className = "",
  children,
  ...rest
}) => {
  const classes = [styles.badge, styles[`bg-${backgroundColor}`], className];

  return (
    <span {...rest} className={classes.join(" ")}>
      {children}
    </span>
  );
};
