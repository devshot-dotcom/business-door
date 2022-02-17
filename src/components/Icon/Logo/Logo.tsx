import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../../config/context/ThemeContext";
import { themeSizes } from "../../../config/theme";
import { DynamicModule } from "../../../helpers/types";
import "./Logo.scss";

type Props = {
  size?: themeSizes;
};

const Logo = ({ size = "medium" }: Props) => {
  const { theme } = useContext(ThemeContext);
  const [logo, setLogo] = useState<DynamicModule>();

  useEffect(() => {
    import(`../../../assets/logo/@${theme}/logo-plain.svg`).then(
      (logo: DynamicModule) => setLogo(logo)
    );
  }, [theme]);

  return (
    <div className={`coffee-logo logo-${size}`}>
      <img src={logo?.default} alt="Business Door's Logo" />
    </div>
  );
};

export { Logo };
