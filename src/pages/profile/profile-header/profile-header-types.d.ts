import { Dispatch } from "react";
import { ProfileData } from "..";
import { EditProfileActions, EditProfileState } from "../edit-profile";

export type ProfileHeaderDefaultProps = {
  isLogged: boolean;
  data: ProfileData;
};

export type ProfileHeaderEditableProps = {
  state: EditProfileState;
  dispatch: Dispatch<EditProfileActions>;
};
