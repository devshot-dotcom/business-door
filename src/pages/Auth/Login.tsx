import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Flexbox, Input, Button, CardBody } from "../../components/components";
import { useInput, useToast } from "../../hooks/hooks";
import { Authenticator } from "../../modules/Authenticator";

function Login() {
  const [emailState, dispatchEmail] = useInput();
  const [pswdState, dispatchPswd] = useInput();
  const makeToast = useToast();
  const navigate = useNavigate();

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    new Authenticator({
      makeToast: makeToast,
      data: {
        email: emailState.value,
        password: pswdState.value,
      },
      onSuccess: () => navigate("/home"),
    }).login();
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <h3 className="h3">Log In</h3>

        <Input
          type="email"
          state={emailState}
          placeholder="Your Email Address"
          changeHandler={(value) =>
            dispatchEmail({ type: "update", value: value })
          }
          focusHandler={() => dispatchEmail({ type: "default" })}
        />

        <Input
          type="password"
          state={pswdState}
          placeholder="Your Password"
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
          <Link to="/auth/create" className="link">
            Create
          </Link>
        </Flexbox>
      </CardBody>
    </form>
  );
}

export { Login };
