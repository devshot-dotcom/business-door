import { breakpoints } from "../../../config/breakpoints";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return window.matchMedia(`(min-width: ${breakpoints.tablet.px})`).matches ? (
    <NavbarDesktop className={styles["nav-desktop"]} />
  ) : (
    <NavbarMobile className={styles["nav-mobile"]} />
  );
};

export { Navbar };
