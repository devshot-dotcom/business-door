import { useInput } from "./hooks";
import { patterns } from "../helpers/regex";

function useEmail() {
  const [emailState, dispatchEmail] = useInput();

  const isEmailValid = () => {
    const isValid = patterns.EMAIL.test(emailState.value);

    if (!isValid) {
      dispatchEmail({
        type: "invalid",
        tooltip: {
          label: "Invalid Email Address 😥",
          isShownForever: true,
        },
      });
    }

    return isValid;
  };

  return [emailState, dispatchEmail, isEmailValid];
}

export { useEmail };
