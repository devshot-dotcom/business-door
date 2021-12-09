import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-plain-lightTheme.svg";
import Input from "../components/Input/Input";
import "../sass/Auth.scss";

export default function Login() {
  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });
  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Passed onto the Input[email] component.
  const handleEmailChange = (email) => {
    setEmailState({
      value: email,
      style: emailState.style,
    });
    setIsLoginDisabled(email === "" || passwordState.value === "");
  };

  // Passed onto the Input[password] component.
  const handlePasswordChange = (password) => {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });
    setIsLoginDisabled(emailState.value === "" || password === "");
  };

  return (
    <main className="container">
      <div className="background">
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="flex column gapMedium">
            <div className="textAlignCenter">
              <img
                src={brandLogo}
                alt="Business Door"
                className="brand header"
              />
            </div>
            <h3>Log In</h3>
            <Input
              type="email"
              state={emailState}
              setState={setEmailState}
              onChange={handleEmailChange}
              placeholder="Your Email Address"
            />
            <Input
              size="15"
              type="password"
              state={passwordState}
              setState={setPasswordState}
              onChange={handlePasswordChange}
              placeholder="Your Password"
            />
            <Link to="/auth/recover-password">Forgot Password</Link>
            <button
              type="submit"
              className="buttonPrimary"
              disabled={isLoginDisabled}
            >
              Log In
            </button>
            <footer className="flex gapSmaller">
              <div className="smallText">Don't have an account?</div>
              <Link to="/auth/account-creation">Create</Link>
            </footer>
          </div>
        </form>
      </div>
    </main>
  );
}
