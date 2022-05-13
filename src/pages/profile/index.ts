import ProfileComponent from "./profile";
import ProfileAvatar from "./profile-avatar";
import profileConfig from "./profile-config";
import ProfileAdditional from "./profile-additional";
import ProfileBio from "./profile-bio";
import ProfileConfidential from "./profile-confidential";
import ProfileCover from "./profile-cover";
import ProfileHeader from "./profile-header";
import ProfilePersonal from "./profile-personal";

// Makes ProfileHeader and other children available
// by the use of dot notation. Example: <Profile.Header/>
const Profile = Object.assign(ProfileComponent, {
  Header: ProfileHeader,
  Avatar: ProfileAvatar,
  Cover: ProfileCover,
  Bio: ProfileBio,
  Personal: ProfilePersonal,
  Additional: ProfileAdditional,
  Confidential: ProfileConfidential,
});

// Default export.
export default Profile;

// Internal modules.
export { profileConfig };

// External modules.
export * from "./profile-utils";

// Types.
export * from "./profile-types";
