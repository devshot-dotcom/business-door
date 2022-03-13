import { FC } from "react";
import { NextToNav } from "..";
import { ResponsiveBackground, RwdBackgroundProps } from "../../rwd";
import styles from "./sidebar.module.scss";

const Sidebar: FC<RwdBackgroundProps> = ({ children, ...rest }) => {
  return (
    <aside className={styles.sidebar}>
      <ResponsiveBackground {...rest} className={styles.background}>
        <NextToNav data-sidebar>{children}</NextToNav>
      </ResponsiveBackground>
    </aside>
  );
};

export { Sidebar };
