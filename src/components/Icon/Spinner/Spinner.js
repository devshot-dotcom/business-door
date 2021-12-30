import React from "react";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Spinner.scss";

/** Configurable spinner.
 * Provide a size [`small`, `default`, `large`]
 * Provide rotation speed [`slow`, `default`, `fast`]
 */
function Spinner({ size, speed }) {
  return (
    <FontAwesomeIcon
      icon={faCircleNotch}
      className={`spinner size-${size || "default"} 
      speed-${speed || "default"}`}
    />
  );
}

export { Spinner };
