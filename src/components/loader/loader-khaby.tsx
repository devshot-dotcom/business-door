import React, { ComponentPropsWithoutRef } from "react";
import khaby from "../../assets/gifs/khaby.gif";
import styles from "./loader.module.scss";

type Props = {
  children?: React.ReactNode;
} & ComponentPropsWithoutRef<"div">;

const KhabyLoader = ({ children, className = "", ...rest }: Props) => (
  <div {...rest} className={`${styles.loader} ${className}`}>
    <div className="d-flex flex-column align-items-center">
      <img src={khaby} alt="" className="mb-3" />
      {children || null}
    </div>
  </div>
);

export default KhabyLoader;
