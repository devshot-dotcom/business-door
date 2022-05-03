import * as React from "react";
import { TextFieldActions, TextFieldState } from "../components/types";

/** Reducer method for an input component. */
function inputReducer(
  state: TextFieldState,
  action: TextFieldActions
): TextFieldState {
  return {
    default: { ...state, variant: "default", tooltip: undefined },
    update: { ...state, value: action.value },
    valid: {
      ...state,
      variant: "valid",
      tooltip: action.tooltip,
    },
    invalid: {
      ...state,
      variant: "invalid",
      tooltip: action.tooltip,
    },
    reset: { ...state, value: "", tooltip: undefined },
  }[action.type] as TextFieldState;
}

/** The reducer hook for an input component.
 * Allowed actions:-
 * - `Valid` - Makes the input have a green outline.
 * - `Invalid` - Makes the input have a reddish outline.
 * - `Default` - Resets all the visual changes of the input.
 * - `Update` - Updates the value of the input.
 *
 * Usage:-
 * - Valid - `{type: 'valid'}`
 * - Invalid - `{type: 'invalid'}`
 * - Default - `{type: 'default'}`
 * - Update - `{type: 'update', value: action.value}`
 */
function useInput() {
  /** The initial state of an input component. */
  const initialState: TextFieldState = {
    value: "",
    variant: "default",
  };

  return React.useReducer(inputReducer, initialState);
}

export { useInput };
