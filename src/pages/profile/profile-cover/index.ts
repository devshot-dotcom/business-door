import ProfileCoverComponent from "./profile-cover";
import ProfileCoverModal from "./profile-cover-modal";

// Access the modal using ProfileCover.Modal
const ProfileCover = Object.assign(ProfileCoverComponent, {
  Modal: ProfileCoverModal,
});

export default ProfileCover;
export * from "./profile-cover-types";
