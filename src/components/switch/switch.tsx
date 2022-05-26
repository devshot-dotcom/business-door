import * as React from "react";
import "./switch.scss";

type SwitchProps = {
  label?: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
} & Omit<React.ComponentPropsWithoutRef<"span">, "onChange">;

function Switch({
  id,
  label,
  checked,
  onChange,
  className = "",
  ...rest
}: SwitchProps) {
  const switchRef = React.createRef<HTMLInputElement>();

  return (
    <span
      {...rest}
      role="switch"
      aria-checked={checked}
      className={`switch ${className}`}
    >
      {label && (
        <label htmlFor={id} className="text-small text-uppercase">
          {label}
        </label>
      )}
      <button
        className={`switch__slider ${checked ? "checked" : ""}`}
        onClick={() => switchRef.current?.click()}
      >
        <span className="switch__thumb" />
      </button>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(event) => onChange(event.target.checked)}
        ref={switchRef}
        hidden={true}
      />
    </span>
  );
}

export default Switch;
