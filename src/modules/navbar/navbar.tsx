import React from "react";
import { BREAKPOINTS } from "../../config";
import NavbarDesktop from "./navbar-desktop";
import NavbarMobile from "./navbar-mobile";

/**
 * A simple navbar component that renders screensize-specific variants.
 * @returns {JSX.Element}
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
function Navbar(): JSX.Element {
  const condition = window.matchMedia(`(min-width: ${BREAKPOINTS.TABLET.px})`);

  const [isDesktop, setIsDesktop] = React.useState(condition.matches);

  React.useEffect(() => {
    window.addEventListener("resize", () => setIsDesktop(condition.matches));
  }, [condition]);

  return isDesktop ? <NavbarDesktop /> : <NavbarMobile />;
}

export default Navbar;
