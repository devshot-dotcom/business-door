import React, { useState } from "react";
import { Flexbox, Input, Button } from "../../../components/components";

function Renew() {
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <>
      <Flexbox direction="column" gap="smaller">
        <h3 className="h3">Reset Password</h3>
        <div className="smallText color-primary-subtle">
          Finally, time to get you a new one, don’t forget it this time
        </div>
      </Flexbox>

      <Input
        type="password"
        state={password}
        onChange={(value) => setPassword(value)}
        placeholder="Enter New Password"
        controlType={true}
      />

      <Input
        type="password"
        state={rePassword}
        onChange={(value) => setRePassword(value)}
        placeholder="Re-enter Password"
        controlType={true}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={password === "" || rePassword === ""}
      >
        Reset Password
      </Button>
    </>
  );
}

export { Renew };
