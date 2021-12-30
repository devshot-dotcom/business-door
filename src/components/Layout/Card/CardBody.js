import React from "react";
import { Flexbox } from "../../components";

function CardBody({ className, children }) {
  return (
    <Flexbox
      direction="column"
      gap="medium"
      className={`card-body ${className}`}
    >
      {children}
    </Flexbox>
  );
}

export { CardBody };
