import { ComponentPropsWithoutRef } from "react";
import { Button } from "..";
import styles from "./close-button.module.scss";

/**
 * A robust close button.
 * @param {ComponentPropsWithoutRef<'button'>} {Object} Properties of an `HTMLButtonElement`
 * @returns {JSX.Element}
 * @version 1.0.0
 */
function CloseButton({
  className = "",
  ...rest
}: ComponentPropsWithoutRef<"button">): JSX.Element {
  return (
    <Button
      {...rest}
      variant="primary"
      className={`${styles.CloseButton} ${className}`}
    >
      X
    </Button>
  );
}

export default CloseButton;
