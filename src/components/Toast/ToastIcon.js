import React from "react";
import {
  faCircleNotch,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";

function ToastIcon({ state, icon }) {
  /** Return an icon or an emoji based on the state.*/
  function stateBasedIcon() {
    return (
      {
        default: "🚀",
        valid: <FontAwesomeIcon icon={faCheckCircle} />,
        invalid: <FontAwesomeIcon icon={faExclamationCircle} />,
        loading: <FontAwesomeIcon icon={faCircleNotch} className="spinner" />,
      }[state] || "🚀"
    );
  }

  // If the icon isn't provided.
  if (icon === undefined) return stateBasedIcon();

  // If the provided icon is an element.
  if (typeof icon !== String) return <FontAwesomeIcon icon={icon} />;

  // Otherwise, it must be the source of an image.
  return <img src={icon} alt="🚀" />;
}

ToastIcon.propTypes = {
  /** @param state The state of toast. */
  state: PropTypes.oneOf(["default", "valid", "invalid", "loading"]),

  /** @param icon The icon for the toast, can be an emoji, a url, or an element. */
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Element)]),
};

export default ToastIcon;
