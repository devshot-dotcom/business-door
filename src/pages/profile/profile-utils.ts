import { ProfileActions, ProfileState } from ".";

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
