import * as React from "react";
import { InputVariants } from "../../../helpers/types";

interface ControllerProps extends React.ComponentPropsWithoutRef<"input"> {
  variant: InputVariants;
  hasTypeController?: boolean;
  clickHandler: (type: string) => void;
}

/**
 * Generate a button that swaps the `type` of an input field between `password` and `text`.
 *
 * Usage: Pass a stateful type that contains `password` or `text` and an onClick listener that sets the type.
 *
 * @param show `Boolean` Whether to show the TypeSwapper or not.
 * @param type `String ("password" OR "text")` The stateful type that needs swapping.
 * @param onClick `onClickListener` The listener that sets the type.
 */
function TypeController({
  variant,
  hasTypeController,
  type,
  clickHandler,
}: ControllerProps) {
  if (!hasTypeController) return null;

  // Controller won't be displayed while
  // validation states are applied.
  if (variant === "valid" || variant === "invalid") return null;

  return (
    <button
      type="button"
      aria-hidden="true"
      className="link type-controller"
      onClick={() => clickHandler(type === "password" ? "text" : "password")}
    >
      {type === "password" ? "show" : "hide"}
    </button>
  );
}

export { TypeController };
