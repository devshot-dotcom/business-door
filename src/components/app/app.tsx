import { FC } from "react";
import styles from "./app.module.scss";

const App: FC = ({ children }) => {
  return <div className={styles.app}>{children}</div>;
};

export { App };
