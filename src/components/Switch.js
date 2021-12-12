import React, { useRef } from "react";
import "../sass/Switch.scss";

function Switch(props) {
  const switchRef = useRef();

  return (
    <span className="SwitchContainer">
      <label htmlFor={props.id} className="preTitle">
        {props.label}
      </label>
      <button className="Switch" onClick={() => switchRef.current?.click()}>
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
