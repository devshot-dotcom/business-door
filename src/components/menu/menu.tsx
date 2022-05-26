import { FC } from "react";
import { MenuProps } from ".";
import "./menu.scss";

export const MenuComponent: FC<MenuProps> = ({
  title,
  variant = "default",
  className = "",
  children,
  ...rest
}) => {
  const classes = ["menu", `menu-${variant}`, className];

  return (
    <ul {...rest} className={classes.join(" ")}>
      {title && <div className="menu__title">{title}</div>}
      {children}
    </ul>
  );
};
