import { FC } from "react";
import { LinkProps } from "./link-types";
import styles from "../button/button-tertiary/button-tertiary.module.scss";

export const LinkTertiary: FC<LinkProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <a className={`${styles.button} ${className}`} {...rest}>
      {children}
    </a>
  );
};
