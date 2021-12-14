import React, { useState } from "react";
import Header from "../../../components/Auth/Header";
import Form from "../../../components/Auth/Form";
import Input from "../../../components/Input/Input";
import Footer from "../../../components/Auth/Footer";
import { email, patterns } from "../../../utils";

function VerifyAccount() {
  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    // If email is invalid.
    if (!patterns.EMAIL.test(emailState.value)) {
      setEmailState({
        value: emailState.value,
        style: "Invalid",
        tooltip: {
          text: "Seriously? We're trying to help 😑",
          position: "top-left",
          showAlways: true,
        },
      });
    }

    // TODO: Email an OTP.
  };

  const handleChange = (email) => {
    setEmailState({
      value: email,
      style: emailState.style,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header
        title="Reset Password"
        subtitle="Don't worry, happens to the best of us."
      />
      <Input
        type="email"
        state={emailState}
        setState={setEmailState}
        onChange={handleChange}
        placeholder="Your Email Address"
      />
      <button
        type="submit"
        className="buttonPrimary"
        disabled={emailState.value === ""}
      >
        Mail me an OTP
      </button>
      <Footer
        text="Already Requested?"
        link={{ to: "otp", label: "Proceed" }}
      />
      <Footer
        text="Forgot the email as well?"
        link={{
          external: true,
          to: `mailto:${email}`,
          label: "😅 Serious Help!",
        }}
      />
    </Form>
  );
}

export default VerifyAccount;
