import { RefObject, useEffect } from "react";
import { Microtip } from "../components";
import { MicrotipProps } from "../components/types";

/**
 * It takes a ref and a tooltip object
 * and applies the tooltip to the referenced element.
 * @param {RefObject<HTMLElement>} ref - The ref of
 * the element to apply the tooltip to.
 * @param {MicrotipProps} tooltip - The tooltip object.
 * @returns {void}
 */
export function useMicrotip(
  ref?: RefObject<HTMLElement>,
  tooltip?: MicrotipProps
): void {
  useEffect(() => {
    if (!ref || !tooltip) return;

    // Apply tooltip once the component is rendered.
    if (tooltip) Microtip({ ...tooltip, ref: ref });
  }, [ref, tooltip]);
}
