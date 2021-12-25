import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";

function usePassword() {
  const [pswdState, dispatchPswd] = useInput();

  const validatePswd = () => {
    const condition = patterns.PASSWORD.test(pswdState.value);

    if (!condition) {
      dispatchPswd({
        type: "invalid",
        tooltip: {
          label: "Invalid Password, criteria mismatch 💔",
          isShownForever: true,
        },
      });
    }

    return condition;
  };

  return [pswdState, dispatchPswd, validatePswd];
}

export { usePassword };
