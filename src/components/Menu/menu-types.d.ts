import { ComponentPropsWithoutRef } from "react";
import { MenuItem } from "./menu-item";

export type MenuProps = {
  title?: string;
  variant?: "default";
} & ComponentPropsWithoutRef<"ul">;

export type MenuChildren = {
  Item: typeof MenuItem;
};
