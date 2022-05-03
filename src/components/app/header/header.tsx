import { NextToNav } from "..";
import { Logo } from "../..";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <NextToNav>
      <header className={styles.header}>
        <Logo size="large" />
      </header>
    </NextToNav>
  );
};
