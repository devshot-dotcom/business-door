import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faCreditCard,
  faUserCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import { routes } from "../../config";

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
    to: routes.landing.PATH,
  },
  {
    text: "Cards",
    icon: faCreditCard,
    to: routes.cards.PATH,
  },
  {
    text: "Profile",
    icon: faUserCircle,
    to: routes.profile.PATH,
  },
  {
    text: "Settings",
    icon: faCog,
    to: routes.error404.PATH,
  },
];

export default navItems;
