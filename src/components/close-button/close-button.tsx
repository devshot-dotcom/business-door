import { ComponentPropsWithoutRef } from "react";
import styles from "./close-button.module.scss";

/**
 * A robust close button.
 * @param {ComponentPropsWithoutRef<'button'>} {Object} Properties of an `HTMLButtonElement`
 * @returns {JSX.Element}
 * @version 1.0.1
 */
function CloseButton({
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"button">): JSX.Element {
  return (
    <button {...rest} className={`${styles.CloseButton} ${className}`}>
      X
    </button>
  );
}

export default CloseButton;
