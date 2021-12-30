import React from "react";
import {
  Flexbox,
  Input,
  Button,
  PasswordCriteria,
  CardBody,
} from "../../../components/components";
import { usePassword, useToast } from "../../../hooks/hooks";
import { Authenticator } from "../../../helpers/Authenticator";
import { useNavigate } from "react-router-dom";

function Renew() {
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();
  const navigate = useNavigate();
  const makeToast = useToast();

  /**
   * Match the passwords and alter their variants with `invalid`
   * if they don't match.
   *
   * @return {Boolean} `true` if the passwords match and `false` otherwise.
   */
  function doPswdsMatch() {
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
    let errors = 0;

    isPswdValid() || ++errors;
    isRePswdValid() || ++errors;
    doPswdsMatch() || ++errors;

    if (errors === 0) {
      Authenticator({
        makeToast: makeToast,
        data: {
          password: pswdState.value,
        },
        onSuccess: () => navigate("/home", { replace: true }),
      }).renewPassword();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <Flexbox direction="column" gap="smaller">
          <h3 className="h3">Reset Password</h3>
          <div className="smallText color-primary-subtle">
            Finally, time to get you a new one, don’t forget it this time
          </div>
        </Flexbox>

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
          disabled={pswdState.value === "" || rePswdState.value === ""}
        >
          Reset Password
        </Button>
      </CardBody>
    </form>
  );
}

export { Renew };
