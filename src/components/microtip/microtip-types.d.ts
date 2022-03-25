import { RefObject } from "react";

/**
 * Since tooltip isn't really a react component,
 * rather it's just a CSS library, we've created
 * a separate interface to carry it's needs.
 */
export type MicrotipProps = {
  /** The reference to the HTML element on which tooltip has to be applied. */
  ref?: RefObject<HTMLElement>;

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
};
