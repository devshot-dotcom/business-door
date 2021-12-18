import React from "react";
import PropTypes from "prop-types";
import ToastWrapper from "./ToastWrapper";
import { Toast } from "./Toast";

function ToastSandwich({ toasts, setToasts, position }) {
  function removeToast(i) {
    // If the parent has set a method to be called on the removal of this toast, call it.
    toasts[i].onRemove && toasts[i].onRemove();

    // Immutable filter exchange. Original array is kept immutable while a new array that doesn't contain the `toasts[i]` is introduced.
    setToasts(toasts.filter((toast) => toast !== toasts[i]));
  }

  return (
    <>
      <ul
        className={`ToastSandwich ${position || "top-right"}`}
        hidden={toasts.length === 0}
      >
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            index={index}
            toast={toast}
            onRemove={removeToast}
          />
        ))}
      </ul>
    </>
  );
}

ToastSandwich.propTypes = {
  /** @param toasts The array of toasts to be displayed in the sandwich stack. */
  toasts: PropTypes.arrayOf(PropTypes.instanceOf(ToastWrapper)).isRequired,

  /** @param setToasts The method that sets the toasts array, more likely a stateful setter. */
  setToasts: PropTypes.instanceOf(Function).isRequired,

  /** @param position The position where the sandwich appears on the screen. */
  position: PropTypes.oneOf([
    "top-left",
    "top-right",
    "bottom-right",
    "bottom-left",
  ]),
};

export { ToastSandwich };
