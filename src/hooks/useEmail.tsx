import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";
import { InputActions } from "../helpers/types";
import { InputStateType } from "../helpers/types";

function useEmail(): InputStateType {
  const [emailState, dispatchEmail] = useInput();

  const isEmailValid = (): boolean => {
    const isValid = patterns.EMAIL.test(emailState.value);

    if (!isValid) {
      const action: InputActions = {
        type: "invalid",
        tooltip: {
          label: "Invalid Email Address 😥",
          isShownForever: true,
        },
      };
      dispatchEmail(action);
    }

    return isValid;
  };

  return [emailState, dispatchEmail, isEmailValid];
}

export { useEmail };
