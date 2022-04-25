import { createRef } from "react";
import { TextFieldProps } from "./text-field-types";
import { getIcon } from "./text-field-utils";
import { Icon } from "..";
import { InputProps, TextAreaProps } from ".";
import { useMicrotip } from "../../hooks";
import { Input, TextArea } from "./children";
import "./text-field.scss";

/**
 * A component that takes in a props object and returns a
 * div with an input or a textarea element inside of it.
 * @param {TextFieldProps} props - TextFieldProps
 * @returns A function that returns a div element.
 */
export const TextField = (props: TextFieldProps) => {
  const { as, state, className = "", ...rest } = props;
  const { value, tooltip, variant = "default" } = state;

  // Create a ref to the input element.
  const ref = createRef<HTMLDivElement>();
  useMicrotip(ref, tooltip);

  const classes = [
    "text-field",
    `text-field-${variant}`,
    props.disabled ? "text-field-disabled" : "",
    className,
  ];

  // Return the corresponding element.
  let Component =
    as === "input" ? (
      <Input {...(rest as InputProps)} value={value} />
    ) : (
      <TextArea {...(rest as TextAreaProps)} value={value} />
    );

  return (
    <div className={classes.join(" ")} ref={ref}>
      {Component}
      {variant !== "default" && (
        <Icon
          src={getIcon(variant)!}
          size="small"
          className="text-field__icon"
        />
      )}
    </div>
  );
};
