import { FC } from "react";
import { ProfileComponent } from "./profile";
import { ProfileAdditional } from "./profile-additional";
import { ProfileBio } from "./profile-bio";
import { ProfileCover } from "./profile-cover";
import { ProfileHeader } from "./profile-header";
import { ProfilePersonal } from "./profile-personal";
import { ProfileChildren } from "./profile-types";

// Makes ProfileHeader and other children available
// by the use of dot notation. Example: <Profile.Header/>
export const Profile = Object.assign<FC, ProfileChildren>(ProfileComponent, {
  Header: ProfileHeader,
  Cover: ProfileCover,
  Bio: ProfileBio,
  PersonalInformation: ProfilePersonal,
  AdditionalInformation: ProfileAdditional,
});

export { ViewProfile } from "./view-profile";
export { profileReducer } from "./profile-utils";
export { profileConfig } from "./profile-config";
export type {
  ProfileData,
  ProfileState,
  ProfileAction,
  AdditionalInfo,
} from "./profile-types";
/* PersonalInformation */
export type { PersonalInfoProps, PersonalInfo } from "./profile-personal";
