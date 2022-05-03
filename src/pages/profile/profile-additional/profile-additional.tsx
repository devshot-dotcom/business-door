import { ProfileAdditionalDefault } from "./profile-additional-default";
import { ProfileAdditionalEditable } from "./profile-additional-editable";
import "./profile-additional.scss";

export const ProfileAdditional = Object.assign(ProfileAdditionalDefault, {
  Editable: ProfileAdditionalEditable,
});
