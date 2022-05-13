import ProfileAvatarDefault from "./profile-avatar-default";
import ProfileAvatarEditable from "./profile-avatar-editable";

const ProfileAvatar = Object.assign(ProfileAvatarDefault, {
  Editable: ProfileAvatarEditable,
});

export default ProfileAvatar;
