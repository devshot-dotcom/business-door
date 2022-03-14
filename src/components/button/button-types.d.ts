import { ComponentPropsWithoutRef } from "react";

export type ButtonVariants = "primary" | "secondary" | "tertiary" | "naked";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariants;
}
