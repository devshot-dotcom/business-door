import React from "react";

function InputField(props) {
  if (props.state.style === "Disabled") {
    return (
      <input
        type={props.type}
        placeholder={props.placeholder}
        value={props.state.value}
        disabled
      />
    );
  }

  // Otherwise
  return (
    <input
      ref={props.useRef}
      type={props.type}
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
}

export default InputField;
