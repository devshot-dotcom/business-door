import { Icon } from "../../../components";
import { NavbarLinkVariantProps } from "./navbar-link-types";

/**
 * The navbar link for the `NavbarMobile` component.
 * @returns {JSX.Element}
 * @version 1.0.0
 * @author [kashan-ahmad](https://github.com/kashan-ahmad)
 */
function NavbarLinkMobile({ icon, text }: NavbarLinkVariantProps): JSX.Element {
  return <Icon src={icon} title={text} />;
}

export default NavbarLinkMobile;
