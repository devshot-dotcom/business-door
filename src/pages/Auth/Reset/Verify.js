import React, { useState } from "react";
import { authorEmail } from "../../../helpers/process";
import { Input, Button, Flexbox } from "../../../components/components";

function Verify() {
  const [email, setEmail] = useState("");

  return (
    <>
      <Flexbox direction="column" gap="smaller">
        <h3 className="h3">Reset Password</h3>
        <div className="smallText color-primary-subtle">
          Don't worry, happens to the best of us
        </div>
      </Flexbox>

      <Input
        type="email"
        state={email}
        onChange={(value) => setEmail(value)}
        placeholder="Your Email Address"
      />

      <Button type="submit" variant="primary" disabled={email === ""}>
        Mail me an OTP
      </Button>

      <Flexbox align="center" gap="smaller">
        <div className="smallText">Forgot the email as well?</div> 😅
        <a
          href={`mailto:${authorEmail}`}
          className="link"
          title="Mail us all you remember about your account."
        >
          Serious Help!
        </a>
      </Flexbox>
    </>
  );
}

export { Verify };
