import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isString } from "../../helpers/functions";
import { Spinner } from "../components";

interface ToastIconProps {
  variant: string;
  icon?: string | IconProp;
}

function ToastIcon({ variant, icon }: ToastIconProps): JSX.Element {
  const defaultIcon = <span>🚀</span>;

  /** Return an icon or an emoji based on the variant. */
  function stateBasedIcon() {
    return (
      {
        default: defaultIcon,
        valid: <FontAwesomeIcon icon={faCheckCircle} />,
        invalid: <FontAwesomeIcon icon={faExclamationCircle} />,
        loading: <Spinner speed="slow" />,
      }[variant] || defaultIcon
    );
  }

  // If the icon isn't provided.
  if (icon === undefined) return stateBasedIcon();

  // If the provided icon is an element.
  if (!isString(icon)) return <FontAwesomeIcon icon={icon as IconProp} />;

  // Otherwise, it must be the source of an image.
  return <img src={icon as string} alt="🚀" />;
}

export { ToastIcon };
