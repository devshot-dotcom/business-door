import React, { useState, useContext } from "react";
import Form from "../../components/Auth/Form";
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/Input/Input";
import PasswordCriteria from "../../components/PasswordCriteria";
import { ToastContext } from "../../config/Context";
import { patterns } from "../../utils";
import { testPasswords } from "../../components/Auth/Validator";
import { useNavigate } from "react-router-dom";
import { createAccount } from "../../components/Auth/api";

function Create() {
  const navigate = useNavigate();

  const { toasts, setToasts } = useContext(ToastContext);

  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });
  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });
  const [rePasswordState, setRePasswordState] = useState({
    value: "",
    style: "Default",
  });

  function testEmail() {
    const valid = patterns.EMAIL.test(emailState.value);

    if (!valid) {
      setEmailState({
        value: emailState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid Email. Be better than this 🥱",
          position: "top-left",
          showAlways: true,
        },
      });
    }

    return valid;
  }

  function handleSubmit(e) {
    e.preventDefault();

    let isFormValid = testEmail();
    isFormValid = testPasswords(
      passwordState,
      setPasswordState,
      rePasswordState,
      setRePasswordState
    );

    if (isFormValid)
      createAccount({
        email: emailState.value,
        password: passwordState.value,
        toasts: toasts,
        setToasts: setToasts,
        onSuccess: () => navigate("/"),
      });
  }

  function handleEmailChange(email) {
    setEmailState({
      value: email,
      style: emailState.style,
    });
  }

  function handlePasswordChange(password) {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });
  }

  function handleRePasswordChange(rePassword) {
    setRePasswordState({
      value: rePassword,
      style: rePasswordState.style,
    });
  }

  return (
    <Form onSubmit={(e) => handleSubmit(e)}>
      <HeaderLogo />
      <h3>Create Your Account</h3>
      <Input
        type="email"
        state={emailState}
        setState={setEmailState}
        onChange={handleEmailChange}
        placeholder="Your Email Address"
      />
      <PasswordCriteria
        state={passwordState}
        setState={setPasswordState}
        onChange={handlePasswordChange}
        placeholder="Your Password"
      />
      <PasswordCriteria
        state={rePasswordState}
        setState={setRePasswordState}
        onChange={handleRePasswordChange}
        placeholder="Re-enter Password"
      />
      <button
        type="submit"
        className="buttonPrimary"
        disabled={
          emailState.value === "" ||
          passwordState.value === "" ||
          rePasswordState.value === ""
        }
      >
        Create Account
      </button>
      <Footer
        text="Already have an account?"
        link={{ to: "/", label: "Login" }}
      />
    </Form>
  );
}

export { Create };
