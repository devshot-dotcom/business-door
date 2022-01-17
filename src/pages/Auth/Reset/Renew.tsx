import * as React from "react";
import {
  Flexbox,
  Input,
  Button,
  PasswordCriteria,
  CardBody,
} from "../../../components/components";
import { usePassword, useAuthenticator } from "../../../hooks/hooks";
import { useNavigate } from "react-router-dom";
import { doPasswordsMatch } from "../../../modules/MatchPasswords";

function Renew() {
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
    <form onSubmit={handleSubmit}>
      <CardBody>
        <Flexbox align="start" direction="column" gap="smaller">
          <h3 className="h3">Reset Password</h3>
          <div className="small-text color-primary-subtle">
            Finally, time to get you a new one, don't forget it this time.
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
