import { ComponentPropsWithoutRef, FC } from "react";
import "./Menu.scss";

const Menu: FC<ComponentPropsWithoutRef<"ul">> = (props) => {
  const { className = "", children, ...rest } = props;

  return (
    <ul className={`coffee-menu ${className}`} {...rest}>
      {children}
    </ul>
  );
};

export { Menu };
export { MenuItem } from "./MenuItem";
