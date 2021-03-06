import { useInput } from ".";
import { InputActions, InputStateType } from "../components/input";
import { patterns } from "../helpers/regex";

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
