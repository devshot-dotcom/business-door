import { Outlet } from "react-router-dom";
import { Navbar } from "..";
import styles from "./container.module.scss";

const Container = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export { Container };
