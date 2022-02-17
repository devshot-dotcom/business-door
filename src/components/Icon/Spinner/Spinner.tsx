import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { themeSizes, themeSpeeds } from "../../../config/theme";
import "./Spinner.scss";

interface Props {
  size?: themeSizes;
  speed?: themeSpeeds;
}

function Spinner({ size = "medium", speed = "medium" }: Props) {
  return (
    <FontAwesomeIcon
      icon={faCircleNotch}
      className={`coffee-spinner size-${size} speed-${speed}`}
    />
  );
}

export { Spinner };
