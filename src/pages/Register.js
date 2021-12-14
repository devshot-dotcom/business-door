import React, { useState } from "react";
import Form from "../components/Auth/Form";
import HeaderLogo from "../components/HeaderLogo";
import Footer from "../components/Auth/Footer";
import Input from "../components/Input/Input";
import PasswordCriteria from "../components/PasswordCriteria";
import { patterns } from "../utils";

export default function Register() {
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
  const [isCreationDisabled, setIsCreationDisabled] = useState(true);

  const testEmail = () => {
    if (!patterns.EMAIL.test(emailState.value)) {
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
  };

  const testPasswords = () => {
    // If passwords don't match.
    if (passwordState.value !== rePasswordState.value) {
      setPasswordState({
        value: passwordState.value,
        style: "Invalid",
        tooltip: {
          text: "Same here, they don't match 💔",
          position: "top-left",
        },
      });
      setRePasswordState({
        value: rePasswordState.value,
        style: "Invalid",
        tooltip: {
          text: "Passwords don't match ❌",
          position: "top-left",
          showAlways: true,
        },
      });

      return;
    }

    // If password is invalid.
    if (!patterns.PASSWORD.test(passwordState.value)) {
      setPasswordState({
        value: passwordState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid Password, criteria mismatch 🤷‍♂️",
          position: "top-left",
          showAlways: true,
        },
      });
    }

    // If password is invalid.
    if (!patterns.PASSWORD.test(rePasswordState.value)) {
      setRePasswordState({
        value: rePasswordState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid Password, criteria mismatch 🤷‍♀️",
          position: "top-left",
          showAlways: true,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    testEmail();
    testPasswords();
  };

  const handleEmailChange = (email) => {
    setEmailState({
      value: email,
      style: emailState.style,
    });

    // Enable iff all the fields are filled.
    setIsCreationDisabled(
      email === "" || passwordState.value === "" || rePasswordState.value === ""
    );
  };

  const handlePasswordChange = (password) => {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });

    // Enable iff all the fields are filled.
    setIsCreationDisabled(
      emailState.value === "" || password === "" || rePasswordState.value === ""
    );
  };

  const handleRePasswordChange = (rePassword) => {
    setRePasswordState({
      value: rePassword,
      style: rePasswordState.style,
    });

    // Enable iff all the fields are filled.
    setIsCreationDisabled(
      emailState.value === "" || passwordState.value === "" || rePassword === ""
    );
  };

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
        disabled={isCreationDisabled}
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
