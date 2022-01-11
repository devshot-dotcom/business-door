import { useContext } from "react";
import { ToastContext } from "../config/context/context";
import { isString } from "../helpers/functions";
import { ToastDataset } from "../helpers/types";

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
  function getToastsFreeOfBurns(toasts: ToastDataset[]): ToastDataset[] {
    // The 2nd last toast.
    const lastToast = toasts[toasts.length - 2];

    // If it has a string upTime.
    if (lastToast && isString(lastToast.upTime)) {
      return toasts.filter((toast) => toast !== lastToast);
    }

    return toasts;
  }

  /** Add a toast to the toasts list. */
  function makeToast({
    variant,
    title,
    subTitle,
    icon,
    upTime,
    onRemove,
  }: ToastDataset) {
    setToasts((toasts: ToastDataset[]) =>
      getToastsFreeOfBurns([
        ...toasts,
        {
          variant: variant,
          title: title,
          subTitle: subTitle,
          icon: icon,
          upTime: upTime,
          onRemove: onRemove,
        },
      ])
    );
  }

  return makeToast;
}

export { useToast };
