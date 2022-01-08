import * as React from "react";
import {
  faBan,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../../../sass/microtip-fork.scss";
import { InputVariants, TooltipProps } from "../../../helpers/types";

interface IconProps {
  variant: InputVariants;
  tooltip?: TooltipProps;
}

function InputIcon({ variant, tooltip }: IconProps) {
  let icon = {
    default: null,
    focused: null,
    valid: faCheckCircle,
    invalid: faExclamationCircle,
    disabled: faBan,
  }[variant];

  // If icon & tooltip are both required.
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

  // If just the icon is required.
  if (icon) return <FontAwesomeIcon icon={icon} className="icon" />;

  return null;
}

export { InputIcon };
