import { ComponentPropsWithoutRef } from "react";
import { ThemeSizes } from "../../config";

export type ButtonVariants = "primary" | "secondary" | "tertiary" | "naked";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: ButtonVariants;
}
