import { useEffect } from "react";
import { ToastIcon } from "./_ToastIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toastUptime } from "../../helpers/integers";
import { isString } from "../../helpers/functions";
import { ToastOptions } from "../../helpers/types";

type Props = {
  index: number;
  toastOptions: ToastOptions;
  removeToast: (index: number) => void;
};

function Toast({ index, toastOptions, removeToast }: Props) {
  const { variant = "default", title, subTitle, icon, upTime } = toastOptions;

  // Remove the toast after set upTime.
  useEffect(() => {
    const getUptime = (): number => {
      if (isString(upTime)) {
        // A string represents some special case,
        // such as a toast that hides only when a
        // new toast is added to the sandwich.
        // Most HTTP requests are cancelled within
        // 30 seconds so, that's the max upTime.
        return 30000;
      }

      // When not a string, provide the upTime if provided
      // and the fallback otherwise.
      return (upTime as number) || toastUptime;
    };

    // Remove toast after the calculated delay.
    const timeout = setTimeout(() => {
      removeToast(index);
    }, getUptime());

    return () => clearTimeout(timeout);
  }, [removeToast, index, upTime]);

  return (
    <li
      onClick={() => removeToast(index)}
      className={`coffee-toast toast-${variant} show`}
    >
      <div className="toast__content">
        <div className="toast__icon">
          <ToastIcon variant={variant} icon={icon} />
        </div>
        <div className="toast__titles">
          <div className="text-paragraph">{title}</div>
          <div className="text-paragraph">{title}</div>
          <div role="alert" className="toast__accessible-title">
            {subTitle}
          </div>
        </div>
      </div>
      <button className="toast__button" onClick={() => removeToast(index)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}

export { Toast };
export { ToastSandwich } from "./ToastSandwich";
