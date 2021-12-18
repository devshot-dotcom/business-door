import React from "react";
import "./Viewport.scss";

function Viewport(props) {
  return <div className="viewport">{props.children}</div>;
}

export { Viewport };
