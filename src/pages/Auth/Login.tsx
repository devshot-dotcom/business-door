import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flexbox, Input, Button, CardBody } from "../../components/components";
import { useInput, useAuthenticator } from "../../hooks/hooks";

function Login() {
  const [emailState, dispatchEmail] = useInput();
  const [pswdState, dispatchPswd] = useInput();
  const navigate = useNavigate();
  const authenticator = useAuthenticator();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    authenticator.login({
      email: emailState.value,
      password: pswdState.value,
      boolBacks: {
        onSuccess: () => navigate(-1),
      },
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <h1 className="h3">Log In</h1>
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
        <Input
          type="password"
          state={pswdState}
          placeholder="Your Password"
          title="Please enter your password"
          changeHandler={(value) =>
            dispatchPswd({ type: "update", value: value })
          }
          focusHandler={() => dispatchPswd({ type: "default" })}
          hasTypeController={true}
        />

        <Link to="/auth/reset" className="link">
          Forgot Password
        </Link>

        <Button
          type="submit"
          disabled={emailState.value === "" || pswdState.value === ""}
        >
          Log In
        </Button>

        <Flexbox justify="start" align="center" gap="smaller">
          <div className="paragraph">Don't have an account?</div>
          <Link to="/auth/create" className="link" title="Create an account">
            Create
          </Link>
        </Flexbox>
      </CardBody>
    </form>
  );
}

export { Login };
