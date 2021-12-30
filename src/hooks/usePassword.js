import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";

function usePassword() {
  const [pswdState, dispatchPswd] = useInput();

  const isPasswordValid = () => {
    const isValid = patterns.PASSWORD.test(pswdState.value);

    if (!isValid) {
      dispatchPswd({
        type: "invalid",
        tooltip: {
          label: "Invalid Password, criteria mismatch 💔",
          isShownForever: true,
        },
      });
    }

    return isValid;
  };

  return [pswdState, dispatchPswd, isPasswordValid];
}

export { usePassword };
