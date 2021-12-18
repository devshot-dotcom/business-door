import React, { useState, useContext } from "react";
import Header from "../../../components/Auth/Header";
import Form from "../../../components/Auth/Form";
import Input from "../../../components/Input/Input";
import Footer from "../../../components/Auth/Footer";
import { email, patterns } from "../../../utils";
import { supabase } from "../../../config/Database";
import { ToastContext } from "../../../config/Context";
import { makeToast } from "../../../components/Toast/ToastWrapper";

function Verify() {
  const { toasts, setToasts } = useContext(ToastContext);
  const [emailState, setEmailState] = useState({
    value: "",
    style: "Default",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // If email is invalid.
    if (!patterns.EMAIL.test(emailState.value)) {
      setEmailState({
        value: emailState.value,
        style: "Invalid",
        tooltip: {
          text: "Invalid email, seriously? 😑",
          position: "top-left",
          showAlways: true,
        },
      });

      return;
    }

    makeToast(toasts, setToasts, {
      title: "Looking up your account",
      state: "loading",
    });

    // Send recovery email.
    let { data, error } = await supabase.auth.api.resetPasswordForEmail(
      emailState.value
    );

    if (error !== null) {
      makeToast(toasts, setToasts, {
        title: error.message,
        state: "invalid",
      });
      return;
    }

    if (data !== null) {
      makeToast(toasts, setToasts, {
        title: "Password reset guide mailed",
        subtitle: `Check your email at ${emailState.value}`,
        state: "loading",
      });
    }
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

export { Verify };
