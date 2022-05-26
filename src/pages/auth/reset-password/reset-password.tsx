import * as React from "react";
import { TextField, Button } from "../../../components";
import { usePassword, useAuthenticator } from "../../../hooks";
import { useNavigate } from "react-router-dom";
import { doPasswordsMatch } from "../../../modules/do-passwords-match";
import styles from "../auth.module.scss";

function ResetPassword() {
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();
  const navigate = useNavigate();
  const authenticator = useAuthenticator();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let errors = 0;

    isPswdValid() || ++errors;
    isRePswdValid() || ++errors;
    doPasswordsMatch(
      [pswdState.value, rePswdState.value],
      [dispatchPswd, dispatchRePswd]
    ) || ++errors;

    if (errors === 0) {
      authenticator.renewPassword({
        password: pswdState.value,
        boolBacks: {
          onSuccess: () => navigate("/home", { replace: true }),
        },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit} className={`${styles.form} v-gap`}>
      <div>
        <h1 className="text-h3">Reset Password</h1>
        <div className="text-small color-primary-subtle">
          Finally, time to get you a new one, don't forget it this time.
        </div>
      </div>

      <TextField
        as="input"
        type="password"
        state={pswdState}
        placeholder="Your Password"
        title="Please enter your new password"
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
        title="Please re-enter your new password"
        onChange={(e) =>
          dispatchRePswd({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchRePswd({ type: "default" })}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={pswdState.value === "" || rePswdState.value === ""}
      >
        Reset Password
      </Button>
    </form>
  );
}

export default ResetPassword;
