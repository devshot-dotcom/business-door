import { Header, Footer, NextToNav, Sidebar, BlobCard } from "../../components";
import { Outlet } from "react-router-dom";
import cover from "../../assets/illustrations/monochrome/lady-employee-working-in-office.png";
import styles from "./auth.module.scss";

export const Auth = () => {
  return (
    <>
      <section id="auth" className={styles.auth}>
        <Header />
        <NextToNav className={styles.wrapper}>
          <article className={styles.grid}>
            <Outlet context={{ className: styles.form }} />
            <BlobCard cover={cover} className="hide show-on-desktop" />
          </article>
        </NextToNav>
      </section>
      <Sidebar className="hide show-when-sidebar-appears" />
      <Footer />
    </>
  );
};
