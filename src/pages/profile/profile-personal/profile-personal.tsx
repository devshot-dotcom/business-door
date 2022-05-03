import { ProfilePersonalDefault } from "./profile-personal-default";
import { ProfilePersonalEditable } from "./profile-personal-editable";
import "./profile-personal.scss";

export const ProfilePersonal = Object.assign(ProfilePersonalDefault, {
  Editable: ProfilePersonalEditable,
});
