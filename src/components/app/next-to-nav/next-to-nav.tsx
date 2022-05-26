import { ComponentPropsWithoutRef } from "react";
import styles from "./next-to-nav.module.scss";

type Props = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

const NextToNav = ({ className = "", children, ...rest }: Props) => (
  <div className={`${styles["next-to-nav"]} ${className}`} {...rest}>
    {children}
  </div>
);

export { NextToNav };
