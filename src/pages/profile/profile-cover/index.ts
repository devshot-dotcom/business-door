import { ProfileCoverModal } from "./modal";
import { ProfileCoverComponent } from "./profile-cover";

// Access the modal using ProfileCover.Modal
export const ProfileCover = Object.assign(ProfileCoverComponent, {
  Modal: ProfileCoverModal,
});

export type { CoverProps } from "./profile-cover-types";
