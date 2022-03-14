import { FC } from "react";
import { ButtonProps } from "../button-types";
import styles from "./button-naked.module.scss";

export const ButtonNaked: FC<ButtonProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <button className={`${styles.button} ${className}`} {...rest}>
      {children}
    </button>
  );
};
