import React, { useRef } from "react";
import "../sass/Switch.scss";

function Switch(props) {
  const switchRef = useRef();

  return (
    <span className={`SwitchContainer ${props.className}`} style={props.style}>
      <label htmlFor={props.id} className="preTitle">
        {props.label}
      </label>
      <button
        className={`Switch ${props.checked && "isChecked"}`}
        onClick={() => switchRef.current?.click()}
      >
        <span className="Thumb" />
      </button>
      <input
        type="checkbox"
        checked={props.checked}
        onChange={(event) => props.onChange(event.target.checked)}
        ref={switchRef}
        hidden={true}
      />
    </span>
  );
}

export default Switch;
