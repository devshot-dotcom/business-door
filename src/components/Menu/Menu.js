import React from "react";
import "../../sass/Menu.scss";

function Menu(props) {
  return <ul className="Menu">{props.children}</ul>;
}

export default Menu;
