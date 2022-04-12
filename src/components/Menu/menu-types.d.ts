import { MenuItem } from "./menu-item";

export type MenuProps = {
  variant?: "default";
  title?: string;
} & JSX.IntrinsicElements["ul"];

export type MenuChildren = {
  Item: typeof MenuItem;
};
