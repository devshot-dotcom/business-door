import { Outlet } from "react-router-dom";
import { Footer, Header, NextToNav, Sidebar } from "../../components";
import styles from "./error.module.scss";

const Error = () => (
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

export default Error;
