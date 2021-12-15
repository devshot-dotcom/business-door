import React, { useState } from "react";
import { Link } from "react-router-dom";
import Form from "../../components/Auth/Form";
import HeaderLogo from "../../components/HeaderLogo";
import Footer from "../../components/Auth/Footer";
import Input from "../../components/Input/Input";
import { supabase } from "../../config/Database";
import { AuthContext } from "../../config/Context";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const context = React.useContext(AuthContext);

  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });
  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });

  const login = async () => {
    let { user, error } = await supabase.auth.signIn({
      email: emailState.value,
      password: passwordState.value,
    });

    if (error !== null) {
      toast.error(error.message);
      return;
    }

    if (user !== null) {
      toast.success("Wow, logged in successfully");
      context.setUser(user);
    }
  };

  // Handle form submission.
  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  };

  // Passed onto the Input[email] component.
  const handleEmailChange = (email) => {
    setEmailState({
      value: email,
      style: emailState.style,
    });
  };

  // Passed onto the Input[password] component.
  const handlePasswordChange = (password) => {
    setPasswordState({
      value: password,
      style: passwordState.style,
    });
  };

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
      <ToastContainer />
    </>
  );
}
