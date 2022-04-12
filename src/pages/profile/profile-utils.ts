import { ProfileAction, profileConfig, ProfileState } from ".";

/**
 * Reducer method that dispatches the state of the profile
 * whenever a change in the state needs to be observed.
 * @param state The last known state of the profile.
 * @param action The values to be updated and the required action.
 * @returns The updated state.
 */
export function profileReducer(
  state: ProfileState,
  action: ProfileAction
): ProfileState {
  return {
    successful: { ...state, data: action.data, status: "fetched" },
    failed: { ...state, error: action.error, status: "failed" },
  }[action.type] as ProfileState;
}

export function trimByConfig(value: string) {
  const maxLength = profileConfig.INFO_MAX_LENGTH;
  return value.length < maxLength ? value : `${value.slice(0, maxLength)}...`;
}
