import {
  faCheck,
  faCheckCircle,
  faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { TextFieldVariants } from ".";

export function getIcon(variant: TextFieldVariants) {
  return {
    default: faCheck,
    valid: faCheckCircle,
    invalid: faExclamationCircle,
  }[variant];
}
