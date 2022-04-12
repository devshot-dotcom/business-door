import { FC } from "react";
import styles from "./badge.module.scss";

export const Badge: FC<JSX.IntrinsicElements["span"]> = ({
  className = "",
  children,
  ...rest
}) => {
  const classes = [styles.badge, className];

  return (
    <span {...rest} className={classes.join(" ")}>
      {children}
    </span>
  );
};
