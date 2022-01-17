import { ToastOptions } from "../../helpers/types";
import { Toast } from "./Toast";
import "./Toast.scss";

interface SandwichProps {
  toasts: ToastOptions[];
  setToasts: (toasts: ToastOptions[]) => void;
  position?: string;
}

function ToastSandwich({
  toasts,
  setToasts,
  position = "top-right",
}: SandwichProps) {
  function removeToast(i: number) {
    // If the parent has set a method to be called
    // on the removal of this toast, call it.
    // @see https://www.stefanjudis.com/today-i-learned/optional-chaining-helps-to-avoid-undefined-is-not-a-function-exceptions/
    toasts[i].onRemove?.();

    // Immutable filter exchange. Original array is kept immutable while a new array that doesn't contain the `toasts[i]` is introduced.
    setToasts(toasts.filter((toast) => toast !== toasts[i]));
  }

  return (
    <>
      <ul className={`toast-sandwich ${position}`} hidden={toasts.length === 0}>
        {toasts.map((toast, index) => (
          <Toast
            key={index}
            index={index}
            toastOptions={toast}
            removeToast={removeToast}
          />
        ))}
      </ul>
    </>
  );
}

export { ToastSandwich };
