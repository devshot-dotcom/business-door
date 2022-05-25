import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type NavbarLinkVariantProps = {
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

export type NavbarLinkProps = {
  /**
   * The path where the link points at.
   *
   * @type {string}
   */
  to: string;

  /**
   * The class representing the default styles of the link.
   *
   * @type {string}
   */
  className?: string;

  /**
   * The class representing the active-state styles of the link.
   *
   * @type {string}
   */
  activeClassName?: string;

  /**
   * The variant of the link.
   *
   * @type {"mobile" | "desktop"}
   */
  variant?: "mobile" | "desktop";
} & NavbarLinkVariantProps;
