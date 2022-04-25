import { useInput } from ".";
import { TextFieldActions, TextFieldStateType } from "../components/types";
import { PATTERNS } from "../helpers/regex";

function usePassword(): TextFieldStateType {
  const [pswdState, dispatchPswd] = useInput();

  const isPasswordValid = (): boolean => {
    const isValid = PATTERNS.PASSWORD.test(pswdState.value);

    if (!isValid) {
      const action: TextFieldActions = {
        type: "invalid",
        tooltip: {
          label: "Invalid Password, criteria mismatch 💔",
          isShownForever: true,
        },
      };
      dispatchPswd(action);
    }

    return isValid;
  };

  return [pswdState, dispatchPswd, isPasswordValid];
}

export { usePassword };
