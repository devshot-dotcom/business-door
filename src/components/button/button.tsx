import { ComponentPropsWithoutRef as CP } from "react";
import { Link, LinkProps } from "react-router-dom";
import { ButtonProps } from "./button-types";
import styles from "./button.module.scss";

/**
 * A polymorphic button component that can serve as an anchor, a button, or a navigation link.
 * @returns {JSX.Element} The button component.
 */
function Button({
  as = "button",
  size = "medium",
  variant = "primary",
  className = "",
  children,
  ...rest
}: ButtonProps): JSX.Element {
  const props = {
    className: styles[variant + "-" + size] + " " + className,
  };

  return {
    a: (
      <a {...props} {...(rest as CP<"a">)}>
        {children}
      </a>
    ),
    button: (
      <button {...props} {...(rest as CP<"button">)}>
        {children}
      </button>
    ),
    Link: (
      <Link {...props} {...(rest as LinkProps & CP<"a">)}>
        {children}
      </Link>
    ),
  }[as];
}

export default Button;
