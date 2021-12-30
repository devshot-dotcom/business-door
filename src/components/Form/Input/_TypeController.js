import React from "react";

/**
 * Generate a button that swaps the `type` of an input field between `password` and `text`.
 *
 * Usage: Pass a stateful inputType that contains `password` or `text` and an onClick listener that sets the inputType.
 *
 * @param show `Boolean` Whether to show the TypeSwapper or not.
 * @param inputType `String ("password" OR "text")` The stateful inputType that needs swapping.
 * @param onClick `onClickListener` The listener that sets the inputType.
 */
function TypeController({ variant, show, inputType, onClick }) {
  if (variant === "valid" || variant === "invalid") return null;

  if (!show) return null;

  return (
    <button
      type="button"
      className="link type-controller"
      onClick={() => onClick(inputType === "password" ? "text" : "password")}
    >
      {inputType === "password" ? "show" : "hide"}
    </button>
  );
}

export { TypeController };
