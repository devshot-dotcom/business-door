import { ComponentPropsWithoutRef, FC } from "react";
import "./Button.scss";

interface Props extends ComponentPropsWithoutRef<"a"> {
  variant?: "primary" | "secondary" | "tertiary" | "blank";
}

const Link: FC<Props> = (props) => {
  const { variant = "blank", className = "", children, ...rest } = props;
  const classes =
    variant === "blank" ? `text-link` : `button-${variant} text-button`;

  return (
    <a className={`${classes} ${className}`} {...rest}>
      {children}
    </a>
  );
};

export { Link };
