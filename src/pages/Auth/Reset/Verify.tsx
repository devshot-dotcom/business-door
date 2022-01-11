import * as React from "react";
import { authorEmail } from "../../../helpers/process";
import {
  Input,
  Button,
  Flexbox,
  CardBody,
} from "../../../components/components";
import { useEmail, useToast } from "../../../hooks/hooks";
import { Authenticator } from "../../../modules/Authenticator";

function Verify() {
  const [emailState, dispatchEmail, isEmailValid] = useEmail();
  const makeToast = useToast();

  function onMailSent() {
    makeToast({
      subTitle:
        'Mail us by clicking the "serious help" below for additional support.',
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isEmailValid()) {
      new Authenticator({
        makeToast: makeToast,
        data: {
          email: emailState.value,
        },
        onSuccess: onMailSent,
      }).verifyEmail();
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <Flexbox align="start" direction="column" gap="smaller">
          <h3 className="h3">Reset Password</h3>
          <div className="small-text color-primary-subtle">
            Don't worry, happens to the best of us.
          </div>
        </Flexbox>

        <Input
          type="email"
          state={emailState}
          placeholder="Your Email Address"
          changeHandler={(value) =>
            dispatchEmail({ type: "update", value: value })
          }
          focusHandler={() => dispatchEmail({ type: "default" })}
        />

        <Button
          type="submit"
          variant="primary"
          disabled={emailState.value === ""}
        >
          Mail me a reset link
        </Button>

        <Flexbox justify="start" align="center" gap="smaller">
          <div className="small-text">Forgot the email as well?</div> 😅
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
