import { NavbarLinkVariantProps } from ".";
import { Icon } from "../../../components";

function NavbarLinkDesktop({
  icon,
  text,
}: NavbarLinkVariantProps): JSX.Element {
  return <Icon src={icon} title={text} />;
}

export default NavbarLinkDesktop;
