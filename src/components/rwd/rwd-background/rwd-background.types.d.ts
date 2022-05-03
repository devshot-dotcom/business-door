import { ComponentPropsWithoutRef } from "react";
import { ResponsiveColors } from "..";

export type RwdBackgroundProps = {
  variant?: ResponsiveColors;
  onMobile?: ResponsiveColors;
  onTablet?: ResponsiveColors;
  onLaptop?: ResponsiveColors;
  onDesktop?: ResponsiveColors;
} & ComponentPropsWithoutRef<"div">;
