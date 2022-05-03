import { BREAKPOINTS } from "../../../config";
import { NavbarDesktop } from "./navbar-desktop";
import { NavbarMobile } from "./navbar-mobile";
import styles from "./navbar.module.scss";

const Navbar = () => {
  return window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET.px})`).matches ? (
    <NavbarDesktop className={styles["nav-desktop"]} />
  ) : (
    <NavbarMobile className={styles["nav-mobile"]} />
  );
};

export { Navbar };
