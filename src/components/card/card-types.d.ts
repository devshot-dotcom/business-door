import { ComponentPropsWithoutRef } from "react";
import { ThemeColors, ThemeSizes, ThemeSizesCompact } from "../../config/theme";

type OptionalProps = "none" | "default";
type CardColors = ThemeColors | OptionalProps | "default-subtle";

interface CardProps extends ComponentPropsWithoutRef<"article"> {
  /**
   * Whether to wrap the card in a `button`
   * or not. `false` or `undefined` does nothing.
   * `true` wraps the card in a
   * button that:
   * - Can be assigned a click listener.
   * - Shows corresponding visual states.
   */
  focusable?: boolean;

  /**
   * What color should be the outline
   * of the card, should there be one?
   * - `none` or `undefined` assigns no outline.
   * - `default` assigns the default outline.
   */
  outline?: CardColors;

  /**
   * What color should be the background
   * of the card, should there be one?
   * - `none` or `undefined` assigns no color.
   * - `default` assigns the default background color.
   */
  background?: CardColors;

  /**
   * What size should be the shadow
   * of the card, should there be one?
   * - `none` or `undefined` assigns no shadow.
   * - `default` assigns the default shadow.
   */
  shadow?: ThemeSizes | OptionalProps;

  /**
   * What should be the gap between
   * the child elements of the card?
   * - `medium` is assigned by default.
   */
  gap?: ThemeSizesCompact;

  /**
   * What should be the padding of the card?
   * - `medium` is assigned by default.
   */
  padding?: ThemeSizesCompact;
}

export { CardProps };
