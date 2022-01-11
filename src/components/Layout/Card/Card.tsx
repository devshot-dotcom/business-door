import "./Card.scss";
import { Flexbox } from "../../components";

interface CardProps extends React.ComponentPropsWithoutRef<"div"> {
  singular?: boolean;
}

/** Configurable card component.
 * Provide a value for singular [`true` or `false`] to ensure that the card will be alone in the center of the page or not.
 */
const Card: React.FC<CardProps> = ({ children, singular, ...rest }) => {
  return (
    <article
      {...rest}
      className={`card padding-medium ${singular ? "singular" : ""}`}
    >
      <Flexbox direction="column" gap="medium" align="stretch">
        {children}
      </Flexbox>
    </article>
  );
};

export { Card };
export { CardBody } from "./CardBody";
