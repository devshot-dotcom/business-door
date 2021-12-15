import { patterns } from "../../utils";

/**
 * Test the `New Password` and `Re-entered Password` using regex and check for a match between them.
 *
 * Password states and state setters are required as the method is automated and sets the state to `Invalid` if there is an error.
 */
function testPasswords(
  passwordState,
  setPasswordState,
  rePasswordState,
  setRePasswordState
) {
  // If passwords don't match.
  if (passwordState.value !== rePasswordState.value) {
    setPasswordState({
      value: passwordState.value,
      style: "Invalid",
      tooltip: {
        text: "Same here, they don't match 💔",
        position: "top-left",
      },
    });
    setRePasswordState({
      value: rePasswordState.value,
      style: "Invalid",
      tooltip: {
        text: "Passwords don't match ❌",
        position: "top-left",
        showAlways: true,
      },
    });

    return;
  }

  // If password is invalid.
  if (patterns.PASSWORD.test(passwordState.value)) {
    setPasswordState({
      value: passwordState.value,
      style: "Invalid",
      tooltip: {
        text: "Invalid Password, criteria mismatch 🤷‍♂️",
        position: "top-left",
        showAlways: true,
      },
    });
  }

  // If password is invalid.
  if (patterns.PASSWORD.test(rePasswordState.value)) {
    setRePasswordState({
      value: rePasswordState.value,
      style: "Invalid",
      tooltip: {
        text: "Invalid Password, criteria mismatch 🤷‍♀️",
        position: "top-left",
        showAlways: true,
      },
    });
  }
}

export { testPasswords };
