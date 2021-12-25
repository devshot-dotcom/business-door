import React from "react";
import { authorEmail } from "../../../helpers/process";
import {
  Input,
  Button,
  Flexbox,
  CardBody,
} from "../../../components/components";
import { useInput } from "../../../hooks/hooks";

function Verify() {
  const [emailState, dispatchEmail] = useInput();

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
            Don't worry, happens to the best of us
          </div>
        </Flexbox>

        <Input
          type="email"
          state={emailState}
          placeholder="Your Email Address"
          onChange={(value) => dispatchEmail({ type: "update", value: value })}
          onFocus={() => dispatchEmail({ type: "default" })}
        />

        <Button
          type="submit"
          variant="primary"
          disabled={emailState.value === ""}
        >
          Mail me a reset link
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
      </CardBody>
    </form>
  );
}

export { Verify };
