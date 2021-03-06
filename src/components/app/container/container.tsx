import { Outlet } from "react-router-dom";
import { Main, Navbar } from "..";
import styles from "./container.module.scss";

const Container = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <Main data-no-sidebar>
        <Outlet />
      </Main>
    </div>
  );
};

export { Container };
