import React from "react";
import { Flexbox } from "../../components";
import "./Card.scss";

/** Configurable card component.
 * Provide a value for singular [`true` or `false`] to ensure that the card will be alone in the center of the page or not.
 */
function Card({ children, singular, ariaLabel }) {
  return (
    <article
      aria-label={ariaLabel || ""}
      className={`card padding-medium ${singular && "singular"}`}
    >
      <Flexbox direction="column" gap="medium" align="stretch">
        {children}
      </Flexbox>
    </article>
  );
}

export { Card };
export { CardBody } from "./CardBody";
