import * as React from "react";
import { Flexbox } from "../../components";

const CardBody: React.FC<React.ComponentPropsWithoutRef<"div">> = (props) => {
  return (
    <Flexbox
      direction="column"
      gap="medium"
      className={`card-body ${props.className ?? ""}`}
    >
      {props.children}
    </Flexbox>
  );
};

export { CardBody };