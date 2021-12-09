import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import "../../sass/microtip-fork.scss";

function RightIcon(props) {
  const icon = {
    Valid: faCheck,
    Invalid: faExclamation,
    Disabled: faBan,
  }[props.style];

  if (icon === undefined) return null;

  const tooltip = props.tooltip;

  return (
    <span
      tabIndex={tooltip && "0"}
      aria-label={tooltip?.text}
      className={tooltip?.showAlways && "showAlways"}
      data-microtip-position={tooltip?.position}
      role={tooltip && "tooltip"}
    >
      <FontAwesomeIcon className="icon" icon={icon} />
    </span>
  );
}

export default RightIcon;
