import * as React from "react";
import {
  Flexbox,
  Input,
  Button,
  PasswordCriteria,
  CardBody,
} from "../../../components/components";
import { usePassword, useToast } from "../../../hooks/hooks";
import { Authenticator } from "../../../modules/Authenticator";
import { useNavigate } from "react-router-dom";
import { doPasswordsMatch } from "../../../modules/MatchPasswords";

function Renew() {
  const [pswdState, dispatchPswd, isPswdValid] = usePassword();
  const [rePswdState, dispatchRePswd, isRePswdValid] = usePassword();
  const navigate = useNavigate();
  const makeToast = useToast();

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
      new Authenticator({
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
            Finally, time to get you a new one, don't forget it this time
          </div>
        </Flexbox>

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
          disabled={pswdState.value === "" || rePswdState.value === ""}
        >
          Reset Password
        </Button>
      </CardBody>
    </form>
  );
}

export { Renew };
