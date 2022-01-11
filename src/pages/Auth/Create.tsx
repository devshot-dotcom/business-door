import * as React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  Flexbox,
  PasswordCriteria,
  CardBody,
} from "../../components/components";
import { useEmail, usePassword, useToast } from "../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { Authenticator } from "../../modules/Authenticator";
import { doPasswordsMatch } from "../../modules/MatchPasswords";

function Create() {
  const [emailState, dispatchEmail, isEmailValid] = useEmail();
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();
  const navigate = useNavigate();
  const makeToast = useToast();

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
      new Authenticator({
        makeToast: makeToast,
        data: {
          email: emailState.value,
          password: pswdState.value,
        },
        onSuccess: () => navigate("/auth"),
      }).createAccount();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <h3 className="h3">Create Your Account</h3>

        <Input
          type="email"
          state={emailState}
          changeHandler={(value) =>
            dispatchEmail({ type: "update", value: value })
          }
          focusHandler={() => dispatchEmail({ type: "default" })}
          placeholder="Your Email Address"
        />

        <PasswordCriteria password={pswdState.value}>
          <Input
            type="password"
            state={pswdState}
            changeHandler={(value) =>
              dispatchPswd({ type: "update", value: value })
            }
            focusHandler={() => dispatchPswd({ type: "default" })}
            placeholder="Your Password"
            hasTypeController={true}
          />
        </PasswordCriteria>

        <PasswordCriteria password={rePswdState.value}>
          <Input
            type="password"
            state={rePswdState}
            changeHandler={(value) =>
              dispatchRePswd({ type: "update", value: value })
            }
            focusHandler={() => dispatchRePswd({ type: "default" })}
            placeholder="Re-enter Password"
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

        <Flexbox justify="start" align="center" gap="smaller">
          <div className="paragraph">Already have an account?</div>
          <Link to="/auth" className="link">
            Login
          </Link>
        </Flexbox>
      </CardBody>
    </form>
  );
}

export { Create };
