import { Logo } from "../../../components";
import { env } from "../../../config";
import NavbarLink from "../navbar-link";
import navItems from "../navbar-utils";
import styles from "./navbar-desktop.module.scss";

function NavbarDesktop() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.first}>
        <li>
          <div className="text-smaller text-subtle">Menu</div>
        </li>
        {navItems.map((item, key) => (
          <NavbarLink
            key={key}
            {...item}
            variant="desktop"
            className={styles["nav-link"]}
            activeClassName={styles.active}
          />
        ))}
      </ul>
      <ul className={styles.last}>
        <Logo size="small" />
        <li className="text-small">{env.app.version.NAME}</li>
      </ul>
    </nav>
  );
}

export default NavbarDesktop;
