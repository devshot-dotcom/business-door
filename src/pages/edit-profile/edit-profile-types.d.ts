import { Dispatch } from "react";
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

// Properties of the child components.
export namespace EditProfileChildrenProps {
  export type StateSubscriber = {
    profileState: EditProfileState;
    dispatchProfile: Dispatch<EditProfileActions>;
  };

  export type EditableAvatar = {
    dispatchProfile: Dispatch<EditProfileActions>;
  } & AvatarProps;
}

/**
 * States of the child components of the EditProfile component.
 */
export namespace EditProfileChildrenStates {
  export type EditableAvatar = {
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
}

/**
 * Dispatch actions of the child components of the EditProfile component.
 */
export namespace EditProfileChildrenActions {
  export type EditableAvatar = {
    /**
     * The type of the action to be performed.
     * - "OPEN_MODAL": Opens the modal.
     * - "CLOSE_MODAL": Closes the modal.
     * - "SET_FILE": Sets the avatar as the state's file.
     */
    type: "SET_FILE" | "CLOSE_MODAL" | "OPEN_MODAL";
  } & Partial<EditProfileChildrenStates.EditableAvatar>;
}
