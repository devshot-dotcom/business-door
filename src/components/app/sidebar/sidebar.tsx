import { NextToNav } from "..";
import { ResponsiveBackground } from "../../rwd";
import { Testimonials } from "./testimonials";
import { Tidbits } from "./tidbits";
import { SidebarProps } from "./sidebar-types";
import styles from "./sidebar.module.scss";

/**
 * A completely functional sidebar component that can be configured to either display one of the default variants or anything passed as it's children.
 *
 * The `Sidebar` must be a direct child of the `Main` component i.e; It must be in the top level heirarchy of a page, as every page is a direct child of the `Main` component.
 *
 * The sidebar beautifully becomes a part of the page on smaller devices and adjusts as a sleek sidebar when it's time using `position: absolute`.
 */
const Sidebar = (props: SidebarProps) => {
  const { children, rwd, variant = "tidbits" } = props;

  const classes = `${styles.sidebar} ${props.className}`;

  const Variant = {
    tidbits: Tidbits,
    testimonials: Testimonials,
  }[variant];

  return (
    <aside {...props} id="sidebar" className={classes}>
      <ResponsiveBackground {...rwd} className={styles.background}>
        <NextToNav data-sidebar>{children || <Variant />}</NextToNav>
      </ResponsiveBackground>
    </aside>
  );
};

export { Sidebar };
