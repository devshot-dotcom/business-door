import React from "react";
import { Link } from "react-router-dom";
import { Flexbox, Input, Button, CardBody } from "../../components/components";
import { useInput, useAuth } from "../../hooks/hooks";

function Login() {
  const [emailState, dispatchEmail] = useInput();
  const [pswdState, dispatchPswd] = useInput();
  const login = useAuth("login");

  function handleSubmit(e) {
    e.preventDefault();
    login({
      email: emailState.value,
      password: pswdState.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <CardBody>
        <h3 className="h3">Log In</h3>

        <Input
          type="email"
          state={emailState}
          placeholder="Your Email Address"
          onChange={(value) => dispatchEmail({ type: "update", value: value })}
          onFocus={() => dispatchEmail({ type: "default" })}
        />

        <Input
          type="password"
          state={pswdState}
          placeholder="Your Password"
          onChange={(value) => dispatchPswd({ type: "update", value: value })}
          onFocus={() => dispatchPswd({ type: "default" })}
          controlType={true}
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

        <Flexbox align="center" gap="smaller">
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
