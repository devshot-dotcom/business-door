import React, { useEffect } from "react";
import { ToastIcon } from "./_ToastIcon";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toastUptime } from "../../helpers/integers";
import { isString } from "../../helpers/functions";

// Just in case you get confused, this is a react component
// that is provided with a toast object from the parent
// ToastSandwich. The Toast class you see in useToast is
// the class who's objects are sent to the sandwich,
// which is then used by this component to display a toast.

// Also, the onRemove method of an object of the Toast class
// is completely different from the removeToast used below.
// The former differs with each component and is called when
// a toast component is removed.
// The later is a reference to the sandwich's onRemove that
// updates the list.

function Toast({ index, toast, removeToast }) {
  const { variant, title, subtitle, icon, upTime } = toast;

  // Remove the toast after set upTime.
  useEffect(() => {
    const getUptime = () => {
      if (isString(upTime)) {
        return 30000;
      }

      // When not a string, provide the upTime if provided
      // and the fallback otherwise.
      return upTime || toastUptime;
    };

    const timeout = setTimeout(() => {
      removeToast(index);
    }, getUptime());

    return () => clearTimeout(timeout);
  }, [removeToast, index, upTime]);

  return (
    <li
      onClick={() => removeToast(index)}
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
      <button className="toast__button" onClick={() => removeToast(index)}>
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </li>
  );
}

export { Toast };
