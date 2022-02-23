import { IconProp } from "@fortawesome/fontawesome-svg-core";

//* TYPES.

/**
 * The different visual `states` of the Input component.
 */
export type InputVariants =
  | "default"
  | "focused"
  | "valid"
  | "invalid"
  | "disabled";

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

export type DynamicModule = {
  default: string;
};

//* INTERFACES.

/**
 * The set of data required to initialize a toast.
 */
interface ToastOptions {
  /** Visual state of the toast. */
  variant?: "default" | "valid" | "invalid" | "loading";

  title?: string;
  subTitle?: string;

  /** An icon, ofc. Provide a URL,
   * an emoji, or a `FontAwesomeIcon`. */
  icon?: string | IconProp;

  /** For how long the toast will be displayed.
   * Number must be in milliseconds (1s = 1000ms).
   * - REMOVE_ON_PUSH removes the toast when a
   * newer toast is cooked.
   */
  upTime?: number | "REMOVE_ON_PUSH";

  /** Callback that's called when a toast is removed */
  onRemove?: () => void;
}

/**
 * Since tooltip isn't really a react component,
 * rather it's just a CSS library, we've created
 * a separate interface to carry it's needs.
 */
interface TooltipProps {
  /** The text to be displayed. */
  label: string;

  /** Whether to show the tooltip all the
   * time or only on focus & hover. */
  isShownForever?: boolean;

  /** Where to show the tooltip. */
  position?:
    | "top"
    | "right"
    | "bottom"
    | "left"
    | "top-left"
    | "top-right"
    | "bottom-left"
    | "bottom-right";
}

/**
 * Basic state of an input field.
 */
interface InputState {
  /** The value of an input field,
   * don't use input `type=number`,
   * or anything else, use checks on this value. */
  value: string;

  /** The visual state of an input. */
  variant: InputVariants;

  /** The tooltip to be displayed
   * on the `InputIcon` component. */
  tooltip?: TooltipProps;
}

/**
 * Reducer actions for an `Input` component.
 * Have the power to modify the variant, value,
 * and the tooltips of the subject.
 */
interface InputActions {
  /** New value (if updated, ofc) */
  value?: string;

  /** Tooltip, in case of validation. */
  tooltip?: TooltipProps;

  /** Types of actions.
   * - `default` Resets the field with current value.
   * - `update` Updates the value.
   * - `valid` Displays the valid visuals.
   * - `invalid` Displays the invalid visuals. */
  type: "default" | "update" | "valid" | "invalid";
}

/**
 * Callback functions for a boolean response.
 * Mimicked as `BoolBacks` as in Boolean Callbacks.
 */
interface BoolBacks {
  onSuccess?: () => void;
  onFailure?: () => void;
}

export type { ToastOptions, TooltipProps, InputState, InputActions, BoolBacks };
