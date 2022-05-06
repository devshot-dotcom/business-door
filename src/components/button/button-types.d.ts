import { ComponentPropsWithoutRef } from "react";
import { LinkProps } from "react-router-dom";

type CommonProps = {
  size?: "small" | "medium";
  children?: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary";
};

type ButtonSelfProps = {
  as?: "button";
} & ComponentPropsWithoutRef<"button">;

type HyperLinkProps = {
  as?: "a";
} & ComponentPropsWithoutRef<"a">;

type NavLinkProps = {
  as?: "Link";
} & LinkProps &
  ComponentPropsWithoutRef<"a">;

export type ButtonProps = CommonProps &
  (ButtonSelfProps | HyperLinkProps | NavLinkProps);
