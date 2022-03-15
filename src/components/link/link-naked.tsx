import { FC } from "react";
import { LinkProps } from "./link-types";

export const LinkNaked: FC<LinkProps> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <a className={`text-link ${className}`} {...rest}>
      {children}
    </a>
  );
};
