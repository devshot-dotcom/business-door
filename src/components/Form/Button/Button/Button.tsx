import * as React from "react";
import "./Button.scss";

interface ButtonProps extends React.ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "secondary" | "tertiary";
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  variant = "primary",
  ...rest
}) => {
  return (
    <button className={`button-${variant} ${className}`} {...rest}>
      <span className="button-text">{children}</span>
    </button>
  );
};

export { Button };
