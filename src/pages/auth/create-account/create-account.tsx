import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { TextField, Button } from "../../../components";
import { routes } from "../../../config";
import { useEmail, usePassword, useApi } from "../../../hooks";
import { doPasswordsMatch } from "../../../modules";
import { AuthApi } from "../../../hooks/use-api";
import styles from "../auth.module.scss";

function CreateAccount() {
  const navigate = useNavigate();
  const api = useApi("auth") as AuthApi;
  const [emailState, dispatchEmail, isEmailValid] = useEmail();
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();

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
      api.createAccount(emailState.value, pswdState.value, {
        onSuccess: () => navigate("/auth"),
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} v-gap`}>
      <h1 className={styles.heading}>Create Your Account</h1>

      <TextField
        as="input"
        type="email"
        state={emailState}
        placeholder="Your Email Address"
        title="Please enter your email address"
        onChange={(e) =>
          dispatchEmail({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchEmail({ type: "default" })}
      />
      <TextField
        as="input"
        type="password"
        state={pswdState}
        placeholder="Your Password"
        title="Please enter your password"
        onChange={(e) =>
          dispatchPswd({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchPswd({ type: "default" })}
      />

      <TextField
        as="input"
        type="password"
        state={rePswdState}
        placeholder="Re-enter Password"
        title="Please re-enter your password"
        onChange={(e) =>
          dispatchRePswd({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchRePswd({ type: "default" })}
      />

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

      <div className="h-gap-small">
        <span className="text-paragraph">Already have an account?</span>
        <Link
          to={routes.login.PATH}
          className="text-link"
          title="Log in to your account"
        >
          Login
        </Link>
      </div>
    </form>
  );
}

export default CreateAccount;
