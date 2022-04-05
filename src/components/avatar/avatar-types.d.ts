import { ComponentPropsWithoutRef } from "react";
import { ThemeSizes } from "../../config";
import { AvatarProfile } from ".";

export interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  src?: string;
  size?: ThemeSizes;
}

export type AvatarVariants = {
  Profile: AvatarProfile;
};
