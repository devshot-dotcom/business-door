import { FC } from "react";
import { ButtonNaked } from "./button-naked";
import { ButtonPrimary } from "./button-primary";
import { ButtonSecondary } from "./button-secondary";
import { ButtonTertiary } from "./button-tertiary";
import { ButtonProps } from "./button-types";

export const Button: FC<ButtonProps> = (props) => {
  const { variant = "primary", className = "", children, ...rest } = props;

  const Component = {
    primary: ButtonPrimary,
    secondary: ButtonSecondary,
    tertiary: ButtonTertiary,
    naked: ButtonNaked,
  }[variant];

  const classes = variant === "naked" ? className : `text-button ${className}`;

  return (
    <Component {...rest} className={classes}>
      {children}
    </Component>
  );
};
