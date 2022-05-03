import { ProfileBioDefault } from "./profile-bio-default";
import { ProfileBioEditable } from "./profile-bio-editable";
import "./profile-bio.scss";

export const ProfileBio = Object.assign(ProfileBioDefault, {
  Editable: ProfileBioEditable,
});
