import { FC } from "react";
import { NextToNav } from "..";
import styles from "./sidebar.module.scss";

const Sidebar: FC = ({ children }) => {
  return (
    <aside className={styles.sidebar}>
      <NextToNav data-sidebar>{children}</NextToNav>
    </aside>
  );
};

export { Sidebar };
