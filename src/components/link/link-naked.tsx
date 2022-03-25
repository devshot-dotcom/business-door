import { FC } from "react";
import { LinkProps } from "./link-types";

export const LinkNaked: FC<LinkProps> = (props) => {
  const { children, ...rest } = props;
  return <a {...rest}>{children}</a>;
};
