import { ComponentPropsWithoutRef, FC } from "react";
import "./menu-item.scss";

export type MenuItemProps = {
  direction: "row" | "column";
} & ComponentPropsWithoutRef<"li">;

export const MenuItem: FC<MenuItemProps> = ({
  direction = "row",
  className = "",
  children,
  ...rest
}) => {
  const classes = ["menu__item", `menu__item-${direction}`, className];

  return (
    <li {...rest} className={classes.join(" ")}>
      {children}
    </li>
  );
};
