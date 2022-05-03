import { ComponentPropsWithoutRef } from "react";
import { ResponsiveColors } from "..";

export interface RwdBackgroundProps extends ComponentPropsWithoutRef<"div"> {
  variant?: ResponsiveColors;
  onMobile?: ResponsiveColors;
  onTablet?: ResponsiveColors;
  onLaptop?: ResponsiveColors;
  onDesktop?: ResponsiveColors;
}
