import React from "react";
import {
  Flexbox,
  Input,
  Button,
  PasswordCriteria,
  CardBody,
} from "../../../components/components";
import { useInput } from "../../../hooks/hooks";

function Renew() {
  const [pswdState, dispatchPswd] = useInput();
  const [rePswdState, dispatchRePswd] = useInput();

  function handleSubmit(e) {
    e.preventDefault();
    console.log(e.target);
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
