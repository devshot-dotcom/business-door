import React, { useState } from "react";
import { Flexbox } from "../../components";
import { TypeController } from "./_TypeController";
import { InputIcon } from "./_InputIcon";
import "./Input.scss";

/**
 * Highly configurable Input component.
 * Displays an input field, validation messages, distinctive outlines for `focused`, `valid`, `invalid`, and `disabled` states.
 *
 * Some attributes are required while others are optional, please refer to the docs below.
 * @param onChange `onChangeListener (required)` A listener that sets the value for the field.
 * @param onFocus `onFocusListener` A listener that nullifies or alters the `variant` to "default" when the field is focused.
 * @param controlType `Boolean` Whether the type HTML attribute of the input should be controlled by providing a `show/hide` button that swaps the subject between `password` and `text`.
 */
function Input({
  style,
  className,
  type,
  placeholder,
  state,
  onChange,
  onFocus,
  maxLength,
  disabled,
  controlType,
}) {
  const { value, variant, tooltip } = state;
  const [inputType, setInputType] = useState(type);

  const classes = [
    "width-100",
    "input-container",
    `input-${variant || "default"}`,
    className,
  ];

  return (
    <Flexbox direction="column" align="stretch" gap="0">
      <div style={style} className={classes.join(" ")} disabled={disabled}>
        <input
          type={inputType}
          placeholder={placeholder}
          value={value}
          maxLength={maxLength}
          onFocus={onFocus}
          onChange={(e) => onChange(e.target.value)}
          disabled={disabled}
        />
        <InputIcon variant={variant} tooltip={tooltip} disabled={disabled} />
        <TypeController
          variant={variant}
          show={controlType}
          inputType={inputType}
          onClick={(newType) => setInputType(newType)}
        />
      </div>
    </Flexbox>
  );
}

export { Input };
