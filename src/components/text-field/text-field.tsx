import {
  ComponentPropsWithoutRef,
  createRef,
  useEffect,
  useState,
} from "react";
import { TextFieldProps } from "./text-field-types";
import { TypeSwapper } from "./type-swapper";
import { getIcon } from "./text-field-utils";
import { Icon } from "..";
import { InputProps, TextAreaProps } from ".";
import { Microtip } from "..";
import styles from "./text-field.module.scss";

export const TextArea = (props: ComponentPropsWithoutRef<"textarea">) => {
  return <textarea {...props}>{props.value}</textarea>;
};

export const Input = (props: ComponentPropsWithoutRef<"input">) => {
  // The type to be monitored for change.
  // Based upon the type passed as HTML attribute
  // to make sure that the swapper is shown only
  // when the HTML type is password.
  const [type, setType] = useState(props.type);

  return (
    <>
      <input {...props} type={type} />
      {props.type === "password" && (
        <TypeSwapper
          type={type as string}
          onClick={() => setType(type === "password" ? "text" : "password")}
        />
      )}
    </>
  );
};

export const TextField = (props: TextFieldProps) => {
  const { as = "input", state, className = "", ...rest } = props;
  const { value, variant = "default", tooltip } = state;

  const ref = createRef<HTMLDivElement>();

  const classes = [styles.input, styles[`input-${variant}`], className];

  // Apply tooltip once the component is rendered.
  // useEffect is used cuz we need the ref.
  useEffect(() => {
    if (tooltip) Microtip({ ...tooltip, ref: ref });
  }, [ref, tooltip]);

  return (
    <div className={classes.join(" ")} ref={ref} data-disabled={props.disabled}>
      {as === "input" ? (
        <Input {...(rest as InputProps)} value={value} />
      ) : (
        <TextArea {...(rest as TextAreaProps)} value={value} />
      )}
      {variant !== "default" && (
        <Icon src={getIcon(variant)!} size="small" className={styles.icon} />
      )}
    </div>
  );
};
