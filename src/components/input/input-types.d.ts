import { ComponentPropsWithoutRef } from "react";
import { MicrotipProps } from "../microtip";

export type InputState = {
  value: string;

  /** The visual state of an input. */
  variant: InputVariants;

  /** The tooltip to be displayed, just in case. */
  tooltip?: MicrotipProps;
};

/**
 * Reducer actions for an `Input` component.
 * Have the power to modify the variant, value, and the tooltips of the subject.
 */
export type InputActions = {
  /** Updated value */
  value?: string;

  /** Tooltip, can be displayed for validation messages, etc. */
  tooltip?: TooltipProps;

  /** Types of actions.
   * - `default` Resets the field with current value.
   * - `update` Updates the value.
   * - `valid` Displays the valid visuals.
   * - `invalid` Displays the invalid visuals. */
  type: "default" | "update" | "valid" | "invalid";
};

/**
 * The different visual `states` of the Input component.
 */
export type InputVariants = "default" | "valid" | "invalid";

/**
 * The type of output received from a
 * `useEmail` or `usePassword` hook.
 * Without it, types get mixed up and
 * intellisense starts acting like an idiot.
 */
export type InputStateType = [
  /** The actual state of the `Input`. */
  state: InputState,

  /** The dispatcher that updates the state. */
  dispatch: React.Dispatch<InputActions>,

  /** Whether the field has a valid value or not. */
  isValid: () => boolean
];

export type InputProps = {
  state: InputState;
} & JSX.IntrinsicElements["input"];
