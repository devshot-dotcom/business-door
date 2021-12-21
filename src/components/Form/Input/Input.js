import React, { useState } from "react";
import {
  faBan,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TypeController } from "./TypeController";
import "./Input.scss";

function Input({
  style,
  className,
  type,
  value,
  placeholder,
  variant,
  onChange,
  onFocus,
  maxLength,
  disabled,
  controlType,
}) {
  const [inputType, setInputType] = useState(type);

  const classes = [
    "input-container",
    `input-${variant || "default"}`,
    className,
  ];

  const attrs = {
    type: inputType,
    placeholder: placeholder,
    value: value,
    maxLength: maxLength,
    onFocus: onFocus,
    onChange: (e) => onChange(e.target.value),
    disabled: disabled,
  };

  let icon = {
    valid: faCheckCircle,
    invalid: faExclamationCircle,
  }[variant];

  if (disabled) icon = faBan;

  return (
    <div style={style} className={classes.join(" ")} disabled={disabled}>
      <input {...attrs} />
      {icon && <FontAwesomeIcon icon={icon} className="icon" />}
      {controlType && (
        <TypeController
          inputType={inputType}
          onClick={(newType) => setInputType(newType)}
        />
      )}
    </div>
  );
}

export { Input };
