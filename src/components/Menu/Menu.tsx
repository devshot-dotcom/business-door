import { ComponentPropsWithoutRef, FC } from "react";
import styles from "./menu.module.scss";

export const Menu: FC<ComponentPropsWithoutRef<"ul">> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <ul className={`coffee-menu ${className}`} {...rest}>
      {children}
    </ul>
  );
};
