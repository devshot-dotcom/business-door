import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Spinner.scss";

interface SpinnerProps {
  size?: "smallest" | "smaller" | "default" | "medium" | "larger" | "largest";
  speed?: "slow" | "default" | "fast";
}

function Spinner({ size = "default", speed = "default" }: SpinnerProps) {
  return (
    <FontAwesomeIcon
      icon={faCircleNotch}
      className={`spinner size-${size} speed-${speed}`}
    />
  );
}

export { Spinner };
