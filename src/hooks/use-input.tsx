import * as React from "react";
import { InputActions, InputState } from "../components/input";

/** Reducer method for an input component. */
function inputReducer(state: InputState, action: InputActions): InputState {
  return {
    default: { ...state, variant: "default" },
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
  }[action.type] as InputState;
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
  const initialState: InputState = {
    value: "",
    variant: "default",
  };

  return React.useReducer(inputReducer, initialState);
}

export { useInput };
