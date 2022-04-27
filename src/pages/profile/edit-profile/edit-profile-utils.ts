import { useReducer } from "react";
import { EditProfileActions, EditProfileState } from ".";
import { ProfileData } from "..";

/**
 * Updates the profile attributes systematically.
 * @param state The state of the profile.
 * @param action The action to be performed.
 * @returns The updated state.
 */
function editProfileReducer(
  state: EditProfileState,
  action: EditProfileActions
): EditProfileState {
  return {
    updateCover: { ...state, cover: action.cover },
    updateAvatar: { ...state, avatar: action.avatar },
    updateBio: { ...state, aboutMe: action.aboutMe },
    updateName: { ...state, fullName: action.fullName },
    updateEmail: { ...state, email: action.email },
    updateProfession: { ...state, profession: action.profession },
    updateOrganization: { ...state, organization: action.organization },
  }[action.type] as EditProfileState;
}

/**
 * Hook to update the profile's attributes with ease.
 * @returns Array retrieved from the `useReducer` hook,
 * combined with an instance of the stateful method class.
 */
export function useEditProfileState(profileData: ProfileData) {
  const initialState: EditProfileState = {
    ...profileData,
  };

  return useReducer(editProfileReducer, initialState);
}

export function updateProfile(
  e: React.FormEvent<HTMLFormElement>,
  state: EditProfileState
) {
  e.preventDefault();
}
