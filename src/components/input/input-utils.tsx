import {
  faCheck,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { InputVariants } from ".";

export function getIcon(variant: InputVariants) {
  return {
    default: faCheck,
    valid: faCheckCircle,
    invalid: faExclamationCircle,
  }[variant];
}
