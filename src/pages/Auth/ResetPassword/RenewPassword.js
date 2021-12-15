import React, { useState } from "react";
import Form from "../../../components/Auth/Form";
import Header from "../../../components/Auth/Header";
import PasswordCriteria from "../../../components/PasswordCriteria";
import { testPasswords } from "../../../components/Auth/Validator";

function RenewPassword() {
  const [passwordState, setPasswordState] = useState({
    value: "",
    style: "Default",
  });

  const [rePasswordState, setRePasswordState] = useState({
    value: "",
    style: "Default",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    testPasswords(
      passwordState,
      setPasswordState,
      rePasswordState,
      setRePasswordState
    );

    console.log("Time to Reset 🤗");
  };

  const handlePasswordChange = (value) => {
    setPasswordState({
      value: value,
      style: passwordState.style,
    });
  };

  const handleRePasswordChange = (value) => {
    setRePasswordState({
      value: value,
      style: rePasswordState.style,
    });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Header
        title="Reset Password"
        subtitle="Finally, time to get you a new one, don’t forget it this time."
      />
      <PasswordCriteria
        state={passwordState}
        setState={setPasswordState}
        onChange={handlePasswordChange}
        placeholder="Enter New Password"
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
        disabled={passwordState.value === "" || rePasswordState.value === ""}
      >
        Reset Password
      </button>
    </Form>
  );
}

export default RenewPassword;
