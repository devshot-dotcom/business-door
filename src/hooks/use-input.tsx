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
 * - Valid - `{type: 'valid', tooltip: action.tooltip (scroll down)}`
 * - Invalid - `{type: 'invalid', tooltip: action.tooltip (scroll down)}`
 * - Default - `{type: 'default'}`
 * - Update - `{type: 'update', value: action.value}`
 *
 * How to show a tooltip?
 * Provide a tooltip object in the action. The object can have 3 properties:
 * - `label` - The tooltip text.
 * - `isShownForever` - Whether the tooltip is shown forever or shown on focus.
 * - `position` - Where should the tooltip be shown. Provide one of [`top-left`, `top-right`, `bottom-right`, `bottom-left`], defaults to top-left.
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
