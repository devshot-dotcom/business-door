import { ComponentPropsWithoutRef } from "react";
import { ThemeColors } from "../../config";

export interface BadgeProps extends ComponentPropsWithoutRef<"span"> {
  backgroundColor?: ThemeColors;
}
