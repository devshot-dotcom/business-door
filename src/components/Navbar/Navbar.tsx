import { Outlet } from "react-router-dom";
import { breakpoints } from "../../config/breakpoints";
import { NavbarDesktop } from "./NavbarDesktop";
import { NavbarMobile } from "./NavbarMobile";
import "./Navbar.scss";

const Navbar = () => {
  const navbar = window.matchMedia(`(min-width: ${breakpoints.tablet.px})`)
    .matches ? (
    <NavbarDesktop />
  ) : (
    <NavbarMobile />
  );

  return (
    <>
      {navbar}
      <Outlet />
    </>
  );
};

export { Navbar };
