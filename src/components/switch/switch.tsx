import * as React from "react";
import "./switch.scss";

interface SwitchProps extends React.ComponentPropsWithoutRef<"span"> {
  id?: string;
  label: string;
  checked: boolean;
  checkHandler: (checked: boolean) => void;
}

export const Switch: React.FC<SwitchProps> = ({
  id,
  label,
  checked,
  checkHandler,
  className = "",
  ...rest
}) => {
  const switchRef = React.createRef<HTMLInputElement>();

  return (
    <span
      role="switch"
      aria-checked={checked}
      className={`switch ${className}`}
      {...rest}
    >
      <label htmlFor={id} className="pre-title">
        {label}
      </label>
      <button
        className={`switch__slider ${checked ? "checked" : ""}`}
        onClick={() => switchRef.current?.click()}
      >
        <span className="switch__thumb" />
      </button>
      <input
        type="checkbox"
        checked={checked}
        onChange={(event) => checkHandler(event.target.checked)}
        ref={switchRef}
        hidden={true}
      />
    </span>
  );
};
