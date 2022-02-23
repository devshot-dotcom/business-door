import { ComponentPropsWithoutRef, FC } from "react";
import "./Card.scss";

interface Props extends ComponentPropsWithoutRef<"div"> {}

const Card: FC<Props> = ({ children, ...rest }) => {
  return (
    <article {...rest} className={`coffee-card`}>
      {children}
    </article>
  );
};

export { Card };
