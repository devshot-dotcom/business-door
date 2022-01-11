import * as React from "react";
import { Flexbox } from "../../components";
import { TypeController } from "./_TypeController";
import { InputIcon } from "./_InputIcon";
import { InputState } from "../../../helpers/types";
import "./Input.scss";

interface InputProps extends React.ComponentPropsWithoutRef<"input"> {
  state: InputState;
  changeHandler: (value: string) => void;
  focusHandler: () => void;
  hasTypeController?: boolean;
}

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
  state,
  changeHandler,
  focusHandler,
  hasTypeController,
  style,
  className,
  disabled,
  type,
  ...rest
}: InputProps) {
  const { value, variant = "default", tooltip } = state;
  const [inputType, setInputType] = React.useState(type);

  const classes = [
    "width-100",
    "input-container",
    `input-${variant}`,
    className,
  ];

  return (
    <Flexbox direction="column" align="stretch" gap="none">
      <div className={classes.join(" ")} style={style}>
        <input
          type={inputType}
          value={value}
          onFocus={focusHandler}
          onChange={(e) => changeHandler(e.target.value)}
          {...rest}
        />
        <InputIcon variant={variant} tooltip={tooltip} />
        <TypeController
          variant={variant}
          hasTypeController={hasTypeController}
          type={inputType}
          clickHandler={(newType: string) => setInputType(newType)}
        />
      </div>
    </Flexbox>
  );
}

export { Input };
