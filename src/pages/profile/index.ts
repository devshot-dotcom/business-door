import { FC } from "react";
import { ProfileComponent } from "./profile";
import { ProfileCover } from "./profile-cover";
import { ProfileHeader } from "./profile-header";
import { ProfileChildren } from "./profile-types";

// Makes ProfileHeader and other children available
// by the use of dot notation. Example: <Profile.Header/>
export const Profile = Object.assign<FC, ProfileChildren>(ProfileComponent, {
  Header: ProfileHeader,
  Cover: ProfileCover,
});

export { ViewProfile } from "./view-profile";
export { profileReducer } from "./profile-utils";
export type { ProfileData, ProfileState, ProfileAction } from "./profile-types";
