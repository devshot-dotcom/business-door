import React from "react";

export default function TypeSwapper(props) {
  return (
    <span
      tabIndex="0"
      className="link"
      onClick={
        props.type === "password"
          ? () => props.setType("text")
          : () => props.setType("password")
      }
      style={{ width: "2.5rem", cursor: "pointer", textAlign: "right" }}
    >
      {props.type === "password" ? "show" : "hide"}
    </span>
  );
}
