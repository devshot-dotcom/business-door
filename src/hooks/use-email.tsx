import { useInput } from ".";
import { InputActions, InputStateType } from "../components/input";
import { patterns } from "../helpers/regex";

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
