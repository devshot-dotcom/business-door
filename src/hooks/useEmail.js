import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";

function useEmail() {
  const [emailState, dispatchEmail] = useInput();

  const validateEmail = () => {
    const condition = patterns.EMAIL.test(emailState.value);

    if (!condition) {
      dispatchEmail({
        type: "invalid",
        tooltip: {
          label: "Invalid Email Address 😥",
          isShownForever: true,
        },
      });
    }

    return condition;
  };

  return [emailState, dispatchEmail, validateEmail];
}

export { useEmail };
