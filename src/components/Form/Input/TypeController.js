import React from "react";

function TypeController({ inputType, onClick }) {
  return (
    <button
      type="button"
      className="link type-controller"
      onClick={() => onClick(inputType === "password" ? "text" : "password")}
    >
      {inputType === "password" ? "show" : "hide"}
    </button>
  );
}

export { TypeController };
