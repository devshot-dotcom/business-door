import * as React from "react";
import { Link } from "react-router-dom";
import { Input, Button, PasswordCriteria } from "../../components/components";
import { useEmail, usePassword, useAuthenticator } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { doPasswordsMatch } from "../../modules/MatchPasswords";

function Create() {
  const [emailState, dispatchEmail, isEmailValid] = useEmail();
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();
  const navigate = useNavigate();
  const authenticator = useAuthenticator();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Error counter.
    let errors = 0;

    // Counter is increased by `1` at each validation error.
    isEmailValid() || ++errors;
    isPswdValid() || ++errors;
    isRePswdValid() || ++errors;
    doPasswordsMatch(
      [pswdState.value, rePswdState.value],
      [dispatchPswd, dispatchRePswd]
    ) || ++errors;

    // In case counter stays at 0 (No errors)
    if (errors === 0) {
      authenticator.createAccount({
        email: emailState.value,
        password: pswdState.value,
        boolBacks: { onSuccess: () => navigate("/auth") },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="h3">Create Your Account</h1>

      <Input
        type="email"
        state={emailState}
        placeholder="Your Email Address"
        title="Please enter your email address"
        changeHandler={(value) =>
          dispatchEmail({ type: "update", value: value })
        }
        focusHandler={() => dispatchEmail({ type: "default" })}
      />

      <PasswordCriteria password={pswdState.value}>
        <Input
          type="password"
          state={pswdState}
          placeholder="Your Password"
          title="Please enter your password"
          changeHandler={(value) =>
            dispatchPswd({ type: "update", value: value })
          }
          focusHandler={() => dispatchPswd({ type: "default" })}
          hasTypeController={true}
        />
      </PasswordCriteria>

      <PasswordCriteria password={rePswdState.value}>
        <Input
          type="password"
          state={rePswdState}
          placeholder="Re-enter Password"
          title="Please re-enter your password"
          changeHandler={(value) =>
            dispatchRePswd({ type: "update", value: value })
          }
          focusHandler={() => dispatchRePswd({ type: "default" })}
          hasTypeController={true}
        />
      </PasswordCriteria>

      <Button
        type="submit"
        variant="primary"
        disabled={
          emailState.value === "" ||
          pswdState.value === "" ||
          rePswdState.value === ""
        }
      >
        Create Account
      </Button>

      <div>
        <div className="paragraph">Already have an account?</div>
        <Link to="/auth" className="link" title="Log in to your account">
          Login
        </Link>
      </div>
    </form>
  );
}

export { Create };
