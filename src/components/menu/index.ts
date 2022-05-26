import { MenuComponent } from "./menu";
import { MenuItem } from "./menu-item";

// Joins MenuItem to MenuComponent;
// Menu can be used as <Menu />
// MenuItem can be used as <Menu.Item />
export const Menu = Object.assign(MenuComponent, {
  Item: MenuItem,
});

export type { MenuProps, MenuChildren } from "./menu-types";
