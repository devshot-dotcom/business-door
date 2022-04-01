import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button } from "../../../components";
import { useInput, useAuthenticator } from "../../../hooks";
import { ROUTES } from "../../../config";
import styles from "../auth.module.scss";

export const Login = () => {
  const [emailState, dispatchEmail] = useInput();
  const [pswdState, dispatchPswd] = useInput();

  const navigate = useNavigate();
  const authenticator = useAuthenticator();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authenticator.login({
      email: emailState.value,
      password: pswdState.value,
      boolBacks: {
        onSuccess: () => navigate(-1),
      },
    });
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} v-gap`}>
      <h1 className={styles.heading}>Log In</h1>
      <Input
        type="email"
        state={emailState}
        placeholder="Your Email Address"
        title="Please enter your email address"
        onChange={(e) =>
          dispatchEmail({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchEmail({ type: "default" })}
      />
      <Input
        type="password"
        state={pswdState}
        placeholder="Your Password"
        title="Please enter your password"
        onChange={(e) =>
          dispatchPswd({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchPswd({ type: "default" })}
      />

      <Link to={ROUTES.verifyAccount.path} className="text-link">
        Forgot Password
      </Link>

      <Button
        type="submit"
        disabled={emailState.value === "" || pswdState.value === ""}
      >
        Log In
      </Button>

      <div className="h-gap-small">
        <span className="text-paragraph">Don't have an account?</span>
        <Link
          to={ROUTES.createAccount.path}
          className="text-link"
          title="Create an account"
        >
          Create
        </Link>
      </div>
    </form>
  );
};
