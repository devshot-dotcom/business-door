import * as React from "react";
import {
  EditableAvatarActions,
  EditableAvatarState,
} from "../../../edit-profile";

/**
 * The reducer for the EditableAvatar component.
 * @param {States.EditableAvatar} state The current state of the avatar.
 * @param {Actions.EditableAvatar} action The action to be performed.
 * @returns {States.EditableAvatar} The new state of the avatar.
 *
 * @author kashan-ahmad
 * @version 1.0.0
 */
function reducer(
  state: EditableAvatarState,
  action: EditableAvatarActions
): EditableAvatarState {
  return {
    SET_FILE: { ...state, file: action.file },
    OPEN_MODAL: { ...state, isModalOpen: true },
    CLOSE_MODAL: { ...state, isModalOpen: false },
  }[action.type] as EditableAvatarState;
}

/**
 * Hook to use the state of the `EditableAvatar` component.
 * @returns {[EditableAvatarState, React.Dispatch<Actions.EditableAvatar>]} The state and the dispatcher.
 *
 * @author kashan-ahmad
 * @version 1.0.0
 */
function useCustomReducer(): [
  EditableAvatarState,
  React.Dispatch<EditableAvatarActions>
] {
  const initialState: EditableAvatarState = {
    file: undefined,
    isModalOpen: false,
  };

  return React.useReducer(reducer, initialState);
}

export default useCustomReducer;
