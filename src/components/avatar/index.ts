import { AvatarComponent } from "./avatar";
import { AvatarProfile } from "./avatar-profile";

// Joins the AvatarVariants to Avatar itself.
// Can use AvatarProfile using Avatar.Profile notation.
export const Avatar = Object.assign(AvatarComponent, {
  Profile: AvatarProfile,
});

export type { AvatarProps, AvatarVariants } from "./avatar-types";
