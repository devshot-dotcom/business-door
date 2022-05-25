import NavbarLinkMobile from "./navbar-link-mobile";
import NavbarLinkDesktop from "./navbar-link-desktop";
import { NavbarLinkProps } from "./navbar-link-types";
import { useMatch, useNavigate, useResolvedPath } from "react-router-dom";

/**
 * A custom navbar link component.
 * It's a path-curious, a variant-based, and stateful component that can be used to render a link in the navbar.
 * @returns {JSX.Element}
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
function NavbarLink({
  to,
  icon,
  text,
  className = "",
  variant = "mobile",
  activeClassName = "",
}: NavbarLinkProps): JSX.Element {
  const navigate = useNavigate();

  // Resolve organized information from a plain URL.
  const resolved = useResolvedPath(to);

  // Use the resolved information to check if the current path is active.
  // @see https://stackblitz.com/github/remix-run/react-router/tree/main/examples/custom-link?file=src%2FApp.tsx
  const match = useMatch({ path: resolved.pathname, end: false });

  // The variant to be used.
  const Component = {
    mobile: NavbarLinkMobile,
    desktop: NavbarLinkDesktop,
  }[variant];

  return (
    <li
      tabIndex={0}
      onClick={() => navigate(to)}
      className={`${!match ? "" : activeClassName} ${className}`}
    >
      <Component icon={icon} text={text} />
    </li>
  );
}

export default NavbarLink;
