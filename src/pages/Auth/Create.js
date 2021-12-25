import React from "react";
import { Link } from "react-router-dom";
import {
  Input,
  Button,
  Flexbox,
  PasswordCriteria,
  CardBody,
} from "../../components/components";
import { useEmail, usePassword, useAuth } from "../../hooks/hooks";
import { redirectTime } from "../../helpers/integers";
import { useNavigate } from "react-router-dom";

function Create() {
  const [emailState, dispatchEmail, validateEmail] = useEmail();
  const [pswdState, dispatchPswd, validatePswd] = usePassword();
  const [rePswdState, dispatchRePswd, validateRePswd] = usePassword();
  const createAccount = useAuth("create");
  const navigate = useNavigate();

  function onCreated() {
    setTimeout(() => {
      navigate("/auth");
    }, redirectTime);
  }

  /**
   * Match the passwords and alter their variants with `invalid`
   * if they don't match.
   *
   * @return {Boolean} `true` if the passwords match and `false` otherwise.
   */
  function matchPasswords() {
    // The match between the values.
    const result = pswdState.value === rePswdState.value;

    // In case the match doesn't happen.
    if (!result) {
      dispatchPswd({
        type: "invalid",
        tooltip: {
          label: "Passwords don't match 😥",
          isShownForever: true,
        },
      });

      dispatchRePswd({
        type: "invalid",
        tooltip: {
          label: "Passwords don't match 🤧",
          isShownForever: true,
        },
      });
    }

    return result;
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Error counter.
    let errors = 0;

    // Counter is increased by `1` at each validation error.
    if (!validateEmail()) ++errors;
    if (!validatePswd()) ++errors;
    if (!validateRePswd()) ++errors;
    if (!matchPasswords()) ++errors;

    // In case counter stays at 0 (No errors)
    if (errors === 0) {
      createAccount({
        email: emailState.value,
        password: pswdState.value,
        onSuccess: onCreated,
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <h3 className="h3">Create Your Account</h3>

        <Input
          type="email"
          state={emailState}
          onChange={(value) => dispatchEmail({ type: "update", value: value })}
          onFocus={() => dispatchEmail({ type: "default" })}
          placeholder="Your Email Address"
        />

        <PasswordCriteria password={pswdState.value}>
          <Input
            type="password"
            state={pswdState}
            onChange={(value) => dispatchPswd({ type: "update", value: value })}
            onFocus={() => dispatchPswd({ type: "default" })}
            placeholder="Your Password"
            controlType={true}
          />
        </PasswordCriteria>

        <PasswordCriteria password={rePswdState.value}>
          <Input
            type="password"
            state={rePswdState}
            onChange={(value) =>
              dispatchRePswd({ type: "update", value: value })
            }
            onFocus={() => dispatchRePswd({ type: "default" })}
            placeholder="Re-enter Password"
            controlType={true}
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

        <Flexbox align="row" gap="smaller">
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
