import { ComponentPropsWithoutRef, FC } from "react";
import styles from "./next-to-nav.module.scss";

const NextToNav: FC<ComponentPropsWithoutRef<"div">> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <div className={`${styles["next-to-nav"]} ${className}`} {...rest}>
      {children}
    </div>
  );
};

export { NextToNav };
