import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-plain-lightTheme.svg";
import Input from "../components/Input";
import "../sass/Auth.scss";

export default function Login() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [isLoginDisabled, setIsLoginDisabled] = useState(true);
  const [emailStyle, setEmailStyle] = useState("Default");
  const [passwordStyle, setPasswordStyle] = useState("Default");

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  // Passed onto the Input[email] component.
  const handleEmailChange = (email) => {
    setEmailValue(email);
    setIsLoginDisabled(email === "" || passwordValue === "");
  };

  // Passed onto the Input[password] component.
  const handlePasswordChange = (password) => {
    setPasswordValue(password);
    setIsLoginDisabled(emailValue === "" || password === "");
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
              style={emailStyle}
              setStyle={setEmailStyle}
              value={emailValue}
              onChange={handleEmailChange}
              placeholder="Your Email Address"
            />
            <Input
              size="15"
              type="password"
              style={passwordStyle}
              setStyle={setPasswordStyle}
              value={passwordValue}
              onChange={handlePasswordChange}
              placeholder="Your Password"
              hasTypeSwapper={true}
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
