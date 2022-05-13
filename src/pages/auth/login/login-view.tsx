import * as React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../../components";
import {
  TextField,
  TextFieldState,
  TextFieldActions,
} from "../../../components/text-field";
import { routes } from "../../../config";
import styles from "../auth.module.scss";

type Props = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  emailState: TextFieldState;
  dispatchEmail: React.Dispatch<TextFieldActions>;
  pswdState: TextFieldState;
  dispatchPswd: React.Dispatch<TextFieldActions>;
};

/**
 * The `VIEW` for the login page.
 * @returns {JSX.Element}
 *
 * @author kashan-ahmad
 * @version 1.0.0
 */
const LoginView = ({
  onSubmit,
  emailState,
  dispatchEmail,
  pswdState,
  dispatchPswd,
}: Props): JSX.Element => (
  <form onSubmit={onSubmit} className={`${styles.form} v-gap`}>
    <h1 className="text-heading">Log In</h1>
    <TextField
      as="input"
      type="email"
      state={emailState}
      placeholder="Your Email Address"
      title="Please enter your email address"
      onChange={(e) => dispatchEmail({ type: "update", value: e.target.value })}
      onFocus={() => dispatchEmail({ type: "default" })}
    />
    <TextField
      as="input"
      type="password"
      state={pswdState}
      placeholder="Your Password"
      title="Please enter your password"
      onChange={(e) => dispatchPswd({ type: "update", value: e.target.value })}
      onFocus={() => dispatchPswd({ type: "default" })}
    />

    <Link to={routes.verifyAccount.PATH} className="text-link">
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
        to={routes.createAccount.PATH}
        className="text-link"
        title="Create an account"
      >
        Create
      </Link>
    </div>
  </form>
);

export default LoginView;
