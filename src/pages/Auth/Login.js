import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Auth/Form";
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/Input/Input";
import { AuthContext, ToastContext } from "../../config/Context";
import { login } from "../../components/Auth/api";
import { Navigate, useNavigate } from "react-router";
import { isAccessToken, isObjectValid } from "../../utils";
import { supabase } from "../../config/Database";

function Login() {
  const { user, setUser } = useContext(AuthContext);
  const { toasts, setToasts } = useContext(ToastContext);
  const navigate = useNavigate();

  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });
  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });

  // Redirect to renew password if token type is recovery.
  if (isAccessToken("recovery"))
    return <Navigate to="/reset-password/renew" replace={true} />;

  // Redirect to dashboard if already logged in.
  if (isObjectValid(user)) return <Navigate to="/dashboard" replace={true} />;

  // Handle form submission.
  function handleSubmit(e) {
    e.preventDefault();

    login({
      email: emailState.value,
      password: passwordState.value,
      toasts: toasts,
      setToasts: setToasts,
      onSuccess: (user) => {
        setUser(user);
        sessionStorage.setItem("doorUser", JSON.stringify(user));
        navigate("/dashboard", true);
      },
    });
  }

  // Passed onto the Input[email] component.
  function handleEmailChange(email) {
    setEmailState({
      value: email,
      style: emailState.style,
    });
  }

  // Passed onto the Input[password] component.
  function handlePasswordChange(password) {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });
  }

  return (
    <>
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
        <Link to="/reset-password">Forgot Password</Link>
        <button
          type="submit"
          className="buttonPrimary"
          disabled={emailState.value === "" || passwordState.value === ""}
        >
          Log In
        </button>
        <Footer
          text="Don't have an account?"
          link={{ to: "/account-creation", label: "Create" }}
        />
      </Form>
    </>
  );
}

export { Login };
