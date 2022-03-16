import { Card, NextToNav, Sidebar } from "../../components";
import { Outlet } from "react-router-dom";
import { ThemeSwitcher } from "../../modules/modules";
import styles from "./auth.module.scss";

function Auth() {
  return (
    <>
      <section id="auth" className={styles.auth}>
        <NextToNav className={styles.wrapper}>
          <div className="auth__card-wrapper">
            <Card className="auth__card">
              <Outlet />
            </Card>
          </div>
        </NextToNav>
      </section>
      <Sidebar />
    </>
  );
}

export { Auth };
export { Login } from "./login";
export { Create } from "./create";
