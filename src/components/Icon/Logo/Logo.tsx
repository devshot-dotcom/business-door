import * as React from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../config/context/context";
import lightLogo from "../../../assets/logo/@light/logo-plain.svg";
import darkLogo from "../../../assets/logo/@dark/logo-plain.svg";
import "./Logo.scss";

interface LogoProps extends React.ComponentPropsWithoutRef<"div"> {
  size?: "smallest" | "smaller" | "default" | "medium" | "larger" | "largest";
}

const Logo: React.FC<LogoProps> = ({
  size = "default",
  className = "",
  children,
  ...rest
}) => {
  const { theme } = React.useContext(ThemeContext);

  return (
    <div
      className={`logo-container ${className}`}
      aria-label="Business Door's Logo"
      {...rest}
    >
      <Link to="/" aria-hidden="true">
        <img
          src={theme === "light" ? lightLogo : darkLogo}
          alt="Business Door Logo"
          className={`logo-${size}`}
        />
      </Link>
    </div>
  );
};

export { Logo };
