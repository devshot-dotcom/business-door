import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../components/Auth/Form";
import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Auth/Footer";
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
    console.log(email);
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
    <Form onSubmit={(e) => handleSubmit(e)}>
      <HeaderLogo />
      <h3>Log In</h3>
      <Input
        type="email"
        state={emailState}
        setState={setEmailState}
        onChange={handleEmailChange}
        placeholder="Your Email Address"
      />
      <Input
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
      <Footer
        text="Don't have an account?"
        link={{ to: "/auth/account-creation", label: "Create" }}
      />
    </Form>
  );
}
