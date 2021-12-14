import React, { useState } from "react";
import Header from "../../../components/Auth/Header";
import Form from "../../../components/Auth/Form";
import Input from "../../../components/Input/Input";
import Footer from "../../../components/Auth/Footer";
import { patterns } from "../../../utils";

function OTP() {
  const [otpState, setOtpState] = useState({
    value: "",
    style: "Default",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: Verify OTP.
  };

  const handleChange = (email) => {
    // In case of an empty string, no need to validate.
    if (email === "") {
      setOtpState({
        value: email,
        style: otpState.style,
      });
      return;
    }

    // Otherwise, prevent anything other than 6 digits.
    if (patterns.NUMBERS_ONLY.test(email) && email.length <= 6) {
      setOtpState({
        value: email,
        style: otpState.style,
      });
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header
        title="Reset Password"
        subtitle="Enter the OTP that's sent to your email address."
      />
      <Input
        type="text"
        state={otpState}
        setState={setOtpState}
        onChange={handleChange}
        placeholder="OTP (One Time Password)"
      />
      <button
        type="submit"
        className="buttonPrimary"
        disabled={otpState.value.length < 6}
      >
        Verify Account
      </button>
      <Footer
        text="Didn't receive an OTP?"
        link={{ backwards: true, label: "Request Again" }}
      />
    </Form>
  );
}

export default OTP;
