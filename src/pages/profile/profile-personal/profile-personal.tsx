import ProfilePersonalDefault from "./profile-personal-default";
import ProfilePersonalEditable from "./profile-personal-editable";
import "./profile-personal.scss";

const ProfilePersonal = Object.assign(ProfilePersonalDefault, {
  Editable: ProfilePersonalEditable,
});

export default ProfilePersonal;
