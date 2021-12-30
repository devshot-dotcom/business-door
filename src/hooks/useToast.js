import { useContext } from "react";
import { ToastContext } from "../config/Context";
import { isString } from "../helpers/functions";

/** The toast data class. */
class Toast {
  /**
   * All these parameters are omittable and the toast will work as expected.
   *
   * @param {string} variant The variant of the toast, defines the look and feel of it. Can be one of [`default`, 'valid', 'invalid', 'loading']
   * @param {string} title The title of the toast, appears at the very top.
   * @param {string} subtitle The tagline of the toast, appears as a description beneath the title.
   * @param {string | JSX.Element} icon The icon of the toast, appears before the title.
   * @param {string | number} upTime The time for which the toast is shown.
   * - Provide nothing and a default value will be used.
   * - Provide a number and the toast will stay for that time (milliseconds).
   * - Provide `show-till-push` and it'll be shown until another toast is pushed.
   * @param {Function} onRemove The function that's called when the toast is removed by the system or the user.
   */
  constructor({ variant, title, subtitle, icon, upTime, onRemove }) {
    this.variant = variant;
    this.title = title;
    this.subtitle = subtitle;
    this.icon = icon;
    this.upTime = upTime;
    this.onRemove = onRemove;
  }
}

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
  function getToastsFreeOfBurns(toasts) {
    // The 2nd last toast.
    const lastToast = toasts[toasts.length - 2];

    // If it has a string upTime.
    if (lastToast && isString(lastToast.upTime)) {
      return toasts.filter((toast) => toast !== lastToast);
    }

    return toasts;
  }

  /** Add a toast to the toasts list. */
  function makeToast({ variant, title, subtitle, icon, upTime, onRemove }) {
    setToasts((prevToasts) => {
      let toasts = getToastsFreeOfBurns([
        ...prevToasts,
        new Toast({
          variant: variant,
          title: title,
          subtitle: subtitle,
          icon: icon,
          upTime: upTime,
          onRemove: onRemove,
        }),
      ]);

      return toasts;
    });
  }

  return makeToast;
}

export { useToast };
