import React, { useEffect } from "react";
import { ToastIcon } from "./_ToastIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toastUptime } from "../../helpers/integers";
import "../../sass/Toast.scss";

function Toast({ index, toast, upTime, onRemove }) {
  const { variant, title, subtitle, icon } = toast;

  // Remove the toast after set upTime.
  useEffect(() => {
    const timeout = setTimeout(() => {
      onRemove(index);
    }, upTime || toastUptime);

    return () => clearTimeout(timeout);
  }, [onRemove, index, upTime]);

  return (
    <li
      onClick={() => onRemove(index)}
      className={`toast toast-${variant || "default"} show`}
      role="alertdialog"
    >
      <div className="toast__content">
        <div className="content__icon">
          <ToastIcon variant={variant} icon={icon} />
        </div>
        <div className="content__titles">
          <div className="paragraph">{title}</div>
          <div className="smallText">{subtitle}</div>
        </div>
      </div>
      <button className="toast__button" onClick={() => onRemove(index)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}

export { Toast };
