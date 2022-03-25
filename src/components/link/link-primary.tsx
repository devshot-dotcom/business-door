import { FC } from "react";
import { LinkProps } from "./link-types";
import styles from "../button/button-primary/button-primary.module.scss";

export const LinkPrimary: FC<LinkProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <a className={`${styles.button} ${className}`} {...rest}>
      {children}
    </a>
  );
};
