import {
  faBan,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "../../../sass/microtip-fork.scss";

function InputIcon({ variant, tooltip, disabled }) {
  let icon = {
    valid: faCheckCircle,
    invalid: faExclamationCircle,
  }[variant];

  if (disabled) icon = faBan;

  if (icon && tooltip)
    return (
      <button
        type="button"
        aria-label={tooltip.label}
        role="tooltip"
        data-microtip-position={tooltip.position || "top-left"}
        className={`button-blank ${tooltip.isShownForever && "show"}`}
      >
        <FontAwesomeIcon icon={icon} className="icon" />
      </button>
    );

  if (icon) return <FontAwesomeIcon icon={icon} className="icon" />;

  return null;
}

export { InputIcon };
