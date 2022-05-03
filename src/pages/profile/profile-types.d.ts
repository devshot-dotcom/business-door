import { Dispatch } from "react";
import { UserLevelCode } from "../../config";
import { EditProfileActions, EditProfileState } from "../edit-profile";
import { ProfileAdditional } from "./profile-additional";
import { ProfileBio } from "./profile-bio";
import { ProfileConfidential } from "./profile-confidential";
import { ProfileCover } from "./profile-cover";
import { ProfileHeader } from "./profile-header";
import { ProfilePersonal } from "./profile-personal";

/**
 * The state of the profile component.
 */
export type ProfileState = {
  /**
   * The data representing a user's profile,
   * undefined until fetched successfully.
   */
  data?: ProfileData;

  /**
   * The status of the profile component,
   * represents the ongoing processes for desired usage.
   * - `fetching`: The user profile is being fetched.
   * - `failed`: There was an error, profile couldn't be fetched.
   * - `fetched`: The profile was fetched successfully.
   */
  status?: "fetching" | "failed" | "fetched";

  /**
   * In case of a failed request, this object contains
   * the details of the errors. Note that only the bridge
   * (`useApi`) knows when to call for an error.
   */
  error?: ApiError;
};

/**
 * The action used by the `profileReducer` to
 * dispatch the state of the profile. The default
 * action isn't used as the profile itself initiates
 * the default state, which results in one of the two;
 * - `successful`: The profile is fetched, inform the reducer.
 * - `failed`: The profile request failed, inform the reducer.
 */
export type ProfileActions = ProfileState & {
  type: "successful" | "failed";
};

export type AdditionalInfo = {
  label: string;
  url: string;
};

export type ProfileData = {
  id?: string;
  route: string;
  profession?: string;
  organization?: string;
  city?: string;
  country?: string;
  fullName?: string;
  additionalInfo?: string;
  avatar?: string;
  updatedAt?: string;
  aboutMe?: string;
  email?: string;
  cover?: string;
  level?: UserLevelCode;
  cards?: string;
};

export type ProfileChildren = {
  Cover: typeof ProfileCover;
  Header: typeof ProfileHeader;
  Bio: typeof ProfileBio;
  Personal: typeof ProfilePersonal;
  Additional: typeof ProfileAdditional;
  Confidential: typeof ProfileConfidential;
};

export type ProfileChildProps = {
  profileState: EditProfileState;
  dispatchProfile: Dispatch<EditProfileActions>;
};
