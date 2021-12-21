import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Flexbox, Input, Button } from "../../components/components";

function Login() {
  const [email, setEmail] = useState("");
  const [emailVariant, setEmailVariant] = useState();

  const [password, setPassword] = useState("");
  const [passwordVariant, setPasswordVariant] = useState();

  return (
    <>
      <h3 className="h3">Log In</h3>
      <Input
        type="email"
        value={email}
        placeholder="Your Email Address"
        variant={emailVariant}
        onChange={(value) => setEmail(value)}
        onFocus={() => setEmailVariant(null)}
      />

      <Input
        type="password"
        value={password}
        placeholder="Your Password"
        variant={passwordVariant}
        onChange={(value) => setPassword(value)}
        onFocus={() => setPasswordVariant(null)}
        controlType={true}
      />

      <Link to="/auth/reset" className="link">
        Forgot Password
      </Link>

      <Button type="submit" disabled={email === "" || password === ""}>
        Log In
      </Button>

      <Flexbox align="center" gap="smaller">
        <div className="paragraph">Don't have an account?</div>
        <Link to="/auth/create" className="link">
          Create
        </Link>
      </Flexbox>
    </>
  );
}

export { Login };
