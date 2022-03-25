import { useEffect } from "react";
import { ToastIcon } from "./toast-icon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ToastProps, TOAST_UPTIME } from ".";

export const Toast = ({ index, toastOptions, removeToast }: ToastProps) => {
  const {
    variant = "default",
    title,
    subTitle,
    icon,
    upTime = TOAST_UPTIME.DEFAULT,
  } = toastOptions;

  // Remove the toast after set upTime.
  useEffect(() => {
    // Remove toast after the calculated delay.
    const timeout = setTimeout(() => {
      removeToast(index);
    }, upTime);

    return () => clearTimeout(timeout);
  }, [removeToast, index, upTime]);

  return (
    <li onClick={() => removeToast(index)} className={`toast toast-${variant}`}>
      <div className="toast__content">
        <div className="toast__icon">
          <ToastIcon variant={variant} icon={icon} />
        </div>
        <div className="toast__titles">
          <div className="text-paragraph">{title}</div>
          <div className="text-small text-subtle">{subTitle}</div>
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
};
