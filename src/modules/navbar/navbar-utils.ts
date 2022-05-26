import {
  faHome,
  faCreditCard,
  faUserCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type NavItem = {
  /**
   * The path where the link points at.
   *
   * @type {string}
   */
  to: string;

  /**
   * The label or title of the link.
   *
   * @type {string}
   */
  text: string;

  /**
   * The icon of the link.
   *
   * @type {IconProp}
   */
  icon: IconProp;
};

const navItems: NavItem[] = [
  {
    text: "Home",
    icon: faHome,
    to: "/landing",
  },
  {
    text: "Cards",
    icon: faCreditCard,
    to: "/cards",
  },
  {
    text: "Profile",
    icon: faUserCircle,
    to: "/profile",
  },
  {
    text: "Settings",
    icon: faCog,
    to: "/settings",
  },
];

export default navItems;
