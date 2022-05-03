import { ComponentPropsWithoutRef } from "react";
import { MicrotipProps } from "../microtip";

export type TextFieldState = {
  value: string;

  /** The visual state of an input. */
  variant: TextFieldVariants;

  /** The tooltip to be displayed, just in case. */
  tooltip?: MicrotipProps;
};

/**
 * Reducer actions for an `TextField` component.
 * Have the power to modify the variant, value, and the tooltips of the subject.
 */
export type TextFieldActions = {
  /** Updated value */
  value?: string;

  /** Tooltip, can be displayed for validation messages, etc. */
  tooltip?: MicrotipProps;

  /** Types of actions.
   * - `default` Resets the field with current value.
   * - `update` Updates the value.
   * - `valid` Displays the valid visuals.
   * - `invalid` Displays the invalid visuals. */
  type: "default" | "update" | "valid" | "invalid" | "reset";
};

/**
 * The different visual `states` of the TextField component.
 */
export type TextFieldVariants = "default" | "valid" | "invalid";

/**
 * The type of output received from a
 * `useEmail` or `usePassword` hook.
 * Without it, types get mixed up and
 * intellisense starts acting like an idiot.
 */
export type TextFieldStateType = [
  /** The actual state of the `TextField`. */
  state: TextFieldState,

  /** The dispatcher that updates the state. */
  dispatch: React.Dispatch<TextFieldActions>,

  /** Whether the field has a valid value or not. */
  isValid: () => boolean
];

export type InputProps = {
  as: "input";
  state: TextFieldState;
} & ComponentPropsWithoutRef<"input">;

export type TextAreaProps = {
  as: "textarea";
  state: TextFieldState;
} & ComponentPropsWithoutRef<"textarea">;

/**
 * An input component can render both an input field
 * or a textarea based on the `as` prop.
 */
export type TextFieldProps = InputProps | TextAreaProps;
