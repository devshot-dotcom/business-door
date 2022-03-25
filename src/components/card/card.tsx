import { FC } from "react";
import { CardProps } from "./card-types";
import styles from "./card.module.scss";

const Card: FC<CardProps> = (props) => {
  const {
    focusable = false,
    outline = "none",
    background = "default",
    shadow = "default",
    padding = "medium",
    gap = "medium",
    className = "",
    children,
    ...rest
  } = props;

  const classes = [
    styles.card,
    styles[focusable ? "focusable" : ""],
    styles[`outline-${outline}`],
    styles[`background-${background}`],
    styles[`shadow-${shadow}`],
    styles[`padding-${padding}`],
    styles[`gap-${gap}`],
    className,
  ];

  return (
    <article
      {...rest}
      className={classes.join(" ")}
      tabIndex={focusable ? 0 : -1}
    >
      {children}
    </article>
  );
};

export { Card };
