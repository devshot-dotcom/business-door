import { FC } from "react";
import { LinkProps } from "./link-types";
import styles from "../button/button-secondary/button-secondary.module.scss";

export const LinkSecondary: FC<LinkProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <a className={`${styles.button} ${className}`} {...rest}>
      {children}
    </a>
  );
};
