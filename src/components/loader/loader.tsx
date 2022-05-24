import { ComponentPropsWithoutRef } from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./loader.module.scss";

const Loader = (props: ComponentPropsWithoutRef<"div">) => {
  const { className = "", ...rest } = props;

  return (
    <div
      {...rest}
      className={`${styles.loader} ${className}`}
      aria-label="Loading, please wait"
    >
      <FontAwesomeIcon icon={faCircleNotch} aria-hidden size="2x" spin />
    </div>
  );
};

export default Loader;
