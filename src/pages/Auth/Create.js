import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Button, Flexbox } from "../../components/components";

function Create() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");

  return (
    <>
      <h3 className="h3">Create Your Account</h3>
      <Input
        type="email"
        state={email}
        onChange={(value) => setEmail(value)}
        placeholder="Your Email Address"
      />
      <Input
        type="password"
        state={password}
        onChange={(value) => setPassword(value)}
        placeholder="Your Password"
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
        disabled={email === "" || password === "" || rePassword === ""}
      >
        Create Account
      </Button>
      <Flexbox align="row" gap="smaller">
        <div className="paragraph">Already have an account?</div>
        <Link to="/auth/login" className="link">
          Login
        </Link>
      </Flexbox>
    </>
  );
}

export { Create };
