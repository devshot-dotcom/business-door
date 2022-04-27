import { ProfileData } from "..";

export type EditProfileState = ProfileData;

export type EditProfileActions = {
  type:
    | "updateCover"
    | "updateAvatar"
    | "updateBio"
    | "updateName"
    | "updateEmail"
    | "updateProfession"
    | "updateOrganization";
} & Partial<EditProfileState>;
