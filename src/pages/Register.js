import React, { useState } from "react";
import { Link } from "react-router-dom";
import brandLogo from "../assets/brand-plain-lightTheme.svg";
import Input from "../components/Input";
import "../sass/Auth.scss";

export default function Register() {
  const [emailValue, setEmailValue] = useState("");
  const [passwordValue, setPasswordValue] = useState("");
  const [rePasswordValue, setRePasswordValue] = useState("");
  const [isCreationDisabled, setIsCreationDisabled] = useState(true);
  const [emailStyle, setEmailStyle] = useState("Default");
  const [passwordStyle, setPasswordStyle] = useState("Default");
  const [rePasswordStyle, setRePasswordStyle] = useState("Default");

  const handleSubmit = (e) => {
    e.preventDefault();

    // If passwords don't match.
    if (passwordValue !== rePasswordValue) {
      setPasswordStyle("Invalid");
      setRePasswordStyle("Invalid");
    }
  };

  const handleIsCreationDisabled = () => {
    // Enable iff all the fields are filled.
    setIsCreationDisabled(
      emailValue === "" || passwordValue === "" || rePasswordValue === ""
    );
  };

  const handleEmailChange = (email) => {
    setEmailValue(email);
    handleIsCreationDisabled();
  };

  const handlePasswordChange = (password) => {
    setPasswordValue(password);
    handleIsCreationDisabled();
  };

  const handleRePasswordChange = (rePassword) => {
    setRePasswordValue(rePassword);
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
            <Input
              size="15"
              type="password"
              style={rePasswordStyle}
              setStyle={setRePasswordStyle}
              placeholder="Re-enter Password"
              value={rePasswordValue}
              onChange={handleRePasswordChange}
              hasTypeSwapper={true}
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
