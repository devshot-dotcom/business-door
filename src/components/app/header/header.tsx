import { Logo } from "../..";
import styles from "./header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo size="large" />
    </header>
  );
};
