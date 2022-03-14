import { FC } from "react";
import { ButtonProps } from "../button-types";
import styles from "./button-secondary.module.scss";

export const ButtonSecondary: FC<ButtonProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};
