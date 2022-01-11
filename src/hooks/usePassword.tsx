import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";
import { InputActions } from "../helpers/types";
import { InputStateType } from "../helpers/types";

function usePassword(): InputStateType {
  const [pswdState, dispatchPswd] = useInput();

  const isPasswordValid = (): boolean => {
    const isValid = patterns.PASSWORD.test(pswdState.value);

    if (!isValid) {
      const action: InputActions = {
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
