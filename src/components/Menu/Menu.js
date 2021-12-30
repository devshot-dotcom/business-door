import React from "react";
import "./Menu.scss";

function Menu(props) {
  return <ul className="menu">{props.children}</ul>;
}

export { Menu };
export { MenuItem } from "./MenuItem";
