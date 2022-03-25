import { createRef, useEffect, useState } from "react";
import { InputProps } from "./input-types";
import { TypeSwapper } from "./type-swapper";
import { getIcon } from "./input-helper";
import { Icon } from "..";
import { Microtip } from "..";
import styles from "./input.module.scss";

/**
 * Highly configurable Input component.
 * Displays an input field, validation messages, distinctive outlines for `focused`, `valid`, `invalid`, and `disabled` states.
 *
 * Some attributes are required while others are optional, please refer to the docs below.
 * @param onChange `onChangeListener (required)` A listener that sets the value for the field.
 * @param onFocus `onFocusListener` A listener that nullifies or alters the `variant` to "default" when the field is focused.
 * @param controlType `Boolean` Whether the type HTML attribute of the input should be controlled by providing a `show/hide` button that swaps the subject between `password` and `text`.
 */
export const Input = (props: InputProps) => {
  const { state, className = "", disabled, ...rest } = props;
  const { value, variant = "default", tooltip } = state;

  // The type to be monitored for change.
  // Based upon the type passed as HTML attribute
  // to make sure that the swapper is shown only
  // when the HTML type is password.
  const [type, setType] = useState(props.type);

  const ref = createRef<HTMLDivElement>();

  const classes = [styles.input, styles[`input-${variant}`], className];

  // Apply tooltip once the component is rendered.
  // useEffect is used cuz we need the ref.
  useEffect(() => {
    if (tooltip) Microtip({ ...tooltip, ref: ref });
  }, [ref, tooltip]);

  return (
    <div className={classes.join(" ")} ref={ref} data-disabled={disabled}>
      <input {...rest} value={value} type={type} disabled={disabled} />
      {variant !== "default" && (
        <Icon src={getIcon(variant)!} size="small" className={styles.icon} />
      )}
      {props.type === "password" && (
        <TypeSwapper
          type={type as string}
          onClick={() => setType(type === "password" ? "text" : "password")}
        />
      )}
    </div>
  );
};
