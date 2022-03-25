import { RwdBackgroundProps } from "./rwd-background.types";
import "./rwd-background.scss";

export const ResponsiveBackground = (props: RwdBackgroundProps) => {
  const {
    variant = "default",
    onMobile,
    onTablet,
    onLaptop,
    onDesktop,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [
    `bg-${variant}`,
    onMobile ? `bg-mobile-${onMobile}` : "",
    onTablet ? `bg-tablet-${onTablet}` : "",
    onLaptop ? `bg-laptop-${onLaptop}` : "",
    onDesktop ? `bg-desktop-${onDesktop}` : "",
    className,
  ];

  return (
    <div {...rest} className={classes.join(" ")}>
      {children}
    </div>
  );
};
