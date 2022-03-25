import { ComponentPropsWithoutRef } from "react";
import { ButtonVariants } from "../button/button-types";

export interface LinkProps extends ComponentPropsWithoutRef<"a"> {
  variant?: ButtonVariants;

  /**
   * The id of the element to scroll into view, do not prepend a `#`
   */
  scrollTo?: string;
}
