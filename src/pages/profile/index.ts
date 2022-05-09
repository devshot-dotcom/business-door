import { FC } from "react";
import ProfileAvatar from "./profile-avatar";
import { ProfileComponent } from "./profile";
import { ProfileAdditional } from "./profile-additional";
import { ProfileBio } from "./profile-bio";
import { ProfileConfidential } from "./profile-confidential";
import { ProfileCover } from "./profile-cover";
import { ProfileHeader } from "./profile-header";
import { ProfilePersonal } from "./profile-personal";
import { ProfileChildren } from "./profile-types";

// Makes ProfileHeader and other children available
// by the use of dot notation. Example: <Profile.Header/>
export const Profile = Object.assign<FC, ProfileChildren>(ProfileComponent, {
  Header: ProfileHeader,
  Avatar: ProfileAvatar,
  Cover: ProfileCover,
  Bio: ProfileBio,
  Personal: ProfilePersonal,
  Additional: ProfileAdditional,
  Confidential: ProfileConfidential,
});

export { profileReducer, trimByConfig } from "./profile-utils";
export { profileConfig } from "./profile-config";
export type {
  ProfileData,
  ProfileState,
  ProfileActions,
  AdditionalInfo,
  ProfileChildren,
} from "./profile-types";

/* PersonalInformation */
export type { PersonalInfoProps, PersonalInfo } from "./profile-personal";
