import { useReducer } from "react";
import { EditProfileActions, EditProfileState } from ".";
import { routes } from "../../config";
import { ProfileApi } from "../../hooks/use-api";
import { AdditionalInfo, profileConfig, ProfileData } from "../profile";
import { useApi } from "../../hooks";
import { useNavigate } from "react-router-dom";
import { isStringValid } from "../../helpers/functions";

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
    updateCity: { ...state, city: action.city },
    updateCountry: { ...state, country: action.country },
    updateAdditionalInfo: { ...state, additionalInfo: action.additionalInfo },
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

/**
 * Hook to update the profile's attributes with ease.
 * @returns {{ onSubmit: Function }} Objecting containing the submission handler method for the form, callable by the `onSubmit` key.
 * @version 1.0.0
 * @author kashan-ahmad
 */
export function useEditProfileForm(): { onSubmit: Function } {
  const navigate = useNavigate();
  const api = useApi("profile") as ProfileApi;

  return {
    onSubmit(e: React.FormEvent<HTMLFormElement>, state: EditProfileState) {
      e.preventDefault();

      function getSanitizedAdditionalInfo(additionalInfo: string | undefined) {
        // Guard clause.
        if (!isStringValid(additionalInfo)) return undefined;

        const arr = (JSON.parse(additionalInfo!) as AdditionalInfo[]).map(
          (item, i) => {
            // Nothing is returned when the limit of items has been crossed.
            if (i >= profileConfig.MAX_ADDITIONAL_INFOS) return undefined;

            // Nothing is returned when the item has empty values.
            if (!item.label || !item.url) return undefined;

            // The item is returned when it's all good.
            return item;
          }
        );

        // Filters out the undefined values.
        return JSON.stringify(arr.filter((item) => item !== undefined));
      }

      // Open for interpretation, I hate repeated code.
      const sanitizedState: EditProfileState = {
        ...state,
        aboutMe: state.aboutMe?.slice(0, profileConfig.BIO_MAX_LENGTH),
        fullName: state.fullName?.slice(0, profileConfig.INFO_MAX_LENGTH),
        profession: state.profession?.slice(0, profileConfig.INFO_MAX_LENGTH),
        organization: state.organization?.slice(
          0,
          profileConfig.INFO_MAX_LENGTH
        ),
        city: state.city?.slice(0, profileConfig.INFO_MAX_LENGTH),
        country: state.country?.slice(0, profileConfig.INFO_MAX_LENGTH),
        additionalInfo: getSanitizedAdditionalInfo(state.additionalInfo),
      };

      api.update(sanitizedState, {
        onSuccess: (data: EditProfileState) =>
          // The profile page/The user's route = The user's profile.
          navigate(`${routes.profile.PATH}/${data.route}`),
      });
    },
  };
}
