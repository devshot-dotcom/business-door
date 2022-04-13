import * as React from "react";
import { Input, Button } from "../../../components";
import { env } from "../../../config";
import { useEmail, useToast, useAuthenticator } from "../../../hooks";
import styles from "../auth.module.scss";

export const VerifyAccount = () => {
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
    <form onSubmit={handleSubmit} className={`${styles.form} v-gap`}>
      <div>
        <h1 className={styles.heading}>Reset Password</h1>
        <div className="text-small text-subtle">
          Don't worry, happens to the best of us.
        </div>
      </div>

      <Input
        type="email"
        state={emailState}
        placeholder="Your Email Address"
        title="Please enter your email address"
        onChange={(e) =>
          dispatchEmail({ type: "update", value: e.target.value })
        }
        onFocus={() => dispatchEmail({ type: "default" })}
      />

      <Button
        type="submit"
        variant="primary"
        disabled={emailState.value === ""}
      >
        Mail me a reset link
      </Button>

      <div className="h-gap-small">
        <span className="text-paragraph">Forgot the email as well?</span>
        <a
          href={`mailto:${env.author.EMAIL}`}
          className="text-link"
          title="Mail us all you remember about your account."
        >
          Contact us
        </a>
      </div>
    </form>
  );
};
