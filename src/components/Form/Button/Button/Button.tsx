import { ComponentPropsWithoutRef, FC } from "react";
import "./Button.scss";

interface Props extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: FC<Props> = (props) => {
  const { children, className = "", variant = "primary", ...rest } = props;

  return (
    <button className={`button-${variant} ${className}`} {...rest}>
      <span className="text-button">{children}</span>
    </button>
  );
};

export { Button };
