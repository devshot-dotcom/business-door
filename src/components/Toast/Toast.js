import React, { useEffect } from "react";
import PropTypes from "prop-types";
import ToastWrapper from "./ToastWrapper";
import ToastIcon from "./ToastIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Toast({ index, toast, upTime, onRemove }) {
  const { state, title, subtitle, icon } = toast;

  // Remove the toast after set upTime or default 6 seconds.
  useEffect(() => {
    const timeout = setTimeout(async () => {
      onRemove(index);
    }, upTime || 6000);

    return () => clearTimeout(timeout);
  }, [onRemove, index, upTime]);

  return (
    <li
      onClick={() => {
        onRemove(index);
      }}
      className={`toast toast-${state || "default"} show`}
      role="alertdialog"
    >
      <div className="toast__content">
        <div className="content__icon">
          <ToastIcon state={state} icon={icon} />
        </div>
        <div className="content__titles">
          <div className="paragraph">{title}</div>
          <div className="smallText">{subtitle}</div>
        </div>
      </div>
      <button
        className="toast__button"
        onClick={() => {
          onRemove(index);
        }}
      >
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}

Toast.propTypes = {
  /** @param index The number of the toast in the list of toasts.*/
  index: PropTypes.number.isRequired,

  /** @param toast The actual toast data, based on a skeleton.*/
  toast: PropTypes.instanceOf(ToastWrapper).isRequired,

  /** @param upTime The time for which the toast will be shown in milliseconds.*/
  upTime: PropTypes.number,

  /** @param onRemove The callback that removes the toast from the list of toasts.*/
  onRemove: PropTypes.instanceOf(Function).isRequired,
};

export { Toast };
