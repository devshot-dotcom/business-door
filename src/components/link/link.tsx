import { FC } from "react";
import { LinkNaked } from "./link-naked";
import { LinkPrimary } from "./link-primary";
import { LinkSecondary } from "./link-secondary";
import { LinkTertiary } from "./link-tertiary";
import { LinkProps } from "./link-types";

export const Link: FC<LinkProps> = (props) => {
  const {
    variant = "primary",
    scrollTo,
    className = "",
    children,
    ...rest
  } = props;

  const Component = {
    primary: LinkPrimary,
    secondary: LinkSecondary,
    tertiary: LinkTertiary,
    naked: LinkNaked,
  }[variant];

  // In case of a link that refers to t
  const onClick = scrollTo
    ? () =>
        document
          .getElementById(scrollTo)
          ?.scrollIntoView({ behavior: "smooth" })
    : undefined;

  return (
    <Component
      {...rest}
      onClick={onClick}
      className={`text-button ${className}`}
    >
      {children}
    </Component>
  );
};
