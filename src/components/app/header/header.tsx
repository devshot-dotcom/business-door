import { Link } from "react-router-dom";
import { NextToNav } from "..";
import { Logo } from "../..";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <NextToNav>
      <header className={styles.header}>
        <Link to="/">
          <Logo size="large" />
        </Link>
      </header>
    </NextToNav>
  );
};
