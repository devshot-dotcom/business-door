import React from "react";
import "./Menu.scss";

const Menu: React.FC = (props) => {
  return <ul className="menu">{props.children}</ul>;
};

export { Menu };
export { MenuItem } from "./MenuItem";
