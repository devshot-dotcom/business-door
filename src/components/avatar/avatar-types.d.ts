import { ComponentPropsWithoutRef } from "react";
import { ThemeSizes } from "../../config";
import { AvatarProfile } from ".";

export interface AvatarProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * The file to be used as the avatar.
   * If provided, the file will be used instead of the avatar found at the API.
   *
   * @type {File}
   */
  file?: File;

  /**
   * The name of the file to be used as the avatar from the API.
   *
   * @type {string}
   */
  src?: string;

  size?: ThemeSizes;

  /**
   * Properties for a button on top of the avatar.
   * The button becomes visible when the avatar is hovered upon or focused.
   * Ignore or pass `undefined` to completely disregard the button's existence.
   *
   * @type {ComponentPropsWithoutRef<"button">}
   */
  editbutton?: ComponentPropsWithoutRef<"button">;
}

export type AvatarVariants = {
  Profile: AvatarProfile;
};
