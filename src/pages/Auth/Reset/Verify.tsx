import * as React from "react";
import { authorEmail } from "../../../helpers/meta";
import { Input, Button } from "../../../components/components";
import { useEmail, useToast, useAuthenticator } from "../../../hooks/hooks";

function Verify() {
  const [emailState, dispatchEmail, isEmailValid] = useEmail();
  const makeToast = useToast();
  const authenticator = useAuthenticator();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isEmailValid()) {
      authenticator.verifyEmail({
        email: emailState.value,
        boolBacks: {
          onSuccess: () =>
            makeToast({
              subTitle:
                'Mail us by clicking the "contact us" below for additional support.',
            }),
        },
      });
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 className="h3">Reset Password</h1>
        <div className="small-text color-primary-subtle">
          Don't worry, happens to the best of us.
        </div>
      </div>

      <Input
        type="email"
        state={emailState}
        placeholder="Your Email Address"
        title="Please enter your email address"
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

      <div>
        <div className="small-text">Forgot the email as well?</div>
        <a
          href={`mailto:${authorEmail}`}
          className="link"
          title="Mail us all you remember about your account."
        >
          Contact us
        </a>
      </div>
    </form>
  );
}

export { Verify };
