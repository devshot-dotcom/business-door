import { useInput } from ".";
import { TextFieldActions, TextFieldStateType } from "../components/types";
import { PATTERNS } from "../helpers/regex";

function useEmail(): TextFieldStateType {
  const [emailState, dispatchEmail] = useInput();

  const isEmailValid = (): boolean => {
    const isValid = PATTERNS.EMAIL.test(emailState.value);

    if (!isValid) {
      const action: TextFieldActions = {
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
