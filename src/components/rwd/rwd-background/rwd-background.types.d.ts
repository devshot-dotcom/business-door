import { ComponentPropsWithoutRef, ReactNode } from "react";
import { ResponsiveColors } from "..";

export interface RwdBackgroundProps extends ComponentPropsWithoutRef<"div"> {
  bg?: ResponsiveColors;
  bgOnMobile?: ResponsiveColors;
  bgOnTablet?: ResponsiveColors;
  bgOnLaptop?: ResponsiveColors;
  bgOnDesktop?: ResponsiveColors;
}
