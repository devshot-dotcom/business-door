import { Outlet } from "react-router-dom";
import { Footer, Header, NextToNav, Sidebar } from "../../components";
import styles from "./error.module.scss";

export const Error = () => {
  return (
    <>
      <div className={styles.error}>
        <Header />
        <NextToNav>
          <Outlet />
        </NextToNav>
      </div>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
