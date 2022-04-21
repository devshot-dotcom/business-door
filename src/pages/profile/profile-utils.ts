import { ProfileActions, profileConfig, ProfileState } from ".";

/**
 * Reducer method that dispatches the state of the profile
 * whenever a change in the state needs to be observed.
 * @param state The last known state of the profile.
 * @param action The values to be updated and the required action.
 * @returns The updated state.
 */
export function profileReducer(
  state: ProfileState,
  action: ProfileActions
): ProfileState {
  return {
    successful: { ...state, data: action.data, status: "fetched" },
    failed: { ...state, error: action.error, status: "failed" },
  }[action.type] as ProfileState;
}

/**
 * Trim a string according to the configured length.
 * If the string exceeds the length,
 * a trimmed string with an ellipsis is returned.
 * @param value {string} The string to be trimmed.
 * @returns {string} Trimmed string if longer than
 * the configured length. Same string otherwise.
 */
export function trimByConfig(value: string): string {
  const maxLength = profileConfig.INFO_MAX_LENGTH;
  return value.length < maxLength ? value : `${value.slice(0, maxLength)}...`;
}
