import { ComponentPropsWithoutRef } from "react";
import { RwdBackgroundProps } from "../../rwd";

export interface SidebarProps extends ComponentPropsWithoutRef<"aside"> {
  /**
   * Properties of the responsive background component. Adjusts the background according to the viewport.
   */
  rwd?: RwdBackgroundProps;

  /**
   * What built-in sidebar child to display, in case you don't need a built-in variant, pass the subject as children of the sidebar.
   */
  variant?: "tidbits" | "testimonials";

  children?: React.ReactNode;
}
