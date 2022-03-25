import { useContext } from "react";
import { ToastOptions, TOAST_UPTIME } from "../components/toast";
import { ToastContext } from "../config/context";

function useToast() {
  const { setToasts } = useContext(ToastContext);

  /** Remove the toast that has an uptime that says
   * remove me when a new toast is pushed.
   *
   * aka, the burnt toast, one that's heated for so long
   * that it got burnt.
   *
   * In simple words, a toast can have an upTime that
   * makes it stay as long as a new toast is pushed.
   * We're just removing that toast since a newer
   * one is pushed. */
  function getToastsFreeOfBurns(toasts: ToastOptions[]): ToastOptions[] {
    // The 2nd last toast.
    const lastToast = toasts[toasts.length - 2];

    // If it has a string upTime.
    if (lastToast && lastToast.upTime === TOAST_UPTIME.REMOVE_ON_PUSH) {
      return toasts.filter((toast) => toast !== lastToast);
    }

    return toasts;
  }

  /** Add a toast to the toasts list. */
  function makeToast(newToast: ToastOptions) {
    setToasts((toasts: ToastOptions[]) =>
      getToastsFreeOfBurns([
        // All the old toasts,
        ...toasts,

        // Accompanied by a new toast.
        newToast,
      ])
    );
  }

  return makeToast;
}

export { useToast };
