import { RwdBackgroundProps } from "./rwd-background.types";
import "./rwd-background.scss";

const ResponsiveBackground = (props: RwdBackgroundProps) => {
  const {
    bg = "default",
    bgOnMobile,
    bgOnTablet,
    bgOnLaptop,
    bgOnDesktop,
    className = "",
    children,
    ...rest
  } = props;

  const classes = [
    `bg-${bg}`,
    bgOnMobile ? `bg-mobile-${bgOnMobile}` : "",
    bgOnTablet ? `bg-tablet-${bgOnTablet}` : "",
    bgOnLaptop ? `bg-laptop-${bgOnLaptop}` : "",
    bgOnDesktop ? `bg-desktop-${bgOnDesktop}` : "",
    className,
  ];

  return (
    <div {...rest} className={classes.join(" ")}>
      {children}
    </div>
  );
};

export { ResponsiveBackground };
