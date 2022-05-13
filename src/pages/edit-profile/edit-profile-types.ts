import * as React from "react";
import { AvatarProps } from "../../components/types";
import { ProfileData } from "../profile";

export type EditProfileState = ProfileData;

export type EditProfileActions = {
  type:
    | "updateCover"
    | "updateAvatar"
    | "updateBio"
    | "updateName"
    | "updateEmail"
    | "updateProfession"
    | "updateOrganization"
    | "updateCity"
    | "updateCountry"
    | "updateAdditionalInfo";
} & Partial<EditProfileState>;

export type EditProfileSubscriber = {
  profileState: EditProfileState;
  dispatchProfile: React.Dispatch<EditProfileActions>;
};

export type EditableAvatarProps = {
  dispatchProfile: EditProfileSubscriber["dispatchProfile"];
} & AvatarProps;

export type EditableAvatarState = {
  /**
   * The file to be used as the avatar.
   *
   * @type {File}
   */
  file?: File;

  /**
   * Whether the avatar's modal is open or not.
   *
   * @type {boolean}
   */
  isModalOpen: boolean;
};

export type EditableAvatarActions = {
  /**
   * The type of the action to be performed.
   * - "OPEN_MODAL": Opens the modal.
   * - "CLOSE_MODAL": Closes the modal.
   * - "SET_FILE": Sets the avatar as the state's file.
   */
  type: "SET_FILE" | "CLOSE_MODAL" | "OPEN_MODAL";
} & Partial<EditableAvatarState>;
