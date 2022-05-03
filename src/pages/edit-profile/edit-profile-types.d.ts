import { ProfileData } from "../profile";

export type EditProfileState = ProfileData;

export type EditProfileActions = {
  type:
    | "updateCover"
    | "updateAvatar"
    | "updateBio"
    | "updateName"
    | "updateEmail"
    | "updateProfession"
    | "updateOrganization"
    | "updateCity"
    | "updateCountry"
    | "updateAdditionalInfo";
} & Partial<EditProfileState>;
