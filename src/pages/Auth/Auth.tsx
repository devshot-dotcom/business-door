import { Header, Footer, NextToNav, Sidebar, BlobCard } from "../../components";
import { Outlet } from "react-router-dom";
import cover from "../../assets/illustrations/monochrome/lady-employee-working-in-office.png";
import styles from "./auth.module.scss";

export const Auth = () => {
  return (
    <>
      <section id="auth" className={styles.auth}>
        <NextToNav className={styles.wrapper}>
          <Header />
          <article className={styles.grid}>
            <Outlet />
            <BlobCard
              cover={cover}
              className="hide show-when-sidebar-appears"
            />
          </article>
        </NextToNav>
      </section>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
