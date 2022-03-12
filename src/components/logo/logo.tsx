import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../config/context/ThemeContext";
import { ThemeSizes } from "../../config/theme";
import { DynamicModule } from "../../helpers/types";
import styles from "./logo.module.scss";

type Props = {
  size?: ThemeSizes;
};

const Logo = ({ size = "medium" }: Props) => {
  const { theme } = useContext(ThemeContext);
  const [logo, setLogo] = useState<DynamicModule>();
  const classes = [styles.logo, styles[`logo-${size}`]];

  // dynamically import the logo based on the theme.
  useEffect(() => {
    import(`../../assets/logo/@${theme}/logo-plain.svg`).then(
      (logo: DynamicModule) => setLogo(logo)
    );
  }, [theme]);

  return (
    <div className={classes.join(" ")}>
      <img src={logo?.default} alt="Business Door's Logo" />
    </div>
  );
};

export { Logo };
