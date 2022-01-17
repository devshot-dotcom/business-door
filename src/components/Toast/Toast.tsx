import { useEffect } from "react";
import { ToastIcon } from "./_ToastIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toastUptime } from "../../helpers/integers";
import { isString } from "../../helpers/functions";
import { ToastOptions } from "../../helpers/types";

interface ToastProps {
  index: number;
  toastOptions: ToastOptions;
  removeToast: (index: number) => void;
}

function Toast({ index, toastOptions, removeToast }: ToastProps) {
  const { variant = "default", title, subTitle, icon, upTime } = toastOptions;

  // Remove the toast after set upTime.
  useEffect(() => {
    const getUptime = (): number => {
      if (isString(upTime)) {
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
      className={`toast toast-${variant} show`}
      role="alertdialog"
    >
      <div className="toast__content">
        <div className="toast__icon">
          <ToastIcon variant={variant} icon={icon} />
        </div>
        <div className="toast__titles">
          <div className="paragraph">{title}</div>
          <div className="small-text">{subTitle}</div>
        </div>
      </div>
      <button className="toast__button" onClick={() => removeToast(index)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}

export { Toast };
