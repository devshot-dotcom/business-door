import ProfileHeaderDefault from "./profile-header-default";
import ProfileHeaderEditable from "./profile-header-editable";
import "./profile-header.scss";

const ProfileHeader = Object.assign(ProfileHeaderDefault, {
  Editable: ProfileHeaderEditable,
});

export default ProfileHeader;
