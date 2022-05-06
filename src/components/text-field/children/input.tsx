import { ComponentPropsWithoutRef, useState } from "react";

export const Input = (props: ComponentPropsWithoutRef<"input">) => {
  // The type to be monitored for change.
  // Based upon the type passed as HTML attribute
  // to make sure that the swapper is shown only
  // when the HTML type is password.
  const [type, setType] = useState(props.type);

  return (
    <>
      <input {...props} type={type} />
      {props.type === "password" && (
        <button
          type="button"
          className="text-paragraph text-link"
          onClick={() => setType(type === "password" ? "text" : "password")}
          aria-hidden="true"
        >
          {type === "password" ? "Show" : "Hide"}
        </button>
      )}
    </>
  );
};
