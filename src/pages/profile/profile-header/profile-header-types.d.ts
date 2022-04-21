import { Dispatch } from "react";
import { ProfileData } from "..";
import { EditProfileActions, EditProfileState } from "../edit-profile";

export type ProfileHeaderDefaultProps = {
  isLogged: boolean;
  data: ProfileData;
};

export type ProfileHeaderEditableProps = {
  profileState: EditProfileState;
  dispatchProfile: Dispatch<EditProfileActions>;
};
