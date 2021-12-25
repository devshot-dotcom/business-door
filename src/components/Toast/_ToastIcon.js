import React from "react";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Spinner } from "../components";

function ToastIcon({ variant, icon }) {
  /** Return an icon or an emoji based on the variant.*/
  function stateBasedIcon() {
    return (
      {
        default: "🚀",
        valid: <FontAwesomeIcon icon={faCheckCircle} />,
        invalid: <FontAwesomeIcon icon={faExclamationCircle} />,
        loading: <Spinner size="small" speed="slow" />,
      }[variant] || "🚀"
    );
  }

  // If the icon isn't provided.
  if (icon === undefined) return stateBasedIcon();

  // If the provided icon is an element.
  if (typeof icon !== String) return <FontAwesomeIcon icon={icon} />;

  // Otherwise, it must be the source of an image.
  return <img src={icon} alt="🚀" />;
}

export { ToastIcon };
