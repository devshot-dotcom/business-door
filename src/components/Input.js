import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faExclamation,
} from "@fortawesome/free-solid-svg-icons";
import TypeSwapper from "./TypeSwapper";
import "../sass/Input.scss";

export default function Input(props) {
  const [type, setType] = useState(props.type ?? "text");
  const inputRef = useRef();

  // Just to get the disabled attribute.
  const getInput = () => {
    if (props.state.style === "Disabled") {
      return (
        <input
          type={type}
          placeholder={props.placeholder}
          value={props.state.value}
          disabled
        />
      );
    }

    // Otherwise
    return (
      <input
        size={props.size}
        ref={inputRef}
        type={type}
        placeholder={props.placeholder}
        value={props.state.value}
        onChange={(event) => props.onChange(event.target.value)}
        onFocus={() =>
          props.setState({
            value: props.state.value,
            style: "Active",
          })
        }
        onBlur={() =>
          props.setState({
            value: props.state.value,
            style: "Default",
          })
        }
      />
    );
  };

  // Returns a link that swaps the input type between text and password.
  const getSwapper = () => {
    // Do nothing if the swapper isn't required or the style is valid or invalid.
    if (
      props.hasTypeSwapper === false ||
      props.hasTypeSwapper === undefined ||
      props.state.style === "Valid" ||
      props.state.style === "Invalid"
    )
      return;

    // Otherwise, return a TextSwapper.
    return type === "password" ? (
      <TypeSwapper text="Show" onClick={() => setType("text")} />
    ) : (
      <TypeSwapper text="Hide" onClick={() => setType("password")} />
    );
  };

  // Returns the FontAwesomeIcon based on the input state.
  const getIcon = () => {
    const icon = {
      Valid: faCheck,
      Invalid: faExclamation,
      Disabled: faBan,
    }[props.state.style];

    if (icon !== undefined) {
      return <FontAwesomeIcon className="icon" icon={icon} />;
    }
  };

  return (
    <div
      onClick={() => inputRef.current.focus()}
      className={`inputContainer input${props.state.style ?? "Default"}`}
    >
      {getInput()}
      {getSwapper()}
      {getIcon()}
    </div>
  );
}
