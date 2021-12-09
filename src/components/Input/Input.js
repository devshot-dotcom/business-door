import React, { useState, useRef } from "react";
import InputField from "./InputField";
import TypeSwapper from "./TypeSwapper";
import RightIcon from "./RightIcon";
import "../../sass/Input.scss";

export default function Input(props) {
  const [type, setType] = useState(props.type ?? "text");
  const [hasTypeSwapper] = useState(props.type === "password");
  const inputRef = useRef();

  return (
    <div
      onClick={() => inputRef.current.focus()}
      className={`inputContainer input${props.state?.style ?? "Default"}`}
    >
      <InputField
        type={type}
        size={props.size}
        useRef={inputRef}
        state={props.state}
        setState={props.setState}
        onChange={props.onChange}
        placeholder={props.placeholder}
      />
      {/* Returns the TypeSwapper iff style isn't valid or invalid, and hasTypeSwapper is true. */}
      {props.state?.style !== "Invalid" &&
        props.state?.style !== "Valid" &&
        hasTypeSwapper && <TypeSwapper type={type} setType={setType} />}
      <RightIcon style={props.state?.style} tooltip={props.state?.tooltip} />
    </div>
  );
}
