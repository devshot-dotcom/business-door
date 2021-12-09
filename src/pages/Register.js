import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-plain-lightTheme.svg";
import Input from "../components/Input/Input";
import "../sass/Auth.scss";

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

  const isInvalid = (password) => {
    const pattern = /^(?=.*d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return !pattern.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If passwords don't match.
    if (passwordState.value !== rePasswordState.value) {
      setPasswordState({
        value: passwordState.value,
        style: "Invalid",
        tooltip: {
          text: "Passwords don't match",
          position: "top-left",
        },
      });
      setRePasswordState({
        value: rePasswordState.value,
        style: "Invalid",
        tooltip: {
          text: "Passwords don't match",
          position: "top-left",
        },
      });
    }

    // If passwords are invalid.
    if (isInvalid(passwordState.value)) {
      setPasswordState({
        value: passwordState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid Password, criteria mismatch",
          position: "top-left",
        },
      });
    }

    if (isInvalid(rePasswordState.value)) {
      setRePasswordState({
        value: rePasswordState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid Password, criteria mismatch",
          position: "top-left",
        },
      });
    }
  };

  const handleIsCreationDisabled = () => {
    // Enable iff all the fields are filled.
    setIsCreationDisabled(
      emailState.value === "" ||
        passwordState.value === "" ||
        rePasswordState.value === ""
    );
  };

  const handleEmailChange = (email) => {
    setEmailState({
      value: email,
      style: emailState.style,
    });
    handleIsCreationDisabled();
  };

  const handlePasswordChange = (password) => {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });
    handleIsCreationDisabled();
  };

  const handleRePasswordChange = (rePassword) => {
    setRePasswordState({
      value: rePassword,
      style: rePasswordState.style,
    });
    handleIsCreationDisabled();
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
            <h3>Create Your Account</h3>
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
            <Input
              size="15"
              type="password"
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
            <footer className="flex gapSmaller">
              <div className="smallText">Already have an account?</div>
              <Link to="/">Login</Link>
            </footer>
          </div>
        </form>
      </div>
    </main>
  );
}
