import { MicrotipProps } from "./microtip-types";
import "./microtip.scss";

export const Microtip = (props: MicrotipProps) => {
  const { ref, label, isShownForever = false, position = "top-right" } = props;

  const element = ref?.current;

  if (element === null || element === undefined) return null;

  isShownForever && element.classList.add("show");
  element.setAttribute("aria-label", label);
  element.setAttribute("role", "tooltip");
  element.setAttribute("data-microtip-position", position);

  return null;
};
