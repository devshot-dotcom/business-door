import * as React from "react";
import {
  EditProfileChildrenStates as States,
  EditProfileChildrenActions as Actions,
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
  state: States.EditableAvatar,
  action: Actions.EditableAvatar
): States.EditableAvatar {
  return {
    SET_FILE: { ...state, file: action.file },
    OPEN_MODAL: { ...state, isModalOpen: true },
    CLOSE_MODAL: { ...state, isModalOpen: false },
  }[action.type] as States.EditableAvatar;
}

/**
 * Hook to use the state of the `EditableAvatar` component.
 * @returns {[States.EditableAvatar, React.Dispatch<Actions.EditableAvatar>]} The state and the dispatcher.
 *
 * @author kashan-ahmad
 * @version 1.0.0
 */
function useCustomReducer(): [
  States.EditableAvatar,
  React.Dispatch<Actions.EditableAvatar>
] {
  const initialState: States.EditableAvatar = {
    file: undefined,
    isModalOpen: false,
  };

  return React.useReducer(reducer, initialState);
}

export default useCustomReducer;
