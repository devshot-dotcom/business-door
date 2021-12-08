import React from "react";

export default function TypeSwapper(props) {
  return (
    <span
      tabIndex="0"
      className="link"
      onClick={props.onClick}
      style={{ width: "2.5rem", cursor: "pointer", textAlign: "right" }}
    >
      {props.text}
    </span>
  );
}
