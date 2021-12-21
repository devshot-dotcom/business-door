import React from "react";
import { Flexbox } from "../../components";

function CardBody({ children }) {
  return (
    <Flexbox direction="column" gap="medium" className="card-body">
      {children}
    </Flexbox>
  );
}

export { CardBody };
